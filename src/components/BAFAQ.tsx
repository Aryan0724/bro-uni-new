"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "Who is BRO University for?",
    answer: "BRO University is built for curious, driven individuals who want to work at the frontier of deep technology — whether you are a student, researcher, creator, or professional looking to pivot into the future of AI, Neuroscience, Semiconductors, or Nanotechnology."
  },
  {
    id: "02",
    question: "Is BRO University a recognized institution?",
    answer: "BRO University is currently in its founding phase — being designed, built, and structured from the ground up. We are working toward full institutional recognition. Early supporters will be part of the founding cohort and shape the university's direction."
  },
  {
    id: "03",
    question: "What makes it different from traditional universities?",
    answer: "Traditional universities teach theory about technologies that already exist. BRO University is designed around technologies that will define the next 50 years — with research happening from day one, student ventures, live labs, and global collaboration baked into the structure."
  },
  {
    id: "04",
    question: "What is the HEY BRO community?",
    answer: "HEY BRO is the innovation community surrounding BRO University — open to students, researchers, creators, and dreamers. It is the movement behind the institution, a place where the future of humanity's technology is being discussed, built, and launched."
  },
  {
    id: "05",
    question: "How can I partner with or invest?",
    answer: "We welcome strategic partnerships with research institutions, deep tech companies, investors, and governments. Please reach out to us directly at brouniversity@gmail.com with your proposal and we will respond promptly."
  }
];

export default function BAFAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="faqs" className="bg-[#f8f9fa] relative overflow-hidden flex flex-col py-32 md:py-48">
      
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-16 relative z-10">
        
        {/* Top Header Grid */}
        <div className="w-full border-b border-black/10 pb-8 flex justify-between items-center">
          <span className="font-body text-sm font-bold tracking-[0.2em] text-black/40 uppercase">
            05 // Questions
          </span>
          <span className="font-body text-sm font-bold tracking-[0.2em] text-black/40 uppercase hidden md:block">
            Knowledge Base
          </span>
        </div>

        <h2 className="font-display font-black text-6xl md:text-8xl lg:text-[130px] text-black tracking-tighter uppercase leading-[0.85] mt-8">
          FAQ.
        </h2>

        {/* FAQ Structural Table */}
        <div className="w-full border border-black/10 divide-y divide-black/10 bg-white/50 mt-16">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className="w-full flex flex-col group hover:bg-white transition-colors duration-500"
              >
                {/* Question Header (Clickable) */}
                <button 
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-8 md:p-12 lg:p-16 flex items-center justify-between gap-8 md:gap-16"
                >
                  <div className="flex items-start md:items-center gap-8 md:gap-16 lg:gap-24 w-full flex-col md:flex-row">
                    <span className="font-body text-xs font-bold tracking-[0.2em] text-black/40 uppercase shrink-0 w-auto md:w-12 text-left border-b border-black/5 pb-2">
                      / {faq.id}
                    </span>
                    <h3 className={`font-display font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-[1.1] transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-black group-hover:text-black/70'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`shrink-0 w-12 h-12 rounded-full border border-black/10 hidden md:flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 bg-black text-white shadow-xl' : 'bg-transparent text-black'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Answer Body (Animated) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 lg:pb-16 px-8 md:px-12 lg:px-16 md:pl-[9.5rem] lg:pl-[12.5rem] max-w-5xl">
                        <p className="font-body text-lg md:text-xl text-black/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}