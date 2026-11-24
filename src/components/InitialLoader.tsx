import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export const InitialLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8s smooth duration
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;
    let pauseTimer: ReturnType<typeof setTimeout> | undefined;

    const timer = setInterval(() => {
      currentStep++;
      // Cinematic cubic ease-out
      const progressRatio = currentStep / steps;
      const easeOutRatio = 1 - Math.pow(1 - progressRatio, 3);
      const newProgress = Math.min(100, Math.floor(easeOutRatio * 100));

      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Pause briefly at 100% so user sees completion state
        pauseTimer = setTimeout(() => setLoading(false), 500);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, []);

  // Ambient lab bubbles rising from the flask & background
  const bubbles = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        size: Math.random() * 5 + 3,
        left: Math.random() * 36 - 18,
        delay: Math.random() * 1.8,
        duration: Math.random() * 1.2 + 1.4,
      })),
    []
  );

  // Background floating ambient cyber particles
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 3,
        delay: Math.random() * 2,
      })),
    []
  );

  // Dynamic sci-fi / lab status text
  const getStatusText = (p: number) => {
    if (p < 20) return "INITIALIZING QUANTUM CORE...";
    if (p < 45) return "CALIBRATING NEURAL ARCHITECTURE...";
    if (p < 75) return "SYNTHESIZING LAB INTERFACES...";
    if (p < 95) return "ACCELERATING GPU PIPELINE...";
    if (p < 100) return "FINALIZING LAB ENVIRONMENT...";
    return "SYSTEM READY • WELCOME TO THE LAB";
  };

  // Liquid height inside the flask (SVG viewbox 0..24, base around 21.5, top around 6)
  const maxLiquidHeight = 15.5;
  const liquidHeight = (progress / 100) * maxLiquidHeight;
  const liquidY = 21.5 - liquidHeight;

  return (
    <>
      {/* Children is pre-rendered underneath so the site is instantly ready when loader dissolves */}
      <div className={loading ? "pointer-events-none select-none" : ""}>
        {children}
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.06,
              filter: "blur(12px)",
            }}
            transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040711] overflow-hidden select-none"
            style={{ willChange: "opacity, transform, filter" }}
          >
            {/* Ambient background glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-700/20 via-fuchsia-600/15 to-cyan-500/15 rounded-full blur-[140px] animate-pulse-slow" />
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

              {/* Subtle cyber grid lines */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                  maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                }}
              />

              {/* Floating ambient particles */}
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-cyan-400/40 blur-[0.5px]"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Central Animated Content */}
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Lab Flask Container */}
              <div className="relative mb-6 flex items-center justify-center">
                {/* Dynamic radial flare behind flask */}
                <motion.div
                  className="absolute w-36 h-36 bg-gradient-to-br from-purple-600/40 via-fuchsia-500/30 to-cyan-400/30 blur-2xl rounded-full"
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.4, 0.85, 0.4],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* 100% completion shockwave ring */}
                {progress === 100 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 2.4, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute w-28 h-28 rounded-full border border-cyan-400 shadow-[0_0_20px_#22d3ee]"
                  />
                )}

                {/* Bubbles rising from inside the liquid */}
                {bubbles.map((b) => (
                  <motion.div
                    key={b.id}
                    className="absolute bottom-6 rounded-full bg-gradient-to-t from-cyan-300 to-white shadow-[0_0_8px_#22d3ee]"
                    style={{
                      left: `calc(50% + ${b.left}px)`,
                      width: b.size,
                      height: b.size,
                    }}
                    animate={{
                      y: [0, -90],
                      opacity: [0, 1, 0],
                      scale: [0.6, 1.2, 0.4],
                    }}
                    transition={{
                      duration: b.duration,
                      repeat: Infinity,
                      delay: b.delay,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Interactive SVG Lab Flask with Filling Liquid & Glow */}
                <motion.div
                  animate={{
                    rotate: [-1.5, 1.5, -1.5],
                    y: [-2, 2, -2],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                >
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Neon Outline Gradient */}
                      <linearGradient id="flask-neon-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="50%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>

                      {/* Liquid Gradient */}
                      <linearGradient id="flask-liquid-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.95" />
                        <stop offset="45%" stopColor="#a855f7" stopOpacity="0.9" />
                        <stop offset="85%" stopColor="#06b6d4" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.9" />
                      </linearGradient>

                      {/* Inner Flask Contour Mask for Liquid Containment */}
                      <clipPath id="flask-inner-boundary">
                        <path d="M9.6 2h4.8v7.4l6.1 9.1A1.6 1.6 0 0 1 19.17 21H4.83a1.6 1.6 0 0 1-1.33-2.5L9.6 9.4V2z" />
                      </clipPath>

                      {/* Subtle Neon Glow Filter */}
                      <filter id="neon-bloom" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="0.8" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Liquid fill rising with progress */}
                    <g clipPath="url(#flask-inner-boundary)">
                      {/* Dynamic Liquid Body */}
                      <rect
                        x="0"
                        y={liquidY}
                        width="24"
                        height={liquidHeight + 2}
                        fill="url(#flask-liquid-grad)"
                      />

                      {/* Surface wave shimmer line */}
                      {progress > 4 && (
                        <line
                          x1="2"
                          y1={liquidY}
                          x2="22"
                          y2={liquidY}
                          stroke="#a5f3fc"
                          strokeWidth="0.9"
                          strokeLinecap="round"
                          opacity="0.95"
                          filter="url(#neon-bloom)"
                        />
                      )}

                      {/* Internal micro-bubbles inside liquid */}
                      {progress > 15 && (
                        <>
                          <circle cx="10" cy={liquidY + 4} r="0.6" fill="#ffffff" opacity="0.7" />
                          <circle cx="14" cy={liquidY + 8} r="0.8" fill="#ffffff" opacity="0.6" />
                          <circle cx="8" cy={liquidY + 9} r="0.5" fill="#ffffff" opacity="0.5" />
                          <circle cx="15.5" cy={liquidY + 12} r="0.7" fill="#ffffff" opacity="0.6" />
                        </>
                      )}
                    </g>

                    {/* Flask Glass Specular Reflection Highlight */}
                    <path
                      d="M6.5 18L10 10V4"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                    />

                    {/* Measurement Graduation Lines on Flask Body */}
                    <line x1="8.5" y1="13.5" x2="10.2" y2="13.5" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" strokeLinecap="round" />
                    <line x1="7.5" y1="16.5" x2="9.8" y2="16.5" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" strokeLinecap="round" />
                    <line x1="6.5" y1="19.2" x2="9.2" y2="19.2" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" strokeLinecap="round" />

                    {/* Flask Outer Neon Stroke Structure */}
                    <path
                      d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31Z"
                      stroke="url(#flask-neon-stroke)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#neon-bloom)"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Big High-Tech Percentage Counter */}
              <div className="flex items-baseline justify-center font-display tracking-tight text-white mb-4">
                <span className="text-6xl sm:text-7xl md:text-8xl font-black tabular-nums bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                  {progress}
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 ml-1.5 drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]">
                  %
                </span>
              </div>

              {/* Futuristic Cyber Progress Bar with Traveling Glow Head */}
              <div className="relative w-64 sm:w-80 md:w-96 mb-6">
                <div className="h-2 w-full bg-slate-900/90 border border-white/10 rounded-full overflow-hidden p-[1px] shadow-[inset_0_1px_5px_rgba(0,0,0,0.9)] backdrop-blur-md">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 relative transition-all duration-75 ease-out shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Glowing light head travelling with progress */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_8px_#22d3ee,0_0_16px_#22d3ee]" />
                  </div>
                </div>

                {/* Sub-status & diagnostics indicators */}
                <div className="flex justify-between items-center mt-2.5 px-1 text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span className="text-slate-400">CORE.ONLINE</span>
                  </span>
                  <span className="text-cyan-400/90 font-medium tracking-wider">
                    {progress < 100 ? `${progress} / 100` : "READY"}
                  </span>
                </div>
              </div>

              {/* Branding and Live Cyber Status readout */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs uppercase tracking-[0.45em] font-bold bg-gradient-to-r from-purple-300 via-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                  THE LAB GUYS
                </div>
                <div className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{getStatusText(progress)}</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
