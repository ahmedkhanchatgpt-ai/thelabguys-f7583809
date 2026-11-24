import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner, toast } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import { PageTransition } from "./components/PageTransition";
import { InitialLoader } from "./components/InitialLoader";
import { GeoLocationProvider } from "./context/GeoLocationContext";

const Index = lazy(() => import("./pages/Index"));
const TeamMemberProfile = lazy(() => import("./pages/TeamMemberProfile"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
  </div>
);

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Suspense fallback={<PageFallback />}>
                <Index />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/team/:id"
          element={
            <PageTransition>
              <Suspense fallback={<PageFallback />}>
                <TeamMemberProfile />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <Suspense fallback={<PageFallback />}>
                <About />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Suspense fallback={<PageFallback />}>
                <Contact />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <Suspense fallback={<PageFallback />}>
                <NotFound />
              </Suspense>
            </PageTransition>
          }
        />
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
      <GeoLocationProvider>
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
      </GeoLocationProvider>
    </QueryClientProvider>
  );
};

export default App;
