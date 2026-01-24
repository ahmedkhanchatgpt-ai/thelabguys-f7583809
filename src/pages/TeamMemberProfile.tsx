import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTeamMember, teamMembers } from "@/data/teamMembers";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServiceCard from "@/components/ServiceCard";
import CreativeShowcase from "@/components/CreativeShowcase";
import {
  HeroMinimal,
  HeroTech,
  HeroCreative,
  HeroSecurity,
  HeroData,
  HeroFuturistic,
} from "@/components/profile";

const TeamMemberProfile = () => {
  const { id } = useParams<{ id: string }>();
  const member = id ? getTeamMember(id) : undefined;

  if (!member) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = teamMembers.findIndex((m) => m.id === member.id);
  const nextMember = teamMembers[(currentIndex + 1) % teamMembers.length];
  const prevMember =
    teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length];

  // Select hero component based on layout variant
  const renderHero = () => {
    switch (member.layoutVariant) {
      case "minimal":
        return <HeroMinimal member={member} />;
      case "tech":
        return <HeroTech member={member} />;
      case "creative":
        return <HeroCreative member={member} />;
      case "security":
        return <HeroSecurity member={member} />;
      case "data":
        return <HeroData member={member} />;
      case "futuristic":
        return <HeroFuturistic member={member} />;
      default:
        return <HeroMinimal member={member} />;
    }
  };

  // Different section styles based on variant
  const getSectionStyle = () => {
    switch (member.layoutVariant) {
      case "tech":
        return "font-mono";
      case "creative":
        return "italic";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br ${member.gradient} opacity-[0.05] rounded-full blur-3xl`} />
        <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${member.gradient} opacity-[0.03] rounded-full blur-3xl animate-pulse-slow`} />
        
        {/* Floating particles */}
        <div className={`absolute top-1/4 right-1/4 w-2 h-2 rounded-full ${member.iconBg} animate-float opacity-60`} />
        <div className={`absolute top-3/4 left-1/3 w-1.5 h-1.5 rounded-full ${member.iconBg} animate-float opacity-40`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 right-1/3 w-1 h-1 rounded-full ${member.iconBg} animate-float opacity-50`} style={{ animationDelay: '2s' }} />
      </div>

      <Header />

      {/* Dynamic Hero Section */}
      {renderHero()}

      {/* Creative Showcase - Only for creative profiles */}
      {member.layoutVariant === "creative" && (
        <CreativeShowcase gradient={member.gradient} iconBg={member.iconBg} />
      )}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <div className={`inline-flex items-center gap-2 mb-4`}>
              <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
              <span className={`text-sm uppercase tracking-widest text-muted-foreground ${getSectionStyle()}`}>What I Offer</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Services & <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive expertise tailored to your unique needs. Each service is designed to deliver measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {member.services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                gradient={member.gradient}
                iconBg={member.iconBg}
                email={member.email}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <div className={`inline-flex items-center gap-2 mb-4`}>
              <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
              <span className={`text-sm uppercase tracking-widest text-muted-foreground ${getSectionStyle()}`}>Expertise</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Technical <span className="text-gradient">Skills</span>
            </h2>
          </div>

          {/* Skills with variant-specific styling */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {member.skills.map((skill, index) => (
              <div
                key={skill}
                className={`group relative px-6 py-4 ${member.layoutVariant === 'tech' ? 'rounded-lg' : member.layoutVariant === 'creative' ? 'rounded-full' : 'rounded-2xl'} glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 ${member.layoutVariant === 'tech' ? 'rounded-lg' : member.layoutVariant === 'creative' ? 'rounded-full' : 'rounded-2xl'} transition-opacity`} />
                <div className="relative flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${member.iconBg} group-hover:scale-150 transition-transform`} />
                  <span className={`font-display font-medium text-lg ${member.layoutVariant === 'tech' ? 'font-mono text-base' : ''}`}>{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 mb-4 justify-center`}>
              <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
              <span className={`text-sm uppercase tracking-widest text-muted-foreground ${getSectionStyle()}`}>How I Work</span>
              <div className={`h-px w-12 bg-gradient-to-l ${member.gradient}`} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology refined through experience to ensure consistent, high-quality outcomes.
            </p>
          </div>

          <ProcessTimeline
            steps={member.process}
            gradient={member.gradient}
            iconBg={member.iconBg}
          />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto max-w-5xl px-6">
          <div className={`relative ${member.layoutVariant === 'tech' ? 'rounded-2xl' : member.layoutVariant === 'creative' ? 'rounded-[3rem]' : 'rounded-[2rem]'} overflow-hidden`}>
            {/* Background with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`} />
            <div className="absolute inset-0 glass" />
            <div className="absolute inset-0 noise opacity-20" />
            
            {/* Decorative elements */}
            <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-30`} />
            <div className={`absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-20`} />
            
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to <span className="text-gradient">Collaborate?</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Let's discuss how I can help bring your vision to life. I'm always excited to take on new challenges and create something extraordinary together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <Button asChild size="lg" className={`gap-3 ${member.iconBg} border-0 hover:opacity-90 text-white px-10 py-7 text-lg shadow-xl`}>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-5 h-5" />
                      Get in Touch
                    </a>
                  </Button>
                </MagneticButton>
              </div>

              {/* Quick contact info */}
              <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <a href={`mailto:${member.email}`} className="hover:text-foreground transition-colors">
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other members */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-10">
            Meet Other Experts
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6">
            <Link
              to={`/team/${prevMember.id}`}
              className="group flex items-center gap-5 glass rounded-2xl px-6 py-6 border border-white/10 hover:border-white/20 transition-all flex-1 hover:-translate-x-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${prevMember.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform text-white font-display font-bold text-lg shadow-lg`}>
                {prevMember.initials || prevMember.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Previous Expert
                </p>
                <p className="font-display font-semibold text-xl mb-1">
                  {prevMember.name}
                </p>
                <p className="text-sm text-muted-foreground">{prevMember.role}</p>
              </div>
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              to={`/team/${nextMember.id}`}
              className="group flex items-center gap-5 glass rounded-2xl px-6 py-6 border border-white/10 hover:border-white/20 transition-all flex-row-reverse flex-1 hover:translate-x-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${nextMember.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform text-white font-display font-bold text-lg shadow-lg`}>
                {nextMember.initials || nextMember.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Next Expert
                </p>
                <p className="font-display font-semibold text-xl mb-1">
                  {nextMember.name}
                </p>
                <p className="text-sm text-muted-foreground">{nextMember.role}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMemberProfile;
