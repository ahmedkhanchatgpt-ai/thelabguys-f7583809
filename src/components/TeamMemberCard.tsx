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

      <div className={`relative p-4 md:p-6 flex flex-col h-[260px] sm:h-[280px] md:h-[320px]`}>
        {/* Floating orb with initials */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Glow effect behind orb */}
          <div className={`absolute w-24 md:w-32 h-24 md:h-32 ${member.iconBg} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
          
          {/* Orbiting ring */}
          <div className="absolute w-28 md:w-40 h-28 md:h-40 rounded-full border border-white/10 animate-spin-slow" />
          
          {/* Main orb */}
          <div className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full ${member.iconBg} flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-display font-bold shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            {member.initials || member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        <div className="relative mt-auto pt-3 md:pt-4 flex items-end justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-foreground mb-0.5 md:mb-1 group-hover:text-gradient transition-all duration-300 leading-tight truncate">
              {member.name}
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight line-clamp-2">
              {member.role}
            </p>
          </div>
          
          {/* Arrow button - circular with colored background */}
          <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full ${member.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;
