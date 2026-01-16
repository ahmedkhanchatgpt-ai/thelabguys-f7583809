import { useRef, useCallback, RefObject } from "react";

interface TiltConfig {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(
  config: TiltConfig = {}
): {
  ref: RefObject<T>;
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
} {
  const {
    maxTilt = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
  } = config;

  const ref = useRef<T>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      ref.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [maxTilt, perspective, scale]
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = `transform ${speed}ms ease-out`;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective, speed]);

  const onMouseEnter = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "none";
  }, []);

  return { ref, onMouseMove, onMouseLeave, onMouseEnter };
}
