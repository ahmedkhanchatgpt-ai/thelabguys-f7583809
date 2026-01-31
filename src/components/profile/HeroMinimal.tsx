import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, Sparkles, Star, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroMinimalProps {
  member: TeamMember;
}

const HeroMinimal = ({ member }: HeroMinimalProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Elegant gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 rounded-full blur-[180px] opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full blur-[150px] opacity-8 animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-violet-500 to-purple-600 rounded-full blur-[120px] opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.02] rounded-full" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-[20%] animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="w-4 h-4 text-purple-400/40" />
        </div>
        <div className="absolute bottom-1/3 left-[15%] animate-float" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-5 h-5 text-violet-400/30" />
        </div>
        <div className="absolute top-1/3 left-[10%] animate-float" style={{ animationDelay: '2.5s' }}>
          <Hexagon className="w-4 h-4 text-indigo-400/30" />
        </div>
        <div className="absolute bottom-1/4 right-[12%] animate-float" style={{ animationDelay: '3s' }}>
          <Star className="w-3 h-3 text-fuchsia-400/30" />
        </div>
      </div>

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
          {/* Floating orb with enhanced glow */}
          <div className="relative mb-12 opacity-0 animate-fade-up">
            <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-40 scale-[2]`} />
            <div className={`absolute inset-0 ${member.iconBg} blur-xl opacity-30 scale-150`} />
            <div className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full ${member.iconBg} flex items-center justify-center text-white text-5xl md:text-6xl font-display font-bold shadow-2xl group hover:scale-105 transition-transform`}>
              {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            {/* Orbiting sparkles */}
            <div className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '10s' }}>
              <Sparkles className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 text-yellow-400" />
            </div>
          </div>

          {/* Status with enhanced styling */}
          <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-purple-500/30 mb-8 opacity-0 animate-fade-up stagger-1`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${member.iconBg} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${member.iconBg}`}></span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">{member.role}</span>
          </div>

          {/* Name with character animation and glow */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up stagger-2 tracking-tight"
          >
            {member.name.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split('').map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="inline-block opacity-0 animate-fade-up hover:text-purple-400 transition-colors cursor-default"
                    style={{ 
                      animationDelay: `${0.3 + (wordIndex * word.length + charIndex) * 0.03}s`,
                      textShadow: '0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(168, 85, 247, 0.15)',
                      filter: wordIndex > 0 ? 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.3))' : undefined,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Tagline with quotes */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 opacity-0 animate-fade-up stagger-3">
            <span className="text-purple-400">"</span>
            {member.tagline}
            <span className="text-purple-400">"</span>
          </p>

          {/* Gradient divider */}
          <div className={`w-32 h-px bg-gradient-to-r ${member.gradient} mb-8 opacity-0 animate-fade-up stagger-3`} />

          {/* Bio */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 opacity-0 animate-fade-up stagger-4 max-w-2xl">
            {member.fullBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up stagger-5">
            <MagneticButton>
              <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all`}>
                <a href={`mailto:${member.email}`}>
                  <MessageCircle className="w-5 h-5" />
                  Start a Project
                </a>
              </Button>
            </MagneticButton>
            <Button asChild variant="outline" size="lg" className="gap-2 glass border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 px-8 py-6 text-base transition-all">
              <a href={`mailto:${member.email}?subject=Schedule a Call`}>
                <Calendar className="w-5 h-5" />
                Schedule Call
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-10 opacity-0 animate-fade-up stagger-5">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-110 group">
                <Linkedin className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-violet-500/50 hover:bg-violet-500/10 transition-all hover:scale-110 group">
                <svg className="w-5 h-5 group-hover:text-violet-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all hover:scale-110 group">
                <Github className="w-5 h-5 group-hover:text-fuchsia-400 transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest text-purple-400/60">Explore More</span>
            <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-purple-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
