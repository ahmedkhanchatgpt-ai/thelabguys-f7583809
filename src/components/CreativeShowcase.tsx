import { Star, Quote, TrendingUp, Award, Clock, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CreativeShowcaseProps {
  gradient: string;
  iconBg: string;
}

// Animated counter component
const AnimatedNumber = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(value * eased));
      if (step >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const CreativeShowcase = ({ gradient, iconBg }: CreativeShowcaseProps) => {
  const stats = [
    { value: 500, suffix: "+", label: "Videos Delivered", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { value: 100, suffix: "+", label: "Global Clients", icon: Users, color: "from-cyan-500 to-blue-500" },
    { value: 5, suffix: "+", label: "Years Experience", icon: Award, color: "from-amber-500 to-orange-500" },
    { value: 48, suffix: "h", label: "Fast Turnaround", icon: Clock, color: "from-emerald-500 to-teal-500" },
  ];

  const testimonials = [
    {
      quote: "His editing skills are next level and he is a very fast worker. He is better than a lot of people on here. Highly recommend!",
      project: "TikTok Content Package",
      rating: 5,
      location: "📍 London, UK",
      client: "Social Media Agency",
    },
    {
      quote: "Outstanding work! The motion graphics exceeded our expectations. Very responsive, patient, and delivered ahead of schedule. Already booked for our next campaign.",
      project: "Brand Commercial",
      rating: 5,
      location: "📍 Singapore",
      client: "Marketing Director",
    },
    {
      quote: "Exceptional quality and professionalism. The cinematic editing transformed our raw footage into something truly remarkable. A true creative partner.",
      project: "Documentary Series",
      rating: 5,
      location: "📍 New York, USA",
      client: "Production Studio",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Simplified background */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br ${gradient} rounded-full blur-[200px] opacity-[0.06]`} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className={`h-px w-12 bg-gradient-to-r ${gradient}`} />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">Track Record</span>
            <div className={`h-px w-12 bg-gradient-to-l ${gradient}`} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Proven <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>Results</span>
          </h2>
        </div>

        {/* Stats Grid - More professional with icons and animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Value */}
                  <p className={`font-display text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} delay={index * 100} />
                  </p>
                  
                  {/* Label */}
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className={`h-px w-12 bg-gradient-to-r ${gradient}`} />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">Client Reviews</span>
            <div className={`h-px w-12 bg-gradient-to-l ${gradient}`} />
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold">
            What Clients <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>Say</span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-px bg-gradient-to-br ${gradient} rounded-[1.75rem] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative glass rounded-3xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Header with quote icon and stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center shadow-lg`}>
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                
                {/* Quote text */}
                <p className="text-base leading-relaxed mb-6 text-foreground/90 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                {/* Footer with project info */}
                <div className="pt-5 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-display font-semibold text-sm">{testimonial.project}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{testimonial.client}</span>
                    <span className="text-purple-400">{testimonial.location}</span>
                  </div>
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
