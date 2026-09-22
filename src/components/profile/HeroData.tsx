import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Github, Mail, BarChart3, TrendingUp, PieChart, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroDataProps {
  member: TeamMember;
}

const HeroData = ({ member }: HeroDataProps) => {
  const chartBars = [35, 58, 45, 72, 63, 88, 75, 92, 68, 85, 78, 95];

  return (
    <section className="min-h-screen flex lg:items-center relative pt-32 pb-20 lg:pt-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-1">
            {/* Name with glow */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-1 tracking-tight">
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
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up stagger-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">{member.role}</span>
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
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-green-500/20`}>
                  <a href={`mailto:${member.email}`}>
                    <BarChart3 className="w-5 h-5" />
                    Analyze Your Data
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 px-8 py-6 text-base">
                <a href={`mailto:${member.email}?subject=Data Inquiry`}>
                  <Mail className="w-5 h-5" />
                  Get in Touch
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
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all hover:scale-110 group">
                  <svg className="w-5 h-5 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-teal-500/50 hover:bg-teal-500/10 transition-all hover:scale-110 group">
                  <Github className="w-5 h-5 group-hover:text-teal-400 transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Right - Data visualization */}
          <div className="order-2 lg:order-2 opacity-0 animate-fade-up stagger-1">
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-br ${member.gradient} blur-2xl opacity-20`} />
              
              {/* Chart container */}
              <div className="relative glass rounded-3xl border border-green-500/20 p-8 overflow-hidden shadow-2xl">
                {/* Chart header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Performance Metrics</h3>
                    <p className="text-3xl font-display font-bold text-green-400">+127.4%</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${member.iconBg} flex items-center justify-center shadow-lg`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Bar chart */}
                <div className="relative h-44 mb-4">
                  <div className="absolute inset-0 flex items-end gap-2">
                    {chartBars.map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${member.iconBg} rounded-t-lg transition-all hover:opacity-80`}
                        style={{
                          height: `${height}%`,
                          animation: `grow-up 0.8s ease-out forwards`,
                          animationDelay: `${i * 0.08}s`,
                          opacity: 0,
                          transform: 'scaleY(0)',
                          transformOrigin: 'bottom',
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Chart labels */}
                <div className="flex justify-between text-xs text-muted-foreground mb-8">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <PieChart className="w-5 h-5 text-green-400 mx-auto mb-2" />
                    <p className="text-xl font-bold">98%</p>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                    <p className="text-xl font-bold">2.5M</p>
                    <p className="text-xs text-muted-foreground">Data Points</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-teal-400 mx-auto mb-2" />
                    <p className="text-xl font-bold">40%</p>
                    <p className="text-xs text-muted-foreground">Cost Saved</p>
                  </div>
                </div>
              </div>
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

      <style>{`
        @keyframes grow-up {
          from { opacity: 0; transform: scaleY(0); }
          to { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroData;
