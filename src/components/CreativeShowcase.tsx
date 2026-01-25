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
      quote: "His editing skills are next level and he is a very fast worker. He is better than a lot of people on here.",
      author: "TikTok Video Client",
      project: "20 TikTok Video Edits",
      rating: 5,
    },
    {
      quote: "It was my first time working with you, and the experience was pleasant and fruitful. Very responsive and patient vendor. I am looking forward to more of your editing skills.",
      author: "heyrama123",
      project: "Video Editing Project",
      rating: 5,
      location: "Singapore",
    },
    {
      quote: "Very professional.",
      author: "Repeat Client",
      project: "Video Create and Edit",
      rating: 5,
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
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Client Reviews</p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold">What Clients Say</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                <Quote className="w-5 h-5 text-white" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote text */}
              <p className="text-base md:text-lg font-light leading-relaxed mb-5 text-foreground/90">
                "{testimonial.quote}"
              </p>
              
              {/* Author & Project */}
              <div className="pt-4 border-t border-white/10">
                <p className="font-display font-semibold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.project}</p>
                {testimonial.location && (
                  <p className="text-xs text-muted-foreground/70 mt-0.5">📍 {testimonial.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;
