import { lazy, Suspense, useState, useEffect } from 'react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

// CSS-only fallback for minimal performance mode or loading/error states
const CSSFallback = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full bg-purple-500/15 blur-3xl" />
    <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-pink-500/8 blur-2xl" />
  </div>
);

// Only load 3D on high performance devices
const Scene3D = lazy(() => 
  import('./Scene3D').catch(() => ({
    default: () => <CSSFallback />
  }))
);

const AdaptiveScene3D = () => {
  const perfLevel = usePerformanceMode();
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [hasContextLoss, setHasContextLoss] = useState(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (gl) {
        // Add context loss listener
        canvas.addEventListener('webglcontextlost', () => {
          setHasContextLoss(true);
        });
        setHasWebGL(true);
      } else {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  // Wait for WebGL check to complete
  if (hasWebGL === null) {
    return <CSSFallback />;
  }

  // No WebGL, context loss, or not high performance: CSS-only
  if (!hasWebGL || hasContextLoss || perfLevel !== 'high') {
    return <CSSFallback />;
  }

  // High performance: Full 3D scene with fallback
  return (
    <Suspense fallback={<CSSFallback />}>
      <Scene3D />
    </Suspense>
  );
};

export default AdaptiveScene3D;
