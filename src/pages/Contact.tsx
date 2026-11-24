import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative flex flex-col justify-between overflow-x-hidden">
      {/* Signature The Lab Guys animated background matching website theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 ambient-bg-layer">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 rounded-full blur-[170px] opacity-25 animate-pulse-slow" />
        <div 
          className="absolute bottom-[5%] right-[5%] w-[650px] h-[650px] bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-[180px] opacity-20 animate-pulse-slow" 
          style={{ animationDelay: '2s' }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-[200px] opacity-[0.10] animate-pulse-slow" 
          style={{ animationDelay: '4s' }} 
        />
        
        {/* Subtle grid mesh matching home page */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)`,
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          }} 
        />
      </div>

      <Header />

      {/* Main Contact Section */}
      <main className="flex-1 relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-12 flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: CONTACT US & Form (Matching Template SS) */}
            <div className="lg:col-span-5 z-10 opacity-0 animate-fade-up">
              {/* Heading */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white mb-2">
                CONTACT US
              </h1>

              {/* Glowing DROP A MESSAGE subtitle accent */}
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

            {/* Right Column: Big 3D Telephone Visual (Matching Template SS) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center relative opacity-0 animate-fade-up stagger-2">
              
              {/* Massive 3D Telephone Visual Container */}
              <div className="relative w-full flex items-center justify-center lg:justify-end">
                {/* Ambient purple/blue spotlight aura behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

                {/* Big 3D Telephone Render */}
                <img
                  src="/phone-contact.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes("Phone%20Contact")) {
                      target.src = "/Phone Contact .png";
                    }
                  }}
                  alt="The Lab Guys 3D Telephone"
                  className="w-full max-w-[650px] sm:max-w-[750px] lg:max-w-[900px] xl:max-w-[980px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(147,51,234,0.4)] select-none pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Right Location & Contact Card (Matching Template SS) */}
              <div className="w-full flex justify-end mt-4 sm:mt-6 pr-2 lg:pr-4">
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
