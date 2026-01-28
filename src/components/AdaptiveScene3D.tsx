// Simple CSS background - 3D removed for performance
const AdaptiveScene3D = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-accent/8 blur-3xl" />
  </div>
);

export default AdaptiveScene3D;
