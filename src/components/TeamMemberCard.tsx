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

      <div className={`relative ${isFeatured ? "aspect-[3/4]" : "aspect-square"} p-6 flex flex-col justify-between`}>
        {/* Floating orb with initials */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Glow effect behind orb */}
          <div className={`absolute w-32 h-32 ${member.iconBg} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
          
          {/* Orbiting ring */}
          <div className="absolute w-40 h-40 rounded-full border border-white/10 animate-spin-slow" />
          
          {/* Main orb */}
          <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full ${member.iconBg} flex items-center justify-center text-white text-2xl md:text-3xl font-display font-bold shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        {/* Content */}
        <div className="relative mt-4">
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
            
            {/* Arrow button */}
            <div className={`w-11 h-11 rounded-full ${member.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;
