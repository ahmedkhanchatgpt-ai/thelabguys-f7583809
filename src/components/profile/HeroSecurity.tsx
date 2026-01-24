import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroSecurityProps {
  member: TeamMember;
}

const HeroSecurity = ({ member }: HeroSecurityProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Matrix-like background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-green-500 whitespace-nowrap animate-float"
            style={{
              left: `${i * 5}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>

      {/* Hexagon grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='70' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.5v35L30 70 0 52.5v-35z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 70px',
      }} />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Shield visual */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-up stagger-1">
            <div className="relative flex items-center justify-center">
              {/* Rotating rings */}
              <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 animate-spin-slow" style={{ animationDuration: '30s' }} />
              
              {/* Scanning line effect */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-500/20 animate-scan`} />
              </div>
              
              {/* Central shield */}
              <div className="relative group">
                <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-3xl ${member.iconBg} flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform rotate-45`}>
                  <Shield className="w-20 h-20 md:w-24 md:h-24 text-white -rotate-45" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute w-72 h-72 md:w-80 md:h-80 animate-spin-slow" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background glass border border-white/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-orange-400" />
                </div>
              </div>
              <div className="absolute w-72 h-72 md:w-80 md:h-80 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-background glass border border-white/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-amber-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-2">
              <Shield className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-muted-foreground">Security Expert</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              <span className="block text-foreground">{member.name.split(' ')[0]}</span>
              {member.name.split(' ').slice(1).map((word, i) => (
                <span key={i} className="block text-gradient">{word}</span>
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
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-lg`}>
                  <a href={`mailto:${member.email}`}>
                    <Shield className="w-5 h-5" />
                    Secure Your Business
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-white/10 hover:bg-white/5 px-8 py-6 text-base">
                <a href={`mailto:${member.email}?subject=Security Assessment`}>
                  <Calendar className="w-5 h-5" />
                  Request Assessment
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-orange-500/30 hover:bg-white/5 transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-orange-500/30 hover:bg-white/5 transition-all hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecurity;
