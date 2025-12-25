import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="font-display text-xl font-bold">
              The Lab <span className="text-accent">Guys</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A collective of digital experts
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} The Lab Guys</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
