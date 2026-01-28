import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

// Simplified button - magnetic effect removed for performance
const MagneticButton = ({ 
  children, 
  className = "", 
  onClick,
}: MagneticButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
