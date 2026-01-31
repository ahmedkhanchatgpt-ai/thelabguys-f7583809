import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, BarChart3, TrendingUp, PieChart, Activity, Database, LineChart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroDataProps {
  member: TeamMember;
}

const HeroData = ({ member }: HeroDataProps) => {
  // Animated chart data
  const chartBars = [35, 58, 45, 72, 63, 88, 75, 92, 68, 85, 78, 95];
  const linePoints = [20, 45, 35, 60, 50, 75, 65, 85, 70, 90, 80, 95];

  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-400/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Floating data icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[15%] glass p-3 rounded-xl border border-green-500/20 animate-float shadow-xl" style={{ animationDelay: '0.5s' }}>
          <BarChart3 className="w-5 h-5 text-green-400" />
        </div>
        <div className="absolute bottom-1/3 left-[8%] glass p-3 rounded-xl border border-emerald-500/20 animate-float shadow-xl" style={{ animationDelay: '1.5s' }}>
          <PieChart className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="absolute top-1/3 left-[12%] glass p-3 rounded-xl border border-teal-500/20 animate-float shadow-xl" style={{ animationDelay: '2.5s' }}>
          <Activity className="w-5 h-5 text-teal-400" />
        </div>
        <div className="absolute bottom-1/4 right-[10%] glass p-3 rounded-xl border border-cyan-500/20 animate-float shadow-xl" style={{ animationDelay: '3s' }}>
          <Database className="w-5 h-5 text-cyan-400" />
        </div>
      </div>

      {/* Flowing numbers background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-green-500 whitespace-nowrap"
            style={{
              left: `${i * 12}%`,
              animation: `data-flow ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Array(50).fill(0).map((_, j) => (
              <div key={j}>
                {(Math.random() * 1000).toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>

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
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-green-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Live Data</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <BarChart3 className="w-4 h-4 text-green-400" />
              <span className="text-sm text-muted-foreground">Data Analyst</span>
            </div>

            {/* Name with data styling */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
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

            {/* Stats-like role display */}
            <div className="flex items-center gap-6 mb-6 opacity-0 animate-fade-up stagger-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{member.role}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <Zap className="w-3 h-3 text-green-400" />
                <span className="text-xs text-green-400 font-medium">Real-time</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-medium mb-6 opacity-0 animate-fade-up stagger-3">
              <span className="text-green-400">{"{"}</span>
              {member.tagline}
              <span className="text-green-400">{"}"}</span>
            </p>

            {/* Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4">
              {member.fullBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-5">
              <MagneticButton>
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl shadow-green-500/20 hover:shadow-green-500/30 transition-all`}>
                  <a href={`mailto:${member.email}`}>
                    <LineChart className="w-5 h-5" />
                    Analyze Your Data
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 px-8 py-6 text-base transition-all">
                <a href={`mailto:${member.email}?subject=Data Consultation`}>
                  <Calendar className="w-5 h-5" />
                  Book Consultation
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
            </div>
          </div>

          {/* Right - Data visualization */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-up stagger-1">
            <div className="relative">
              {/* Multi-layered glow */}
              <div className={`absolute -inset-8 bg-gradient-to-br ${member.gradient} blur-3xl opacity-20`} />
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/30 to-emerald-500/20 blur-2xl opacity-30" />
              
              {/* Chart container */}
              <div className="relative glass rounded-3xl border border-green-500/20 p-8 overflow-hidden shadow-2xl shadow-green-500/10">
                {/* Chart header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Performance Metrics</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-3xl font-display font-bold" style={{
                        background: 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(160, 84%, 39%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}>+127.4%</p>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className={`w-12 h-12 rounded-xl ${member.iconBg} flex items-center justify-center shadow-lg`}>
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Live indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-mono">LIVE</span>
                </div>
                
                {/* Bar chart with line overlay */}
                <div className="relative h-52 mb-4">
                  {/* Bar chart */}
                  <div className="absolute inset-0 flex items-end gap-2">
                    {chartBars.map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${member.iconBg} rounded-t-lg transition-all hover:opacity-80 relative group`}
                        style={{
                          height: `${height}%`,
                          animation: `grow-up 0.8s ease-out forwards`,
                          animationDelay: `${i * 0.08}s`,
                          opacity: 0,
                          transform: 'scaleY(0)',
                          transformOrigin: 'bottom',
                        }}
                      >
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background glass px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                          {height}%
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Line chart overlay */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={linePoints.map((p, i) => `${(i / (linePoints.length - 1)) * 100},${100 - p}`).join(' ')}
                      style={{
                        strokeDasharray: 200,
                        strokeDashoffset: 200,
                        animation: 'draw-line 2s ease-out forwards 0.5s',
                      }}
                    />
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(142, 76%, 36%)" />
                        <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Chart labels */}
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
                
                {/* Additional stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                  <div className="text-center group cursor-default">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PieChart className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-xl font-bold">98%</p>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                  <div className="text-center group cursor-default">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Database className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-xl font-bold">2.5M</p>
                    <p className="text-xs text-muted-foreground">Data Points</p>
                  </div>
                  <div className="text-center group cursor-default">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5 text-teal-400" />
                    </div>
                    <p className="text-xl font-bold">40%</p>
                    <p className="text-xs text-muted-foreground">Cost Saved</p>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 border border-green-500/20 shadow-xl opacity-0 animate-fade-up stagger-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-xs text-muted-foreground">Processing</p>
                    <p className="font-bold text-sm">1.2k/sec</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 border border-emerald-500/20 shadow-xl opacity-0 animate-fade-up stagger-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-xs text-muted-foreground">Insights</p>
                    <p className="font-bold text-sm">Real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest text-green-400/60">Explore Insights</span>
            <div className="w-6 h-10 rounded-full border-2 border-green-500/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-green-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes data-flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes grow-up {
          from { opacity: 0; transform: scaleY(0); }
          to { opacity: 1; transform: scaleY(1); }
        }
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroData;
