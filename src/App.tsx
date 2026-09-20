import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner, toast } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import TeamMemberProfile from "./pages/TeamMemberProfile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import { PageTransition } from "./components/PageTransition";
import { InitialLoader } from "./components/InitialLoader";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/team/:id" element={<PageTransition><TeamMemberProfile /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    // Block right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    document.addEventListener("contextmenu", handleContextMenu);
    
    // Hidden developer code
    const s = [109, 105, 108, 101, 115];
    let b: number[] = [];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        b.push(e.key.toLowerCase().charCodeAt(0));
        if (b.length > s.length) {
          b.shift();
        }
        
        if (b.join(',') === s.join(',')) {
          toast("Site Developed by M.Ahmed", {
            duration: 6000,
            position: "bottom-center",
            style: {
              background: 'linear-gradient(to right, #9333ea, #db2777)',
              color: 'white',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              boxShadow: '0 0 20px rgba(219, 39, 119, 0.5)'
            },
            icon: '✨'
          });
          b = [];
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <InitialLoader>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </InitialLoader>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
