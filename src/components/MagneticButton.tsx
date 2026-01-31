import { useRef, useState, ReactNode, useCallback } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

const MagneticButton = ({ 
  children, 
  className = "", 
  onClick,
  strength = 0.3 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const perfLevel = usePerformanceMode();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (perfLevel === 'minimal' || perfLevel === 'low') return;
    
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;

    setTranslate({ x, y });
  }, [perfLevel, strength]);

  const handleMouseLeave = useCallback(() => {
    setTranslate({ x: 0, y: 0 });
  }, []);

  // Simple version for low-perf devices
  if (perfLevel === 'minimal' || perfLevel === 'low') {
    return (
      <button onClick={onClick} className={`transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <div
      ref={ref}
      data-magnetic
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block ${className}`}
      style={{
        transform: `translate(${translate.x}px, ${translate.y}px)`,
        transition: translate.x === 0 && translate.y === 0 ? "transform 0.3s ease-out" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;