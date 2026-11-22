import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { teamMembers, TeamMember, GLOBAL_MEMBER_IDS, isGlobalMember } from "@/data/teamMembers";
import { toast } from "sonner";

interface GeoLocationContextType {
  countryCode: string | null;
  countryName: string | null;
  isPakistan: boolean;
  isLoading: boolean;
  visibleMembers: TeamMember[];
  isMemberVisible: (id: string) => boolean;
  setCountryOverride: (code: string | null) => void;
  overrideActive: boolean;
}

const GeoLocationContext = createContext<GeoLocationContextType | undefined>(undefined);

const CACHE_KEY = "labguys_geo_cache_v2";
const OVERRIDE_KEY = "labguys_geo_override";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface CachedGeo {
  countryCode: string;
  countryName: string;
  timestamp: number;
}

// Quick check if local timezone is Pakistan
const isPakistanTimezone = (): boolean => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === "Asia/Karachi";
  } catch {
    return false;
  }
};

// Fetch with timeout helper
const fetchWithTimeout = async (url: string, timeoutMs = 3500): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Cascading multi-tier IP Geolocation fetcher
const detectCountryFromIP = async (): Promise<{ code: string; name: string } | null> => {
  // Tier 1: api.country.is (Fastest, ~50ms, open CORS, high reliability)
  try {
    const res = await fetchWithTimeout("https://api.country.is/", 3000);
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.country === "string" && data.country.trim().length === 2) {
        return {
          code: data.country.toUpperCase(),
          name: data.country.toUpperCase() === "PK" ? "Pakistan" : data.country.toUpperCase(),
        };
      }
    }
  } catch (e) {
    // Continue to Tier 2
  }

  // Tier 2: ipwho.is (Reliable global CDN, returns full country info)
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
  } catch (e) {
    // Continue to Tier 3
  }

  // Tier 3: freeipapi.com (Solid fallback)
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
  } catch (e) {
    // All remote APIs failed
  }

  return null;
};

export const GeoLocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check URL query params for manual test overrides: ?geo=pk, ?geo=global, ?country=pk
  const getInitialOverride = (): string | null => {
    try {
      const params = new URLSearchParams(window.location.search);
      const geoParam = params.get("geo") || params.get("country");
      if (geoParam) {
        const normalized = geoParam.trim().toUpperCase();
        if (normalized === "PK" || normalized === "PAKISTAN") {
          sessionStorage.setItem(OVERRIDE_KEY, "PK");
          return "PK";
        }
        if (normalized === "GLOBAL" || normalized === "WORLD" || normalized === "US" || normalized === "INTERNATIONAL") {
          sessionStorage.setItem(OVERRIDE_KEY, "GLOBAL");
          return "GLOBAL";
        }
        if (normalized === "RESET") {
          sessionStorage.removeItem(OVERRIDE_KEY);
          return null;
        }
      }
      return sessionStorage.getItem(OVERRIDE_KEY);
    } catch {
      return null;
    }
  };

  const [override, setOverride] = useState<string | null>(getInitialOverride);

  // Initial country guess: cache -> timezone heuristic -> default
  const getInitialState = (): { code: string | null; name: string | null; isPk: boolean } => {
    const activeOverride = getInitialOverride();
    if (activeOverride) {
      const isPk = activeOverride === "PK";
      return { code: activeOverride, name: isPk ? "Pakistan" : "Global", isPk };
    }

    try {
      const cachedStr = sessionStorage.getItem(CACHE_KEY) || localStorage.getItem(CACHE_KEY);
      if (cachedStr) {
        const cached: CachedGeo = JSON.parse(cachedStr);
        if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
          const isPk = cached.countryCode === "PK";
          return { code: cached.countryCode, name: cached.countryName, isPk };
        }
      }
    } catch {
      // Ignore cache read errors
    }

    // Timezone heuristic for zero delay on first load in Pakistan
    if (isPakistanTimezone()) {
      return { code: "PK", name: "Pakistan", isPk: true };
    }

    // Default to international safe mode (3 members) until verified
    return { code: null, name: null, isPk: false };
  };

  const initial = getInitialState();
  const [countryCode, setCountryCode] = useState<string | null>(initial.code);
  const [countryName, setCountryName] = useState<string | null>(initial.name);
  const [isPakistan, setIsPakistan] = useState<boolean>(initial.isPk);
  const [isLoading, setIsLoading] = useState<boolean>(!initial.code && !override);

  // Set country override (for testing or dev)
  const setCountryOverride = useCallback((code: string | null) => {
    if (!code) {
      try {
        sessionStorage.removeItem(OVERRIDE_KEY);
      } catch {}
      setOverride(null);
      // Re-trigger live detection
      detectLocation();
      toast.info("Geolocation override cleared. Using detected location.");
      return;
    }

    const norm = code.toUpperCase();
    try {
      sessionStorage.setItem(OVERRIDE_KEY, norm);
    } catch {}
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
  }, []);

  const detectLocation = useCallback(async () => {
    if (override) {
      const isPk = override === "PK" || override === "PAKISTAN";
      setCountryCode(override);
      setCountryName(isPk ? "Pakistan" : "Global");
      setIsPakistan(isPk);
      setIsLoading(false);
      return;
    }

    // Check valid cache first
    try {
      const cachedStr = sessionStorage.getItem(CACHE_KEY) || localStorage.getItem(CACHE_KEY);
      if (cachedStr) {
        const cached: CachedGeo = JSON.parse(cachedStr);
        if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
          const isPk = cached.countryCode === "PK";
          setCountryCode(cached.countryCode);
          setCountryName(cached.countryName);
          setIsPakistan(isPk);
          setIsLoading(false);
          return;
        }
      }
    } catch {}

    setIsLoading(true);

    try {
      const result = await detectCountryFromIP();
      if (result) {
        const isPk = result.code === "PK";
        setCountryCode(result.code);
        setCountryName(result.name);
        setIsPakistan(isPk);

        // Cache the verified detection
        try {
          const payload: CachedGeo = {
            countryCode: result.code,
            countryName: result.name,
            timestamp: Date.now(),
          };
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload));
          localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
        } catch {}
      } else {
        // Fallback: use timezone hint if all remote IP APIs were unreachable
        const tzPk = isPakistanTimezone();
        setIsPakistan(tzPk);
        setCountryCode(tzPk ? "PK" : "INTL");
        setCountryName(tzPk ? "Pakistan" : "International");
      }
    } catch {
      const tzPk = isPakistanTimezone();
      setIsPakistan(tzPk);
      setCountryCode(tzPk ? "PK" : "INTL");
      setCountryName(tzPk ? "Pakistan" : "International");
    } finally {
      setIsLoading(false);
    }
  }, [override]);

  useEffect(() => {
    detectLocation();
  }, [detectLocation]);

  // Listen for query params change (e.g., if user navigates with ?geo=pk)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const geo = params.get("geo") || params.get("country");
    if (geo) {
      const norm = geo.trim().toUpperCase();
      if (norm === "PK" || norm === "PAKISTAN") {
        setCountryOverride("PK");
      } else if (norm === "GLOBAL" || norm === "US" || norm === "WORLD") {
        setCountryOverride("GLOBAL");
      } else if (norm === "RESET") {
        setCountryOverride(null);
      }
    }
  }, [setCountryOverride]);

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
      }}
    >
      {children}
    </GeoLocationContext.Provider>
  );
};

export const useGeoLocation = (): GeoLocationContextType => {
  const context = useContext(GeoLocationContext);
  if (!context) {
    throw new Error("useGeoLocation must be used within a GeoLocationProvider");
  }
  return context;
};
