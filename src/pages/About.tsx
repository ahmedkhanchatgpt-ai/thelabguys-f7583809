import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Lightbulb, Users, Shield, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the cutting edge of technology, constantly exploring new solutions to solve complex challenges.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as one team with our clients, maintaining transparent communication throughout every project.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We deliver on our promises, maintain honesty in all interactions, and protect our clients' interests.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We hold ourselves to the highest standards, never settling for mediocrity in any aspect of our work.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Results-Driven",
    description: "We focus on measurable outcomes that directly impact our clients' business success and growth.",
    gradient: "from-rose-400 to-red-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We genuinely love what we do, bringing enthusiasm and dedication to every project we undertake.",
    gradient: "from-pink-400 to-rose-500",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Header />

      <main className="pt-28 pb-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <ScrollReveal className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Our Story</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              We Are <span className="text-gradient">The Lab Guys</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collective of 6 digital experts united by a shared vision: to transform ideas into 
              extraordinary digital experiences that drive real business results.
            </p>
          </ScrollReveal>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 md:mb-24">
            <ScrollReveal delay={100}>
              <div className="glass rounded-2xl p-8 border border-white/10 h-full hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative digital solutions that accelerate growth, 
                  enhance efficiency, and create lasting competitive advantages. We combine technical 
                  expertise with creative thinking to deliver results that exceed expectations.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass rounded-2xl p-8 border border-white/10 h-full hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the go-to digital partner for forward-thinking businesses worldwide. 
                  We envision a future where every business, regardless of size, has access to 
                  world-class digital expertise that helps them thrive in an increasingly digital world.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Story Section */}
          <ScrollReveal className="mb-16 md:mb-24">
            <div className="glass rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
              <div className="absolute inset-0 noise" />
              <div className="relative">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
                  How We <span className="text-gradient">Started</span>
                </h2>
                <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Lab Guys was born from a simple observation: businesses often struggle to find 
                    reliable digital expertise that truly understands their unique challenges. Too often, 
                    they're forced to work with multiple agencies, deal with miscommunication, and settle 
                    for fragmented solutions.
                  </p>
                  <p>
                    We came together as six specialists, each bringing deep expertise in our respective 
                    fields, united by a common goal—to provide comprehensive, cohesive digital solutions 
                    under one roof. Our diverse backgrounds span SEO, web development, cybersecurity, 
                    creative design, data science, and AI engineering.
                  </p>
                  <p>
                    What started as a collaboration between friends has grown into a trusted partnership 
                    with businesses across industries. We're not just service providers; we're strategic 
                    partners invested in your success.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Values */}
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="glass rounded-2xl p-6 border border-white/10 h-full hover:border-white/20 transition-all group hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gradient transition-all">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
