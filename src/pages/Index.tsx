import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import ContactModal from "@/components/ContactModal";
import { teamMembers } from "@/data/teamMembers";
import { ArrowDown, Sparkles, Zap, Shield, TrendingUp, Palette, Brain } from "lucide-react";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);
  
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <Header onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 md:px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-white/10 mb-6 md:mb-8 opacity-0 animate-fade-up">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse" />
              <span className="text-xs md:text-sm text-muted-foreground">Digital Experts Collective</span>
            </div>

            {/* Main heading - Unique stacked design */}
            <div className="relative mb-6 md:mb-8 opacity-0 animate-fade-up stagger-1">
              {/* "We Are" - smaller, offset text */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-2 md:mb-3">
                <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-muted-foreground/50" />
                <span className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] text-muted-foreground uppercase">
                  We Are
                </span>
                <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-muted-foreground/50" />
              </div>
              
              {/* "THE LAB GUYS" - Bold, letter-spaced with individual styling */}
              <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                <span className="inline-flex items-baseline">
                  {/* T */}
                  <span className="text-foreground hover:text-primary transition-colors duration-300 cursor-default">T</span>
                  {/* H */}
                  <span className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-default">H</span>
                  {/* E */}
                  <span className="text-foreground/60 hover:text-primary transition-colors duration-300 cursor-default">E</span>
                </span>
                <span className="mx-2 sm:mx-3 md:mx-4" />
                <span className="inline-flex items-baseline relative">
                  {/* L */}
                  <span className="bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-cyan-400 hover:to-purple-500 transition-all duration-500 cursor-default">L</span>
                  {/* A */}
                  <span className="bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent hover:from-orange-400 hover:via-purple-500 hover:to-pink-400 transition-all duration-500 cursor-default">A</span>
                  {/* B */}
                  <span className="bg-gradient-to-br from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent hover:from-yellow-400 hover:via-pink-500 hover:to-red-400 transition-all duration-500 cursor-default">B</span>
                </span>
                <span className="mx-2 sm:mx-3 md:mx-4" />
                <span className="inline-flex items-baseline">
                  {/* G */}
                  <span className="text-foreground hover:text-primary transition-colors duration-300 cursor-default">G</span>
                  {/* U */}
                  <span className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-default">U</span>
                  {/* Y */}
                  <span className="text-foreground/60 hover:text-primary transition-colors duration-300 cursor-default">Y</span>
                  {/* S */}
                  <span className="text-foreground/40 hover:text-primary transition-colors duration-300 cursor-default">S</span>
                </span>
              </h1>
              
              {/* Decorative element */}
              <div className="flex justify-center mt-4 md:mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <div className="w-12 md:w-24 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-12 md:w-24 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 px-2 opacity-0 animate-fade-up stagger-2">
              {teamMembers.length} digital experts. One mission. Transforming ideas into
              extraordinary digital experiences.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-16 opacity-0 animate-fade-up stagger-3">
              <button
                onClick={() => {
                  document.getElementById('team')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] text-white text-sm md:text-base font-medium hover:bg-[position:100%_0] transition-all duration-500 shadow-glow"
              >
                Meet the Team
                <ArrowDown className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-y-1 transition-transform" />
              </button>
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
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 opacity-0 animate-fade-up">
              The <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto px-2 opacity-0 animate-fade-up stagger-1">
              Click on any profile to discover their expertise and connect.
            </p>
          </div>

          {/* Team Grid - Single Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="container mx-auto">
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
              <button
                onClick={() => setContactOpen(true)}
                className="group relative inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-sm md:text-base font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_15px_rgba(168,85,247,0.4),0_0_80px_30px_rgba(236,72,153,0.3)] shadow-[0_0_15px_2px_rgba(168,85,247,0.3)]"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
