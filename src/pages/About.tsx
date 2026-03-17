import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Heart, History, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="pt-32 pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-[70%] mx-auto"
          >
            <div className="w-full rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-[0_48px_96px_-16px_rgba(0,0,0,0.15)] border-[6px] sm:border-[10px] border-white bg-white relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=60&w=800&h=1000"
                alt="Dr. Sayantan Gayen"
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-secondary text-white p-3 sm:p-5 rounded-[1.2rem] shadow-2xl z-20 border-4 border-white"
            >
              <div className="text-xl sm:text-2xl font-display font-bold text-accent">10+</div>
              <div className="text-[6px] sm:text-[8px] uppercase tracking-[0.2em] font-bold opacity-50 mt-0.5">Years of Excellence</div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-0" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Consultant Physician & Diabetician
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-secondary mb-6 sm:mb-10 leading-tight">
              Dr. Sayantan <br />
              <span className="text-primary italic">Gayen</span>
            </h1>

            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-secondary/60 leading-relaxed mb-12 sm:mb-16 font-light">
              <p className="text-xl sm:text-2xl font-medium text-secondary italic border-l-4 border-primary/20 pl-6 sm:pl-8 py-2">
                "I don't just treat symptoms; I treat people."
              </p>
              <p>
                That's the core belief that drives my practice. In a world of 5-minute consultations, I choose to listen. Whether you're managing a lifelong condition like diabetes or just feeling 'off', your story is the most important diagnostic tool I have.
              </p>
              <p>
                Based in the heart of <span className="text-primary font-bold">Behala, Kolkata</span>, I've spent the last decade bridging the gap between advanced medical science and the human touch. My approach is rooted in empathy, precision, and a commitment to long-term wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                { icon: GraduationCap, title: "Education", desc: "MD Internal Medicine, Specialized training in Diabetology from premier institutions." },
                { icon: Award, title: "Specialization", desc: "Expertise in Diabetes, Hypertension, Thyroid & Complex Lifestyle Diseases." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 sm:gap-6 p-6 sm:p-10 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 group hover:shadow-[0_32px_64px_-16px_rgba(31,122,140,0.08)] transition-all duration-500">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner shrink-0">
                    <item.icon size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-secondary mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-secondary/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Milestones Section */}
        <section className="mb-24 sm:mb-40">
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-primary/5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
              Professional Journey
            </div>
            <h2 className="text-3xl sm:text-6xl md:text-7xl font-display font-bold text-secondary mb-6 sm:mb-10 leading-tight sm:leading-none">
              A Decade of <span className="text-primary">Clinical Impact</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
              {[
                { year: "2014", title: "Medical Graduation", desc: "Completed MBBS with honors, beginning the medical journey." },
                { year: "2017", title: "MD Internal Medicine", desc: "Specialized in advanced internal medicine and patient care." },
                { year: "2019", title: "Diabetology Focus", desc: "Advanced certification in metabolic disorders and diabetes." },
                { year: "2024", title: "1000+ Success Stories", desc: "A decade of serving the Kolkata community with excellence." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 relative group hover:shadow-[0_32px_64px_-16px_rgba(31,122,140,0.08)] transition-all duration-500"
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4 sm:mb-6">{item.year}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-4">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-secondary/40 leading-relaxed">{item.desc}</p>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary text-white rounded-[2.5rem] sm:rounded-[5rem] p-8 sm:p-16 lg:p-32 mb-24 sm:mb-40 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full -mr-96 -mt-96 blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full -ml-48 -mb-48 blur-[120px]" />

          <div className="relative z-10 max-w-5xl">
            <div className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-white/5 text-accent text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-8 sm:mb-12">
              Our Clinical Philosophy
            </div>
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-display font-bold mb-10 sm:mb-16 leading-[1] sm:leading-[0.9] tracking-tighter">
              Patient-Centered <br />
              <span className="text-accent italic">Excellence.</span>
            </h2>
            <p className="text-xl sm:text-3xl md:text-4xl text-white/80 font-light leading-relaxed mb-12 sm:mb-20 italic font-display">
              "My goal is to provide evidence-based medical care that is tailored to each individual's unique health profile. I believe in a preventive approach, where we work together to manage chronic conditions through early detection and lifestyle optimization."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">
              {[
                { icon: Heart, title: "Compassionate", desc: "Treating every patient with dignity, respect, and profound empathy." },
                { icon: History, title: "Evidence-Based", desc: "Utilizing the latest medical research and global clinical protocols." },
                { icon: Users, title: "Educational", desc: "Empowering patients with knowledge to take charge of their health." }
              ].map((item, i) => (
                <div key={i} className="space-y-4 sm:space-y-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-xl sm:rounded-[1.5rem] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-secondary transition-all duration-500 shadow-lg">
                    <item.icon size={28} className="sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold">{item.title}</h4>
                  <p className="text-base sm:text-lg text-white/40 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Conversation Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">Why Choose Me?</h2>
            <p className="text-secondary/40 text-lg">Beyond the stethoscope and the prescriptions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">01</div>
                Real Conversations
              </h3>
              <p className="text-secondary/60 leading-relaxed">
                Medical jargon can be scary. I make it a point to explain your health in a way that makes sense. No confusing terms, just clear paths to getting better.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-primary">02</div>
                Preventive Focus
              </h3>
              <p className="text-secondary/60 leading-relaxed">
                The best way to treat a disease is to stop it before it starts. I work with you on diet, exercise, and stress management to keep you out of the hospital.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">03</div>
                Modern Protocols
              </h3>
              <p className="text-secondary/60 leading-relaxed">
                Medicine evolves every day. I stay updated with the latest global standards in Diabetology and Internal Medicine to ensure you get the best care available.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-primary">04</div>
                Long-term Partnership
              </h3>
              <p className="text-secondary/60 leading-relaxed">
                I'm not just your doctor for today; I'm your health partner for life. We'll track your progress together and adjust as your life changes.
              </p>
            </div>
          </div>

          <div className="bg-medical-bg p-12 rounded-[3rem] border border-gray-100 mb-24 text-center">
            <h3 className="text-3xl font-display font-bold text-secondary mb-6">Ready to start your journey?</h3>
            <p className="text-secondary/50 mb-10 max-w-2xl mx-auto">
              Your health is your most valuable asset. Let's protect it together with a personalized plan that fits your lifestyle.
            </p>
            <Link to="/appointment" className="btn-primary inline-flex">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};


export default About;
