import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RippleButton } from '@/src/components/ui/ripple-button';
import { LiquidButton } from '@/src/components/ui/liquid-button';

// ─── Data ────────────────────────────────────────────────────────────────────

const mobileStats = [
  { label: 'Experience', value: '10+ Yrs' },
  { label: 'Patients', value: '1000+' },
  { label: 'Rating', value: '5.0 ★' },
];

const desktopStats = [
  { label: 'Experience', value: '10+ Yrs', desc: 'Clinical Excellence' },
  { label: 'Patients', value: '1000+', desc: 'Lives Impacted' },
  { label: 'Rating', value: '5.0 ★', desc: 'Patient Trust' },
];

const DOCTOR_IMAGE =
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200&fm=webp';

// ─── Sub-components ───────────────────────────────────────────────────────────



const HeroHeading = () => (
  <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold text-secondary leading-[0.9] mt-8 mb-4 lg:mb-10 tracking-tighter">
    Your Health, <br />
    <span className="text-primary italic font-serif font-medium">Our Priority.</span>
  </h1>
);

const HeroSubtitle = () => (
  <p className="text-base sm:text-2xl text-secondary/50 mb-14 sm:mb-12 max-w-2xl leading-relaxed font-light">
    Dr. Sayantan Gayen provides world-class{' '}
    <span className="text-secondary font-medium">Internal Medicine</span> and{' '}
    <span className="text-secondary font-medium">Diabetes Care</span> with a personalized,
    patient-first approach.
  </p>
);

const MobilePhotoAndStats = () => (
  <div className="flex flex-row lg:hidden items-center justify-between gap-6 mb-12 w-full">
    <div className="flex flex-col gap-6 shrink-0 relative z-10">
      {mobileStats.map((stat, i) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          key={i}
          className="flex flex-col relative group"
        >
          {/* Subtle line indicator */}
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary leading-none tracking-tight">
            {stat.value}
          </span>
          <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-secondary/40 mt-1">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="relative shrink-0 ml-auto"
    >
      <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl relative z-10">
        <img
          src={DOCTOR_IMAGE}
          alt="Dr. Sayantan Gayen"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/10 hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
      </div>
      {/* Decorative pulse blur */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 bg-primary/15 rounded-[3.5rem] blur-xl -z-0 pointer-events-none"
      />
    </motion.div>
  </div>
);

const CTAButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 lg:mb-16 z-20 relative">
      <div className="w-full sm:w-auto">
        <LiquidButton
          onClick={() => navigate('/appointment')}
          colorClass="bg-[#0f6b7a]"
          blobColorClass="bg-[#0f6b7a]"
          className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 rounded-full text-sm sm:text-base font-bold text-white shadow-lg shadow-primary/20 flex items-center justify-center sm:justify-between min-w-[200px] group transition-all"
        >
          <span>Book Appointment</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-4 group-hover:bg-white/30 transition-colors">
            <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
          </div>
        </LiquidButton>
      </div>

      <div className="w-full sm:w-auto">
        <LiquidButton
          onClick={() => window.open('tel:07980165256')}
          colorClass="bg-white"
          blobColorClass="bg-white"
          className="flex items-center w-full sm:w-auto sm:min-w-[240px] px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-all duration-500 mr-4 sm:mr-5">
            <Phone size={18} className="sm:w-[20px] sm:h-[20px]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-secondary/40 mb-0.5">
              Emergency Call
            </span>
            <span className="text-base sm:text-lg font-bold text-secondary leading-none">079801 65256</span>
          </div>
        </LiquidButton>
      </div>
    </div>
  );
};

const DesktopStats = () => (
  <div className="hidden lg:grid grid-cols-3 gap-12 pt-12 border-t border-gray-100">
    {desktopStats.map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
        className="flex flex-col"
      >
        <span className="text-4xl font-display font-bold text-secondary leading-none mb-2">
          {stat.value}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary/30">
          {stat.label}
        </span>
        <span className="text-[9px] uppercase tracking-widest font-medium text-primary/40 mt-1">
          {stat.desc}
        </span>
      </motion.div>
    ))}
  </div>
);

const DoctorPhoto = () => (
  <div className="hidden lg:col-span-5 lg:block order-2">
    <motion.div
      initial={{ opacity: 0, scale: 0.98, x: 10 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative"
    >
      <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_48px_96px_-16px_rgba(0,0,0,0.15)] border-[12px] border-white aspect-[4/5] group">
        <img
          src={DOCTOR_IMAGE}
          alt="Dr. Sayantan Gayen"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity duration-1000" />
      </div>



      {/* Decorative blurs */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
    </motion.div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-40 pb-20 sm:pt-48 lg:pt-32 overflow-hidden bg-medical-bg dot-matrix">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[140px] -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7 order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <HeroHeading />
            <HeroSubtitle />
            <MobilePhotoAndStats />
            <CTAButtons />
            <DesktopStats />
          </motion.div>
        </div>

        {/* Right Column */}
        <DoctorPhoto />
      </div>
    </section>
  );
};

export default Hero;
