"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BACTA() {
  return (
    <section id="contact" className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center border-t border-white/5">
      
      {/* Pure black/dark background — no colorful images */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid lines for depth */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "80px 80px"
          }}
        />
        {/* Subtle radial gradient from center */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)"
          }}
        />
        {/* Darkened cinematic image overlay if needed */}
        <Image 
          src="/images/cinematic-contact-bg.png"
          alt="Contact background"
          fill
          className="object-cover"
          style={{ opacity: 0.07, filter: "grayscale(100%)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/70" />
      </div>

      {/* Subtle structural lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-10" />
      <div className="absolute top-0 right-[35%] w-[1px] h-full bg-white/5 z-10 hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/60 z-20 shadow-[0_0_20px_rgba(255,255,255,0.6)] hidden md:block" />

      {/* Massive Typography Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 md:p-12">
        
        {/* Top Left: QUESTIONS */}
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-sans font-black text-[15vw] md:text-[12vw] leading-none tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)", marginTop: "2%" }}
        >
          REACH
        </motion.h2>

        {/* Middle Right: OUT. */}
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute right-6 md:right-12 top-[48%] -translate-y-full font-sans font-black text-[12vw] md:text-[10vw] leading-none tracking-tighter text-white"
        >
          OUT.
        </motion.h2>

        {/* Bottom Left: CONNECT */}
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-sans font-black text-[15vw] md:text-[12vw] leading-none tracking-tighter text-transparent absolute bottom-[15%] md:bottom-[20%]"
          style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}
        >
          CONNECT
        </motion.h2>

      </div>

      {/* Bottom Interface Layer */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 z-30 flex items-end justify-between pointer-events-none">
        
        {/* Empty left spacer */}
        <div className="w-1/3"></div>

        {/* Center Text */}
        <div className="w-1/3 flex justify-center text-center">
          <p className="font-body text-white/50 text-sm md:text-base max-w-[220px] leading-snug">
            brouniversity@gmail.com
          </p>
        </div>

        {/* Social Block */}
        <div className="w-1/3 flex justify-end pointer-events-auto">
          <div className="relative p-6 md:p-10 flex gap-8">
            {/* Viewfinder corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />
            
            <a href="#" className="text-white/35 hover:text-white/80 transition-colors duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-white/35 hover:text-white/80 transition-colors duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon><line x1="22" y1="2" x2="11" y2="13"></line></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
