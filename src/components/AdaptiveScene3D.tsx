import { lazy, Suspense, memo } from 'react';
import { usePerformanceMode, PerformanceLevel } from '@/hooks/usePerformanceMode';

// Lazy load the 3D scenes
const Scene3D = lazy(() => import('./Scene3D'));
const Scene3DLite = lazy(() => import('./Scene3DLite'));

// CSS-only fallback for minimal performance mode
const CSSFallback = memo(() => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
    <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-pink-500/10 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
  </div>
));

CSSFallback.displayName = 'CSSFallback';

const AdaptiveScene3D = () => {
  const perfLevel = usePerformanceMode();

  // Minimal: CSS-only, no WebGL
  if (perfLevel === 'minimal') {
    return <CSSFallback />;
  }

  // Low: Very lightweight particle scene
  if (perfLevel === 'low') {
    return (
      <Suspense fallback={<CSSFallback />}>
        <Scene3DLite />
      </Suspense>
    );
  }

  // Medium/High: Full 3D scene (Scene3D already has internal perf detection)
  return (
    <Suspense fallback={<CSSFallback />}>
      <Scene3D />
    </Suspense>
  );
};

export default AdaptiveScene3D;
