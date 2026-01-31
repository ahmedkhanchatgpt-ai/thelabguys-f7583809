import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import type { TeamMember } from "@/data/teamMembers";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  variant?: "default" | "featured";
}

const TeamMemberCard = ({ member, index, variant = "default" }: TeamMemberCardProps) => {
  const isFeatured = variant === "featured";
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const perfLevel = usePerformanceMode();
  
  const enableTilt = perfLevel === 'high' || perfLevel === 'medium';

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!enableTilt) return;
    
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTilt({ x: rotateX, y: rotateY });
  }, [enableTilt]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  }, []);

  return (
    <Link
      ref={cardRef}
      to={`/team/${member.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl glass glow-border opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)} ${
        isFeatured ? "row-span-2" : ""
      }`}
      style={{
        transform: enableTilt 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovering ? 1.02 : 1})`
          : undefined,
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.3s ease-out" : "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      {/* Shine effect on hover */}
      {enableTilt && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(255,255,255,0.15), transparent 50%)`,
          }}
        />
      )}
      
      <div className={`relative p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col h-[180px] sm:h-[220px] md:h-[280px] lg:h-[300px] xl:h-[320px]`}>
        {/* Floating orb with initials */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Glow effect behind orb */}
          <div className={`absolute w-16 sm:w-20 md:w-28 lg:w-32 h-16 sm:h-20 md:h-28 lg:h-32 ${member.iconBg} rounded-full blur-2xl md:blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
          
          {/* Main orb with 3D effect */}
          <div 
            className={`relative w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full ${member.iconBg} flex items-center justify-center text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-display font-bold shadow-2xl group-hover:scale-110 transition-all duration-500`}
            style={{
              transform: enableTilt ? "translateZ(40px)" : undefined,
              boxShadow: isHovering 
                ? `0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)`
                : undefined,
            }}
          >
            {member.initials || member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        <div 
          className="relative mt-auto pt-2 md:pt-3 lg:pt-4 flex items-end justify-between gap-1.5 sm:gap-2"
          style={{ transform: enableTilt ? "translateZ(20px)" : undefined }}
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-0.5 leading-tight">
              {member.name}
            </h3>
            <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-tight line-clamp-1 lg:line-clamp-2">
              {member.role}
            </p>
          </div>
          
          {/* Arrow button */}
          <div 
            className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full ${member.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
            style={{ transform: enableTilt ? "translateZ(30px)" : undefined }}
          >
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;