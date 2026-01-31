import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, Brain, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroFuturisticProps {
  member: TeamMember;
}

const HeroFuturistic = ({ member }: HeroFuturisticProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 800 600">
          {/* Neural network lines */}
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <circle
                cx={100 + (i % 5) * 150}
                cy={100 + Math.floor(i / 5) * 200}
                r="4"
                fill="currentColor"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              {i < 10 && (
                <line
                  x1={100 + (i % 5) * 150}
                  y1={100 + Math.floor(i / 5) * 200}
                  x2={100 + ((i + 1) % 5) * 150}
                  y2={100 + Math.floor((i + 1) / 5) * 200}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="animate-draw-line"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-10 animate-pulse-slow`} />
      <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-10 animate-pulse-slow`} style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - AI visual */}
          <div className="order-1 opacity-0 animate-fade-up stagger-1">
            <div className="relative flex items-center justify-center">
              {/* Rotating outer ring */}
              <div className={`absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-white/10 animate-spin-slow`} />
              
              {/* Inner rings */}
              <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-white/5" />
              <div className={`absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br ${member.gradient} opacity-10 blur-xl animate-pulse`} />
              
              {/* Central brain icon */}
              <div className="relative group">
                <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-50 group-hover:opacity-70 transition-opacity scale-150`} />
                <div className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full ${member.iconBg} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                  <Brain className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1} />
                </div>
                
                {/* Sparkling effect */}
                <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-pulse" />
                <Sparkles className="absolute -bottom-2 -left-6 w-6 h-6 text-pink-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute w-72 h-72 md:w-80 md:h-80 animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background glass border border-white/20 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-rose-400" />
                </div>
              </div>
              <div className="absolute w-72 h-72 md:w-80 md:h-80 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-background glass border border-white/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-rose-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-2">
              <Brain className="w-4 h-4 text-rose-400" />
              <span className="text-sm text-muted-foreground">AI Engineer</span>
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
            </div>

            {/* Name with futuristic styling */}
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
                      className="text-gradient bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5)) drop-shadow(0 0 40px rgba(251, 113, 133, 0.4))' }}
                    >
                      {word}
                    </span>
                  )}
                </span>
              ))}
            </h1>

            {/* Role with AI styling */}
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
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-lg`}>
                  <a href={`mailto:${member.email}`}>
                    <Brain className="w-5 h-5" />
                    Build with AI
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-white/10 hover:bg-white/5 px-8 py-6 text-base">
                <a href={`mailto:${member.email}?subject=AI Consultation`}>
                  <Calendar className="w-5 h-5" />
                  Explore Possibilities
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-rose-500/30 hover:bg-white/5 transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-rose-500/30 hover:bg-white/5 transition-all hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-rose-500/30 hover:bg-white/5 transition-all hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFuturistic;
