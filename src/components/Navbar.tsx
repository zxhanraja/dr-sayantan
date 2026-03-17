import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { RippleButton } from '@/src/components/ui/ripple-button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-4 sm:px-6',
        scrolled ? 'py-3 sm:py-4' : 'py-5 sm:py-8'
      )}
    >
      <div className={cn(
        "max-w-7xl relative mx-auto flex items-center justify-between transition-all duration-700 rounded-[2rem] sm:rounded-[2.5rem] px-4 sm:px-8 py-3 sm:py-4",
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:bg-white/90" : "bg-transparent"
      )}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 sm:gap-4 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-[1rem] sm:rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-xl shadow-secondary/10 relative overflow-hidden shrink-0"
          >
            SG
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
          <div className="hidden lg:flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl leading-none text-secondary tracking-tight">
              Dr. Sayantan Gayen
            </span>
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-primary mt-1">
              Internal Medicine
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
            >
              <Link
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={cn(
                  "text-[13px] uppercase tracking-widest font-bold px-4 py-2.5 lg:px-5 lg:py-2.5 rounded-xl transition-all duration-500 relative group",
                  location.pathname === link.path ? "text-primary" : "text-secondary/40 hover:text-secondary"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 lg:left-5 lg:right-5 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <div className="w-px h-6 bg-gray-200 mx-4 lg:mx-6" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/appointment"
              className="bg-primary text-white h-9 px-4 lg:h-11 lg:px-6 xl:h-12 xl:px-8 text-xs lg:text-sm shadow-md shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 rounded-xl lg:rounded-2xl flex items-center justify-center gap-1.5 lg:gap-2 shrink-0 font-bold transition-all duration-300 group relative overflow-hidden"
            >
              <Calendar size={16} className="text-white group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 relative z-10 shrink-0 lg:w-[18px] lg:h-[18px]" />
              <span className="whitespace-nowrap relative z-10 text-white font-bold">Book Now</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white shadow-sm border border-gray-100 text-secondary transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white/98 backdrop-blur-3xl rounded-[2rem] p-5 sm:p-6 shadow-2xl flex flex-col gap-3 md:hidden z-50 border border-gray-100/50 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  key={link.name}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={cn(
                      "text-base sm:text-lg font-bold py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl flex items-center justify-between transition-colors",
                      location.pathname === link.path ? "bg-primary/5 text-primary" : "text-secondary hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                    <ArrowRight size={14} className={cn(
                      "transition-transform",
                      location.pathname === link.path ? "text-primary translate-x-1" : "text-gray-300 opacity-0 group-hover:opacity-100"
                    )} />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col gap-3 sm:gap-4"
              >
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/appointment"
                    onClick={() => setIsOpen(false)}
                    className="relative overflow-hidden w-full py-4 bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all duration-300 group"
                  >
                    <Calendar size={18} />
                    <span>Book Appointment</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <a
                    href="tel:07980165256"
                    className="w-full py-4 bg-white border border-gray-100 hover:border-primary/20 text-secondary hover:text-primary shadow-sm hover:shadow-xl rounded-2xl flex flex-col items-center justify-center gap-1 font-bold transition-all duration-300 relative group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Phone size={14} />
                      </div>
                      <span className="text-lg">079801 65256</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-secondary/40">Emergency Call</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);


export default Navbar;
