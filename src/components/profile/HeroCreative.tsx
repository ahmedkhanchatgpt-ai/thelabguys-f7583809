import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, MessageCircle, Play, Palette, Film, Sparkles, Layers, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroCreativeProps {
  member: TeamMember;
}

const HeroCreative = ({ member }: HeroCreativeProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Animated color blobs - more vibrant */}
      <div className={`absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 rounded-full blur-[150px] opacity-20 animate-pulse-slow`} />
      <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow`} style={{ animationDelay: '2s' }} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-violet-500 to-purple-600 rounded-full blur-[120px] opacity-10 animate-pulse-slow`} style={{ animationDelay: '4s' }} />
      
      {/* Floating design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Color swatches floating */}
        <div className="absolute top-20 left-[10%] w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-[15%] w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg animate-float opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-lg animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-[5%] w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg animate-float opacity-50" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 right-[8%] w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg animate-float opacity-40" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating icons */}
        <div className="absolute top-1/4 right-[20%] glass p-3 rounded-xl border border-white/10 animate-float shadow-xl" style={{ animationDelay: '0.5s' }}>
          <Film className="w-5 h-5 text-pink-400" />
        </div>
        <div className="absolute bottom-1/3 left-[8%] glass p-3 rounded-xl border border-white/10 animate-float shadow-xl" style={{ animationDelay: '2.5s' }}>
          <Palette className="w-5 h-5 text-purple-400" />
        </div>
        <div className="absolute top-2/3 right-[12%] glass p-3 rounded-xl border border-white/10 animate-float shadow-xl" style={{ animationDelay: '1.5s' }}>
          <Wand2 className="w-5 h-5 text-fuchsia-400" />
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.03] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.05] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.03] rounded-full" />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left - Stacked visual showcase */}
          <div className="lg:col-span-7 order-1 opacity-0 animate-fade-up">
            <div className="relative">
              {/* Main showcase card */}
              <div className="relative group cursor-pointer">
                {/* Glow effect */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${member.gradient} blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`} />
                
                {/* Main card */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  {/* Gradient background with mesh */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-40`} />
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                  }} />
                  <div className="absolute inset-0 noise opacity-30" />
                  
                  {/* Animated equalizer bars - more refined */}
                  <div className="absolute inset-0 flex items-end justify-center gap-1 md:gap-1.5 p-8 pb-16">
                    {[...Array(20)].map((_, i) => {
                      const heights = [35, 55, 45, 75, 60, 85, 50, 80, 70, 95, 40, 65, 80, 55, 70, 45, 60, 75, 50, 65];
                      return (
                        <div
                          key={i}
                          className="flex-1 max-w-3 rounded-full bg-gradient-to-t from-white/60 to-white group-hover:from-white/80 group-hover:to-white transition-all duration-500"
                          style={{
                            height: `${heights[i]}%`,
                            animation: `equalizer ${1.2 + (i % 4) * 0.2}s ease-in-out infinite alternate`,
                            animationDelay: `${i * 0.08}s`,
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Play button - more elegant */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative group/play cursor-pointer">
                      {/* Outer glow */}
                      <div className={`absolute inset-0 ${member.iconBg} blur-2xl opacity-40 scale-[1.8] group-hover/play:scale-[2.2] transition-transform duration-700`} />
                      {/* Ripple rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-[1.5] animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="absolute inset-0 rounded-full border border-white/20 scale-[2] animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
                      {/* Button */}
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-all duration-300`}>
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-purple-600 fill-purple-600 ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom info bar - more refined */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Featured Showreel</p>
                        <p className="text-white font-display font-semibold text-lg">2024 Demo Reel</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-emerald-400 text-xs font-medium">10M+ Views</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                          <Film className="w-3.5 h-3.5 text-white/80" />
                          <span className="text-white/90 text-sm font-medium">2:45</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating mini cards */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 w-36 md:w-44 glass rounded-2xl p-3 md:p-4 border border-white/10 shadow-2xl opacity-0 animate-fade-up stagger-3 z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl ${member.iconBg} flex items-center justify-center shadow-lg`}>
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Delivered</p>
                    <p className="font-display font-bold text-xl">500+</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 md:-right-6 w-40 md:w-48 glass rounded-2xl p-3 md:p-4 border border-white/10 shadow-2xl opacity-0 animate-fade-up stagger-4 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Total Views</p>
                    <p className="font-display font-bold text-xl">10M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-5 order-2 flex flex-col justify-center">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-purple-500/30 w-fit mb-6 opacity-0 animate-fade-up stagger-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Available for Projects</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-purple-400" />
                Senior Video Editor
              </span>
            </div>

            {/* Name - animated professional typography with glow */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-[1.1]">
              <span 
                className="block text-foreground opacity-0 animate-fade-up" 
                style={{ 
                  animationDelay: '0.1s',
                  textShadow: '0 0 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(168, 85, 247, 0.2)',
                }}
              >
                {"Muhammad".split('').map((char, i) => (
                  <span 
                    key={i} 
                    className="inline-block opacity-0 animate-fade-up hover:text-purple-400 transition-colors duration-200 cursor-default"
                    style={{ animationDelay: `${0.15 + i * 0.04}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span 
                className="block opacity-0 animate-fade-up"
                style={{ 
                  animationDelay: '0.5s',
                  filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))',
                }}
              >
                {"Ahmed Khan".split('').map((char, i) => (
                  <span 
                    key={i} 
                    className="inline-block opacity-0 animate-fade-up hover:scale-110 transition-transform duration-200 cursor-default"
                    style={{ 
                      animationDelay: `${0.55 + i * 0.03}s`,
                      background: `linear-gradient(135deg, hsl(280, 100%, 70%), hsl(320, 100%, 60%))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>

            {/* Role with icon */}
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up stagger-2">
              <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
              <span className="text-lg text-muted-foreground flex items-center gap-2">
                <Film className="w-4 h-4 text-purple-400" />
                {member.role}
              </span>
            </div>

            {/* Tagline - larger and more prominent */}
            <p className="text-xl md:text-2xl font-light mb-6 opacity-0 animate-fade-up stagger-3 leading-relaxed">
              <span className="text-purple-400">"</span>
              {member.tagline}
              <span className="text-purple-400">"</span>
            </p>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4">
              {member.fullBio}
            </p>

            {/* CTAs with gradient hover */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-5">
              <MagneticButton>
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-xl hover:shadow-purple-500/25 transition-all`}>
                  <a href={`mailto:${member.email}`}>
                    <MessageCircle className="w-5 h-5" />
                    Let's Create Magic
                  </a>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="gap-2 glass border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 px-8 py-6 text-base transition-all">
                <a href={`mailto:${member.email}?subject=Project Inquiry`}>
                  <Mail className="w-5 h-5" />
                  View Portfolio
                </a>
              </Button>
            </div>

            {/* Social Links with hover colors */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-110 group">
                  <Linkedin className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all hover:scale-110 group">
                  <svg className="w-5 h-5 group-hover:text-pink-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all hover:scale-110 group">
                  <Github className="w-5 h-5 group-hover:text-fuchsia-400 transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Explore Work</span>
            <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-purple-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCreative;
