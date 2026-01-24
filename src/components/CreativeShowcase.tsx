import { Star, Quote } from "lucide-react";

interface CreativeShowcaseProps {
  gradient: string;
  iconBg: string;
}

const CreativeShowcase = ({ gradient, iconBg }: CreativeShowcaseProps) => {
  const tools = [
    "Premiere Pro", "After Effects", "Photoshop", "Illustrator", 
    "DaVinci Resolve", "Figma", "Blender", "Cinema 4D"
  ];

  const testimonials = [
    {
      quote: "Exceptional work that exceeded our expectations. The attention to detail is remarkable.",
      author: "Creative Director",
      company: "Brand Agency",
    },
    {
      quote: "Transformed our vision into stunning visuals. Highly professional and creative.",
      author: "Marketing Lead",
      company: "Tech Startup",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${gradient} rounded-full blur-[200px] opacity-10`} />

      <div className="container mx-auto max-w-7xl px-6">
        {/* Tools Marquee */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Creative Toolkit</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold">Tools I Master</h3>
          </div>
          
          {/* Infinite scroll marquee */}
          <div className="relative overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-marquee">
              {[...tools, ...tools, ...tools].map((tool, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 px-8 py-4 rounded-full glass border border-white/10 hover:border-white/20 transition-colors cursor-default"
                >
                  <span className="font-display font-medium text-lg whitespace-nowrap">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}>
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote text */}
              <p className="text-lg md:text-xl font-light leading-relaxed mb-6 text-foreground/90">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${iconBg} opacity-50`} />
                <div>
                  <p className="font-display font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;
