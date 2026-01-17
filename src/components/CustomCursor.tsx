import { useEffect, useState, useCallback, useRef } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const rafRef = useRef<number | null>(null);
  const performanceLevel = usePerformanceMode();

  // Only enable on high-performance devices with hover capability
  const shouldEnable = performanceLevel === 'high' && 
    typeof window !== "undefined" && 
    !window.matchMedia("(hover: none)").matches;

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return; // Skip if already queued

    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button");
      
      setIsPointer(isClickable);
      rafRef.current = null;
    });
  }, []);

  const onMouseLeave = useCallback(() => setIsHidden(true), []);
  const onMouseEnter = useCallback(() => setIsHidden(false), []);

  useEffect(() => {
    if (!shouldEnable) return;

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldEnable, onMouseMove, onMouseLeave, onMouseEnter]);

  // Don't render on anything but high-performance devices
  if (!shouldEnable) return null;

  return (
    <>
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-150 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-white ${
            isPointer ? "w-4 h-4" : "w-2 h-2"
          }`}
        />
      </div>

      <div
        className={`fixed pointer-events-none z-[9998] transition-opacity duration-150 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.3 : 1})`,
        }}
      >
        <div
          className={`rounded-full border border-white/30 ${
            isPointer ? "w-8 h-8" : "w-6 h-6"
          }`}
        />
      </div>

      <style>{`
        @media (hover: hover) {
          .cursor-custom-enabled * { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
