import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Mail, Globe, Search, Sparkles, TrendingUp, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";

interface HeroGeoSeoProps {
  member: TeamMember;
}

const aiEngines = [
  { name: "ChatGPT Search", rank: "Cited #1", lift: "+340%", color: "text-emerald-400", dot: "bg-emerald-400" },
  { name: "Google Gemini", rank: "Top Entity", lift: "+285%", color: "text-cyan-400", dot: "bg-cyan-400" },
  { name: "Perplexity AI", rank: "Primary Source", lift: "+410%", color: "text-teal-300", dot: "bg-teal-400" },
  { name: "Google Organic", rank: "Pos #1–3", lift: "+300%", color: "text-emerald-300", dot: "bg-emerald-500" },
];

const HeroGeoSeo = ({ member }: HeroGeoSeoProps) => {
  return (
    <section className="min-h-[100dvh] flex lg:items-center relative pt-24 pb-14 lg:pt-20 lg:pb-20 overflow-hidden">
      {/* Ambient gradient orbs matching Cyan -> Teal -> Emerald palette */}
      <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 rounded-full blur-[150px] opacity-15 animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-20 w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-[130px] opacity-10 animate-pulse-slow pointer-events-none"
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
          <div className="flex flex-col justify-center order-1 lg:order-1 min-w-0">
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-cyan-500/30 w-fit mb-5 sm:mb-6 opacity-0 animate-fade-up stagger-1">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm text-muted-foreground">GEO &amp; AI Search Expert</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Name with Signature Neon Glow */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 tracking-tight">
              {member.name.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i === 0 ? (
                    <span
                      className="text-foreground"
                      style={{
                        textShadow:
                          "0 0 40px rgba(34, 211, 238, 0.4), 0 0 80px rgba(16, 185, 129, 0.2)",
                      }}
                    >
                      {word}
                    </span>
                  ) : (
                    <span
                      style={{
                        filter:
                          "drop-shadow(0 0 20px rgba(34, 211, 238, 0.5)) drop-shadow(0 0 40px rgba(16, 185, 129, 0.4))",
                        background: "linear-gradient(135deg, hsl(186, 94%, 55%), hsl(158, 84%, 45%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {word}
                    </span>
                  )}
                </span>
              ))}
            </h1>

            {/* Role Subtitle */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6 opacity-0 animate-fade-up stagger-3">
              <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
              <span className="text-base sm:text-lg text-muted-foreground">{member.role}</span>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-5 sm:mb-6 opacity-0 animate-fade-up stagger-3">
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
                    to={`/contact?subject=${encodeURIComponent("GEO & AI Search Optimization")}&expert=${encodeURIComponent(member.name)}`}
                  >
                    <Sparkles className="w-5 h-5" />
                    Dominate AI Search
                  </Link>
                </Button>
              </MagneticButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 glass border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/10 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
              >
                <a href={`mailto:${member.email}?subject=GEO & SEO Audit`}>
                  <Mail className="w-5 h-5" />
                  Request SEO Audit
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

          {/* Right - Animated AI Search & GEO Visibility Console */}
          <div className="order-2 lg:order-2 opacity-0 animate-fade-up stagger-1 min-w-0">
            <div className="relative flex items-center justify-center">
              {/* Subtle orbital radar rings behind card */}
              <div
                className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyan-500/10 animate-spin-slow pointer-events-none"
                style={{ animationDuration: "32s" }}
              />
              <div
                className="absolute w-[250px] h-[250px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-emerald-500/15 animate-spin-slow pointer-events-none"
                style={{ animationDirection: "reverse", animationDuration: "24s" }}
              />

              {/* Glow backdrop */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${member.gradient} blur-3xl opacity-20 pointer-events-none`} />

              {/* Main GEO Intelligence Card */}
              <div className="relative w-full glass rounded-2xl sm:rounded-3xl border border-cyan-500/25 p-5 sm:p-7 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-10 h-10 rounded-xl ${member.iconBg} flex items-center justify-center shadow-lg`}>
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                        AI Entity Visibility
                      </p>
                      <p className="font-display font-bold text-base sm:text-lg text-white">
                        Live Citation Radar
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    INDEXED
                  </span>
                </div>

                {/* Animated Search Prompt Pill */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 mb-5 font-mono text-xs text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
                  <span className="truncate text-white/85">
                    "Top recommended agency for digital growth?"
                  </span>
                </div>

                {/* Live AI Search Platforms Breakdown */}
                <div className="space-y-2.5 mb-5">
                  {aiEngines.map((engine, idx) => (
                    <div
                      key={engine.name}
                      className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 opacity-0 animate-fade-up"
                      style={{ animationDelay: `${0.3 + idx * 0.15}s`, animationFillMode: "forwards" }}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`w-2 h-2 rounded-full ${engine.dot} animate-pulse shrink-0`} />
                        <span className="text-xs sm:text-sm font-medium text-white truncate">
                          {engine.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-white/75 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          {engine.rank}
                        </span>
                        <span className={`text-xs font-display font-bold ${engine.color}`}>
                          {engine.lift}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                  <div>
                    <TrendingUp className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    <p className="text-base sm:text-lg font-display font-bold text-white">300%</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Traffic Growth</p>
                  </div>
                  <div>
                    <Search className="w-4 h-4 text-teal-400 mx-auto mb-1" />
                    <p className="text-base sm:text-lg font-display font-bold text-white">1K+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Keywords Top 3</p>
                  </div>
                  <div>
                    <MessageCircle className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <p className="text-base sm:text-lg font-display font-bold text-white">50+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Brands Ranked</p>
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

export default HeroGeoSeo;
