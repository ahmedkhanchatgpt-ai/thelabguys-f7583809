import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, ArrowRight, Download, Calendar, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTeamMember, teamMembers } from "@/data/teamMembers";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import AnimatedStatCard from "@/components/AnimatedStatCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServiceCard from "@/components/ServiceCard";

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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6 z-20"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Status badge */}
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6 opacity-0 animate-fade-up stagger-1`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${member.iconBg} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${member.iconBg}`}></span>
                </span>
                <span className="text-sm text-muted-foreground">Available for projects</span>
              </div>

              {/* Name with dramatic typography */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 opacity-0 animate-fade-up stagger-2 leading-[0.9] tracking-tight">
                {member.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {i === 0 ? (
                      <span className="text-foreground">{word}</span>
                    ) : (
                      <span className="text-gradient">{word}</span>
                    )}
                  </span>
                ))}
              </h1>

              {/* Role badge */}
              <div className={`inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-up stagger-2`}>
                <div className={`h-px w-8 bg-gradient-to-r ${member.gradient}`} />
                <span className="text-lg font-medium text-muted-foreground">{member.role}</span>
              </div>

              {/* Tagline */}
              <p className="text-2xl md:text-3xl font-display font-medium mb-6 opacity-0 animate-fade-up stagger-3">
                {member.tagline}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-3 max-w-xl">
                {member.fullBio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
                <MagneticButton>
                  <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base shadow-lg`}>
                    <a href={`mailto:${member.email}`}>
                      <MessageCircle className="w-5 h-5" />
                      Start a Project
                    </a>
                  </Button>
                </MagneticButton>
                <Button asChild variant="outline" size="lg" className="gap-2 glass border-white/10 hover:bg-white/5 px-8 py-6 text-base">
                  <a href={`mailto:${member.email}?subject=Schedule a Call`}>
                    <Calendar className="w-5 h-5" />
                    Schedule Call
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-8 opacity-0 animate-fade-up stagger-5">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="opacity-0 animate-fade-up stagger-2 order-1 lg:order-2">
              <div className="relative group cursor-pointer max-w-lg mx-auto">
                {/* Rotating gradient border on hover */}
                <div className="absolute -inset-1 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_60deg,var(--tw-gradient-stops),transparent_300deg,transparent_360deg)] ${member.gradient} animate-border-spin`} />
                </div>
                
                {/* Gradient glow */}
                <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${member.gradient} blur-xl opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl group-hover:-inset-4`} />
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${member.gradient}`} />
                
                {/* Content container */}
                <div className="relative aspect-square rounded-3xl bg-background/95 backdrop-blur-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20 transition-opacity duration-500 group-hover:opacity-30`} />
                  <div className="absolute inset-0 noise opacity-30" />
                  
                  {/* Animated orbital rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%] h-[90%] rounded-full border border-white/10 animate-spin-slow" />
                    <div className="absolute w-[70%] h-[70%] rounded-full border border-white/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
                    <div className="absolute w-[50%] h-[50%] rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '30s' }} />
                    
                    {/* Orbiting dots */}
                    <div className="absolute w-[90%] h-[90%] animate-spin-slow" style={{ animationDuration: '15s' }}>
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${member.iconBg}`} />
                    </div>
                    <div className="absolute w-[70%] h-[70%] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${member.iconBg} opacity-70`} />
                    </div>
                  </div>

                  {/* Main orb */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`absolute w-48 h-48 md:w-56 md:h-56 ${member.iconBg} rounded-full blur-3xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:w-64 group-hover:h-64`} />
                    <div
                      className={`relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full ${member.iconBg} flex items-center justify-center text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_100px_rgba(255,255,255,0.3)] group-hover:scale-110`}
                    >
                      {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5 hidden md:block">
            <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
                <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <div className={`inline-flex items-center gap-2 mb-4`}>
              <div className={`h-px w-12 bg-gradient-to-r ${member.gradient}`} />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">What I Offer</span>
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
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Expertise</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Technical <span className="text-gradient">Skills</span>
            </h2>
          </div>

          {/* Skills as flowing tags */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {member.skills.map((skill, index) => (
              <div
                key={skill}
                className={`group relative px-6 py-4 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <div className="relative flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${member.iconBg} group-hover:scale-150 transition-transform`} />
                  <span className="font-display font-medium text-lg">{skill}</span>
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
              <span className="text-sm uppercase tracking-widest text-muted-foreground">How I Work</span>
              <div className={`h-px w-12 bg-gradient-to-l ${member.gradient}`} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology refined through years of experience to ensure consistent, high-quality outcomes.
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
          <div className="relative rounded-[2rem] overflow-hidden">
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
