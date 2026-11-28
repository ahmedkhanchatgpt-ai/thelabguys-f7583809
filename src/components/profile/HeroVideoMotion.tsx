import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Film, Play, Palette, Clapperboard, Wand2, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroVideoMotionProps {
  member: TeamMember;
}

const HeroVideoMotion = ({ member }: HeroVideoMotionProps) => {
  return (
    <section className="min-h-[100dvh] flex lg:items-center relative pt-24 pb-14 lg:pt-20 lg:pb-20 overflow-hidden">
      {/* Ambient gradient orbs matching Purple -> Fuchsia -> Pink palette */}
      <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-20 w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-[120px] opacity-10 animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 lg:mb-0 opacity-0 animate-fade-up group lg:absolute lg:-top-10 lg:left-6 z-20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Clean Orbital Motion/Cinema Visual matching Altaf & Joshua */}
          <div className="order-2 lg:order-1 opacity-0 animate-fade-up stagger-1 py-6 lg:py-0">
            <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
              {/* Rotating orbital rings */}
              <div
                className="absolute w-[250px] h-[250px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-purple-400/20 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-fuchsia-400/25 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "25s" }}
              />
              <div
                className="absolute w-[190px] h-[190px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] rounded-full border border-pink-400/15 animate-spin-slow"
                style={{ animationDuration: "20s" }}
              />

              {/* Subtle breathing sonar pulse around centerpiece */}
              <div
                className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border border-fuchsia-400/30 animate-ping pointer-events-none"
                style={{ animationDuration: "3.2s" }}
              />

              {/* Central Play / Cinema Lens Orb */}
              <div className="relative group">
                <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-55 group-hover:opacity-80 transition-opacity duration-500 scale-150`} />
                <div className={`relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full ${member.iconBg} p-[3px] shadow-[0_0_60px_-10px_rgba(217,70,239,0.55)] group-hover:scale-105 transition-all duration-300 ring-1 ring-white/25`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/80 via-fuchsia-600/75 to-pink-500/85 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-2 left-1/4 right-1/4 h-1/4 rounded-full bg-white/20 blur-md pointer-events-none" />
                    <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/20 pointer-events-none" />
                    <Play
                      className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white fill-white/95 ml-1.5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.2}
                    />
                  </div>
                </div>
              </div>

              {/* Orbiting Creative Field Icons with crisp glow */}
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow pointer-events-none"
                style={{ animationDuration: "15s" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0d0b16]/90 glass border border-purple-400/45 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.45)]">
                  <Clapperboard className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                </div>
              </div>
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow pointer-events-none"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0d0b16]/90 glass border border-pink-400/45 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.45)]">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />
                </div>
              </div>
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow pointer-events-none"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0d0b16]/90 glass border border-fuchsia-400/45 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.45)]">
                  <Wand2 className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-purple-500/30 w-fit mb-5 sm:mb-6 opacity-0 animate-fade-up stagger-2">
              <Film className="w-4 h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-muted-foreground">Creative Director</span>
              <div className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
            </div>

            {/* Name with Signature Neon Glow */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              <span
                className="block text-foreground"
                style={{
                  textShadow:
                    "0 0 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(168, 85, 247, 0.2)",
                }}
              >
                Muhammad
              </span>
              <span
                className="block"
                style={{
                  filter:
                    "drop-shadow(0 0 20px rgba(236, 72, 153, 0.5)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))",
                  background: "linear-gradient(135deg, hsl(280, 95%, 70%), hsl(330, 95%, 65%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ahmed Khan
              </span>
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
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 opacity-0 animate-fade-up stagger-4">
              {member.fullBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 opacity-0 animate-fade-up stagger-5">
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className={`w-full sm:w-auto gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-xl shadow-purple-500/20`}
                >
                  <Link
                    to={`/contact?subject=${encodeURIComponent("Video Editing & Motion Project")}&expert=${encodeURIComponent(member.name)}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start a Project
                  </Link>
                </Button>
              </MagneticButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 glass border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
              >
                <a href={`mailto:${member.email}?subject=Project Inquiry`}>
                  <Mail className="w-5 h-5" />
                  Send a Message
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all hover:scale-110 group"
                >
                  <svg className="w-5 h-5 group-hover:text-pink-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
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

export default HeroVideoMotion;
