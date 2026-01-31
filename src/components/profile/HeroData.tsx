import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, BarChart3, TrendingUp, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroDataProps {
  member: TeamMember;
}

const HeroData = ({ member }: HeroDataProps) => {
  // Fake chart data for visualization
  const chartBars = [35, 58, 45, 72, 63, 88, 75, 92, 68, 85, 78, 95];

  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
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
          {/* Left - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6 opacity-0 animate-fade-up stagger-1">
              <BarChart3 className="w-4 h-4 text-green-400" />
              <span className="text-sm text-muted-foreground">Data Analyst</span>
            </div>

            {/* Name with data styling */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              {member.name.split(' ').map((word, i) => (
                <span 
                  key={i} 
                  className={`block ${i > 0 ? 'text-gradient' : ''}`}
                  style={i > 0 ? { 
                    filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 40px rgba(16, 185, 129, 0.4))' 
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
                    <MessageCircle className="w-5 h-5" />
                    Analyze Your Data
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-white/10 hover:bg-white/5 px-8 py-6 text-base">
                <a href={`mailto:${member.email}?subject=Data Consultation`}>
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-green-500/30 hover:bg-white/5 transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-green-500/30 hover:bg-white/5 transition-all hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right - Data visualization */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-up stagger-1">
            <div className="relative">
              {/* Glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${member.gradient} blur-3xl opacity-20`} />
              
              {/* Chart container */}
              <div className="relative glass rounded-3xl border border-white/10 p-8 overflow-hidden">
                {/* Chart header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Performance Metrics</h3>
                    <p className="text-2xl font-display font-bold text-gradient">+127.4%</p>
                  </div>
                  <div className="flex gap-2">
                    <div className={`w-10 h-10 rounded-lg ${member.iconBg} flex items-center justify-center`}>
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Bar chart */}
                <div className="flex items-end gap-2 h-48 mb-4">
                  {chartBars.map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 ${member.iconBg} rounded-t-lg transition-all hover:opacity-80`}
                      style={{
                        height: `${height}%`,
                        animation: `fadeUp 0.5s ease-out forwards`,
                        animationDelay: `${i * 0.05}s`,
                        opacity: 0,
                      }}
                    />
                  ))}
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
                  <div className="text-center">
                    <PieChart className="w-6 h-6 mx-auto mb-2 text-green-400" />
                    <p className="text-lg font-bold">98%</p>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-6 h-6 mx-auto mb-2 text-emerald-400" />
                    <p className="text-lg font-bold">2.5M</p>
                    <p className="text-xs text-muted-foreground">Data Points</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-teal-400" />
                    <p className="text-lg font-bold">40%</p>
                    <p className="text-xs text-muted-foreground">Cost Saved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroData;
