import React from 'react';
import { motion } from 'motion/react';
import { Activity, Heart, Shield, Thermometer, UserCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Diabetes Management",
    description: "Living with diabetes doesn't have to mean missing out on life. We'll work together to find a balance that works for you.",
    longDescription: "Managing diabetes is a team effort. I don't just give you a list of 'don'ts'; I help you find the 'dos'. From the latest glucose monitoring tech to practical meal planning that actually tastes good, we'll build a roadmap that keeps your blood sugar stable and your spirits high. Our goal? Preventing complications before they even think about starting.",
    icon: Activity,
    color: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hypertension Treatment",
    description: "High blood pressure is often silent, but our approach is loud and clear: we're here to protect your heart.",
    longDescription: "Think of your blood pressure as the 'weather' of your cardiovascular system. When it's stormy, things get damaged. I use a mix of modern medicine, stress-busting techniques, and simple dietary tweaks to bring the sunshine back. We'll monitor your progress closely, ensuring your heart stays strong and your risk of stroke stays low.",
    icon: Heart,
    color: "bg-red-50 text-red-600",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "General Medicine",
    description: "From a stubborn fever to complex health puzzles, I'm here to help you feel like yourself again.",
    longDescription: "Internal medicine is like being a health detective. I look at the big picture—how your sleep, your stress, and your symptoms all connect. Whether it's a seasonal flu or a chronic condition that's been bothering you for months, we'll dig deep to find the root cause and get you back on your feet with a treatment plan that makes sense.",
    icon: Stethoscope,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Thyroid Disorders",
    description: "If your energy levels are on a rollercoaster, your thyroid might be the culprit. Let's get you back in balance.",
    longDescription: "Your thyroid is the thermostat of your body. When it's off, everything feels wrong—your weight, your mood, your energy. I provide precise testing and personalized hormone management to stop the 'brain fog' and help you regain control over your metabolism. It's about more than just numbers on a lab report; it's about how you feel every morning.",
    icon: Shield,
    color: "bg-purple-50 text-purple-600",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Preventive Health",
    description: "The best time to fix a problem is before it starts. Our checkups are your health's early warning system.",
    longDescription: "Why wait for something to break? My preventive checkups are designed to catch the tiny 'glitches' in your health before they become major issues. We'll look at your family history, your lifestyle, and your unique risk factors to create a 'maintenance schedule' that keeps you running smoothly for years to come.",
    icon: UserCheck,
    color: "bg-orange-50 text-orange-600",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Lifestyle Diseases",
    description: "Modern life is fast, but your health shouldn't suffer for it. Let's tackle cholesterol and weight together.",
    longDescription: "Office jobs, fast food, and high stress—modern life isn't always kind to our bodies. I specialize in managing 'lifestyle' conditions like high cholesterol and obesity without making you feel judged. We'll create sustainable, realistic changes that fit into your busy Kolkata life, using a combination of medical support and behavioral coaching.",
    icon: Thermometer,
    color: "bg-teal-50 text-teal-600",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
  }
];

const ServicesPage = () => {
  return (
    <main className="pt-32 pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Medical Excellence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-secondary mb-6 sm:mb-8"
          >
            Our Medical <span className="text-primary italic">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary/50 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed px-4"
          >
            Expert healthcare solutions tailored to your individual needs. We combine clinical expertise with a patient-centered approach.
          </motion.p>
        </div>

        <div className="space-y-24 sm:space-y-48">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-[50%] lg:shrink-0">
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2.5rem] ${service.color} flex items-center justify-center shadow-2xl shadow-current/10 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon size={28} className="sm:w-9 sm:h-9" />
                  </div>
                  <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-secondary mb-6 sm:mb-10 leading-[1.1]">
                  {service.title}
                </h2>

                <div className="space-y-4 sm:space-y-8 text-lg sm:text-xl text-secondary/60 leading-relaxed mb-8 sm:mb-14 font-medium text-justify lg:text-left">
                  <p className="text-secondary/80 font-medium italic border-l-4 border-primary/20 pl-4 sm:pl-6">
                    {service.description}
                  </p>
                  <p className="text-base sm:text-lg">
                    {service.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-14">
                  {["Expert Care", "Modern Tech", "Personalized"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-medical-bg border border-gray-100 text-xs font-bold text-secondary/40 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/appointment"
                  className="btn-primary inline-flex py-5 px-10 text-lg group"
                >
                  Book Consultation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </Link>
              </div>

              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[42%] relative mx-auto lg:mx-0 mt-8 lg:mt-0">
                <div className="aspect-[4/5] lg:aspect-[4/3] rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-[6px] sm:border-[10px] border-white bg-white relative z-10 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Floating Stat Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-card p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] translate-y-20 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100">
                    <div className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-2">Success Rate</div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-secondary">98% Positive Outcomes</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-16 -left-16 w-80 h-80 ${service.color.split(' ')[0]}/10 rounded-full blur-[120px] -z-0 animate-pulse`} />
                <div className={`absolute -bottom-16 -right-16 w-80 h-80 ${service.color.split(' ')[0]}/10 rounded-full blur-[120px] -z-0`} />

                {/* Geometric Accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/5 rounded-[6rem] -z-0 rotate-6" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-[7rem] -z-0 -rotate-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mt-32 sm:mt-64 mb-24 sm:mb-40">
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-primary/5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
              Our Methodology
            </div>
            <h2 className="text-3xl sm:text-6xl md:text-7xl font-display font-bold text-secondary mb-6 sm:mb-10 leading-tight sm:leading-none">
              How We <span className="text-primary">Care For You</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { step: "01", title: "Consultation", desc: "A deep dive into your medical history and current lifestyle." },
              { step: "02", title: "Diagnosis", desc: "Precise testing using modern medical protocols and technology." },
              { step: "03", title: "Treatment", desc: "Personalized care plans tailored to your unique biology." },
              { step: "04", title: "Follow-up", desc: "Continuous monitoring to ensure long-term health stability." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-6xl sm:text-8xl font-display font-bold text-primary/5 absolute -top-6 sm:-top-10 -left-4 sm:-left-6 group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10 pt-8 sm:pt-10">
                  <h4 className="text-xl sm:text-2xl font-bold text-secondary mb-2 sm:mb-4">{item.title}</h4>
                  <p className="text-sm sm:text-base text-secondary/50 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 sm:mt-8 h-1 w-12 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-40 bg-secondary rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 lg:p-24 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full -ml-48 -mt-48 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full -mr-48 -mb-48 blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-6xl md:text-7xl font-display font-bold mb-6 sm:mb-10 leading-tight">
              Ready to Prioritize <br />
              <span className="text-accent italic">Your Health?</span>
            </h2>
            <p className="text-lg sm:text-2xl text-white/70 mb-10 sm:mb-16 font-medium leading-relaxed">
              Schedule an appointment with Dr. Sayantan Gayen today and experience personalized medical care at its best.
            </p>
            <Link
              to="/appointment"
              className="btn-primary bg-white text-secondary hover:bg-accent hover:text-secondary px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-xl inline-flex group"
            >
              Book Your Appointment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};


export default ServicesPage;
