import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Calendar, MessageCircle, Play, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroCreativeProps {
  member: TeamMember;
}

const HeroCreative = ({ member }: HeroCreativeProps) => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className={`absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-20 animate-pulse-slow`} />
      <div className={`absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-15 animate-pulse-slow`} style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />

      <div className="container mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left - Large visual */}
          <div className="lg:col-span-3 order-1 opacity-0 animate-fade-up">
            <div className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-30`} />
              <div className="absolute inset-0 noise opacity-40" />
              
              {/* Animated bars - like audio visualizer */}
              <div className="absolute inset-0 flex items-end justify-center gap-2 p-8">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 md:w-6 ${member.iconBg} rounded-t-full opacity-60 group-hover:opacity-80 transition-all`}
                    style={{
                      height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 30}%`,
                      animation: `float ${2 + i * 0.1}s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${member.iconBg} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                </div>
              </div>
              
              {/* Initials watermark */}
              <div className="absolute bottom-6 right-6 text-8xl font-display font-bold text-white/10">
                {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-2 order-2 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6 opacity-0 animate-fade-up stagger-1">
              <Palette className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
              <span className="text-sm text-muted-foreground">Creative Director</span>
            </div>

            {/* Name with creative typography */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 leading-tight">
              {member.name.split(' ').map((word, i) => (
                <span key={i} className={`block ${i > 0 ? 'text-gradient' : ''}`} style={{ marginLeft: i > 0 ? `${i * 20}px` : 0 }}>
                  {word}
                </span>
              ))}
            </h1>

            {/* Role */}
            <p className="text-lg text-muted-foreground mb-4 opacity-0 animate-fade-up stagger-2 italic">
              {member.role}
            </p>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-light mb-6 opacity-0 animate-fade-up stagger-3">
              "{member.tagline}"
            </p>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4">
              {member.fullBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-5">
              <MagneticButton>
                <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-lg`}>
                  <a href={`mailto:${member.email}`}>
                    <MessageCircle className="w-5 h-5" />
                    Let's Create
                  </a>
                </Button>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110">
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

export default HeroCreative;
