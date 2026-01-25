import { Star, Quote } from "lucide-react";

interface CreativeShowcaseProps {
  gradient: string;
  iconBg: string;
}

const CreativeShowcase = ({ gradient, iconBg }: CreativeShowcaseProps) => {
  const stats = [
    { value: "100+", label: "Projects Completed", icon: "🎬" },
    { value: "50+", label: "Happy Clients", icon: "⭐" },
    { value: "5", label: "Years Experience", icon: "🏆" },
    { value: "24h", label: "Avg. Delivery", icon: "⚡" },
  ];

  const testimonials = [
    {
      quote: "His editing skills are next level and he is a very fast worker. He is better than a lot of people on here.",
      project: "20 TikTok Video Edits",
      rating: 5,
      location: "United Kingdom",
    },
    {
      quote: "It was my first time working with you, and the experience was pleasant and fruitful. Very responsive and patient vendor. I am looking forward to more of your editing skills.",
      project: "Video Editing Project",
      rating: 5,
      location: "Singapore",
    },
    {
      quote: "Very professional.",
      project: "Video Create and Edit",
      rating: 5,
      location: "United States",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${gradient} rounded-full blur-[200px] opacity-10`} />

      <div className="container mx-auto max-w-7xl px-6">
        {/* Stats Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Track Record</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold">Proven Results</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <p className={`font-display text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
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
              
              {/* Project & Location */}
              <div className="pt-4 border-t border-white/10">
                <p className="font-display font-semibold text-sm">{testimonial.project}</p>
                <p className="text-xs text-muted-foreground mt-1">📍 {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;
