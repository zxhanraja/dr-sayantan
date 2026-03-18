import React from 'react';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import AppointmentForm from '@/src/components/AppointmentForm';
import Testimonials from '@/src/components/Testimonials';
import FAQ from '@/src/components/FAQ';
import { motion } from 'motion/react';
import { Quote, Star, MapPin, Phone, Clock, Users, Activity, History, ArrowRight, Heart, Shield, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />



      {/* About Section Preview */}
      <section className="section-padding bg-white overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-bg/50 -z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-[300px] sm:max-w-none mx-auto lg:mx-0"
          >
            <div className="relative z-10 rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-[0_48px_96px_-16px_rgba(0,0,0,0.12)] border-[12px] sm:border-[20px] border-white bg-white group">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=70&w=800&fm=webp"
                alt="Doctor Consultation"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-secondary text-white p-10 rounded-[3rem] shadow-2xl hidden sm:block border border-white/10 z-20"
            >
              <div className="text-5xl font-display font-bold leading-none mb-2">10+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Years of Excellence</div>
            </motion.div>

            <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/5 rounded-full -z-0 blur-[100px] opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
              Meet the Doctor
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-secondary mb-10 leading-[0.9] tracking-tighter">
              Your Health, <br />
              <span className="text-primary italic font-serif font-medium">My Priority.</span>
            </h2>
            <div className="space-y-8 text-xl text-secondary/50 leading-relaxed mb-16 font-light">
              <p>
                I'm <span className="text-secondary font-medium">Dr. Sayantan Gayen</span>, and I believe that good medicine starts with a good conversation. In my decade of practice as a Consultant Physician and Diabetician in Kolkata, I've learned that every patient is unique.
              </p>
              <p>
                Whether you're visiting for a routine checkup or managing a chronic condition like diabetes, my goal is to provide care that is as compassionate as it is expert.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  { title: "Diabetes Specialist", icon: Activity },
                  { title: "Preventive Care", icon: Shield }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-secondary/70 text-sm uppercase tracking-widest">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <Link to="/about" className="btn-primary inline-flex group py-6 px-12 text-lg rounded-2xl">
              Read Full Biography
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Services />

      <Testimonials />

      <FAQ />

      {/* Location Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.01] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#1F7A8C 2px, transparent 2px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8">
                Clinic Location
              </div>
              <h2 className="text-4xl sm:text-7xl md:text-8xl font-display font-bold text-secondary mb-12 leading-tight tracking-tighter">
                Visit Us in <span className="text-primary">Behala</span>
              </h2>

              <div className="space-y-6 mb-16">
                {[
                  { icon: MapPin, title: "Clinic Address", desc: "Manmohan Park, 41/5 Raja Rammohan Roy Rd, Behala Chowrasta, Kolkata 700008", color: "bg-blue-50 text-blue-600" },
                  { icon: Phone, title: "Contact Number", desc: "079801 65256", color: "bg-emerald-50 text-emerald-600" },
                  { icon: Clock, title: "Working Hours", desc: "Mon - Sat: 10:00 AM - 08:00 PM", color: "bg-purple-50 text-purple-600" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex flex-col mb-4 items-start gap-4 sm:gap-8 p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] bg-medical-bg border border-gray-50 group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <item.icon size={24} />
                    </div>
                    <div className="w-full">
                      <h4 className="text-lg sm:text-xl font-bold text-secondary mb-2">{item.title}</h4>
                      <p className="text-secondary/60 leading-relaxed text-sm sm:text-lg break-words w-full">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex py-5 px-12 text-xl group"
              >
                Get Directions
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={28} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="h-[500px] sm:h-[750px] rounded-[3.5rem] sm:rounded-[5rem] overflow-hidden shadow-[0_64px_128px_-24px_rgba(0,0,0,0.18)] border-[12px] sm:border-[20px] border-white bg-gray-100 relative group"
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

      <AppointmentForm />
    </main>
  );
};


export default Home;
