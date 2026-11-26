const tools = [
  { name: "React & Next.js", accent: "group-hover:text-cyan-400 group-hover:border-cyan-500/40" },
  { name: "TypeScript", accent: "group-hover:text-blue-400 group-hover:border-blue-500/40" },
  { name: "Premiere Pro", accent: "group-hover:text-purple-400 group-hover:border-purple-500/40" },
  { name: "After Effects", accent: "group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/40" },
  { name: "DaVinci Resolve", accent: "group-hover:text-pink-400 group-hover:border-pink-500/40" },
  { name: "OpenAI & LLMs", accent: "group-hover:text-emerald-400 group-hover:border-emerald-500/40" },
  { name: "Python & ML", accent: "group-hover:text-amber-400 group-hover:border-amber-500/40" },
  { name: "Cloudflare & Sec", accent: "group-hover:text-orange-400 group-hover:border-orange-500/40" },
  { name: "Google Analytics", accent: "group-hover:text-yellow-400 group-hover:border-yellow-500/40" },
  { name: "Tailwind CSS", accent: "group-hover:text-sky-400 group-hover:border-sky-500/40" },
];

const TechMarquee = () => {
  // Duplicate items 3x for seamless infinite loop matching -33.333% keyframe
  const track = [...tools, ...tools, ...tools];

  return (
    <section aria-label="Core Technologies & Platforms" className="py-6 sm:py-8 relative overflow-hidden border-y border-white/[0.06] bg-white/[0.01]">
      <div className="container mx-auto px-4 mb-3 sm:mb-4 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-muted-foreground/70 font-medium">
          Powered by Industry-Standard Stack &amp; Platforms
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max gap-3 sm:gap-4 animate-marquee hover:[animation-play-state:paused]">
          {track.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="group flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass border border-white/10 transition-all duration-300 cursor-default hover:bg-white/[0.05]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-current transition-colors" />
              <span
                className={`font-display text-xs sm:text-sm font-medium text-muted-foreground/80 transition-colors whitespace-nowrap ${tool.accent}`}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
