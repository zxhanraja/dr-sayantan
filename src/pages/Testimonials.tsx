import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, User, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Amitabh Chatterjee",
    text: "I was struggling with my sugar levels for years before I met Dr. Gayen. He didn't just give me pills; he sat me down and explained how my lifestyle was affecting me. Today, my diabetes is under control and I've never felt more energetic. He's truly a life-changer.",
    role: "Diabetes Patient",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Priya Sharma",
    text: "What I love about Dr. Gayen is that he actually listens. Most doctors are in a hurry, but he takes the time to answer every single question, no matter how small. His clinic in Behala is now my go-to for any health concern. Highly recommended!",
    role: "General Checkup",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Rajesh Gupta",
    text: "My blood pressure was a constant source of anxiety for me. Dr. Gayen's approach was so calm and reassuring. He helped me manage it through a mix of medication and stress management. I finally feel like I'm in control of my health again.",
    role: "Hypertension Patient",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Soma Mukherjee",
    text: "I visited for a thyroid issue that was making me feel constantly exhausted. Dr. Gayen's holistic approach—looking at my diet and sleep alongside my hormone levels—made all the difference. The 'brain fog' is gone and I'm back to my old self.",
    role: "Thyroid Patient",
    rating: 5,
    date: "4 months ago"
  },
  {
    name: "Vikram Singh",
    text: "I went in with a severe viral infection and was quite worried. The care I received was top-notch. The clinic is spotless, the staff is incredibly helpful, and Dr. Gayen's diagnosis was spot on. I was back on my feet in no time.",
    role: "Fever & Infection",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Anjali Das",
    text: "It's hard to find a doctor you can trust implicitly. Dr. Sayantan Gayen is one of those rare physicians who genuinely cares about his patients' long-term well-being. His preventive checkups have helped me stay ahead of potential health issues.",
    role: "Preventive Care",
    rating: 5,
    date: "5 months ago"
  }
];

const TestimonialsPage = () => {
  return (
    <main className="pt-32 pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Patient Stories
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-secondary mb-8"
          >
            Patient <span className="text-primary italic">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary/50 max-w-2xl mx-auto text-xl leading-relaxed"
          >
            Don't just take our word for it. Read what our patients have to say about their experience with Dr. Sayantan Gayen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 relative group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <Quote className="text-primary/5 absolute top-10 right-10 group-hover:scale-110 transition-transform" size={80} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-xl text-secondary/60 italic mb-12 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-2xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-lg">{testimonial.name}</div>
                    <div className="text-[10px] text-secondary/30 uppercase font-bold tracking-[0.2em]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-50 flex justify-end">
                <div className="text-[10px] uppercase font-bold text-secondary/20 tracking-widest">
                  {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share Your Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary text-white rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full -mr-96 -mt-96 blur-[120px]" />
          
          <div className="lg:w-2/3 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Share Your <br />
              <span className="text-accent italic">Experience</span>
            </h2>
            <p className="text-2xl text-white/60 font-light leading-relaxed">
              Your feedback helps us improve and helps other patients find the care they need. If you've visited Dr. Sayantan Gayen, we'd love to hear from you.
            </p>
          </div>
          <div className="lg:w-1/3 w-full relative z-10">
            <button className="w-full btn-primary bg-accent text-secondary hover:bg-white hover:text-secondary px-10 py-6 text-xl flex items-center justify-center gap-4 group">
              <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
              Write a Review
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};


export default TestimonialsPage;
