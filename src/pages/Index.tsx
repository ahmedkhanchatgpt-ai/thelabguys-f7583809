import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/teamMembers";
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm md:text-base text-accent font-medium tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
              Digital Experts Collective
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
              We Are{" "}
              <span className="relative">
                <span className="text-gradient">The Lab Guys</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up stagger-2">
              A collective of five digital experts, each bringing unique skills
              to help you navigate the digital landscape. From SEO to
              cybersecurity, we've got you covered.
            </p>
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors opacity-0 animate-fade-up stagger-3"
            >
              Meet the Team
              <ArrowDown className="w-4 h-4 animate-float" />
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The Experts
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Click on any profile to learn more about our team members and
              their expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Whether you need SEO optimization, web development, cybersecurity,
            trading insights, or creative design — we're here to help.
          </p>
          <a
            href="mailto:hello@thelabguys.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
