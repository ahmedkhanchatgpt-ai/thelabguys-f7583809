import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Github, Calendar, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroTechProps {
  member: TeamMember;
}

const HeroTech = ({ member }: HeroTechProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Simple gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-cyan-500 to-green-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar with glow */}
          <div className="relative mb-12 opacity-0 animate-fade-up">
            <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-40 scale-[2]`} />
            <div className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full ${member.iconBg} flex items-center justify-center text-white text-5xl md:text-6xl font-display font-bold shadow-2xl group hover:scale-105 transition-transform`}>
              {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-green-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Available</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-sm font-mono text-muted-foreground">&lt;Developer /&gt;</span>
          </div>

          {/* Name with glow effect */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up stagger-2 tracking-tight">
            {member.name.split(' ').map((word, i) => (
              <span 
                key={i} 
                className="block"
                style={i > 0 ? { 
                  filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 40px rgba(16, 185, 129, 0.4))',
                  background: 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(160, 84%, 39%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                } : { 
                  textShadow: '0 0 40px rgba(34, 197, 94, 0.3), 0 0 80px rgba(34, 197, 94, 0.15)' 
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Role */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up stagger-3">
            <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
            <span className="text-lg text-muted-foreground">{member.role}</span>
            <div className={`h-px w-12 bg-gradient-to-l ${member.gradient}`} />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 opacity-0 animate-fade-up stagger-3">
            "{member.tagline}"
          </p>

          {/* Bio */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 opacity-0 animate-fade-up stagger-4 max-w-2xl">
            {member.fullBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up stagger-5">
            <MagneticButton>
              <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-green-500/20`}>
                <a href={`mailto:${member.email}`}>
                  <Terminal className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </MagneticButton>
            <Button asChild variant="outline" size="lg" className="gap-2 glass border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 px-8 py-6 text-base">
              <a href={`mailto:${member.email}?subject=Schedule a Call`}>
                <Calendar className="w-5 h-5" />
                Schedule Call
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-10 opacity-0 animate-fade-up stagger-5">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:bg-green-500/10 transition-all hover:scale-110 group">
                <Linkedin className="w-5 h-5 group-hover:text-green-400 transition-colors" />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all hover:scale-110 group">
                <svg className="w-5 h-5 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all hover:scale-110 group">
                <Github className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-green-500/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-green-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTech;
