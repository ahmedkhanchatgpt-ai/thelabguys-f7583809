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
  strength = 0.3,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const perfLevel = usePerformanceMode();

  const isStandaloneButton = typeof onClick === "function";
  const isReducedPerf = perfLevel === "minimal" || perfLevel === "low";

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isReducedPerf) return;

      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) * strength;
      const y = (e.clientY - centerY) * strength;

      setTranslate({ x, y });
    },
    [isReducedPerf, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setTranslate({ x: 0, y: 0 });
  }, []);

  // Simple version for low-perf / touch devices
  if (isReducedPerf) {
    if (isStandaloneButton) {
      return (
        <button
          type="button"
          onClick={onClick}
          className={`transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
        >
          {children}
        </button>
      );
    }

    // Wrapper mode around an existing interactive child (<Button> / <a>): never nest <button> inside <button>
    return (
      <div className={`inline-block transition-transform duration-200 active:scale-[0.98] ${className}`}>
        {children}
      </div>
    );
  }

  if (isStandaloneButton) {
    return (
      <div
        ref={ref}
        data-magnetic
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
        style={{
          transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
          willChange: "transform",
          transition:
            translate.x === 0 && translate.y === 0
              ? "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              : "none",
        }}
      >
        <button type="button" onClick={onClick} className={className}>
          {children}
        </button>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      data-magnetic
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        willChange: "transform",
        transition:
          translate.x === 0 && translate.y === 0
            ? "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            : "none",
      }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
