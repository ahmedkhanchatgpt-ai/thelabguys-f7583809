import { useEffect, useState, useCallback } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
    const target = e.target as HTMLElement;
    const isClickable = 
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      !!target.closest("a") ||
      !!target.closest("button") ||
      target.classList.contains("cursor-pointer") ||
      window.getComputedStyle(target).cursor === "pointer";
    
    setIsPointer(isClickable);
  }, []);

  const onMouseDown = useCallback(() => setIsClicking(true), []);
  const onMouseUp = useCallback(() => setIsClicking(false), []);
  const onMouseLeave = useCallback(() => setIsHidden(true), []);
  const onMouseEnter = useCallback(() => setIsHidden(false), []);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia("(hover: none)").matches) return;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseLeave, onMouseEnter]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            isPointer ? "w-4 h-4" : "w-2 h-2"
          }`}
        />
      </div>

      {/* Cursor ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1}) ${isClicking ? "scale(0.9)" : ""}`,
        }}
      >
        <div
          className={`rounded-full border border-white/30 transition-all duration-200 ${
            isPointer ? "w-10 h-10 border-accent/50" : "w-8 h-8"
          }`}
        />
      </div>

      {/* Hide default cursor */}
      <style>{`
        @media (hover: hover) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
