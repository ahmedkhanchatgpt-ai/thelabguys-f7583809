import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, ArrowRight } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br ${member.gradient} opacity-10 rounded-full blur-3xl animate-pulse-slow`} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Header />

      <main className="pt-28 pb-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 opacity-0 animate-fade-up group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Visual */}
            <div className="opacity-0 animate-fade-up stagger-1">
              <div className="relative group cursor-pointer">
                {/* Rotating gradient glow on hover */}
                <div className="absolute -inset-[4px] rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_60deg,var(--tw-gradient-stops),transparent_300deg,transparent_360deg)] ${member.gradient} group-hover:animate-border-spin`} />
                </div>
                
                {/* Gradient glow border - outer blur */}
                <div className={`absolute -inset-[3px] rounded-3xl bg-gradient-to-br ${member.gradient} blur-md opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl group-hover:-inset-[6px]`} />
                {/* Gradient border - sharp */}
                <div className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${member.gradient}`} />
                
                {/* Content container */}
                <div className="relative aspect-square rounded-3xl bg-background/95 backdrop-blur-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`} />
                  <div className="absolute inset-0 noise" />
                  
                  {/* Animated ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full border border-white/10 animate-spin-slow transition-all duration-300 group-hover:border-white/20" />
                    <div className="absolute w-56 h-56 rounded-full border border-white/5 animate-spin-slow transition-all duration-300 group-hover:border-white/10" style={{ animationDirection: 'reverse' }} />
                  </div>

                  {/* Main orb */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`absolute w-48 h-48 ${member.iconBg} rounded-full blur-3xl opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:w-64 group-hover:h-64 group-hover:animate-pulse`} />
                    <div
                      className={`relative w-44 h-44 md:w-56 md:h-56 rounded-full ${member.iconBg} flex items-center justify-center text-white text-6xl md:text-7xl font-display font-bold shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] group-hover:scale-105`}
                    >
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 w-fit mb-6 opacity-0 animate-fade-up stagger-2`}>
                <span className={`w-2 h-2 rounded-full ${member.iconBg}`} />
                <span className="text-sm text-muted-foreground">{member.role}</span>
              </div>

              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-up stagger-2">
                {member.name}
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-3">
                {member.fullBio}
              </p>

              {/* Skills */}
              <div className="mb-10 opacity-0 animate-fade-up stagger-4">
                <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} gradient={member.iconBg} />
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up stagger-5">
                <Button asChild className={`gap-2 ${member.iconBg} border-0 hover:opacity-90`}>
                  <a href={`mailto:${member.email}`}>
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
                {member.linkedin && (
                  <Button asChild variant="outline" className="gap-2 glass border-white/10 hover:bg-white/5">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {member.twitter && (
                  <Button asChild variant="outline" className="gap-2 glass border-white/10 hover:bg-white/5">
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      X
                    </a>
                  </Button>
                )}
                {member.github && (
                  <Button asChild variant="outline" className="gap-2 glass border-white/10 hover:bg-white/5">
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Navigation to other members */}
          <div className="mt-24 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <Link
                to={`/team/${prevMember.id}`}
                className="group flex items-center gap-4 glass rounded-2xl px-6 py-4 border border-white/10 hover:border-white/20 transition-all w-full sm:w-auto"
              >
                <div className={`w-12 h-12 rounded-full ${prevMember.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <ArrowLeft className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Previous
                  </p>
                  <p className="font-display font-semibold">
                    {prevMember.name}
                  </p>
                </div>
              </Link>

              <Link
                to={`/team/${nextMember.id}`}
                className="group flex items-center gap-4 glass rounded-2xl px-6 py-4 border border-white/10 hover:border-white/20 transition-all flex-row-reverse w-full sm:w-auto"
              >
                <div className={`w-12 h-12 rounded-full ${nextMember.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Next
                  </p>
                  <p className="font-display font-semibold">
                    {nextMember.name}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberProfile;
