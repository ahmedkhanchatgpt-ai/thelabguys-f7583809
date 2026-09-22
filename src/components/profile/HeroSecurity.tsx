import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Github, Calendar, Shield, Lock, Eye, Fingerprint, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroSecurityProps {
  member: TeamMember;
}

const HeroSecurity = ({ member }: HeroSecurityProps) => {
  return (
    <section className="min-h-screen flex lg:items-center relative pt-32 pb-20 lg:pt-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-orange-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-1">
              <Shield className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-muted-foreground">Security Expert</span>
            </div>

            {/* Name with glow */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              <span 
                className="block text-foreground"
                style={{ textShadow: '0 0 40px rgba(251, 146, 60, 0.4), 0 0 80px rgba(251, 146, 60, 0.2)' }}
              >
                {member.name.split(' ')[0]}
              </span>
              {member.name.split(' ').slice(1).map((word, i) => (
                <span 
                  key={i} 
                  className="block"
                  style={{ 
                    filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.5)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.4))',
                    background: 'linear-gradient(135deg, hsl(25, 95%, 53%), hsl(38, 92%, 50%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-medium mb-6 opacity-0 animate-fade-up stagger-3">
              {member.tagline}
            </p>

            {/* Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4">
              {member.fullBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-5">
              <MagneticButton>
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-orange-500/20`}>
                  <a href={`mailto:${member.email}`}>
                    <Shield className="w-5 h-5" />
                    Secure Your Business
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/10 px-8 py-6 text-base">
                <a href={`mailto:${member.email}?subject=Security Assessment`}>
                  <Scan className="w-5 h-5" />
                  Request Assessment
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-orange-500/50 hover:bg-orange-500/10 transition-all hover:scale-110 group">
                  <Linkedin className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-amber-500/50 hover:bg-amber-500/10 transition-all hover:scale-110 group">
                  <svg className="w-5 h-5 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all hover:scale-110 group">
                  <Github className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Right - Cyber Visual */}
          <div className="order-2 lg:order-2 opacity-0 animate-fade-up stagger-1">
            <div className="relative flex items-center justify-center">
              {/* Rotating rings */}
              <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-orange-500/10 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-amber-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border border-yellow-500/10 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              {/* Central shield */}
              <div className="relative group">
                <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-40 group-hover:opacity-60 transition-opacity scale-150`} />
                <div className={`relative w-44 h-44 md:w-52 md:h-52 rounded-3xl ${member.iconBg} flex items-center justify-center shadow-2xl shadow-orange-500/20 group-hover:scale-105 transition-transform rotate-45`}>
                  <Shield className="w-20 h-20 md:w-24 md:h-24 text-white -rotate-45" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background glass border border-orange-500/30 flex items-center justify-center shadow-xl">
                  <Lock className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-background glass border border-amber-500/30 flex items-center justify-center shadow-xl">
                  <Eye className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow" style={{ animationDuration: '20s' }}>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background glass border border-yellow-500/30 flex items-center justify-center shadow-xl">
                  <Fingerprint className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-orange-500/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-orange-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecurity;
