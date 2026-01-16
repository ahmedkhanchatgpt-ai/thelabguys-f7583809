import AnimatedCounter from "./AnimatedCounter";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { end: 50, suffix: "+", label: "Projects Completed", prefix: "" },
  { end: 30, suffix: "+", label: "Happy Clients", prefix: "" },
  { end: 5, suffix: "+", label: "Years Experience", prefix: "" },
  { end: 98, suffix: "%", label: "Client Satisfaction", prefix: "" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="relative rounded-2xl md:rounded-3xl glass overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
            <div className="absolute inset-0 noise" />
            
            <div className="relative py-12 md:py-16 px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <ScrollReveal key={stat.label} delay={index * 150}>
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      label={stat.label}
                      duration={2000 + index * 200}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
