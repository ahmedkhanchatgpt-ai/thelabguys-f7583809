import { useEffect, useRef, useState } from "react";

interface AnimatedStatCardProps {
  value: string;
  label: string;
  gradient: string;
  delay?: number;
}

const AnimatedStatCard = ({ value, label, gradient, delay = 0 }: AnimatedStatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Extract numeric part and suffix (e.g., "50+" -> 50, "+")
  const numericMatch = value.match(/^([\d.]+)(.*)$/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(targetNumber * easeOutQuart);
      
      if (targetNumber >= 1000) {
        setDisplayValue((currentValue / 1000).toFixed(1) + "K");
      } else if (targetNumber >= 100) {
        setDisplayValue(currentValue.toString());
      } else if (targetNumber < 10) {
        setDisplayValue((targetNumber * easeOutQuart).toFixed(1));
      } else {
        setDisplayValue(currentValue.toString());
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        // Set final value exactly as provided
        if (numericMatch) {
          setDisplayValue(numericMatch[1] + suffix);
        } else {
          setDisplayValue(value);
        }
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber, suffix, value, numericMatch]);

  return (
    <div
      ref={cardRef}
      className={`group relative glass rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Decorative line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${gradient} opacity-50`} />
      
      <div className="relative z-10">
        <div className="font-display text-4xl md:text-5xl font-bold mb-2 tabular-nums">
          {isVisible ? displayValue : "0"}
        </div>
        <div className="text-sm text-muted-foreground uppercase tracking-widest">
          {label}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatCard;
