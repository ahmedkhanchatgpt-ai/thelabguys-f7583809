import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const InitialLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // 1.6s smooth duration
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;
    let pauseTimer: ReturnType<typeof setTimeout> | undefined;

    const timer = setInterval(() => {
      currentStep++;
      const progressRatio = currentStep / steps;
      // Smooth cubic ease-out
      const easeOutRatio = 1 - Math.pow(1 - progressRatio, 3);
      const newProgress = Math.min(100, Math.floor(easeOutRatio * 100));

      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Brief pause at 100% before transition
        pauseTimer = setTimeout(() => setLoading(false), 350);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, []);

  return (
    <>
      {/* Site pre-renders smoothly in background */}
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
              y: "-100%",
            }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050B14] overflow-hidden select-none"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-purple-600/25 via-fuchsia-600/15 to-cyan-500/20 rounded-full blur-[140px] animate-pulse-slow" />
            </div>

            {/* Content Center */}
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Lab Flask Icon with Ambient Glow */}
              <div className="relative mb-6 flex items-center justify-center">
                {/* Glowing Aura */}
                <motion.div
                  className="absolute w-28 h-28 bg-gradient-to-br from-purple-500/40 via-fuchsia-500/25 to-cyan-400/35 blur-xl rounded-full"
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.75, 0.4],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Clean Flask Icon */}
                <motion.div
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 drop-shadow-[0_0_16px_rgba(168,85,247,0.5)]"
                >
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#clean-lab-grad)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient id="clean-lab-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="50%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31Z" />
                  </svg>
                </motion.div>
              </div>

              {/* Percentage Counter */}
              <div className="font-display text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 flex items-baseline drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                <span className="tabular-nums">{progress}</span>
                <span className="text-3xl md:text-4xl text-cyan-400/80 ml-1 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">%</span>
              </div>

              {/* Minimal Clean Gradient Progress Bar */}
              <div className="h-[2px] w-56 md:w-72 bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_10px_#22d3ee]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Clean Minimalist Brand Title */}
              <div className="mt-8 text-xs uppercase tracking-[0.45em] text-slate-400 font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
                THE LAB GUYS
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
