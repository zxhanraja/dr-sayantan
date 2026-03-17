import React from 'react';
import AppointmentForm from '@/src/components/AppointmentForm';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, Clock, Phone } from 'lucide-react';

const AppointmentPage = () => {
  return (
    <main className="pt-32 pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Schedule a Visit
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-secondary mb-8"
          >
            Book Your <span className="text-primary italic">Appointment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary/50 max-w-2xl mx-auto text-xl leading-relaxed"
          >
            Your health shouldn't have to wait. Pick a time that fits your schedule, and we'll take care of the rest. We'll send you a quick confirmation once we've received your request.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-40">
          {[
            {
              icon: Calendar,
              title: "Seamless Booking",
              description: "Our streamlined process ensures you spend less time filling forms and more time focusing on your health.",
              color: "bg-blue-50 text-blue-600"
            },
            {
              icon: ShieldCheck,
              title: "Data Integrity",
              description: "We employ high-level encryption and strict medical confidentiality protocols for all patient data.",
              color: "bg-emerald-50 text-emerald-600"
            },
            {
              icon: Clock,
              title: "Clinical Punctuality",
              description: "We respect your schedule. Our clinic operations are optimized to minimize wait times and maximize care.",
              color: "bg-purple-50 text-purple-600"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 text-center group hover:shadow-[0_32px_64px_-16px_rgba(31,122,140,0.08)] hover:border-primary/10 transition-all duration-700"
            >
              <div className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-current/5`}>
                <item.icon size={36} />
              </div>
              <h3 className="text-3xl font-display font-bold text-secondary mb-6">{item.title}</h3>
              <p className="text-xl text-secondary/50 leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Preparation Checklist */}
        <section className="mb-40">
          <div className="bg-secondary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full -mr-96 -mt-96 blur-[120px]" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-block px-5 py-2 rounded-full bg-white/5 text-accent text-xs font-bold uppercase tracking-[0.3em] mb-8">
                  Patient Preparation
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-10 leading-tight">
                  Preparing for Your <br />
                  <span className="text-accent italic">Consultation</span>
                </h2>
                <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
                  To ensure the most effective diagnostic process, please review this checklist before your visit.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  "Previous medical history and reports",
                  "List of current medications & dosages",
                  "Recent laboratory test results",
                  "Insurance details (if applicable)",
                  "List of symptoms and their duration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-lg font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AppointmentForm />

        {/* FAQ or Additional Info */}
        <div className="mt-64 max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Common Inquiries
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-10 leading-none">
              Frequently Asked <span className="text-primary italic">Questions</span>
            </h2>
            <p className="text-lg text-secondary/40 max-w-2xl mx-auto leading-relaxed">
              Essential information to help you navigate your medical journey with confidence and clarity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Clinical Documentation",
                desc: "To ensure a comprehensive diagnostic assessment, please provide all relevant historical medical records, current pharmacotherapy details, and recent biochemical analysis reports."
              },
              {
                title: "Rescheduling Protocol",
                desc: "Clinical efficiency relies on scheduled adherence. Should you require a modification to your appointment, we request a minimum of 24 hours notice to optimize patient flow."
              },
              {
                title: "Financial Transactions",
                desc: "We facilitate diverse settlement modalities including major credit/debit instruments, digital UPI platforms, and conventional cash transactions at the clinical reception."
              },
              {
                title: "Emergency Procedures",
                desc: "In the event of acute clinical manifestations outside of standard operational hours, please contact our emergency line at 079801 65256 or proceed to the nearest trauma center."
              }
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 hover:border-primary/20 transition-all duration-500 group"
              >
                <h4 className="text-2xl font-display font-bold text-secondary mb-6 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {i + 1}
                  </div>
                  {info.title}
                </h4>
                <p className="text-xl text-secondary/50 leading-relaxed font-light">
                  {info.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};


export default AppointmentPage;
