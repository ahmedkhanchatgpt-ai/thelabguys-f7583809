import { forwardRef, useEffect, useRef, useState } from "react";
import type { ProcessStep } from "@/data/teamMembers";

interface ProcessTimelineProps {
  steps: ProcessStep[];
  gradient: string;
  iconBg: string;
}

const ProcessTimeline = forwardRef<HTMLDivElement, ProcessTimelineProps>(
  ({ steps, gradient, iconBg }, ref) => {
    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger the appearance of each step
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [steps]);

    return (
      <div ref={containerRef} className="relative">
        {/* Connecting line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:hidden" />

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.step}
                className={`relative flex items-center gap-6 md:gap-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Mobile layout */}
                <div className="md:hidden flex items-start gap-6">
                  {/* Step number */}
                  <div className={`relative z-10 w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-white font-display font-bold text-lg shadow-lg flex-shrink-0`}>
                    {step.step}
                    {/* Pulse animation */}
                    {isVisible && (
                      <div className={`absolute inset-0 rounded-full ${iconBg} animate-ping opacity-20`} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass rounded-2xl p-5 border border-white/10 flex-1 hover:border-white/20 transition-colors">
                    <h4 className="font-display text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8 w-full items-center">
                  {/* Left content or spacer */}
                  <div className={`${isEven ? "text-right pr-8" : ""}`}>
                    {isEven && (
                      <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 inline-block text-left">
                        <h4 className="font-display text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center step number (absolute positioned) */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-white font-display font-bold text-lg shadow-lg`}>
                      {step.step}
                      {isVisible && (
                        <div className={`absolute inset-0 rounded-full ${iconBg} animate-ping opacity-20`} />
                      )}
                    </div>
                  </div>

                  {/* Right content or spacer */}
                  <div className={`${!isEven ? "pl-8" : ""}`}>
                    {!isEven && (
                      <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 inline-block">
                        <h4 className="font-display text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

ProcessTimeline.displayName = "ProcessTimeline";

export default ProcessTimeline;
