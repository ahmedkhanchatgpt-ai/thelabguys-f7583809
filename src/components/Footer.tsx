import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer className="border-t border-border glass-strong">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-glow-purple">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold transition-all duration-300 group-hover:[text-shadow:0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(168,85,247,0.6)]">
                The Lab <span className="text-gradient transition-all duration-300 group-hover:[text-shadow:0_0_25px_rgba(236,72,153,0.9),0_0_50px_rgba(6,182,212,0.7)]">Guys</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A collective of digital experts
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/thelabguysofficial/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-glow-purple group/social">
                <Instagram className="w-4 h-4 transition-transform duration-300 group-hover/social:scale-110" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61594154595588" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-glow-purple group/social">
                <Facebook className="w-4 h-4 transition-transform duration-300 group-hover/social:scale-110" />
              </a>
              <a href="https://x.com/thelabguysofc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-glow-purple group/social">
                <Twitter className="w-4 h-4 transition-transform duration-300 group-hover/social:scale-110" />
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} The Lab Guys</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="hidden md:inline">All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
