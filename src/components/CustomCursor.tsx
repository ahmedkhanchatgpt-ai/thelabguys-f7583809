import { useEffect, useRef, useState } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const perfLevel = usePerformanceMode();

  const isDesktopPointer =
    perfLevel === "high" &&
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    if (!isDesktopPointer) return;

    const updateTransforms = () => {
      rafRef.current = null;
      const { x, y } = posRef.current;
      const scale = isHoveringRef.current ? 1.15 : isClickingRef.current ? 0.8 : 1;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const scheduleUpdate = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateTransforms);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      setIsVisible((prev) => (prev ? prev : true));
      scheduleUpdate();
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => {
      isClickingRef.current = true;
      setIsClicking(true);
      scheduleUpdate();
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
      setIsClicking(false);
      scheduleUpdate();
    };

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, [role='button'], input, textarea, select, [data-magnetic]")) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          setIsHovering(true);
          scheduleUpdate();
        }
      }
    };

    const handleHoverEnd = (e: Event) => {
      const related = (e as MouseEvent).relatedTarget as HTMLElement | null;
      if (!related?.closest("a, button, [role='button'], input, textarea, select, [data-magnetic]")) {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          setIsHovering(false);
          scheduleUpdate();
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHoverStart, { passive: true });
    document.addEventListener("mouseout", handleHoverEnd, { passive: true });

    // Hide native cursor cleanly
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = "* { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
      document.getElementById("custom-cursor-style")?.remove();
    };
  }, [isDesktopPointer]);

  if (!isDesktopPointer) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
          transition: "opacity 0.2s ease-out",
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
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
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
