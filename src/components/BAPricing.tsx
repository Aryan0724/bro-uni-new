"use client";

import { motion } from "framer-motion";

export default function BAPricing() {
  return (
    <section id="investor" className="bg-[#f8f9fa] relative overflow-hidden py-32 md:py-48">
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-24 relative z-10">
        
        {/* Top Section: Headline & Description */}
        <div className="flex flex-col gap-16">
          <div className="w-full border-b border-black/10 pb-8 flex justify-between items-center">
            <span className="font-body text-sm font-bold tracking-[0.2em] text-black/40 uppercase">
              04 // Institutional Partners
            </span>
            <span className="font-body text-sm font-bold tracking-[0.2em] text-black/40 uppercase hidden md:block">
              Global Scale
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-end pt-8">
            <div className="col-span-1 lg:col-span-8">
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-6xl md:text-8xl lg:text-[130px] font-black text-black uppercase tracking-tighter leading-[0.85]"
              >
                INVESTOR<br />RELATIONS.
              </motion.h2>
            </div>
            
            <div className="col-span-1 lg:col-span-4 lg:pb-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-body text-xl md:text-2xl text-black/60 leading-relaxed"
              >
                BRO University is designed to attract strategic investors, research collaborators, global faculty, and innovation partners who want to build the future of human intelligence.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Middle Section: Stats (Structural Grid) */}
        <div className="w-full border-t border-b border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10 grid grid-cols-1 md:grid-cols-3 mt-16 bg-white/50">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col p-12 lg:p-20 group hover:bg-white transition-colors duration-500"
          >
            <span className="font-body text-xs font-bold tracking-[0.2em] text-black/40 uppercase mb-16 border-b border-black/5 pb-4">/ Target Audience</span>
            <span className="font-display text-8xl lg:text-[120px] font-black text-black tracking-tighter leading-none mb-8 group-hover:scale-105 transition-transform duration-500 origin-left">
              500<span className="text-blue-600">+</span>
            </span>
            <span className="font-body text-sm lg:text-base font-bold tracking-widest text-black uppercase">Future Scientists</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col p-12 lg:p-20 group hover:bg-white transition-colors duration-500"
          >
            <span className="font-body text-xs font-bold tracking-[0.2em] text-black/40 uppercase mb-16 border-b border-black/5 pb-4">/ Target Startups</span>
            <span className="font-display text-8xl lg:text-[120px] font-black text-black tracking-tighter leading-none mb-8 group-hover:scale-105 transition-transform duration-500 origin-left">
              300<span className="text-purple-600">+</span>
            </span>
            <span className="font-body text-sm lg:text-base font-bold tracking-widest text-black uppercase">Future Founders</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col p-12 lg:p-20 group hover:bg-white transition-colors duration-500"
          >
            <span className="font-body text-xs font-bold tracking-[0.2em] text-black/40 uppercase mb-16 border-b border-black/5 pb-4">/ Potential</span>
            <span className="font-display text-8xl lg:text-[120px] font-black text-black tracking-tighter leading-none mb-8 group-hover:scale-105 transition-transform duration-500 origin-left">
              ∞
            </span>
            <span className="font-body text-sm lg:text-base font-bold tracking-widest text-black uppercase">Global Impact</span>
          </motion.div>

        </div>

        {/* CTA Banner (Standalone Block) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-black rounded-[2rem] relative overflow-hidden"
          style={{ padding: '80px 10%' }}
        >
          {/* Subtle background glow inside the black box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10 w-full">
            <div className="flex-1 min-w-0 w-full flex justify-center lg:justify-start">
              <h4 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight text-center lg:text-left max-w-2xl">
                Partner with the institution defining the next era.
              </h4>
            </div>
            
            <div className="relative group shrink-0 w-full md:w-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <button 
                className="relative overflow-hidden w-full md:w-auto flex items-center justify-center bg-white text-black font-bold tracking-[0.2em] uppercase text-sm md:text-base leading-none border border-transparent hover:border-white transition-colors duration-300 rounded-full gap-4"
                style={{ minHeight: '80px', padding: '0 48px' }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center justify-center gap-4 w-full h-full">
                  PARTNER WITH US
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-2 shrink-0">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"></div>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}