import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroTechProps {
  member: TeamMember;
}

const HeroTech = ({ member }: HeroTechProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20">
      {/* Code grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px),
                          repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)`
      }} />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Terminal style visual */}
          <div className="order-1 opacity-0 animate-fade-up stagger-1">
            <div className="relative">
              {/* Glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${member.gradient} blur-2xl opacity-20`} />
              
              {/* Terminal window */}
              <div className="relative glass rounded-2xl border border-white/10 overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">~/portfolio</span>
                </div>
                
                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-muted-foreground">whoami</span>
                  </div>
                  <div className="pl-4 text-foreground">{member.name}</div>
                  
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-muted-foreground">cat role.txt</span>
                  </div>
                  <div className="pl-4 text-foreground">{member.role}</div>
                  
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-muted-foreground">cat skills.json</span>
                  </div>
                  <div className="pl-4 text-cyan-400">
                    [{member.skills.slice(0, 4).map((s, i) => `"${s}"${i < 3 ? ", " : ""}`)}]
                  </div>
                  
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-green-400">➜</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6 opacity-0 animate-fade-up stagger-2">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-sm font-mono text-muted-foreground">&lt;Developer /&gt;</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              <span className="text-muted-foreground font-mono text-lg block mb-2">const name =</span>
              <span className="text-gradient">"{member.name}"</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-medium mb-6 opacity-0 animate-fade-up stagger-3 font-mono">
              <span className="text-muted-foreground">// </span>{member.tagline}
            </p>

            {/* Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4">
              {member.fullBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-5">
              <MagneticButton>
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-lg font-mono`}>
                  <a href={`mailto:${member.email}`}>
                    <MessageCircle className="w-5 h-5" />
                    npm run collaborate
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-white/10 hover:bg-white/5 px-8 py-6 text-base font-mono">
                <a href={`mailto:${member.email}?subject=Schedule a Call`}>
                  <Calendar className="w-5 h-5" />
                  schedule()
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
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

export default HeroTech;
