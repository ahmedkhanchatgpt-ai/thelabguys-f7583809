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
    if (rafRef.current) return;

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

    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldEnable, onMouseMove, onMouseLeave, onMouseEnter]);

  if (!shouldEnable) return null;

  const size = isPointer ? 16 : 8;
  const outerSize = isPointer ? 32 : 24;

  return (
    <>
      <div
        className={`fixed pointer-events-none z-[9999] ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.15s",
        }}
      >
        <div
          className="rounded-full bg-white"
          style={{ width: size, height: size, transition: "width 0.15s, height 0.15s" }}
        />
      </div>

      <div
        className={`fixed pointer-events-none z-[9998] ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.15s",
        }}
      >
        <div
          className="rounded-full border border-white/30"
          style={{ width: outerSize, height: outerSize, transition: "width 0.15s, height 0.15s" }}
        />
      </div>

      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
};

export default CustomCursor;
