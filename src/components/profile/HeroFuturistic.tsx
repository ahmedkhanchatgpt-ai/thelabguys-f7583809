import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Github, Calendar, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroFuturisticProps {
  member: TeamMember;
}

const HeroFuturistic = ({ member }: HeroFuturisticProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Brain visual */}
          <div className="order-1 opacity-0 animate-fade-up stagger-1">
            <div className="relative flex items-center justify-center">
              {/* Rotating rings */}
              <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-pink-500/10 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border border-rose-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              
              {/* Central brain */}
              <div className="relative group">
                <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-50 group-hover:opacity-70 transition-opacity scale-150`} />
                <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full ${member.iconBg} flex items-center justify-center shadow-2xl shadow-pink-500/20 group-hover:scale-105 transition-transform`}>
                  <Brain className="w-18 h-18 md:w-22 md:h-22 text-white" strokeWidth={1} />
                </div>
              </div>
              
              {/* Orbiting sparkles */}
              <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] animate-spin-slow" style={{ animationDuration: '12s' }}>
                <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 text-yellow-400" />
              </div>
              <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] animate-spin-slow" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                <Sparkles className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 text-pink-400" />
              </div>
              <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] animate-spin-slow" style={{ animationDuration: '18s' }}>
                <Sparkles className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-fuchsia-400" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-pink-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-2">
              <Brain className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-muted-foreground">AI Engineer</span>
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            </div>

            {/* Name with glow */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              {member.name.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {i === 0 ? (
                    <span 
                      className="text-foreground"
                      style={{ textShadow: '0 0 40px rgba(251, 113, 133, 0.4), 0 0 80px rgba(251, 113, 133, 0.2)' }}
                    >
                      {word}
                    </span>
                  ) : (
                    <span 
                      style={{ 
                        filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5)) drop-shadow(0 0 40px rgba(251, 113, 133, 0.4))',
                        background: 'linear-gradient(135deg, hsl(340, 82%, 59%), hsl(330, 81%, 60%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {word}
                    </span>
                  )}
                </span>
              ))}
            </h1>

            {/* Role */}
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up stagger-3">
              <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
              <span className="text-lg text-muted-foreground font-mono">&lt;{member.role} /&gt;</span>
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
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-pink-500/20`}>
                  <a href={`mailto:${member.email}`}>
                    <Brain className="w-5 h-5" />
                    Build with AI
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-pink-500/30 hover:border-pink-500/50 hover:bg-pink-500/10 px-8 py-6 text-base">
                <a href={`mailto:${member.email}?subject=AI Consultation`}>
                  <Calendar className="w-5 h-5" />
                  Explore Possibilities
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all hover:scale-110 group">
                  <Linkedin className="w-5 h-5 group-hover:text-pink-400 transition-colors" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-rose-500/50 hover:bg-rose-500/10 transition-all hover:scale-110 group">
                  <svg className="w-5 h-5 group-hover:text-rose-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all hover:scale-110 group">
                  <Github className="w-5 h-5 group-hover:text-fuchsia-400 transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-pink-500/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-pink-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFuturistic;
