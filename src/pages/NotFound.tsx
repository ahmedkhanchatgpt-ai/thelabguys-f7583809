import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Users, Mail, Compass, Sparkles, Terminal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const popularRoutes = [
    { label: "Home", path: "/" },
    { label: "The Experts", path: "/#team" },
    { label: "About Collective", path: "/about" },
    { label: "Get in Touch", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background relative flex flex-col justify-between overflow-hidden">
      {/* Dynamic ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 ambient-bg-layer">
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 rounded-full blur-[180px] opacity-20 animate-pulse-slow" />
        <div 
          className="absolute bottom-[10%] right-[10%] w-[650px] h-[650px] bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-[190px] opacity-15 animate-pulse-slow" 
          style={{ animationDelay: '2s' }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-600 to-pink-600 rounded-full blur-[200px] opacity-[0.08]" 
        />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)`,
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }} 
        />
      </div>

      <Header />

      {/* Main 404 Hero */}
      <main className="flex-1 flex items-center justify-center pt-24 pb-14 sm:pt-32 sm:pb-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-purple-500/20 mb-6 sm:mb-8 opacity-0 animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-mono text-purple-300 font-medium">
              Error 404 // Experiment Relocated
            </span>
          </div>

          {/* Huge Glowing 404 */}
          <div className="relative mb-5 sm:mb-6 opacity-0 animate-fade-up stagger-1">
            <div className="text-7xl sm:text-9xl md:text-[12rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 select-none">
              404
            </div>
            {/* Ambient neon backglow behind numbers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl -z-10 rounded-full" />
          </div>

          {/* Title & Description */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 opacity-0 animate-fade-up stagger-2">
            Lost in the <span className="text-gradient">Digital Void</span>
          </h1>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed opacity-0 animate-fade-up stagger-3 px-2 break-words">
            The page at <code className="text-xs sm:text-sm font-mono text-purple-300 bg-white/5 px-2 py-0.5 rounded border border-white/10 break-all">{location.pathname}</code> has been relocated, archived, or never synthesized in this timeline.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 opacity-0 animate-fade-up stagger-4">
            <MagneticButton className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-xl shadow-purple-500/25 hover:opacity-90 hover:scale-105 transition-all"
              >
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Back to Safety
                </Link>
              </Button>
            </MagneticButton>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 glass border-white/15 hover:border-white/30 hover:bg-white/5 text-foreground rounded-xl px-8 py-6 text-base font-medium transition-all"
            >
              <a href="/#team">
                <Users className="w-5 h-5" />
                The Experts
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto gap-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl px-6 py-5 sm:py-6 text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Page
            </Button>
          </div>

          {/* Suggested Quick Links */}
          <div className="pt-8 border-t border-white/10 opacity-0 animate-fade-up stagger-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">
              Quick Navigation
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {popularRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="text-xs sm:text-sm px-4 py-2 rounded-full glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-purple-500/30 transition-all hover:scale-105"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
