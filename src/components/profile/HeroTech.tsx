import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, Terminal, Code2, Braces, Database, Server, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroTechProps {
  member: TeamMember;
}

const HeroTech = ({ member }: HeroTechProps) => {
  // Floating code snippets
  const codeSnippets = [
    "const deploy = async () => {",
    "function optimize(data) {",
    "export default App;",
    "npm run build",
    "git push origin main",
    "docker compose up",
    "<Component />",
    "useState()",
  ];

  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Matrix-like falling code background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-green-500 whitespace-nowrap"
            style={{
              left: `${i * 8}%`,
              animation: `matrix-fall ${8 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Array(30).fill(0).map((_, j) => (
              <div key={j} style={{ opacity: 1 - (j * 0.03) }}>
                {Math.random() > 0.5 ? '1' : '0'}
                {Math.random() > 0.5 ? '0' : '1'}
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(34, 197, 94, 0.1) 50px, rgba(34, 197, 94, 0.1) 51px),
                          repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(34, 197, 94, 0.1) 50px, rgba(34, 197, 94, 0.1) 51px)`
      }} />

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs px-3 py-1.5 glass rounded border border-green-500/20 text-green-400/60 animate-float"
            style={{
              left: `${5 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className={`absolute top-1/4 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow`} />
      <div className={`absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-cyan-500 to-green-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow`} style={{ animationDelay: '2s' }} />

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[15%] glass p-3 rounded-xl border border-green-500/20 animate-float shadow-xl" style={{ animationDelay: '0.5s' }}>
          <Code2 className="w-5 h-5 text-green-400" />
        </div>
        <div className="absolute bottom-1/3 left-[8%] glass p-3 rounded-xl border border-emerald-500/20 animate-float shadow-xl" style={{ animationDelay: '1.5s' }}>
          <Database className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="absolute top-1/3 left-[12%] glass p-3 rounded-xl border border-cyan-500/20 animate-float shadow-xl" style={{ animationDelay: '2.5s' }}>
          <Server className="w-5 h-5 text-cyan-400" />
        </div>
        <div className="absolute bottom-1/4 right-[10%] glass p-3 rounded-xl border border-teal-500/20 animate-float shadow-xl" style={{ animationDelay: '3s' }}>
          <Braces className="w-5 h-5 text-teal-400" />
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Terminal style visual */}
          <div className="order-1 opacity-0 animate-fade-up stagger-1">
            <div className="relative">
              {/* Multi-layered glow */}
              <div className={`absolute -inset-8 bg-gradient-to-br ${member.gradient} blur-3xl opacity-20`} />
              <div className={`absolute -inset-4 bg-gradient-to-br from-green-500/30 to-emerald-500/20 blur-2xl opacity-30`} />
              
              {/* Terminal window */}
              <div className="relative glass rounded-2xl border border-green-500/20 overflow-hidden shadow-2xl shadow-green-500/10">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-lg shadow-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-lg shadow-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-lg shadow-green-500/30" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    ~/portfolio
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-mono">connected</span>
                  </div>
                </div>
                
                {/* Terminal content with typing effect simulation */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <span className="text-green-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-muted-foreground">whoami</span>
                  </div>
                  <div className="pl-4 text-foreground opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    <span className="text-green-400">{member.name}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                    <span className="text-green-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-muted-foreground">cat role.txt</span>
                  </div>
                  <div className="pl-4 text-foreground opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                    <span className="text-yellow-400">{member.role}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 opacity-0 animate-fade-up" style={{ animationDelay: '1s' }}>
                    <span className="text-green-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-muted-foreground">cat skills.json</span>
                  </div>
                  <div className="pl-4 text-cyan-400 opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                    <span className="text-white/60">{"{"}</span>
                    <br />
                    <span className="pl-4">"skills": [</span>
                    <br />
                    {member.skills.slice(0, 4).map((s, i) => (
                      <span key={i} className="pl-8 block">
                        <span className="text-green-400">"{s}"</span>
                        {i < 3 && <span className="text-white/60">,</span>}
                      </span>
                    ))}
                    <span className="pl-4">]</span>
                    <br />
                    <span className="text-white/60">{"}"}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: '1.4s' }}>
                    <span className="text-green-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="animate-pulse text-white">▋</span>
                  </div>
                </div>

                {/* Terminal stats bar */}
                <div className="px-4 py-2 border-t border-white/10 bg-white/5 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-green-400" />
                      99.9% uptime
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-cyan-400" />
                      50k+ lines
                    </span>
                  </div>
                  <span className="text-green-400">zsh</span>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 border border-green-500/20 shadow-xl opacity-0 animate-fade-up stagger-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Projects</p>
                    <p className="font-bold font-mono">100+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 border border-cyan-500/20 shadow-xl opacity-0 animate-fade-up stagger-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Server className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Commits</p>
                    <p className="font-bold font-mono">10k+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-green-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Available</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-sm font-mono text-muted-foreground">&lt;Developer /&gt;</span>
            </div>

            {/* Name with code styling */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              <span className="text-muted-foreground font-mono text-lg block mb-2">
                <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> <span className="text-white/60">=</span>
              </span>
              <span 
                className="text-gradient block"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 40px rgba(16, 185, 129, 0.4))',
                  textShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
                }}
              >
                {member.name.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
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
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-green-500/20 font-mono hover:shadow-green-500/30 transition-all`}>
                  <a href={`mailto:${member.email}`}>
                    <Terminal className="w-5 h-5" />
                    npm run collaborate
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 px-8 py-6 text-base font-mono transition-all">
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
            <span className="text-xs uppercase tracking-widest font-mono text-green-400/60">scroll.down()</span>
            <div className="w-6 h-10 rounded-full border-2 border-green-500/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-green-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Matrix fall animation */}
      <style>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </section>
  );
};

export default HeroTech;
