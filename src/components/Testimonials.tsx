import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Amitabh Chatterjee",
    text: "I was struggling with my sugar levels for years. Dr. Gayen didn't just give me pills; he sat me down and explained how my lifestyle was affecting me. Today, my diabetes is under control and I've never felt more energetic.",
    role: "Diabetes Patient",
    date: "2 weeks ago",
    initial: "AC",
    lang: "en"
  },
  {
    name: "Priya Sharma",
    text: "Dr. Gayen ki sabse achi baat ye hai ki wo patient ki baat sunte hai. Most doctors jaldi mein hote hai, but wo har ek sawal ka jawab dene ke liye time nikalte hai. Behala mein unka clinic best hai.",
    role: "General Checkup",
    date: "1 month ago",
    initial: "PS",
    lang: "hinglish"
  },
  {
    name: "Rajesh Gupta",
    text: "Mera blood pressure hamesha high rehta tha. Dr. Gayen ka treatment bahut effective raha. He helped me manage it with medicine and lifestyle changes. Finally, I feel in control of my health.",
    role: "Hypertension Patient",
    date: "3 months ago",
    initial: "RG",
    lang: "en"
  },
  {
    name: "Sanjay Verma",
    text: "Dr. Gayen is highly professional and knowledgeable. He treated my father's chronic condition with extreme care. Staff bhi bahut helpful hai. Highly recommended for internal medicine.",
    role: "Family Care",
    date: "4 days ago",
    initial: "SV",
    lang: "hinglish"
  },
  {
    name: "Meera Das",
    text: "Diabetes treatment ke liye Dr. Sayantan Gayen best hai. Unki advice se mera sugar ab bilkul control mein hai. Unka behavior bahut acha hai aur wo patients ko kafi time dete hai.",
    role: "Diabetes Patient",
    date: "2 months ago",
    initial: "MD",
    lang: "hinglish"
  },
  {
    name: "Vikram Singh",
    text: "Mujhe pichle 5 saalo se sugar ki problem thi. Kai doctors ko dikhaya par aaram nahi mila. Dr. Gayen ke ilaaj se ab main bahut better feel kar raha hoon. Best doctor in Kolkata.",
    role: "Diabetes Care",
    date: "5 months ago",
    initial: "VS",
    lang: "hinglish"
  },
  {
    name: "Ananya Roy",
    text: "A very compassionate doctor who takes time to understand the root cause. My experience for thyroid management was excellent. The clinic environment is very clean and professional.",
    role: "Thyroid Patient",
    date: "1 week ago",
    initial: "AR",
    lang: "en"
  },
  {
    name: "Rahul Mukherjee",
    text: "Behala Chowrasta ke paas unka chamber hai. Bahut acha experience raha. Doctor babu bahut patience ke saath sab sunte hai. Unki di hui medicines se main bahut jaldi theek ho gaya.",
    role: "General Health",
    date: "6 months ago",
    initial: "RM",
    lang: "hinglish"
  },
  {
    name: "Sunita Kapoor",
    text: "Dr. Sayantan ek bahut hi experienced doctor hain. Unhone meri maa ke high blood pressure ka bahut ache se treatment kiya. Ab unki health mein kafi improvement hai. Thank you doctor saab.",
    role: "Hypertension Care",
    date: "3 weeks ago",
    initial: "SK",
    lang: "hinglish"
  },
  {
    name: "Debashis Paul",
    text: "Excellent diagnosis and treatment. Dr. Gayen is very precise with his medications. I visited him for my persistent fever and he diagnosed the issue correctly in the first visit.",
    role: "Fever Treatment",
    date: "2 days ago",
    initial: "DP",
    lang: "en"
  },
  {
    name: "Kavita Jha",
    text: "Mere pita ji ka sugar level bahut badh gaya tha. Dr. Gayen ne bahut hi effectively ise control kiya. Wo na sirf ek ache doctor hain balki ek bahut ache insaan bhi hain.",
    role: "Diabetes Patient",
    date: "4 months ago",
    initial: "KJ",
    lang: "hinglish"
  },
  {
    name: "Subrata Sen",
    text: "Dr. Gayen is a very experienced physician. Unka diabetes management program bahut effective hai. I feel much healthier now. Unke clinic mein saari modern facilities available hai.",
    role: "Diabetes Management",
    date: "1 year ago",
    initial: "SS",
    lang: "hinglish"
  }
];

const Testimonials = () => {
  // Duplicate the reviews for a seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-medical-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            Google Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-secondary mb-6"
          >
            Trusted by <span className="text-primary italic">Thousands</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-1">
              <span className="text-2xl font-display font-bold text-secondary">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-xs font-bold text-secondary/40 uppercase tracking-widest">124+ Reviews</span>
          </motion.div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {[...duplicatedReviews].map((review, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[320px] sm:w-[400px] bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 mx-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-secondary font-bold text-lg">
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-sm sm:text-base flex items-center gap-1.5">
                      {review.name}
                      <CheckCircle2 size={14} className="text-blue-500 fill-blue-500/10" />
                    </div>
                    <div className="text-[10px] sm:text-xs text-secondary/40 font-medium">{review.date}</div>
                  </div>
                </div>
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-5 sm:h-6 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>

              <div className="flex-grow">
                <p className="text-sm sm:text-base text-secondary/70 leading-relaxed font-light italic whitespace-normal">
                  "{review.text}"
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary/60">{review.role}</span>
                <div className="flex items-center gap-1 text-[10px] font-bold text-secondary/30 uppercase tracking-tighter">
                  Verified Review
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
