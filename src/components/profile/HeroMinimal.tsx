import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroMinimalProps {
  member: TeamMember;
}

const HeroMinimal = ({ member }: HeroMinimalProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        {/* Centered minimal layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Floating orb */}
          <div className="relative mb-12 opacity-0 animate-fade-up">
            <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-30 scale-150`} />
            <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full ${member.iconBg} flex items-center justify-center text-white text-5xl md:text-6xl font-display font-bold shadow-2xl`}>
              {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>

          {/* Status */}
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 mb-8 opacity-0 animate-fade-up stagger-1`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${member.iconBg} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${member.iconBg}`}></span>
            </span>
            <span className="text-sm text-muted-foreground">{member.role}</span>
          </div>

          {/* Name */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up stagger-2 tracking-tight"
            style={{ 
              textShadow: '0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(168, 85, 247, 0.15)',
              filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.2))'
            }}
          >
            {member.name}
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 opacity-0 animate-fade-up stagger-3">
            {member.tagline}
          </p>

          {/* Divider */}
          <div className={`w-24 h-px bg-gradient-to-r ${member.gradient} mb-8 opacity-0 animate-fade-up stagger-3`} />

          {/* Bio */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 opacity-0 animate-fade-up stagger-4 max-w-2xl">
            {member.fullBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up stagger-5">
            <MagneticButton>
              <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-lg`}>
                <a href={`mailto:${member.email}`}>
                  <MessageCircle className="w-5 h-5" />
                  Start a Project
                </a>
              </Button>
            </MagneticButton>
            <Button asChild variant="outline" size="lg" className="gap-2 glass border-white/10 hover:bg-white/5 px-8 py-6 text-base">
              <a href={`mailto:${member.email}?subject=Schedule a Call`}>
                <Calendar className="w-5 h-5" />
                Schedule Call
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-10 opacity-0 animate-fade-up stagger-5">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
