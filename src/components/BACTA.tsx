"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BACTA() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/cinematic-contact-bg.png"
          alt="Cinematic Orange Room"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Subtle vignette / overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Brutalist Grid Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 z-10" />
      <div className="absolute top-0 right-[35%] w-[1px] h-full bg-white/10 z-10 hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#a3e4e9] z-20 shadow-[0_0_15px_#a3e4e9] hidden md:block" />

      {/* Massive Typography */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 md:p-12">
        
        {/* Top Left: QUESTIONS */}
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-sans font-black text-[15vw] md:text-[12vw] leading-none tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "2px white", marginTop: "2%" }}
        >
          QUESTIONS
        </motion.h2>

        {/* Middle Right: LEFT? */}
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute right-6 md:right-12 top-[48%] -translate-y-full font-sans font-black text-[12vw] md:text-[10vw] leading-none tracking-tighter text-white"
        >
          LEFT?
        </motion.h2>

        {/* Bottom Left: CONTACT */}
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-sans font-black text-[15vw] md:text-[12vw] leading-none tracking-tighter text-transparent absolute bottom-[15%] md:bottom-[20%]"
          style={{ WebkitTextStroke: "2px white" }}
        >
          CONTACT
        </motion.h2>

      </div>

      {/* Bottom Interface Layer */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 z-30 flex items-end justify-between pointer-events-none">
        
        {/* Empty left spacer */}
        <div className="w-1/3"></div>

        {/* Center Text */}
        <div className="w-1/3 flex justify-center text-center">
          <p className="font-body text-white/90 text-sm md:text-base max-w-[200px] leading-snug">
            We will be happy to advise you.
          </p>
        </div>

        {/* Viewfinder Social Block */}
        <div className="w-1/3 flex justify-end pointer-events-auto">
          <div className="relative p-6 md:p-10 flex gap-8">
            {/* Viewfinder Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />
            
            <a href="#" className="text-white hover:text-[var(--accent)] transition-colors">
              {/* Instagram Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-white hover:text-[var(--accent)] transition-colors">
              {/* Telegram/Paper Plane Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon><line x1="22" y1="2" x2="11" y2="13"></line></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
