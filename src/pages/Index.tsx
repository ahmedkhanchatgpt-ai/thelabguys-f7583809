import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import { teamMembers } from "@/data/teamMembers";
import { ArrowDown, Sparkles, Zap, Shield, TrendingUp, Palette, Brain } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const iconAnimations = [
    "animate-twinkle",      // Sparkles - twinkle effect
    "animate-zap",          // Zap - quick shake
    "animate-shield-pulse", // Shield - breathing pulse
    "animate-chart-rise",   // TrendingUp - rising motion
    "animate-palette-spin", // Palette - slow rotation
    "animate-brain-think",  // Brain - thinking pulse
  ];

  const icons = [
    <Sparkles key="1" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    <Zap key="2" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    <Shield key="3" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    <TrendingUp key="4" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    <Palette key="5" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
    <Brain key="6" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Themed animated background for entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 rounded-full blur-[160px] opacity-25 animate-pulse-slow" />
        <div className="absolute bottom-[5%] right-[5%] w-[650px] h-[650px] bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-[180px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-[200px] opacity-[0.12] animate-pulse-slow" style={{ animationDelay: '4s' }} />

        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }} />

        {[...Array(18)].map((_, i) => {
          const colors = ['bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-fuchsia-400'];
          const shadows = ['rgba(168,85,247,0.7)', 'rgba(236,72,153,0.7)', 'rgba(34,211,238,0.7)', 'rgba(217,70,239,0.7)'];
          const idx = i % colors.length;
          return (
            <div
              key={`p-${i}`}
              className={`absolute w-1 h-1 rounded-full ${colors[idx]} animate-float`}
              style={{
                left: `${5 + (i * 11) % 90}%`,
                top: `${5 + (i * 17) % 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 4)}s`,
                boxShadow: `0 0 8px ${shadows[idx]}`,
                opacity: 0.7,
              }}
            />
          );
        })}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-purple-500/[0.06] rounded-full" style={{ animation: 'spin 60s linear infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-pink-500/[0.07] rounded-full" style={{ animation: 'spin 45s linear infinite reverse' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/[0.06] rounded-full" style={{ animation: 'spin 35s linear infinite' }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-white/10 mb-6 md:mb-8 opacity-0 animate-fade-up">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse" />
              <span className="text-xs md:text-sm text-muted-foreground">Digital Experts Collective</span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 opacity-0 animate-fade-up stagger-1">
              We Are{" "}
              <span className="relative inline-block">
                <span className="text-gradient">The Lab Guys</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C70 2 230 2 298 8"
                    stroke="url(#underline-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-draw-line"
                    style={{
                      strokeDasharray: 300,
                      strokeDashoffset: 300,
                    }}
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="hsl(270 95% 65%)" />
                      <stop offset="50%" stopColor="hsl(200 100% 60%)" />
                      <stop offset="100%" stopColor="hsl(340 95% 60%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 px-2 opacity-0 animate-fade-up stagger-2">
              {teamMembers.length} digital experts. One mission. Transforming ideas into
              extraordinary digital experiences.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-16 opacity-0 animate-fade-up stagger-3">
              <MagneticButton
                onClick={() => {
                  document.getElementById('team')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] text-white text-sm md:text-base font-medium hover:bg-[position:100%_0] transition-all duration-500 shadow-glow hover:shadow-[0_0_60px_-10px_hsl(270_95%_65%/0.6)]"
                strength={0.4}
              >
                Meet the Team
                <ArrowDown className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-y-1 transition-transform" />
              </MagneticButton>
            </div>

            {/* Floating expertise icons */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-6 flex-wrap opacity-0 animate-fade-up stagger-4">
              {teamMembers.map((member, i) => (
                <div
                  key={member.id}
                  className={`w-11 h-11 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${member.iconBg} flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  title={member.role}
                >
                  <div className={iconAnimations[i]}>
                    {icons[i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              The <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto px-2">
              Click on any profile to discover their expertise and connect.
            </p>
          </ScrollReveal>

          {/* Team Grid - Single Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 100} direction="up">
                <TeamMemberCard member={member} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="container mx-auto">
          <ScrollReveal direction="scale" duration={800}>
            <div className="relative rounded-2xl md:rounded-3xl glass overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
              <div className="absolute inset-0 noise" />
              
              <div className="relative text-center py-12 md:py-20 px-4 md:px-6">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                  Ready to <span className="text-gradient">Collaborate?</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-6 md:mb-10 px-2">
                  Whether you need SEO, development, security, trading insights, or
                  creative design — let's build something amazing together.
                </p>
                <MagneticButton
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-sm md:text-base font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_15px_rgba(168,85,247,0.4),0_0_80px_30px_rgba(236,72,153,0.3)] shadow-[0_0_15px_2px_rgba(168,85,247,0.3)]"
                  strength={0.3}
                >
                  Start a Conversation
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
