import React, { createContext, useEffect, useState, useMemo, useCallback, useRef } from "react";
import { teamMembers, TeamMember, GLOBAL_MEMBER_IDS, isGlobalMember } from "@/data/teamMembers";
import { toast } from "sonner";

export interface GeoLocationContextType {
  countryCode: string | null;
  countryName: string | null;
  isPakistan: boolean;
  isLoading: boolean;
  visibleMembers: TeamMember[];
  isMemberVisible: (id: string) => boolean;
  setCountryOverride: (code: string | null) => void;
  overrideActive: boolean;
  refreshLocation: () => Promise<void>;
}

export const GeoLocationContext = createContext<GeoLocationContextType | undefined>(undefined);

const SESSION_CACHE_KEY = "labguys_geo_session_v3";
const OVERRIDE_KEY = "labguys_geo_override_v3";
const SHORT_CACHE_TTL_MS = 2 * 60 * 1000; // 2 minutes (in-session only)

// Clean up any legacy long-lived localStorage keys on startup
try {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem("labguys_geo_cache");
    localStorage.removeItem("labguys_geo_cache_v2");
    localStorage.removeItem("labguys_geo_override");
  }
} catch (_e) {
  // Ignore storage access errors in restricted environments
}

interface CachedGeo {
  countryCode: string;
  countryName: string;
  timestamp: number;
}

// Quick check if local browser timezone is Pakistan
const isPakistanTimezone = (): boolean => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === "Asia/Karachi";
  } catch (_e) {
    return false;
  }
};

// Fetch helper with timeout and aggressive cache-busting
const fetchWithTimeout = async (url: string, timeoutMs = 3500): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const separator = url.includes("?") ? "&" : "?";
    const cacheBustedUrl = `${url}${separator}_t=${Date.now()}`;
    const response = await fetch(cacheBustedUrl, {
      signal: controller.signal,
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
      },
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Cascading multi-tier IP Geolocation fetcher with cache-busting
const detectCountryFromIP = async (): Promise<{ code: string; name: string } | null> => {
  // Tier 1: api.country.is (Fastest, ~50-100ms, open CORS)
  try {
    const res = await fetchWithTimeout("https://api.country.is/", 3000);
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.country === "string" && data.country.trim().length === 2) {
        const code = data.country.toUpperCase();
        return {
          code,
          name: code === "PK" ? "Pakistan" : code,
        };
      }
    }
  } catch (_e) {
    // Continue to Tier 2
  }

  // Tier 2: ipwho.is (Reliable global CDN with detailed country info)
  try {
    const res = await fetchWithTimeout("https://ipwho.is/", 3500);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && data.country_code) {
        return {
          code: data.country_code.toUpperCase(),
          name: data.country || data.country_code.toUpperCase(),
        };
      }
    }
  } catch (_e) {
    // Continue to Tier 3
  }

  // Tier 3: freeipapi.com (Reliable fallback)
  try {
    const res = await fetchWithTimeout("https://freeipapi.com/api/json", 3500);
    if (res.ok) {
      const data = await res.json();
      if (data && data.countryCode) {
        return {
          code: data.countryCode.toUpperCase(),
          name: data.countryName || data.countryCode.toUpperCase(),
        };
      }
    }
  } catch (_e) {
    // Remote APIs unreachable
  }

  return null;
};

