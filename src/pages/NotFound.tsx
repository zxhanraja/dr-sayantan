import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Phone } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-medical-bg flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] -mr-80 -mt-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            Page Not Found
          </motion.div>

          {/* 404 Giant Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10rem] sm:text-[14rem] font-display font-bold text-secondary leading-none tracking-tighter mb-4 select-none"
          >
            4<span className="text-primary italic font-serif font-medium">0</span>4
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-secondary/50 font-light leading-relaxed mb-12 max-w-md mx-auto"
          >
            The page you're looking for doesn't exist. You may have mistyped the address or the page has moved.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="btn-primary group px-8 py-4 text-sm"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <a
              href="tel:07980165256"
              className="btn-secondary group px-8 py-4 text-sm"
            >
              <Phone size={18} />
              Call the Clinic
            </a>
          </motion.div>

          {/* Divider + quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-widest font-bold text-secondary/30"
          >
            {[
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Appointment', path: '/appointment' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
