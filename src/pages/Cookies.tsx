import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Zap, Map, ShieldAlert, SlidersHorizontal, Settings } from 'lucide-react';

const Cookies = () => {
    const sections = [
        {
            icon: Cookie,
            title: "1. What Are Digital Cookies?",
            content: "In the modern digital landscape, cookies are small, completely harmless text files that are temporarily deposited onto your computer, tablet, or mobile device by a website's server when you navigate through its pages. At Dr. Sayantan Gayen's Clinic website, we utilize these benign digital markers to ensure that our website functions seamlessly and provides you with a vastly improved, highly optimized user experience. Think of cookies as the website's short-term memory; they allow our web application to remember your previous actions, interface preferences, and basic settings so you aren't forced to repetitively configure them every single time you attempt to access our medical booking systems or read our healthcare resources."
        },
        {
            icon: Zap,
            title: "2. Strictly Necessary Core Cookies",
            content: "Certain categories of cookies deployed on our platform are fundamentally indispensable for the core mechanics of the website to operate correctly. These are classified as strictly necessary cookies. Without these specific digital files, critical functionalities—such as securely authenticating your identity for appointment bookings, preserving the integrity of the medical forms you are currently filling out, and preventing fraudulent submissions—would instantaneously cease to function. Because these cookies are essential to delivering the digital healthcare service you are explicitly requesting, they are automatically deployed upon your arrival to the site and do not structurally require prior user consent under standard operational guidelines."
        },
        {
            icon: Map,
            title: "3. Analytical and Performance Cookies",
            content: "To continuously elevate the digital experience we provide to our patients, we utilize advanced analytical and performance cookies. These sophisticated tools aggregate profoundly anonymized data detailing exactly how our diverse user base interacts with our platform. They meticulously track non-identifiable metrics such as the most frequently visited educational pages, the geographical region generating the most traffic, and the specific touchpoints where users might be experiencing debilitating errors or frustrating software glitches. We leverage this aggregated, absolutely anonymous statistical intelligence to redesign our website architecture, drastically improve loading speeds, and ensure you can find vital medical information with absolute ease."
        },
        {
            icon: SlidersHorizontal,
            title: "4. Functionality and Personalization Cookies",
            content: "Functionality cookies elevate your browsing experience by enabling our website to profoundly remember the explicit choices you have previously made. This includes remembering variables such as your preferred language settings, text contrast adaptations for visually impaired accessibility, and specific regional locations that facilitate quicker appointment scheduling. By retaining these hyper-specific user parameters, our system can dynamically mold the website's interface to match your personal requirements, delivering an incredibly tailored, deeply personal, and highly efficient user journey every time you return to our digital clinic environment."
        },
        {
            icon: ShieldAlert,
            title: "5. Third-Party Integrations and Tracking",
            content: "While our core ethos is privacy-centric, our website may carefully integrate specialized services provided by trusted third-party technology partners to enhance functionality—such as embedded dynamic location maps to assist you in navigating to our Behala clinic, or secure external payment gateways for consultation fees. Consequently, these highly vetted third-party services may respectfully deploy their own independent cookies onto your device to ensure their integrations function perfectly. We mandate that these partners adhere strictly to global data protection standards, yet we strongly advise our patients that these third-party elements are simultaneously governed by their own independent, external privacy policies, which operate outside our direct administrative purview."
        },
        {
            icon: Settings,
            title: "6. Master Control Over Cookie Preferences",
            content: "We passionately champion your overarching right to digital autonomy and completely respect your choice regarding cookie deployment. You possess the absolute capacity to manually restrict, ruthlessly block, or permanently delete cookies directly through the internal settings of your chosen web browser (be it Chrome, Safari, Firefox, or Edge). Most modern browser configurations provide sophisticated, highly granular control interfaces allowing you to reject all non-essential cookies automatically. However, we feel obligated to transparently inform you that comprehensively disabling all cookies, particularly the 'strictly necessary' variants, may inadvertently trigger significant functional degradations, potentially hindering your ability to successfully book appointments or utilize essential interactive features of our clinic's website."
        }
    ];

    return (
        <div className="min-h-screen bg-medical-bg pt-32 pb-24 px-6 relative overflow-hidden dot-matrix">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -ml-32 -mb-32" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg shadow-primary/5 border border-gray-100 text-secondary font-bold hover:bg-primary hover:text-white transition-all duration-300 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        </div>
                        Back to Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                        Digital Tracking
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-display font-bold text-secondary mb-6 tracking-tighter">
                        Cookie <span className="text-primary italic font-serif">Policy</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-secondary/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Understanding how we use small digital files to create a seamless, fast, and personalized browsing experience for our patients.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
                        >
                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                    <section.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-secondary mb-4 font-display tracking-tight">{section.title}</h3>
                                    <p className="text-secondary/60 leading-relaxed font-light text-[15px] sm:text-base">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center text-secondary/40 text-sm font-bold uppercase tracking-widest border-t border-gray-200/50 pt-8"
                >
                    Last Updated: October 2023 • Dr. Sayantan Gayen Clinic
                </motion.div>
            </div>
        </div>
    );
};

export default Cookies;
