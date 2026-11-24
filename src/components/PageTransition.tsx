import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  in: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  out: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // snappy, buttery smooth ease curve
  duration: 0.35,
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full min-h-screen"
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "opacity, transform, filter",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};
