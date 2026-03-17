import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="pt-32 pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-secondary mb-6 sm:mb-8"
          >
            Contact Our <span className="text-primary italic">Clinic</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-secondary/50 max-w-2xl mx-auto leading-relaxed px-4"
          >
            I'm always here to listen. Whether you have a quick question or need to discuss a complex health concern, don't hesitate to reach out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-24 sm:mb-40">
          {/* Contact Cards */}
          {[
            {
              icon: MapPin,
              title: "Clinical Facility",
              content: "Manmohan Park, 41/5 Raja Rammohan Roy Rd, Behala Chowrasta, Kolkata 700008",
              link: "https://maps.google.com",
              linkText: "Navigate to Clinic",
              color: "bg-blue-50 text-blue-600"
            },
            {
              icon: Phone,
              title: "Direct Assistance",
              content: "079801 65256",
              link: "tel:07980165256",
              linkText: "Initiate Call",
              color: "bg-emerald-50 text-emerald-600"
            },
            {
              icon: Mail,
              title: "Digital Inquiry",
              content: "contact@drsgayen.com",
              link: "mailto:contact@drsgayen.com",
              linkText: "Send Electronic Mail",
              color: "bg-purple-50 text-purple-600"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 text-center group hover:shadow-[0_32px_64px_-16px_rgba(31,122,140,0.08)] hover:border-primary/10 transition-all duration-700"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 ${item.color} rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center mx-auto mb-8 sm:mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-current/5`}>
                <item.icon size={28} className="sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-secondary mb-4 sm:mb-6">{item.title}</h3>
              <p className="text-base sm:text-xl text-secondary/50 mb-8 sm:mb-10 leading-relaxed font-light">{item.content}</p>
              <a
                href={item.link}
                className="text-primary font-bold hover:text-secondary inline-flex items-center gap-3 sm:gap-4 text-base sm:text-lg transition-colors group/link"
              >
                {item.linkText}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 sm:p-16 lg:p-24 rounded-[2.5rem] sm:rounded-[4rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-[80px]" />
            
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-secondary mb-8 sm:mb-12 relative z-10">Send a <span className="text-primary italic">Message</span></h2>
            <form className="space-y-6 sm:space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold text-secondary/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 sm:px-10 py-4 sm:py-6 bg-medical-bg border border-gray-100 rounded-[1.5rem] sm:rounded-[2.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base sm:text-lg font-light"
                  />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold text-secondary/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 sm:px-10 py-4 sm:py-6 bg-medical-bg border border-gray-100 rounded-[1.5rem] sm:rounded-[2.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base sm:text-lg font-light"
                  />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className="text-[10px] sm:text-xs font-bold text-secondary/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry regarding..."
                  className="w-full px-6 sm:px-10 py-4 sm:py-6 bg-medical-bg border border-gray-100 rounded-[1.5rem] sm:rounded-[2.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base sm:text-lg font-light"
                />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className="text-[10px] sm:text-xs font-bold text-secondary/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Your Message</label>
                <textarea
                  placeholder="Please describe your health inquiry in detail..."
                  rows={4}
                  className="w-full px-6 sm:px-10 py-4 sm:py-6 bg-medical-bg border border-gray-100 rounded-[1.5rem] sm:rounded-[2.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all resize-none text-base sm:text-lg font-light"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-5 sm:py-7 text-lg sm:text-xl group shadow-2xl shadow-primary/20">
                Transmit Message
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <Send size={18} className="sm:w-5 sm:h-5" />
                </div>
              </button>
            </form>
          </motion.div>

          {/* Map & Hours */}
          <div className="space-y-12 sm:space-y-20">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-secondary text-white p-8 sm:p-16 lg:p-20 rounded-[2.5rem] sm:rounded-[4rem] relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full -mr-80 -mt-80 blur-[120px]" />
              <div className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/5 text-accent text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-10 relative z-10">
                Operational Schedule
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold mb-8 sm:mb-12 relative z-10 leading-none">Clinic <span className="text-accent italic">Hours</span></h3>
              <div className="space-y-2 sm:space-y-4 relative z-10">
                {[
                  { day: "Monday", hours: "10:00 AM - 08:00 PM" },
                  { day: "Tuesday", hours: "10:00 AM - 08:00 PM" },
                  { day: "Wednesday", hours: "10:00 AM - 08:00 PM" },
                  { day: "Thursday", hours: "10:00 AM - 08:00 PM" },
                  { day: "Friday", hours: "10:00 AM - 08:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 08:00 PM" },
                  { day: "Sunday", hours: "Closed / Emergencies Only", closed: true }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 sm:py-5 border-b border-white/5 last:border-0 group/hour">
                    <span className="text-base sm:text-xl font-medium text-white/80 group-hover/hour:text-white transition-colors">{item.day}</span>
                    <span className={`text-sm sm:text-lg ${item.closed ? 'text-accent font-bold' : 'text-white/40'}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-[300px] sm:h-[450px] rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-[0_48px_96px_-16px_rgba(0,0,0,0.15)] border-[8px] sm:border-[16px] border-white bg-gray-100 relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.123456789!2d88.3123456789!3d22.48123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzUyLjQiTiA4OMKwMTgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              ></iframe>
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};


export default ContactPage;
