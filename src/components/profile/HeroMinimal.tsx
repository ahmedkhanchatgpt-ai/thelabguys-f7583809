import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroMinimalProps {
  member: TeamMember;
}

const HeroMinimal = ({ member }: HeroMinimalProps) => {
  return (
    <section className="min-h-[100dvh] flex lg:items-center relative pt-24 pb-14 lg:pt-20 lg:pb-20 overflow-hidden">
      {/* Subtle dynamic ambient background */}
      <div 
        className={`absolute top-1/4 -left-20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-br ${member.gradient} rounded-full blur-[140px] sm:blur-[180px] opacity-[0.10] animate-pulse-slow pointer-events-none`} 
      />
      <div 
        className={`absolute bottom-1/4 -right-20 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gradient-to-br ${member.gradient} rounded-full blur-[120px] sm:blur-[160px] opacity-[0.08] animate-pulse-slow pointer-events-none`} 
        style={{ animationDelay: '3s' }} 
      />

      {/* Understated geometric backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] border border-white/[0.02] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] border border-white/[0.03] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 lg:mb-0 opacity-0 animate-fade-up group lg:absolute lg:top-8 lg:left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        {/* Centered clean layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar with refined glow */}
          <div className="relative mb-8 sm:mb-10 opacity-0 animate-fade-up">
            <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-35 scale-[1.8]`} />
            <div className={`absolute inset-0 ${member.iconBg} blur-xl opacity-25 scale-125`} />
            <div className={`relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full ${member.iconBg} flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-display font-bold shadow-2xl group hover:scale-105 transition-transform duration-300 ring-4 ring-white/10`}>
              {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>

          {/* Status / Role badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/15 mb-6 sm:mb-8 opacity-0 animate-fade-up stagger-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm text-foreground/85 font-medium">{member.role}</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 opacity-0 animate-fade-up stagger-2 tracking-tight">
            {member.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-6 opacity-0 animate-fade-up stagger-3">
            {member.tagline}
          </p>

          {/* Gradient divider */}
          <div className={`w-28 h-0.5 bg-gradient-to-r ${member.gradient} mb-8 opacity-0 animate-fade-up stagger-3 rounded-full`} />

          {/* Bio */}
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4 max-w-2xl px-2">
            {member.fullBio}
          </p>

          {/* Stat pills */}
          {member.stats && member.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10 opacity-0 animate-fade-up stagger-4">
              {member.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-foreground group-hover:text-gradient transition-colors mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto opacity-0 animate-fade-up stagger-5">
            <MagneticButton className="w-full sm:w-auto">
              <Button asChild size="lg" className={`w-full sm:w-auto gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-xl shadow-purple-500/20`}>
                <a href={`mailto:${member.email}`}>
                  <MessageCircle className="w-5 h-5" />
                  Start a Project
                </a>
              </Button>
            </MagneticButton>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto gap-2 glass border-white/20 hover:border-white/40 hover:bg-white/5 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base">
              <a href={`mailto:${member.email}?subject=Project Inquiry`}>
                <Mail className="w-5 h-5" />
                Send a Message
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-10 opacity-0 animate-fade-up stagger-5">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110 group" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110 group" aria-label="X (Twitter)">
                <svg className="w-5 h-5 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110 group" aria-label="GitHub">
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroMinimal;
