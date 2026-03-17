import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, User, Mail, MessageSquare, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RippleButton } from '@/src/components/ui/ripple-button';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  concern: string;
}

const INITIAL_FORM: FormData = { name: '', phone: '', email: '', date: '', concern: '' };

// ─── Input wrapper ─────────────────────────────────────────────────────────────

const Field = ({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="space-y-3 w-full">
    <label className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.3em] ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors pointer-events-none">
        <Icon size={18} />
      </div>
      {children}
    </div>
  </div>
);

const inputClass =
  'w-full pl-12 pr-5 py-3 sm:py-3.5 bg-medical-bg border border-transparent rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary/20 transition-all font-medium text-xs sm:text-base';

// ─── Main Component ───────────────────────────────────────────────────────────

const AppointmentForm = () => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // All fields filled? 
    if (!form.name || !form.phone || !form.email || !form.date) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
  };

  return (
    <section className="section-padding bg-medical-bg relative overflow-hidden dot-matrix">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-[3rem] sm:rounded-[5rem] shadow-[0_64px_128px_-24px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col lg:flex-row border border-gray-50">

          {/* ── Info Panel ─────────────────────────────────────────────────────── */}
          <div className="lg:w-[40%] bg-secondary p-5 sm:p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full -mr-40 -mt-40 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full -ml-40 -mb-40 blur-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                  Priority Care
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
                  Start Your <br />
                  <span className="text-primary italic font-serif font-medium">Better Health.</span>
                </h2>
                <p className="text-lg text-white/40 mb-10 leading-relaxed font-light">
                  Take the first step towards personalized medical care. Schedule your consultation with Dr. Sayantan Gayen today.
                </p>
              </motion.div>

              <div className="space-y-6 mt-auto">
                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Phone size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-1">Direct Line</div>
                    <div className="text-lg sm:text-xl font-display font-bold tracking-tight">079801 65256</div>
                  </div>
                </div>
                {/* Hours */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Calendar size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-1">Clinic Hours</div>
                    <div className="text-lg sm:text-xl font-display font-bold tracking-tight">Mon – Sat: 10 AM – 8 PM</div>
                  </div>
                </div>
              </div>

              {/* Security badge */}
              <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm hidden sm:block">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-3 text-sm uppercase tracking-widest">
                  <ShieldCheck size={18} />
                  Safe &amp; Secure
                </h4>
                <p className="text-sm text-white/30 leading-relaxed font-light">
                  Your health data is encrypted and handled with the highest level of clinical confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* ── Form Panel ─────────────────────────────────────────────────────── */}
          <div className="lg:w-[60%] p-4 sm:p-10 lg:p-16 bg-white w-full flex items-center">
            <AnimatePresence mode="wait">
              {submitted ? (
                // ── Success State ──────────────────────────────────────────────
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full flex flex-col items-center text-center py-10 gap-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle2 size={42} className="text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-secondary mb-3 tracking-tight">
                      Request Received!
                    </h3>
                    <p className="text-secondary/50 font-light leading-relaxed max-w-sm">
                      Thank you, <span className="text-secondary font-semibold">{form.name}</span>. Our team will call you on{' '}
                      <span className="text-secondary font-semibold">{form.phone}</span> to confirm your appointment.
                    </p>
                  </div>
                  <div className="px-5 py-2.5 bg-primary/5 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                    📅 Preferred Date: {form.date}
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-2 text-sm text-secondary/40 hover:text-primary transition-colors font-medium underline underline-offset-4"
                  >
                    Book another appointment
                  </button>
                </motion.div>
              ) : (
                // ── Form State ─────────────────────────────────────────────────
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 sm:space-y-8 w-full"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-8 w-full">
                    <Field label="Full Name" icon={User}>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone Number" icon={Phone}>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 sm:gap-8 w-full">
                    <Field label="Email Address" icon={Mail}>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Preferred Date" icon={Calendar}>
                      <input
                        name="date"
                        type="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.3em] ml-1">
                      Health Concern
                    </label>
                    <div className="relative group">
                      <div className="absolute left-5 top-4 text-gray-300 group-focus-within:text-primary transition-colors pointer-events-none">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        name="concern"
                        value={form.concern}
                        onChange={handleChange}
                        placeholder="Briefly describe your health concern..."
                        rows={3}
                        className="w-full pl-12 pr-5 py-3 sm:py-4 bg-medical-bg border border-transparent rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary/20 transition-all font-medium resize-none text-xs sm:text-base min-h-[100px]"
                      />
                    </div>
                  </div>

                  <RippleButton
                    type="submit"
                    className="btn-primary w-full py-3 sm:py-4 text-xs sm:text-base shadow-xl shadow-primary/10 group rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 mt-2 sm:mt-4 max-w-[250px] sm:max-w-none mx-auto"
                  >
                    Confirm Appointment
                    <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                  </RippleButton>

                  <div className="flex items-center justify-center gap-3 text-secondary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
                    <ShieldCheck size={16} />
                    HIPAA Compliant &amp; Secure
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
