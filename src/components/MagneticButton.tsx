import { forwardRef, useRef, useState, ReactNode, useCallback } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

const MagneticButton = forwardRef<HTMLDivElement, MagneticButtonProps>(
  function MagneticButton({ children, className = "", onClick, strength = 0.3 }, ref) {
    const innerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        // Set the inner ref
        (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        // Forward the ref
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const element = innerRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      
      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <div
        ref={setRefs}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`transition-transform duration-200 ease-out cursor-pointer ${className}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {children}
      </div>
    );
  }
);

export default MagneticButton;
