import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, ArrowRight, ExternalLink, Sparkles, Target, Zap, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { getTeamMember, teamMembers } from "@/data/teamMembers";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";

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

  // Generate expertise areas from skills
  const expertiseAreas = [
    { icon: Target, title: "Strategic Focus", description: `Specialized in ${member.skills[0]} and ${member.skills[1]}` },
    { icon: Zap, title: "Fast Delivery", description: "Quick turnaround without compromising quality" },
    { icon: Award, title: "Proven Results", description: "Track record of successful project deliveries" },
    { icon: Sparkles, title: "Innovation", description: `Cutting-edge solutions in ${member.role.toLowerCase()}` },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br ${member.gradient} opacity-[0.07] rounded-full blur-3xl`} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className={`absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-br ${member.gradient} opacity-[0.05] rounded-full blur-3xl animate-pulse-slow`} />
      </div>

      <Header />

      {/* Hero Section - Full viewport */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 opacity-0 animate-fade-up group absolute top-28 left-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6 opacity-0 animate-fade-up stagger-1`}>
                <span className={`w-2 h-2 rounded-full ${member.iconBg} animate-pulse`} />
                <span className="text-sm text-muted-foreground">{member.role}</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up stagger-2 leading-[0.9]">
                {member.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {i === 0 ? word : <span className="text-gradient">{word}</span>}
                  </span>
                ))}
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 opacity-0 animate-fade-up stagger-3 max-w-lg">
                {member.fullBio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
                <MagneticButton>
                  <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-8 py-6 text-base`}>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-5 h-5" />
                      Get in Touch
                    </a>
                  </Button>
                </MagneticButton>
                {member.linkedin && (
                  <Button asChild variant="outline" size="lg" className="gap-2 glass border-white/10 hover:bg-white/5 px-8 py-6 text-base">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                      Connect
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="opacity-0 animate-fade-up stagger-2 order-1 lg:order-2">
              <div className="relative group cursor-pointer max-w-md mx-auto lg:max-w-none">
                {/* Rotating gradient glow on hover */}
                <div className="absolute -inset-[4px] rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_60deg,var(--tw-gradient-stops),transparent_300deg,transparent_360deg)] ${member.gradient} group-hover:animate-border-spin`} />
                </div>
                
                {/* Gradient glow border */}
                <div className={`absolute -inset-[3px] rounded-3xl bg-gradient-to-br ${member.gradient} blur-md opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl group-hover:-inset-[6px]`} />
                <div className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${member.gradient}`} />
                
                {/* Content container */}
                <div className="relative aspect-square rounded-3xl bg-background/95 backdrop-blur-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`} />
                  <div className="absolute inset-0 noise" />
                  
                  {/* Animated rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/10 animate-spin-slow transition-all duration-300 group-hover:border-white/20" />
                    <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-white/5 animate-spin-slow transition-all duration-300 group-hover:border-white/10" style={{ animationDirection: 'reverse' }} />
                    <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '30s' }} />
                  </div>

                  {/* Main orb */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`absolute w-48 h-48 md:w-56 md:h-56 ${member.iconBg} rounded-full blur-3xl opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:w-64 group-hover:h-64 group-hover:animate-pulse`} />
                    <div
                      className={`relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full ${member.iconBg} flex items-center justify-center text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] group-hover:scale-105`}
                    >
                      {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-up">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
              Specialized skills honed through years of experience and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {member.skills.map((skill, index) => (
              <div
                key={skill}
                className={`group relative glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 opacity-0 animate-fade-up cursor-default`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <div className={`w-3 h-3 rounded-full ${member.iconBg} mb-4 group-hover:scale-125 transition-transform`} />
                <h3 className="font-display font-semibold text-foreground">{skill}</h3>
              </div>
            ))}
          </div>

          {/* What I Bring Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.title}
                className={`group glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 opacity-0 animate-fade-up hover:-translate-y-2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${member.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="relative glass rounded-3xl p-12 md:p-16 border border-white/10 overflow-hidden text-center">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-10`} />
            <div className="absolute inset-0 noise" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                Let's Work <span className="text-gradient">Together</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 opacity-0 animate-fade-up stagger-1">
                Ready to bring your project to life? I'd love to hear about your ideas and discuss how we can collaborate.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up stagger-2">
                <MagneticButton>
                  <Button asChild size="lg" className={`gap-2 ${member.iconBg} border-0 hover:opacity-90 text-white px-10 py-7 text-lg`}>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-5 h-5" />
                      Send an Email
                    </a>
                  </Button>
                </MagneticButton>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-10 opacity-0 animate-fade-up stagger-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all`}
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
                    className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other members */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Meet Other Team Members
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              to={`/team/${prevMember.id}`}
              className="group flex items-center gap-4 glass rounded-2xl px-6 py-5 border border-white/10 hover:border-white/20 transition-all w-full sm:w-auto hover:-translate-x-2"
            >
              <div className={`w-14 h-14 rounded-full ${prevMember.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform text-white font-display font-bold`}>
                {prevMember.initials || prevMember.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Previous
                </p>
                <p className="font-display font-semibold text-lg">
                  {prevMember.name}
                </p>
                <p className="text-sm text-muted-foreground">{prevMember.role}</p>
              </div>
            </Link>

            <Link
              to={`/team/${nextMember.id}`}
              className="group flex items-center gap-4 glass rounded-2xl px-6 py-5 border border-white/10 hover:border-white/20 transition-all flex-row-reverse w-full sm:w-auto hover:translate-x-2"
            >
              <div className={`w-14 h-14 rounded-full ${nextMember.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform text-white font-display font-bold`}>
                {nextMember.initials || nextMember.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Next
                </p>
                <p className="font-display font-semibold text-lg">
                  {nextMember.name}
                </p>
                <p className="text-sm text-muted-foreground">{nextMember.role}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMemberProfile;
