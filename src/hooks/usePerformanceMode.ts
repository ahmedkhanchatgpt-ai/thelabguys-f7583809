import { useState, useEffect } from 'react';

export type PerformanceLevel = 'high' | 'medium' | 'low' | 'minimal';

let cachedLevel: PerformanceLevel | null = null;

export function usePerformanceMode(): PerformanceLevel {
  const [level, setLevel] = useState<PerformanceLevel>(cachedLevel || 'medium');

  useEffect(() => {
    if (cachedLevel) {
      setLevel(cachedLevel);
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Check for mobile or low-end device indicators
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const deviceMemory = nav.deviceMemory;
    const hasLowMemory = deviceMemory !== undefined && deviceMemory < 4;
    const hasVeryLowMemory = deviceMemory !== undefined && deviceMemory < 2;
    const cores = navigator.hardwareConcurrency;
    const hasLowCores = cores !== undefined && cores < 4;
    const hasVeryLowCores = cores !== undefined && cores < 2;
    
    // Check if device has touch only (likely mobile/tablet)
    const isTouchOnly = window.matchMedia("(hover: none)").matches;
    
    // Check for battery saver mode (if available)
    const connection = nav.connection;
    const isSlowConnection = Boolean(connection && (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g'));
    
    // Determine performance level
    let detectedLevel: PerformanceLevel;
    if (prefersReducedMotion || hasVeryLowMemory || hasVeryLowCores || isSlowConnection) {
      detectedLevel = 'minimal';
    } else if (isMobile || (hasLowMemory && hasLowCores) || isTouchOnly) {
      detectedLevel = 'low';
    } else if (hasLowMemory || hasLowCores) {
      detectedLevel = 'medium';
    } else {
      detectedLevel = 'high';
    }
    
    cachedLevel = detectedLevel;
    setLevel(detectedLevel);
  }, []);

  return level;
}
