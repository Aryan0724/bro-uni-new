"use client";

import { motion } from "framer-motion";

const headerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const faqs = [
  {
    id: "001",
    question: "Do I need prior experience in AI or Blockchain?",
    answer: "A basic understanding of programming (Python/JS) is highly recommended. However, we provide primer materials for the specific cognitive and cryptographic concepts before the cohort begins."
  },
  {
    id: "002",
    question: "What is the time commitment?",
    answer: "Expect to spend 10-15 hours per week. This includes 4 hours of live lectures, and 6-10 hours of practical implementation, reading, and peer review."
  },
  {
    id: "003",
    question: "Will the live sessions be recorded?",
    answer: "Yes, all sessions are recorded and made available immediately after the lecture for you to review at your own pace."
  },
  {
    id: "004",
    question: "Is there a refund policy?",
    answer: "We offer a full refund if you decide the program isn't right for you within the first 7 days of the cohort starting, no questions asked."
  },
  {
    id: "005",
    question: "Do you offer scholarships or student discounts?",
    answer: "We have a limited number of need-based scholarships for outstanding candidates. Please email us directly to apply."
  }
];

export default function BAFAQ() {
  return (
    <section className="pt-32 pb-[20vh] bg-[var(--bg-primary)] relative border-b border-[var(--border)] overflow-visible">
      <div className="container-inner max-w-5xl mx-auto px-4 md:px-0">
        
        <div className="text-center mb-24 sticky top-24 z-0">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariant} 
            className="heading-section"
          >
            FREQUENTLY ASKED <span className="text-[var(--accent)]">QUESTIONS.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col relative z-10 pb-[20vh]">
          {faqs.map((faq, index) => {
            // All cards stick at the EXACT SAME position so they completely overlap
            // the previous card, leaving only ONE card visible at a time.
            // Pushed offset down to 220 to prevent overlapping the "FREQUENTLY ASKED QUESTIONS" header
            const offset = 220; 

            return (
              <motion.div
                key={faq.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariant}
                className="sticky shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
                style={{ top: `${offset}px` }}
              >
                <div 
                  className="bg-[#080808] border border-gray-800/50 rounded-[2.5rem] w-full p-10 md:p-16 mb-[50vh] min-h-[45vh] flex flex-col justify-center relative overflow-hidden backdrop-blur-2xl"
                  style={{ transform: "translateZ(0)" }} // Force GPU acceleration
                >
                  {/* Futuristic Inner Radial Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(252,101,0,0.08)_0%,transparent_60%)] pointer-events-none"></div>

                  {/* Glowing Top Edge Accent */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40"></div>

                  {/* Giant ambient outline number in the background for futuristic depth */}
                  <div 
                    className="absolute -right-8 -bottom-16 text-[280px] font-accent font-black text-transparent pointer-events-none select-none leading-none"
                    style={{ WebkitTextStroke: "2px rgba(255,255,255,0.04)" }}
                  >
                    {faq.id}
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <div className="shrink-0 pt-2">
                      <span className="font-accent text-[var(--accent)] text-xl md:text-3xl font-bold tracking-widest drop-shadow-[0_0_15px_rgba(252,101,0,0.5)]">
                        {faq.id}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                      <h3 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight leading-[1.1] drop-shadow-md">
                        {faq.question}
                      </h3>
                      <div className="w-16 h-[3px] bg-[var(--accent)] my-2 shadow-[0_0_10px_rgba(252,101,0,0.8)]"></div>
                      <p className="font-body text-lg md:text-2xl text-gray-400 leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
