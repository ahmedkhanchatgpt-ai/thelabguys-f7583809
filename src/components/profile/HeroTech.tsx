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
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-cyan-500 to-green-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Terminal */}
          <div className="order-1 opacity-0 animate-fade-up stagger-1">
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-br ${member.gradient} blur-2xl opacity-20`} />
              
              {/* Terminal window */}
              <div className="relative glass rounded-2xl border border-green-500/20 overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    ~/portfolio
                  </span>
                </div>
                
                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    <span className="text-green-400">➜</span>
                    <span className="text-muted-foreground overflow-hidden whitespace-nowrap animate-typewriter" style={{ animationDelay: '0.3s' }}>whoami</span>
                  </div>
                  <div className="pl-4 text-foreground opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                    <span className="text-green-400 overflow-hidden whitespace-nowrap inline-block animate-typewriter" style={{ animationDelay: '0.9s' }}>{member.name}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 opacity-0 animate-fade-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                    <span className="text-green-400">➜</span>
                    <span className="text-muted-foreground overflow-hidden whitespace-nowrap animate-typewriter" style={{ animationDelay: '1.5s' }}>cat role.txt</span>
                  </div>
                  <div className="pl-4 text-foreground opacity-0 animate-fade-up" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                    <span className="text-yellow-400 overflow-hidden whitespace-nowrap inline-block animate-typewriter" style={{ animationDelay: '2.1s' }}>{member.role}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 opacity-0 animate-fade-up" style={{ animationDelay: '2.6s', animationFillMode: 'forwards' }}>
                    <span className="text-green-400">➜</span>
                    <span className="text-muted-foreground overflow-hidden whitespace-nowrap animate-typewriter" style={{ animationDelay: '2.7s' }}>cat skills.json</span>
                  </div>
                  <div className="pl-4 text-cyan-400 opacity-0 animate-fade-up" style={{ animationDelay: '3.2s', animationFillMode: 'forwards' }}>
                    <span className="overflow-hidden whitespace-nowrap inline-block animate-typewriter" style={{ animationDelay: '3.3s' }}>["{member.skills?.slice(0, 4).join('", "') || 'React", "TypeScript", "Node.js", "Next.js'}"]</span>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                    <span className="text-green-400">➜</span>
                    <span className="animate-blink text-white">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-green-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-2">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-sm font-mono text-muted-foreground">&lt;Developer /&gt;</span>
            </div>

            {/* Code-style intro */}
            <p className="font-mono text-sm text-muted-foreground mb-2 opacity-0 animate-fade-up stagger-2">
              <span className="text-purple-400">const</span> <span className="text-cyan-400">name</span> <span className="text-white/60">=</span>
            </p>

            {/* Name with glow */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              <span 
                className="block"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 40px rgba(16, 185, 129, 0.4))',
                  background: 'linear-gradient(135deg, hsl(280, 100%, 70%), hsl(320, 100%, 60%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                "{member.name}"
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-medium mb-6 opacity-0 animate-fade-up stagger-3 font-mono">
              <span className="text-green-400">// </span>
              <span className="text-muted-foreground">{member.tagline}</span>
            </p>

            {/* Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4">
              {member.fullBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-5">
              <MagneticButton>
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-green-500/20 font-mono`}>
                  <a href={`mailto:${member.email}`}>
                    <Terminal className="w-5 h-5" />
                    npm run collaborate
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 px-8 py-6 text-base font-mono">
                <a href={`mailto:${member.email}?subject=Schedule a Call`}>
                  <Calendar className="w-5 h-5" />
                  schedule()
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:bg-green-500/10 transition-all hover:scale-110 group">
                  <Linkedin className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all hover:scale-110 group">
                  <svg className="w-5 h-5 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all hover:scale-110 group">
                  <Github className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
                </a>
              )}
            </div>
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
