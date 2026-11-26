import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedContactForm from "@/components/EnhancedContactForm";

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
      <main className="flex-1 relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 px-0 sm:px-4 lg:px-12 flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: CONTACT US & Form (Matching Template SS) */}
            <div className="lg:col-span-5 z-10 opacity-0 animate-fade-up">
              {/* Heading */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white mb-2">
                CONTACT US
              </h1>

              {/* Glowing DROP A MESSAGE subtitle accent */}
              <div className="inline-block mb-6 sm:mb-8">
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
            <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center relative opacity-0 animate-fade-up stagger-2 mt-2 lg:mt-0">
              
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
                  className="w-full max-w-[360px] sm:max-w-[560px] lg:max-w-[900px] xl:max-w-[980px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(147,51,234,0.4)] select-none pointer-events-none transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
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
