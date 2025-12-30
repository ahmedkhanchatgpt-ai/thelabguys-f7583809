import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  variant?: "default" | "featured";
}

const TeamMemberCard = ({ member, index, variant = "default" }: TeamMemberCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <Link
      to={`/team/${member.id}`}
      className={`group relative overflow-hidden rounded-3xl glass glow-border card-3d opacity-0 animate-fade-up stagger-${index + 1} ${
        isFeatured ? "row-span-2" : ""
      }`}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-50" />

      <div className={`relative p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col h-[180px] sm:h-[220px] md:h-[280px] lg:h-[300px] xl:h-[320px]`}>
        {/* Floating orb with initials */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Glow effect behind orb */}
          <div className={`absolute w-16 sm:w-20 md:w-28 lg:w-32 h-16 sm:h-20 md:h-28 lg:h-32 ${member.iconBg} rounded-full blur-2xl md:blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
          
          {/* Orbiting ring - hidden on mobile for cleaner look */}
          <div className="absolute hidden sm:block w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 rounded-full border border-white/10 animate-spin-slow" />
          
          {/* Main orb */}
          <div className={`relative w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full ${member.iconBg} flex items-center justify-center text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-display font-bold shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            {member.initials || member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        <div className="relative mt-auto pt-2 md:pt-3 lg:pt-4 flex items-end justify-between gap-1.5 sm:gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-0.5 group-hover:text-gradient transition-all duration-300 leading-tight">
              {member.name}
            </h3>
            <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-tight line-clamp-1 lg:line-clamp-2">
              {member.role}
            </p>
          </div>
          
          {/* Arrow button - circular with colored background */}
          <div className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full ${member.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;
