import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, Server, CheckCircle2 } from 'lucide-react';

const Privacy = () => {
    const sections = [
        {
            icon: ShieldCheck,
            title: "1. Understanding Our Commitment to Your Privacy",
            content: "At Dr. Sayantan Gayen's Clinic, we recognize that your health information is highly personal and sensitive. Our commitment to protecting your privacy is at the core of our practice. This comprehensive privacy policy outlines the rigorous standards, protocols, and technologies we employ to ensure that your medical data, personal details, and communication with our clinic remain strictly confidential. We believe that a strong doctor-patient relationship is built on a foundation of absolute trust, and safeguarding your information is our first step in building that trust. By accessing our services, you entrust us with vital information, and we take that responsibility incredibly seriously. We adhere strictly to national health data protection regulations and continuously update our security measures to combat modern digital threats."
        },
        {
            icon: Database,
            title: "2. Comprehensive Data Collection Practices",
            content: "When you visit our clinic or use our digital platforms, we collect specific types of information necessary to provide you with exceptional medical care. This includes your basic demographic details such as name, contact number, email address, and physical address. More importantly, we collect detailed medical history, current health metrics, diagnostic reports, and ongoing treatment plans. We may also collect technical data when you interact with our website, such as your IP address, browser type, and interaction metrics to improve our digital services. This data is never collected stealthily; we ensure transparent data collection mechanisms where you are fully aware of what information is being gathered and for what specific medical or administrative purpose. Every piece of data collected serves a direct purpose in enhancing your specific healthcare journey."
        },
        {
            icon: Lock,
            title: "3. Rigorous Data Usage and Processing",
            content: "The primary purpose of processing your data is to deliver personalized, effective, and safe medical treatments. Your health records allow Dr. Gayen to accurately diagnose conditions, track the progression of your health over time, and prescribe the most effective medications or lifestyle interventions. Beyond direct medical care, your information helps us manage administrative tasks efficiently, such as scheduling appointments, sending necessary health reminders, and processing any required clinic communications. We strictly prohibit the use of your personal health information for unauthorized marketing purposes. Any data processed for analytical purposes to improve our clinic's services is thoroughly anonymized, ensuring that no individual patient can ever be identified from aggregated health trends or clinic performance metrics."
        },
        {
            icon: Server,
            title: "4. State-of-the-Art Security Measures",
            content: "We employ enterprise-grade security architecture to protect your digital health records. Our databases are secured with advanced end-to-end encryption protocols, ensuring that your data is unreadable to any unauthorized entities both while in transit and at rest on our secure servers. We utilize robust firewall systems, regular vulnerability scanning, and multi-factor authentication for all clinic staff accessing patient records. Physical access to any servers or hardware containing patient information is strictly limited and monitored. In the highly unlikely event of a data breach, we have detailed incident response protocols in place that include immediate containment measures, thorough forensic investigation, and transparent communication with all potentially affected patients as mandated by health data protection laws."
        },
        {
            icon: Eye,
            title: "5. Information Sharing and Strict Confidentiality",
            content: "Medical confidentiality is a sacred tenet of our practice. We explicitly do not sell, rent, or trade your personal or medical information to any third-party marketers or data brokers under any circumstances. However, to provide you with seamless healthcare, we may need to securely share specific aspects of your medical records with trusted medical entities. This includes diagnostic laboratories for blood tests or imaging, referring specialists for comprehensive care coordination, and pharmacies for prescription fulfillment. All such third-party partners are strictly vetted and are legally bound by stringent confidentiality agreements and healthcare privacy laws that match or exceed our own rigorous standards."
        },
        {
            icon: CheckCircle2,
            title: "6. Your Absolute Rights and Control",
            content: "We believe that you should have complete control over your health information. Under our privacy framework, you have the unequivocal right to request access to your complete medical records at any time. You hold the right to request corrections if you believe any information we hold is inaccurate or incomplete. Furthermore, you have the right to request the deletion of your non-essential digital data, subject to legal medical record retention requirements. You can easily manage your communication preferences, opting out of non-essential clinic updates while still receiving critical appointment reminders. If you ever have concerns regarding how your data is handled, you have the right to direct inquiry with our administration, and we promise a swift, transparent, and comprehensive resolution to your queries."
        }
    ];

    return (
        <div className="min-h-screen bg-medical-bg pt-32 pb-24 px-6 relative overflow-hidden dot-matrix">
            {/* Background Decor */}
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
                        Data Protection
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-display font-bold text-secondary mb-6 tracking-tighter">
                        Privacy <span className="text-primary italic font-serif">Policy</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-secondary/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Your trust is our greatest asset. Learn how we rigorously protect your personal and medical information with uncompromised integrity.
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

export default Privacy;
