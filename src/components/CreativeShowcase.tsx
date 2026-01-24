import { Palette, Film, Camera, Layers, Sparkles } from "lucide-react";

interface CreativeShowcaseProps {
  gradient: string;
  iconBg: string;
}

const CreativeShowcase = ({ gradient, iconBg }: CreativeShowcaseProps) => {
  const showcaseItems = [
    { title: "Brand Identity", category: "Design", icon: Palette },
    { title: "Motion Graphics", category: "Animation", icon: Sparkles },
    { title: "Video Production", category: "Film", icon: Film },
    { title: "Photo Editing", category: "Photography", icon: Camera },
    { title: "Social Content", category: "Marketing", icon: Layers },
    { title: "Visual Effects", category: "VFX", icon: Sparkles },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${gradient} rounded-full blur-[150px] opacity-10`} />
      <div className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br ${gradient} rounded-full blur-[150px] opacity-10`} />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className={`h-px w-12 bg-gradient-to-r ${gradient}`} />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Portfolio</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Creative <span className="text-gradient">Showcase</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A glimpse into the diverse range of creative work spanning multiple disciplines
          </p>
        </div>

        {/* Bento grid showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            const isLarge = index === 0 || index === 3;
            
            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl glass border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer ${
                  isLarge ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'
                } opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Noise texture */}
                <div className="absolute inset-0 noise opacity-30" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.category}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-gradient transition-all">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* View all work CTA */}
        <div className="mt-12 text-center opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground">
            Want to see more? <span className="text-purple-400 font-medium cursor-pointer hover:underline">View full portfolio →</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;