export const GeoLocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Parse explicit URL query parameters (?geo=pk, ?geo=global, ?geo=reset)
  const getUrlOverride = (): string | null => {
    try {
      if (typeof window === "undefined") return null;
      const params = new URLSearchParams(window.location.search);
      const geoParam = params.get("geo") || params.get("country");
      if (geoParam) {
        const normalized = geoParam.trim().toUpperCase();
        if (normalized === "PK" || normalized === "PAKISTAN") {
          return "PK";
        }
        if (
          normalized === "GLOBAL" ||
          normalized === "WORLD" ||
          normalized === "US" ||
          normalized === "INTL" ||
          normalized === "INTERNATIONAL"
        ) {
          return "GLOBAL";
        }
        if (normalized === "RESET" || normalized === "CLEAR") {
          sessionStorage.removeItem(OVERRIDE_KEY);
          sessionStorage.removeItem(SESSION_CACHE_KEY);
          return null;
        }
      }
      return null;
    } catch (_e) {
      return null;
    }
  };

  const getInitialOverride = (): string | null => {
    const urlOverride = getUrlOverride();
    if (urlOverride) {
      try {
        sessionStorage.setItem(OVERRIDE_KEY, urlOverride);
      } catch (_e) {
        // Ignore session storage errors
      }
      return urlOverride;
    }
    try {
      // If URL does not specify geo, only use sessionStorage if set manually in this session
      return sessionStorage.getItem(OVERRIDE_KEY);
    } catch (_e) {
      return null;
    }
  };

  const [override, setOverride] = useState<string | null>(getInitialOverride);

  // Initial state estimation: override -> timezone heuristic -> default
  const getInitialState = (): { code: string | null; name: string | null; isPk: boolean } => {
    const activeOverride = getInitialOverride();
    if (activeOverride) {
      const isPk = activeOverride === "PK";
      return { code: activeOverride, name: isPk ? "Pakistan" : "Global", isPk };
    }

    // Timezone check gives 0ms instant display for users in Pakistan (Asia/Karachi)
    if (isPakistanTimezone()) {
      return { code: "PK", name: "Pakistan", isPk: true };
    }

    // Check short session-only cache (< 2 mins)
    try {
      const cachedStr = sessionStorage.getItem(SESSION_CACHE_KEY);
      if (cachedStr) {
        const cached: CachedGeo = JSON.parse(cachedStr);
        if (Date.now() - cached.timestamp < SHORT_CACHE_TTL_MS) {
          const isPk = cached.countryCode === "PK";
          return { code: cached.countryCode, name: cached.countryName, isPk };
        }
      }
    } catch (_e) {
      // Ignore cache read errors
    }

    // Safe international default until network verification completes
    return { code: null, name: null, isPk: false };
  };

  const initial = getInitialState();
  const [countryCode, setCountryCode] = useState<string | null>(initial.code);
  const [countryName, setCountryName] = useState<string | null>(initial.name);
  const [isPakistan, setIsPakistan] = useState<boolean>(initial.isPk);
  const [isLoading, setIsLoading] = useState<boolean>(!initial.code && !override);

  const isDetectingRef = useRef<boolean>(false);

  // Live detection function — ALWAYS contacts IP API to revalidate, never blindly returns stale cache
  const detectLocation = useCallback(async (force = false) => {
    if (isDetectingRef.current) return;

    // If an explicit override is active (e.g. from ?geo=global or setCountryOverride)
    if (override) {
      const isPk = override === "PK" || override === "PAKISTAN";
      setCountryCode(override);
      setCountryName(isPk ? "Pakistan" : "Global");
      setIsPakistan(isPk);
      setIsLoading(false);
      return;
    }

    // In-session cache check ONLY if not forced and within 2 minutes
    if (!force) {
      try {
        const cachedStr = sessionStorage.getItem(SESSION_CACHE_KEY);
        if (cachedStr) {
          const cached: CachedGeo = JSON.parse(cachedStr);
          if (Date.now() - cached.timestamp < SHORT_CACHE_TTL_MS) {
            const isPk = cached.countryCode === "PK";
            setCountryCode(cached.countryCode);
            setCountryName(cached.countryName);
            setIsPakistan(isPk);
            setIsLoading(false);
            return;
          }
        }
      } catch (_e) {
        // Storage access failed
      }
    }

    isDetectingRef.current = true;
    setIsLoading(true);

    try {
      const result = await detectCountryFromIP();
      if (result) {
        const isPk = result.code === "PK";
        setCountryCode(result.code);
        setCountryName(result.name);
        setIsPakistan(isPk);

        try {
          const payload: CachedGeo = {
            countryCode: result.code,
            countryName: result.name,
            timestamp: Date.now(),
          };
          sessionStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(payload));
        } catch (_e) {
          // Session storage write failed
        }
      } else {
        // Fallback: If all IP APIs were blocked or offline, use timezone heuristic
        const tzPk = isPakistanTimezone();
        setIsPakistan(tzPk);
        setCountryCode(tzPk ? "PK" : "INTL");
        setCountryName(tzPk ? "Pakistan" : "International");
      }
    } catch (_e) {
      const tzPk = isPakistanTimezone();
      setIsPakistan(tzPk);
      setCountryCode(tzPk ? "PK" : "INTL");
      setCountryName(tzPk ? "Pakistan" : "International");
    } finally {
      setIsLoading(false);
      isDetectingRef.current = false;
    }
  }, [override]);

  // Set country override (for testing or previewing)
  const setCountryOverride = useCallback((code: string | null) => {
    if (!code) {
      try {
        sessionStorage.removeItem(OVERRIDE_KEY);
        sessionStorage.removeItem(SESSION_CACHE_KEY);
      } catch (_e) {
        // Storage access failed
      }
      setOverride(null);
      detectLocation(true);
      toast.info("Geolocation override cleared. Using detected location.");
      return;
    }

    const norm = code.toUpperCase();
    try {
      sessionStorage.setItem(OVERRIDE_KEY, norm);
    } catch (_e) {
      // Storage access failed
    }
    setOverride(norm);
    const isPk = norm === "PK" || norm === "PAKISTAN";
    setCountryCode(norm);
    setCountryName(isPk ? "Pakistan" : "Global");
    setIsPakistan(isPk);
    setIsLoading(false);

    toast.success(
      isPk 
        ? "Preview mode: Pakistan (All 6 team members visible)" 
        : "Preview mode: Global (3 core members visible: Muhammad Ahmed, Joshua, Sumair Ahmed)"
    );
  }, [detectLocation]);

  // Manual refresh helper
  const refreshLocation = useCallback(async () => {
    try {
      sessionStorage.removeItem(SESSION_CACHE_KEY);
    } catch (_e) {
      // ignore
    }
    await detectLocation(true);
  }, [detectLocation]);

  // Run detection on mount and whenever override changes
  useEffect(() => {
    detectLocation(true);
  }, [detectLocation]);

  // Revalidate on tab focus, visibility change, and network reconnect
  // (Detects immediately when a user turns off/on their VPN and returns to the tab)
  useEffect(() => {
    let lastCheck = Date.now();

    const handleRevalidate = () => {
      // Only revalidate if visible and at least 3 seconds have passed
      if (document.visibilityState === "visible" && Date.now() - lastCheck > 3000) {
        lastCheck = Date.now();
        detectLocation(true);
      }
    };

    const handleOnline = () => {
      lastCheck = Date.now();
      detectLocation(true);
    };

    window.addEventListener("focus", handleRevalidate);
    document.addEventListener("visibilitychange", handleRevalidate);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("focus", handleRevalidate);
      document.removeEventListener("visibilitychange", handleRevalidate);
      window.removeEventListener("online", handleOnline);
    };
  }, [detectLocation]);

  // Listen for query params in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const geo = params.get("geo") || params.get("country");
    if (geo) {
      const norm = geo.trim().toUpperCase();
      if (norm === "PK" || norm === "PAKISTAN") {
        setCountryOverride("PK");
      } else if (norm === "GLOBAL" || norm === "US" || norm === "WORLD" || norm === "INTL") {
        setCountryOverride("GLOBAL");
      } else if (norm === "RESET" || norm === "CLEAR") {
        setCountryOverride(null);
      }
    }
  }, [setCountryOverride]);

  // Developer console helper for easy verification in browser DevTools
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { __labguys_geo: unknown }).__labguys_geo = {
        status: () => ({
          countryCode,
          countryName,
          isPakistan,
          overrideActive: Boolean(override),
          overrideValue: override,
          visibleCount: isPakistan ? 6 : 3,
        }),
        override: (c: string) => setCountryOverride(c),
        reset: () => setCountryOverride(null),
        refresh: () => refreshLocation(),
      };
    }
  }, [countryCode, countryName, isPakistan, override, setCountryOverride, refreshLocation]);

  // Compute visible team members based on Pakistan status
  const visibleMembers = useMemo(() => {
    if (isPakistan) {
      return teamMembers;
    }
    // Return the 3 global members in order: Muhammad Ahmed, Joshua, Sumair Ahmed
    return GLOBAL_MEMBER_IDS.map((id) => teamMembers.find((m) => m.id === id)).filter(
      (m): m is TeamMember => Boolean(m)
    );
  }, [isPakistan]);

  const isMemberVisible = useCallback(
    (id: string): boolean => {
      if (isPakistan) return true;
      return isGlobalMember(id);
    },
    [isPakistan]
  );

  return (
    <GeoLocationContext.Provider
      value={{
        countryCode,
        countryName,
        isPakistan,
        isLoading,
        visibleMembers,
        isMemberVisible,
        setCountryOverride,
        overrideActive: Boolean(override),
        refreshLocation,
      }}
    >
      {children}
    </GeoLocationContext.Provider>
  );
};
