import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import { AnimatePresence, motion } from 'motion/react';

// Lazy load pages for better performance
const Home = lazy(() => import('@/src/pages/Home'));
const About = lazy(() => import('@/src/pages/About'));
const Services = lazy(() => import('@/src/pages/Services'));
const Appointment = lazy(() => import('@/src/pages/Appointment'));
const Testimonials = lazy(() => import('@/src/pages/Testimonials'));
const Contact = lazy(() => import('@/src/pages/Contact'));
const Privacy = lazy(() => import('@/src/pages/Privacy'));
const Terms = lazy(() => import('@/src/pages/Terms'));
const Cookies = lazy(() => import('@/src/pages/Cookies'));
const NotFound = lazy(() => import('@/src/pages/NotFound'));
const DemoOne = lazy(() => import('@/src/components/ui/demo'));

// Loading Screen Component
const LoadingScreen = () => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increased speed from 1.5 to 3.5 for a snappier feel
        return prev + 3.5;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-secondary flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none dot-matrix" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary blur-[150px] opacity-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent blur-[150px] opacity-20" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-secondary font-bold text-4xl shadow-[0_32px_64px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              SG
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white tracking-tight mb-3">Dr. Sayantan Gayen</h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-white/10"></span>
            <p className="text-[10px] text-primary font-bold uppercase tracking-[0.4em]">Medical Excellence</p>
            <span className="h-px w-10 bg-white/10"></span>
          </div>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-72 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(31,122,140,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <div className="flex justify-between w-72 mt-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]"
          >
            System Secure
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] font-bold text-primary uppercase tracking-[0.3em]"
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

// Simple Loading Indicator for Suspense
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Reduced from 1500 to 700 for a much faster entry
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/demo" element={<DemoOne />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
