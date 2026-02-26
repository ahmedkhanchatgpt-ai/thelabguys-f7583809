import { useEffect, useState, useCallback } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const perfLevel = usePerformanceMode();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  useEffect(() => {
    // Only enable on high performance desktop devices with hover support
    if (perfLevel !== 'high') return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-magnetic]")) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHoverStart, { passive: true });
    document.addEventListener("mouseout", handleHoverEnd, { passive: true });

    // Hide native cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = "a, button, input, textarea, select, [role='button'] { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      document.body.style.cursor = "";
      document.getElementById("custom-cursor-style")?.remove();
    };
  }, [perfLevel, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  // Don't render on non-high-performance or touch devices
  if (perfLevel !== 'high' || !window.matchMedia("(hover: hover)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.15 : isClicking ? 0.8 : 1})`,
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
        }}
      >
        <div
          className="rounded-full border-2 border-white"
          style={{
            width: isHovering ? 38 : 32,
            height: isHovering ? 38 : 32,
            transition: "width 0.2s ease-out, height 0.2s ease-out",
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease-out",
        }}
      >
        <div
          className="w-2 h-2 rounded-full bg-white"
          style={{
            transform: `scale(${isClicking ? 2 : 1})`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;