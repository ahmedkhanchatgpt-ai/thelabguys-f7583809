import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onContactClick?: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTeamClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    // Navigate to home if not already there, then scroll
    navigate('/');
    setTimeout(() => {
      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    onContactClick?.();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-white font-display font-extrabold text-xs tracking-tight">LAB</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              The Lab <span className="text-gradient">Guys</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={handleHomeClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
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
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={handleHomeClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={handleTeamClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Team
              </button>
              <Button 
                variant="default" 
                size="sm" 
                className="w-fit bg-gradient-to-r from-purple-600 to-pink-600 border-0"
                onClick={handleContactClick}
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
