import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import { MapPin, Mail, Phone, Youtube, Linkedin, Globe, Sparkles } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0c14] text-foreground relative flex flex-col justify-between overflow-x-hidden">
      {/* Dynamic ambient background matching the 3D purple telephone lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[650px] h-[650px] bg-gradient-to-br from-purple-700/25 via-indigo-600/20 to-blue-600/15 rounded-full blur-[180px] animate-pulse-slow" />
        <div 
          className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-700/15 via-purple-600/10 to-transparent rounded-full blur-[160px] animate-pulse-slow" 
          style={{ animationDelay: '3s' }} 
        />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(rgba(147,51,234,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} 
        />
      </div>

      <Header />

      {/* Floating Left Social Bar (Matching the SS) */}
      <aside 
        aria-label="Social Links" 
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20 opacity-0 animate-fade-up"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
        
        {/* Twitter / X */}
        <a 
          href="https://x.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter / X"
          className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all group"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Google / Mail */}
        <a 
          href="mailto:contact@thelabguys.com" 
          aria-label="Email"
          className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all group"
        >
          <Mail className="w-3.5 h-3.5" />
        </a>

        {/* YouTube */}
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="YouTube"
          className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-red-400 hover:border-red-500/40 hover:scale-110 transition-all group"
        >
          <Youtube className="w-3.5 h-3.5" />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all group"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>

        <div className="w-px h-12 bg-gradient-to-t from-transparent to-white/20" />
      </aside>

      {/* Main Contact Section */}
      <main className="flex-1 relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Contact Us & Form */}
            <div className="lg:col-span-5 lg:pl-6 z-10 opacity-0 animate-fade-up">
              {/* Main Heading */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white mb-2">
                CONTACT US
              </h1>

              {/* Glowing Drop a Message subtitle */}
              <div className="inline-block mb-8">
                <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                  DROP A MESSAGE
                </span>
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mt-1 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              </div>

              {/* Form Component */}
              <div className="w-full">
                <EnhancedContactForm />
              </div>
            </div>

            {/* Right Column: 3D Telephone Render & Location Card */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative opacity-0 animate-fade-up stagger-2">
              
              {/* 3D Telephone Visual Container */}
              <div className="relative w-full max-w-[680px] flex items-center justify-center group">
                {/* Ambient spotlight behind telephone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-br from-purple-600/35 via-indigo-600/25 to-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                {/* 3D Telephone Image */}
                <img
                  src="/phone-contact.png"
                  onError={(e) => {
                    // Fallback to original filename with spaces if needed
                    const target = e.currentTarget;
                    if (!target.src.includes("Phone%20Contact%20page")) {
                      target.src = "/Phone Contact page .png";
                    }
                  }}
                  alt="The Lab Guys 3D Telephone"
                  className="w-full h-auto max-h-[580px] object-contain drop-shadow-[0_25px_60px_rgba(147,51,234,0.4)] select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{
                    maskImage: 'radial-gradient(ellipse at 50% 50%, black 72%, transparent 98%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 72%, transparent 98%)',
                  }}
                />
              </div>

              {/* Bottom Right Location & Contact Info (Matching SS) */}
              <div className="w-full flex justify-end mt-4 sm:mt-6 pr-2 lg:pr-8">
                <div className="flex items-start gap-3 glass p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl max-w-xs transition-all hover:border-purple-500/30">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 mt-0.5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-white font-semibold text-xs sm:text-sm">
                      The Lab Guys HQ
                    </p>
                    <p className="text-muted-foreground text-[11px] sm:text-xs leading-relaxed">
                      Islamabad / Rawalpindi, Pakistan & Worldwide
                    </p>
                    <div className="pt-1 flex flex-col gap-0.5 text-[11px] text-blue-300 font-mono">
                      <span>contact@thelabguys.com</span>
                      <span>+92 345 678 903</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
