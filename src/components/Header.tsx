import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Home, Users, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll & handle Escape key when mobile drawer is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTeamClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#team");
    }
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong pt-[env(safe-area-inset-top)]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-white font-display font-extrabold text-[11px] sm:text-xs tracking-tight">LAB</span>
            </div>
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
              The Lab <span className="text-gradient">Guys</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={handleHomeClick}
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={handleTeamClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Button
              variant="default"
              size="sm"
              className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 shadow-glow-sm"
              onClick={handleContactClick}
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-foreground active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 top-16 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Slide-down Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden relative z-50 border-t border-white/10 bg-[#09090d]/95 backdrop-blur-2xl shadow-2xl"
            >
              <nav className="container mx-auto px-4 py-5 flex flex-col gap-2">
                <button
                  onClick={handleHomeClick}
                  className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-all active:scale-[0.99] ${
                    location.pathname === "/"
                      ? "bg-white/10 text-white border border-white/10"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Home className="w-4 h-4 text-purple-400" />
                    Home
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={handleTeamClick}
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-all active:scale-[0.99]"
                >
                  <span className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-cyan-400" />
                    The Experts
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>

                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-all active:scale-[0.99] ${
                    location.pathname === "/about"
                      ? "bg-white/10 text-white border border-white/10"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Info className="w-4 h-4 text-pink-400" />
                    About Collective
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>

                <div className="pt-3 mt-1 border-t border-white/10">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-semibold border-0 shadow-glow-sm active:scale-[0.98] transition-transform"
                    onClick={handleContactClick}
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
