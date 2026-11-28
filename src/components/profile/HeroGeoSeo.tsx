import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Mail, Globe, Search, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroGeoSeoProps {
  member: TeamMember;
}

const HeroGeoSeo = ({ member }: HeroGeoSeoProps) => {
  return (
    <section className="min-h-[100dvh] flex lg:items-center relative pt-24 pb-14 lg:pt-20 lg:pb-20 overflow-hidden">
      {/* Ambient gradient orbs matching Cyan -> Teal -> Emerald palette */}
      <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-20 w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow pointer-events-none"
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
          {/* Left - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-cyan-500/30 w-fit mb-5 sm:mb-6 opacity-0 animate-fade-up stagger-1">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm text-muted-foreground">GEO &amp; SEO Expert</span>
            </div>

            {/* Name with Signature Neon Glow */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              <span
                className="block text-foreground"
                style={{
                  textShadow:
                    "0 0 40px rgba(34, 211, 238, 0.4), 0 0 80px rgba(34, 211, 238, 0.2)",
                }}
              >
                {member.name.split(" ")[0]}
              </span>
              {member.name
                .split(" ")
                .slice(1)
                .map((word, i) => (
                  <span
                    key={i}
                    className="block"
                    style={{
                      filter:
                        "drop-shadow(0 0 20px rgba(34, 211, 238, 0.5)) drop-shadow(0 0 40px rgba(16, 185, 129, 0.4))",
                      background: "linear-gradient(135deg, hsl(186, 94%, 52%), hsl(160, 84%, 45%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {word}
                  </span>
                ))}
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
                  className={`w-full sm:w-auto gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-xl shadow-cyan-500/20`}
                >
                  <Link
                    to={`/contact?subject=${encodeURIComponent("GEO & SEO Strategy")}&expert=${encodeURIComponent(member.name)}`}
                  >
                    <Search className="w-5 h-5" />
                    Boost Your Visibility
                  </Link>
                </Button>
              </MagneticButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 glass border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/10 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
              >
                <a href={`mailto:${member.email}?subject=SEO & GEO Inquiry`}>
                  <Mail className="w-5 h-5" />
                  Request Audit
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
                  className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-11 h-11 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all hover:scale-110 group"
                >
                  <svg className="w-5 h-5 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right - Clean Orbital Search/GEO Visual matching Joshua & Altaf */}
          <div className="order-2 lg:order-2 opacity-0 animate-fade-up stagger-1 py-6 lg:py-0">
            <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
              {/* Rotating rings */}
              <div
                className="absolute w-[250px] h-[250px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-cyan-500/10 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-emerald-500/15 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "25s" }}
              />
              <div
                className="absolute w-[190px] h-[190px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] rounded-full border border-teal-500/10 animate-spin-slow"
                style={{ animationDuration: "20s" }}
              />

              {/* Central Globe Emblem */}
              <div className="relative group">
                <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-45 group-hover:opacity-65 transition-opacity scale-150`} />
                <div className={`relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full ${member.iconBg} flex items-center justify-center shadow-2xl shadow-cyan-500/20 group-hover:scale-105 transition-transform`}>
                  <Globe className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" strokeWidth={1.3} />
                </div>
              </div>

              {/* Orbiting field icons */}
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow"
                style={{ animationDuration: "15s" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background glass border border-cyan-500/30 flex items-center justify-center shadow-xl">
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                </div>
              </div>
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background glass border border-emerald-500/30 flex items-center justify-center shadow-xl">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
              </div>
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] animate-spin-slow"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background glass border border-teal-500/30 flex items-center justify-center shadow-xl">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGeoSeo;
