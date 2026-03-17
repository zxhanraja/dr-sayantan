import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, FileSignature, AlertCircle, Clock, HeartHandshake, Gavel } from 'lucide-react';

const Terms = () => {
    const sections = [
        {
            icon: Scale,
            title: "1. Acceptance of Medical Service Terms",
            content: "Welcome to the digital platform and clinical services of Dr. Sayantan Gayen. By accessing our website, booking an appointment, or utilizing any of our medical services, you explicitly agree to be bound by these comprehensive Terms and Conditions. These terms formulate a legally binding agreement between you (the patient or user) and our clinical establishment. We urge all patients and visitors to read these terms meticulously, as they dictate your rights, obligations, and the parameters within which we deliver our healthcare services. If you disagree with any segment of these provisions, we respectfully request that you refrain from using our digital booking systems or clinical facilities. Our commitment is to provide transparent governance over how we operate and interact with our valued patients."
        },
        {
            icon: FileSignature,
            title: "2. Scope of Clinical Services Provided",
            content: "Dr. Sayantan Gayen operates as an independent Consultant Physician and Diabetician. The medical services offered encompass comprehensive diagnostic consultations, long-term chronic disease management (particularly diabetes), preventive health screenings, and tailored therapeutic interventions. However, it is crucial to understand that the information presented on our website serves purely as educational material and does not constitute absolute medical advice substitute for a personalized consultation. While we strive for medical excellence, healthcare outcomes naturally vary. We are dedicated to providing the highest standard of evidence-based medical care, but we cannot legally or practically guarantee specific health outcomes, as individual physiological responses to treatments differ fundamentally."
        },
        {
            icon: Clock,
            title: "3. Appointment Booking and Cancellation Policy",
            content: "Our clinic operates on a highly structured scheduling system designed to ensure every patient receives adequate, unhurried attention. When you book an appointment via our digital platforms or via phone, you commit to arriving promptly at the scheduled time. We understand that medical and personal emergencies occur; therefore, we implement a compassionate cancellation policy. If you must cancel or reschedule your consultation, we require a minimum of 24 hours' notice. Repeated failures to attend scheduled appointments without prior notification (no-shows) severely disrupt clinical operations and deny other patients access to timely care. Consequently, the clinic reserves the right to refuse future advanced bookings for patients with a documented history of multiple unnotified absences."
        },
        {
            icon: AlertCircle,
            title: "4. Medical Emergencies and Urgent Care",
            content: "It is of paramount importance to clearly state that our clinic, website, and associated digital communication channels are absolutely NOT designed to handle acute medical emergencies. If you are experiencing what you believe to be a life-threatening medical situation—such as severe chest pain, profound shortness of breath, sudden neurological deficits, or major trauma—you must immediately contact emergency medical services or proceed to the nearest hospital casualty/emergency department without delay. Attempting to seek urgent care through our standard appointment booking forms or email systems may result in critical, life-endangering delays in receiving necessary emergency interventions."
        },
        {
            icon: HeartHandshake,
            title: "5. Patient Conduct and Mutual Respect",
            content: "We proudly foster a clinical environment rooted in profound mutual respect, empathy, and professional decorum. Dr. Gayen and the entire clinical staff pledge to treat every patient with the utmost dignity, disregarding race, gender, religion, or socioeconomic status. In return, we expect patients and their accompanying relatives to exhibit courteous behavior toward our administrative and medical staff. Any form of verbal abuse, physical intimidation, or disruptive behavior within the clinic premises or through our digital communication channels will not be tolerated. The clinic explicitly reserves the legal right to immediately terminate the doctor-patient relationship and deny service to any individual who violates these fundamental standards of respectful conduct."
        },
        {
            icon: Gavel,
            title: "6. Limitations of Liability and Legal Jurisdiction",
            content: "While Dr. Sayantan Gayen and the clinic staff exercise the highest degree of professional care and adherence to established medical protocols, our liability in relation to the use of our digital platforms is strictly limited to the maximum extent permitted by prevailing laws. We are not liable for direct, indirect, incidental, or consequential damages arising from your use of this website or inability to access our digital services due to technical downtime. Any dispute, claim, or legal controversy arising out of your utilization of our clinical services or these specific terms shall be governed exclusively by the laws of India, and the highly esteemed courts precisely located within the jurisdiction of Kolkata, West Bengal, shall retain exclusive legal jurisdiction over such matters."
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
                        Legal Information
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-display font-bold text-secondary mb-6 tracking-tighter">
                        Terms <span className="text-primary italic font-serif">&amp; Conditions</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-secondary/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Outlining the mutual agreements and operational guidelines that govern our professional medical relationship with you.
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

export default Terms;
