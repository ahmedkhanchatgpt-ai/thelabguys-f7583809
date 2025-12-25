import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Twitter, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { getTeamMember, teamMembers } from "@/data/teamMembers";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 opacity-0 animate-fade-up"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="opacity-0 animate-fade-up stagger-1">
              <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.accentColor} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center text-primary-foreground text-5xl md:text-7xl font-display font-bold shadow-lg`}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2 opacity-0 animate-fade-up stagger-2">
                {member.role}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up stagger-2">
                {member.name}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-up stagger-3">
                {member.fullBio}
              </p>

              {/* Skills */}
              <div className="mb-8 opacity-0 animate-fade-up stagger-4">
                <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up stagger-5">
                <Button asChild variant="default" className="gap-2">
                  <a href={`mailto:${member.email}`}>
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
                {member.linkedin && (
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {member.twitter && (
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                  </Button>
                )}
                {member.github && (
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link
                to={`/team/${prevMember.id}`}
                className="group flex items-center gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
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
                className="group flex items-center gap-4 text-right flex-row-reverse sm:flex-row"
              >
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Next
                  </p>
                  <p className="font-display font-semibold">
                    {nextMember.name}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground rotate-180" />
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
