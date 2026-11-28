import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Film, Play, Pause, Palette, Clapperboard, Wand2, Volume2, VolumeX, Maximize2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import MagneticButton from "@/components/MagneticButton";
import type { TeamMember } from "@/data/teamMembers";
import { useEffect, useState } from "react";

interface ReelClip {
  id: string;
  title: string;
  category: string;
  duration: string;
  durationSeconds: number;
  views: string;
  gradient: string;
  description: string;
  embedUrl?: string;
}

const REEL_CLIPS: ReelClip[] = [
  {
    id: "master-2024",
    title: "2024 Master Showreel — Cinematic & VFX",
    category: "Brand Commercial & Motion",
    duration: "02:45",
    durationSeconds: 165,
    views: "10M+ Views",
    gradient: "from-purple-600 via-fuchsia-500 to-pink-500",
    description: "High-retention pacing, custom After Effects 3D camera choreography, sound design, and DaVinci film grading.",
  },
  {
    id: "viral-shorts",
    title: "Short-Form Retention Engine (TikTok / Reels)",
    category: "Social Growth Edits",
    duration: "01:18",
    durationSeconds: 78,
    views: "4.8M Views",
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    description: "Hook engineering in the first 1.5 seconds, kinetic typography, and dynamic audio-reactive transitions.",
  },
  {
    id: "saas-motion",
    title: "3D Product Launch & UI Motion Suite",
    category: "Motion Design",
    duration: "01:52",
    durationSeconds: 112,
    views: "2.1M Views",
    gradient: "from-amber-500 via-pink-500 to-purple-600",
    description: "Cinema 4D compositing and sleek dark-mode SaaS launch trailers engineered for high conversion.",
  },
];

interface HeroVideoMotionProps {
  member: TeamMember;
}

const HeroVideoMotion = ({ member }: HeroVideoMotionProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeClip, setActiveClip] = useState<ReelClip>(REEL_CLIPS[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [playTime, setPlayTime] = useState(0);

  useEffect(() => {
    if (!isLightboxOpen || !isPlaying || activeClip.embedUrl) return;
    const timer = setInterval(() => {
      setPlayTime((prev) => (prev + 1 >= activeClip.durationSeconds ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isLightboxOpen, isPlaying, activeClip]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const openShowreel = () => {
    setPlayTime(0);
    setIsPlaying(true);
    setIsLightboxOpen(true);
  };

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
              {/* Rotating orbital rings with refined visibility */}
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

              {/* Central Play / Cinema Lens Orb (clickable to open showreel modal) */}
              <button
                type="button"
                onClick={openShowreel}
                aria-label="Open 2024 Video Showreel"
                className="relative group focus:outline-none"
              >
                <div className={`absolute inset-0 ${member.iconBg} blur-3xl opacity-55 group-hover:opacity-85 transition-opacity duration-500 scale-150`} />
                <div className={`relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full ${member.iconBg} p-[3px] shadow-[0_0_60px_-10px_rgba(217,70,239,0.55)] group-hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-white/25`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/80 via-fuchsia-600/75 to-pink-500/85 flex items-center justify-center relative overflow-hidden">
                    {/* Inner specular glass arc */}
                    <div className="absolute top-2 left-1/4 right-1/4 h-1/4 rounded-full bg-white/20 blur-md pointer-events-none" />
                    {/* Subtle inner lens ring */}
                    <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/20 pointer-events-none" />
                    <Play
                      className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white fill-white/95 ml-1.5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.2}
                    />
                  </div>
                </div>
              </button>

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
                type="button"
                onClick={openShowreel}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 glass border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 text-purple-400" />
                Watch Showreel
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

      {/* Interactive Video Showreel Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-[#080810]/95 border border-purple-500/30 backdrop-blur-2xl overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_0_80px_rgba(168,85,247,0.3)]">
          <DialogHeader className="px-5 sm:px-6 pt-5 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 mb-1">
              <Film className="w-3.5 h-3.5" />
              <span>{activeClip.category}</span>
            </div>
            <DialogTitle className="font-display text-lg sm:text-2xl text-white pr-8">
              {activeClip.title}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
              {activeClip.description}
            </DialogDescription>
          </DialogHeader>

          <div className="relative aspect-video bg-black overflow-hidden">
            {activeClip.embedUrl ? (
              <iframe
                src={activeClip.embedUrl}
                title={activeClip.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-8 select-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${activeClip.gradient} opacity-35`} />
                <div className="absolute inset-0 noise opacity-25" />

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/80">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-rose-500 animate-pulse" : "bg-amber-400"}`} />
                    {isPlaying ? "REEL PREVIEW PLAYING" : "PAUSED"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md">
                    4K • 60FPS • {activeClip.views}
                  </span>
                </div>

                <div className="relative z-10 flex-1 flex items-center justify-center my-4">
                  <div className="flex items-end justify-center gap-1.5 sm:gap-2 h-28 sm:h-40 w-full max-w-xl px-4">
                    {[35, 65, 45, 90, 70, 100, 55, 85, 75, 95, 40, 80, 90, 60, 85, 50, 70, 95, 55, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-full bg-gradient-to-t from-purple-400/70 via-pink-400/90 to-white shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all duration-300"
                        style={{
                          height: isPlaying ? `${h}%` : "20%",
                          animation: isPlaying
                            ? `equalizer ${0.8 + (i % 5) * 0.14}s ease-in-out infinite alternate`
                            : "none",
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 space-y-2.5 bg-black/60 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10">
                  <div
                    role="slider"
                    aria-label="Seek timeline"
                    aria-valuemin={0}
                    aria-valuemax={activeClip.durationSeconds}
                    aria-valuenow={playTime}
                    tabIndex={0}
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                      setPlayTime(Math.floor(ratio * activeClip.durationSeconds));
                    }}
                    className="h-1.5 w-full bg-white/15 rounded-full cursor-pointer overflow-hidden"
                  >
                    <div
                      className={`h-full bg-gradient-to-r ${activeClip.gradient} transition-all duration-300`}
                      style={{ width: `${(playTime / activeClip.durationSeconds) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsPlaying((p) => !p)}
                        aria-label={isPlaying ? "Pause reel" : "Play reel"}
                        className="w-9 h-9 rounded-full bg-white text-purple-700 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMuted((m) => !m)}
                        aria-label={isMuted ? "Unmute" : "Mute"}
                        className="w-8 h-8 rounded-full bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="text-xs font-mono text-white/80 tabular-nums">
                        {formatTime(playTime)} / {activeClip.duration}
                      </span>
                    </div>

                    <Link
                      to={`/contact?subject=${encodeURIComponent(`Video Inquiry: ${activeClip.title}`)}&expert=${encodeURIComponent(member.name)}`}
                      onClick={() => setIsLightboxOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity"
                    >
                      Book Similar Edit
                      <Maximize2 className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-5 bg-white/[0.02] border-t border-white/10">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-mono mb-3">
              Select Showreel Chapter
            </p>
            <div className="grid sm:grid-cols-3 gap-2.5">
              {REEL_CLIPS.map((clip) => {
                const selected = clip.id === activeClip.id;
                return (
                  <button
                    key={clip.id}
                    type="button"
                    onClick={() => {
                      setActiveClip(clip);
                      setPlayTime(0);
                      setIsPlaying(true);
                    }}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      selected
                        ? "bg-purple-500/15 border-purple-500/50 text-white"
                        : "glass border-white/10 text-muted-foreground hover:text-white hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-purple-300">{clip.category}</span>
                      <span>{clip.duration}</span>
                    </div>
                    <p className="text-xs font-semibold line-clamp-1">{clip.title}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroVideoMotion;
