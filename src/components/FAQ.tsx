import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
    {
        question: "How do I book an appointment with Dr. Sayantan Gayen?",
        answer: "You can easily book an appointment by calling our direct emergency line at 079801 65256, or by filling out the online appointment form available on this website. Our team will get back to you promptly to confirm your scheduled time."
    },
    {
        question: "What should I bring to my first consultation?",
        answer: "For your first visit, please bring any previous medical records, recent blood test reports, prescriptions of medicines you are currently taking, and a valid photo ID. This helps the doctor understand your medical history completely."
    },
    {
        question: "Do you specialize in both Type 1 and Type 2 Diabetes?",
        answer: "Yes, Dr. Gayen is highly experienced in the comprehensive management of both Type 1 and Type 2 Diabetes, as well as gestational diabetes. We provide personalized care plans, including insulin management and lifestyle modifications."
    },
    {
        question: "Where is the clinic exactly located?",
        answer: "Our clinic is located at Manmohan Park, 41/5 Raja Rammohan Roy Rd, Behala Chowrasta, Kolkata 700008. You can find detailed directions and an interactive map in the location section on our homepage."
    },
    {
        question: "Are tele-consultations or online video consultations available?",
        answer: "Depending on the nature of your health concern and your prior consultation history with us, tele-consultations may be arranged. Please contact our front desk via phone to discuss if an online consultation is suitable for your current needs."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-white relative overflow-hidden" id="faq">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-bg/40 -z-0" />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                {/* Left column - Title */}
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <HelpCircle size={14} />
                            Got Questions?
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-display font-bold text-secondary mb-6 leading-[1.1] tracking-tight">
                            Frequently <br />
                            <span className="text-primary italic font-serif font-medium">Asked Questions</span>
                        </h2>
                        <p className="text-lg text-secondary/50 leading-relaxed font-light mb-8">
                            Find quick answers to common questions about our clinic, appointments, and medical services.
                        </p>

                        {/* Contact Card */}
                        <div className="p-6 bg-medical-bg rounded-[2rem] border border-gray-100 flex flex-col gap-4 hidden lg:flex">
                            <p className="text-sm font-bold text-secondary">Still have a question?</p>
                            <p className="text-sm text-secondary/60 font-light leading-relaxed">
                                If you cannot find the answer to your question here, please do not hesitate to contact our clinic directly.
                            </p>
                            <a href="tel:07980165256" className="text-primary font-bold hover:underline flex items-center gap-2 mt-2">
                                Call 079801 65256
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right column - Accordion */}
                <div className="lg:col-span-8 mt-4 sm:mt-8 lg:mt-0">
                    <div className="space-y-4 sm:space-y-6">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={cn(
                                        "w-full rounded-[2rem] transition-all duration-500 border group overflow-hidden",
                                        isOpen
                                            ? "bg-white border-primary/20 shadow-2xl shadow-primary/5"
                                            : "bg-medical-bg border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-6"
                                    >
                                        <h3 className={cn(
                                            "text-lg sm:text-xl font-bold font-display tracking-tight transition-colors duration-300 pr-2",
                                            isOpen ? "text-primary" : "text-secondary group-hover:text-primary"
                                        )}>
                                            {faq.question}
                                        </h3>
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500",
                                            isOpen
                                                ? "bg-primary text-white rotate-180"
                                                : "bg-white border border-gray-200 text-gray-400 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary"
                                        )}>
                                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                                                    <p className="text-secondary/60 leading-relaxed font-light text-[15px] sm:text-base">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
