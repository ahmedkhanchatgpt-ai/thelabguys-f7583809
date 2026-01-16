import { useEffect, useRef, useState } from "react";

interface AnimatedSkillBarProps {
  skill: string;
  gradient: string;
  delay?: number;
}

const AnimatedSkillBar = ({ skill, gradient, delay = 0 }: AnimatedSkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage] = useState(() => Math.floor(Math.random() * 20) + 80); // 80-100%
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-gradient transition-all duration-300">
          {skill}
        </span>
        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          {percentage}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted/50 overflow-hidden backdrop-blur-sm">
        <div
          className={`h-full rounded-full ${gradient} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{
            width: isVisible ? `${percentage}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
               style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
