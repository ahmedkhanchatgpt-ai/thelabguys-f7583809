import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <Link
      to={`/team/${member.id}`}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${member.accentColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
        />
        
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center text-primary-foreground text-3xl md:text-4xl font-display font-bold`}>
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-card via-card/90 to-transparent">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
              <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;
