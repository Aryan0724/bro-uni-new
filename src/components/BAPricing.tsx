"use client";

import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const headerVariant: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const cardLeftVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const cardRightVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const listItemVariant: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function BAPricing() {
  return (
    <section id="pricing" className="section-padding bg-[var(--bg-secondary)] relative border-b border-[var(--border)] overflow-hidden">
      <div className="container-inner">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Ambient Glow Behind Cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[600px] bg-gradient-to-r from-[var(--accent)] to-orange-700 opacity-[0.15] blur-[80px] rounded-full pointer-events-none z-0"></div>

            <div className="text-center mb-16 relative z-10">
              <motion.div variants={headerVariant} className="mb-6">
                <span className="font-accent text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest">
                  TUITION FEES
                </span>
              </motion.div>
              
              <motion.h2 
                variants={headerVariant} 
                className="font-display font-light text-5xl md:text-7xl text-[var(--text-primary)] leading-tight tracking-tight"
              >
                INVEST IN YOUR <span className="font-bold text-[var(--text-muted)]">COGNITIVE FUTURE.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto relative z-10 px-4 md:px-0">
              <motion.div 
                variants={cardLeftVariant} 
                whileHover={{ scale: 1.01, y: -4, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#050505] border border-gray-800/80 flex flex-col cursor-pointer group rounded-lg relative"
                style={{ padding: "48px" }}
              >
                {/* Top Row: Title & Tariff */}
                <div className="flex justify-between items-start mb-1">
                  <div className="font-sans font-bold text-[36px] text-white tracking-tight leading-none">
                    NEUROSCIENCE <span className="text-white">]</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 shrink-0">
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">TARIFF</span>
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                      <div className="flex items-center">
                        <span style={{ fontSize: 16, lineHeight: 1, fontFamily: "Arial", color: "gray" }}>&copy;</span>
                        <div className="w-3 h-3 bg-gray-500 rounded-full ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subheader */}
                <div className="font-sans font-medium text-gray-400 text-[14px]">
                  Cognitive interfaces and brain mapping
                </div>
                
                {/* Separator Line */}
                <div className="w-full h-[1px] bg-gray-800/50 my-8"></div>
                
                {/* Features List */}
                <motion.ul 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-4 mb-20"
                >
                  {["Access to full 6-week course", "Personal account with materials", "Recordings of all sessions", "Closed Telegram community", "Digital certificate upon completion"].map((feature, i) => (
                    <motion.li key={i} variants={listItemVariant} className="flex items-center gap-4 font-sans font-medium text-[15px] text-gray-200">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Bottom Row: Button */}
                <div className="mt-auto pt-6 flex justify-start">
                  <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
                    <button 
                      className="bg-white text-black font-sans font-bold text-[12px] md:text-[13px] tracking-wider rounded-full flex items-center gap-4 hover:bg-gray-100 transition-colors whitespace-nowrap shadow-lg"
                      style={{ padding: "14px 8px 14px 24px" }}
                    >
                      <span>BUY THE COURSE</span>
                      <div className="w-[32px] h-[32px] bg-black rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* AI Plan */}
              <motion.div 
                variants={cardRightVariant} 
                whileHover={{ scale: 1.01, y: -4, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#050505] border border-gray-800/80 flex flex-col relative cursor-pointer group rounded-lg"
                style={{ padding: "48px" }}
              >
                {/* Top Row: Title & Tariff */}
                <div className="flex justify-between items-start mb-1">
                  <div className="font-sans font-bold text-[36px] text-white tracking-tight leading-none">
                    AI ]
                  </div>
                  <div className="flex items-center gap-3 mt-1 shrink-0">
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">TARIFF</span>
                    <div className="flex items-center">
                      <div className="w-4 h-5 bg-white rounded-l-full"></div>
                      <div className="w-4 h-5 bg-gray-500 rounded-r-full ml-[1px]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Subheader */}
                <div className="font-sans font-medium text-gray-400 text-[14px]">
                  Proprietary agent models and architectures
                </div>
                
                {/* Separator Line */}
                <div className="w-full h-[1px] bg-gray-800/50 my-8"></div>
                
                {/* Features List */}
                <motion.ul 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-4 mb-20"
                >
                  {["Everything in Neuroscience", "Extra Q&A session with lecturer", "Speaker presentations + contacts", "Priority support in community", "Bonus workshop on AI architecture"].map((feature, i) => (
                    <motion.li key={i} variants={listItemVariant} className="flex items-center gap-4 font-sans font-medium text-[15px] text-gray-200">
                      <div className="w-2 h-2 rounded-full bg-white shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Bottom Row: Button */}
                <div className="mt-auto pt-6 flex justify-start">
                  <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
                    <button 
                      className="bg-white text-black font-sans font-bold text-[12px] md:text-[13px] tracking-wider rounded-full flex items-center gap-4 hover:bg-gray-100 transition-colors whitespace-nowrap shadow-lg"
                      style={{ padding: "14px 8px 14px 24px" }}
                    >
                      <span>BUY THE COURSE</span>
                      <div className="w-[32px] h-[32px] bg-black rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
