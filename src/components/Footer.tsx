import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border glass-strong">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold">
                The Lab <span className="text-gradient">Guys</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A collective of digital experts
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} The Lab Guys</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="hidden md:inline">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
