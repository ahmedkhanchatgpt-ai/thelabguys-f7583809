import { Suspense, lazy, useEffect, useState } from 'react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

// Lazy load the 3D scene for better initial load
const Scene3D = lazy(() => import('./Scene3D'));

// CSS-only fallback for low-end devices
const CSSFallback = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Animated gradient orbs */}
    <div 
      className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/15 blur-3xl"
      style={{ animation: 'float 8s ease-in-out infinite' }}
    />
    <div 
      className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"
      style={{ animation: 'float 10s ease-in-out infinite reverse' }}
    />
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl"
      style={{ animation: 'float 12s ease-in-out infinite' }}
    />
    
    {/* Subtle particle dots */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `pulse 3s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// Minimal fallback for very low-end devices
const MinimalFallback = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-accent/8 blur-3xl" />
  </div>
);

const AdaptiveScene3D = () => {
  const perfLevel = usePerformanceMode();
  const [webglSupported, setWebglSupported] = useState(true);
  
  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // Minimal mode or no WebGL - use minimal fallback
  if (perfLevel === 'minimal' || !webglSupported) {
    return <MinimalFallback />;
  }

  // Low performance - use CSS animated fallback
  if (perfLevel === 'low') {
    return <CSSFallback />;
  }

  // Medium/High performance - use 3D scene
  return (
    <Suspense fallback={<CSSFallback />}>
      <Scene3D />
    </Suspense>
  );
};

export default AdaptiveScene3D;