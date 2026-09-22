import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FlaskConical } from "lucide-react";

export const InitialLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast and smooth percentage counter
    const duration = 1500; // 1.5 seconds
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Calculate progress with a slight ease-out effect mathematically
      const progressRatio = currentStep / steps;
      const easeOutRatio = 1 - Math.pow(1 - progressRatio, 3);
      const newProgress = Math.min(100, Math.floor(easeOutRatio * 100));
      
      setProgress(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 400); // brief pause at 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Generate some random bubbles for the lab effect
  const bubbles = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 20 - 10,
    delay: Math.random() * 1.5,
    duration: Math.random() * 1 + 1.5
  }));

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050B14] overflow-hidden"
          >
            <div className="flex flex-col items-center">
              
              {/* Lab Theme Icon */}
              <div className="relative mb-8 flex items-center justify-center">
                {/* Glowing backdrop */}
                <motion.div 
                  className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Bubbles rising from flask */}
                {bubbles.map((bubble) => (
                  <motion.div
                    key={bubble.id}
                    className="absolute bottom-4 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                    style={{ left: `calc(50% + ${bubble.left}px)`, width: bubble.size, height: bubble.size }}
                    animate={{ 
                      y: [0, -60], 
                      opacity: [0, 1, 0],
                      x: [0, Math.random() * 10 - 5]
                    }}
                    transition={{ 
                      duration: bubble.duration, 
                      repeat: Infinity, 
                      delay: bubble.delay,
                      ease: "easeOut"
                    }}
                  />
                ))}
                
                <motion.div
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#lab-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="lab-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31Z" />
                  </svg>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
              >
                {progress}
                <span className="text-3xl md:text-4xl text-white/50">%</span>
              </motion.div>
              
              <div className="h-[2px] w-48 md:w-64 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium"
              >
                The Lab Guys
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && children}
    </>
  );
};
