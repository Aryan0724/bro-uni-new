"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function BAHero() {
  const revealVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section className="relative w-full max-w-[100vw] h-screen bg-black text-white overflow-hidden flex flex-col font-body">
      
      {/* Background Image: Absolute exact reference image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_bg.png" 
          alt="Glowing horizon" 
          className="w-full h-full object-cover object-bottom"
        />
        {/* Very subtle gradient overlay just to ensure text readability at the very top/bottom if needed, but keeping it light so it doesn't dim the text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Main Content Container (z-10 to stay above background) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pt-6 md:pt-10 pb-12 px-6 md:px-12">
        
        {/* TOP SECTION: Massive Title and Tags */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="w-full flex flex-col max-w-full"
        >
          {/* Sized to guarantee it never blows out the 100vw container */}
          <h1 className="w-full text-center font-accent font-medium tracking-tighter leading-[0.8] text-[13vw] md:text-[9.5vw] text-white whitespace-nowrap overflow-hidden">
            BRO UNIVERSITY
          </h1>
          
          {/* Tags perfectly aligned, mixed case, standard font */}
          <div className="w-full flex justify-between items-start mt-4 md:mt-6 text-[9px] md:text-[12px] font-body tracking-normal text-white px-1 md:px-2">
            <div>/ START: August 21, 12:00</div>
            <div>/ Duration: 6 weeks</div>
            <div>/ Expert-led sessions</div>
          </div>
        </motion.div>
        
        {/* BOTTOM SECTION: Course Title, Avatars, and CTA */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 md:gap-10 max-w-full">
          
          {/* Bottom Left: Title & Avatars */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariant}
            className="flex flex-col gap-4 md:gap-6 max-w-xl"
          >
            {/* Standard display font, white, uppercase, accurately scaled */}
            <h2 className="text-[18px] md:text-[22px] font-display font-normal leading-[1.15] text-white tracking-wide uppercase">
              ONLINE COURSE ON<br />
              COGNITIVE AI &amp;<br />
              NEUROSCIENCE
            </h2>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {/* Scaled down avatars */}
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-neutral-600 border border-black/20 shadow-sm z-30" />
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-neutral-500 border border-black/20 shadow-sm z-20" />
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-neutral-400 border border-black/20 shadow-sm z-10" />
              </div>
              <p className="text-[10px] md:text-[11px] leading-snug text-white/80 font-body">
                120+ students successfully<br/>completed the training
              </p>
            </div>
          </motion.div>

          {/* Bottom Right: CTA Button */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariant}
            className="shrink-0 relative z-20 pb-2 md:pb-0"
          >
            {/* Perfectly proportioned mini-card CTA, absolute positioned to guarantee no flex blowout */}
            <button className="relative block w-[200px] h-[68px] md:w-[240px] md:h-[78px] bg-white hover:bg-black group border border-transparent hover:border-white/20 transition-colors duration-300 rounded-[14px] md:rounded-[18px] overflow-hidden shadow-2xl">
              <span className="absolute bottom-4 left-4 md:bottom-5 md:left-5 font-body font-semibold text-[11px] md:text-[13px] tracking-wide uppercase text-black group-hover:text-white transition-colors duration-300 z-10 whitespace-nowrap text-left">
                BUY THE COURSE
              </span>
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-7 h-7 md:w-9 md:h-9 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors duration-300 z-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
