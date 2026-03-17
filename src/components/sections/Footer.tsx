import React from 'react';
import { Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About Doctor', path: '/about' },
    { label: 'Medical Services', path: '/services' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Book Appointment', path: '/appointment' },
];

const SOCIAL_ICONS = [Facebook, Twitter, Instagram, Linkedin];

const CONTACT_INFO = {
    address: 'Manmohan Park, 41/5 Raja Rammohan Roy Rd, Behala Chowrasta, Kolkata 700008',
    phone: '079801 65256',
    hours: '10AM – 8PM',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const BrandColumn = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-5 space-y-3"
    >
        {/* Logo & Name */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-secondary font-bold text-lg shadow-lg relative overflow-hidden group">
                SG
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight">
                    Dr. Sayantan Gayen
                </span>
                <span className="text-[7px] uppercase tracking-[0.3em] text-primary font-bold mt-0">
                    Internal Medicine &amp; Diabetician
                </span>
            </div>
        </div>

        {/* Tagline */}
        <p className="text-white/40 text-sm leading-relaxed max-w-md font-light">
            Providing compassionate, expert care in internal medicine and specialized diabetes management
            for over a decade in Kolkata.
        </p>

        {/* Social Icons */}
        <div className="flex gap-2">
            {SOCIAL_ICONS.map((Icon, i) => (
                <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="w-7 h-7 rounded bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-500"
                >
                    <Icon size={14} className="text-white/60" />
                </motion.a>
            ))}
        </div>
    </motion.div>
);

const NavigationColumn = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="lg:col-span-3"
    >
        <h4 className="font-display font-bold text-[8px] uppercase tracking-[0.3em] mb-3 text-white/20">
            Navigation
        </h4>
        <ul className="space-y-2">
            {NAV_LINKS.map((link, i) => (
                <li key={i}>
                    <Link
                        to={link.path}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-white/40 hover:text-primary transition-all duration-500 flex items-center gap-2 group text-xs font-light"
                    >
                        <div className="w-0.5 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </motion.div>
);

const ContactColumn = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="lg:col-span-4"
    >
        <h4 className="font-display font-bold text-[8px] uppercase tracking-[0.3em] mb-3 text-white/20">
            Contact Info
        </h4>
        <div className="space-y-3">
            {/* Address */}
            <div className="flex gap-2 group">
                <div className="w-7 h-7 rounded bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500">
                    <MapPin className="text-primary" size={14} />
                </div>
                <p className="text-white/40 leading-relaxed text-xs font-light">{CONTACT_INFO.address}</p>
            </div>

            {/* Phone */}
            <div className="flex gap-2 group">
                <div className="w-7 h-7 rounded bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500">
                    <Phone className="text-primary" size={14} />
                </div>
                <div className="flex flex-col">
                    <span className="text-white/60 text-sm font-bold">{CONTACT_INFO.phone}</span>
                    <span className="text-[6px] text-white/20 uppercase font-bold tracking-[0.3em] mt-0">
                        Available {CONTACT_INFO.hours}
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);

const BottomBar = () => (
    <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white/20 text-[8px] font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Dr. Sayantan Gayen</p>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <ShieldCheck size={8} className="text-primary" />
                <span>Verified Medical Professional</span>
            </div>
        </div>
        <div className="flex gap-4 text-white/20 text-[8px] font-bold uppercase tracking-widest">
            <Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/cookies" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Cookies</Link>
        </div>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Footer = () => {
    return (
        <footer className="bg-secondary text-white relative overflow-hidden dot-matrix">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-4">
                    <BrandColumn />
                    <NavigationColumn />
                    <ContactColumn />
                </div>
                <BottomBar />
            </div>
        </footer>
    );
};

export default Footer;
