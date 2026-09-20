import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedContactForm from "@/components/EnhancedContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      {/* Themed animated background for entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 rounded-full blur-[160px] opacity-25 animate-pulse-slow" />
        <div className="absolute bottom-[5%] right-[5%] w-[650px] h-[650px] bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-[180px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-[200px] opacity-[0.12] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }} />
      </div>

      <Header />

      <main className="flex-1 relative z-10 flex flex-col items-center justify-center pt-28 pb-16 px-4 md:px-6">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-sm md:text-base font-semibold text-purple-400 uppercase tracking-widest mb-3">
              CONTACTS
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Get in Touch with Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Please fill out the form below to share your feedback or request information about our services.
            </p>
          </div>

          <div className="w-full max-w-3xl relative">
            {/* Glowing borders around form */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-purple-500/40 via-cyan-500/20 to-pink-500/40 blur-sm opacity-80" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/60 via-cyan-500/30 to-pink-500/60" />
            
            <div className="relative rounded-2xl p-8 md:p-12 lg:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)] bg-black/40 backdrop-blur-2xl border border-white/10">
              <EnhancedContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
