"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import BentoStats from './BentoStats';

export default function BAHero() {
  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      <section id="hero" className="relative w-full bg-[#fcfcfc] text-black overflow-hidden font-body flex flex-col" style={{ minHeight: '100vh', paddingBottom: '96px' }}>
        
        {/* Subtle radial background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,100,255,0.08),transparent_45%)] pointer-events-none z-0" />

        {/* Background Graphic - The Wafer */}
        <motion.div 
          initial={{ opacity: 0, x: '10%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 right-[-15%] w-full lg:w-[65%] h-[120vh] pointer-events-none z-0 flex items-center justify-end"
        >
          <div className="relative w-full h-full">
            <Image
              src="/wafer.png"
              alt="Semiconductor Wafer"
              fill
              className="object-contain object-right"
              priority
              style={{
                maskImage: "linear-gradient(to right, transparent, black 15%, black 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* Top Navbar */}
        <div className="absolute top-6 left-0 w-full z-50 px-6 md:px-[64px] flex justify-center">
          <nav className="w-full max-w-[1600px] flex items-center justify-between py-4 px-8 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <div className="flex-1 flex items-center">
              <h1 className="font-display font-semibold text-3xl lg:text-[32px] tracking-wide uppercase flex items-center gap-5">
                BRO <span className="font-body font-medium text-[10px] tracking-[0.4em] text-gray-500 mt-1">UNIVERSITY</span>
              </h1>
            </div>
            
            <div className="hidden lg:flex flex-1 justify-center items-center gap-10 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900">
              <a href="#about" className="hover:opacity-65 transition-opacity">ABOUT</a>
              <a href="#programs" className="hover:opacity-65 transition-opacity">PROGRAMS</a>
              <a href="#admissions" className="hover:opacity-65 transition-opacity">ADMISSIONS</a>
              <a href="#campus" className="hover:opacity-65 transition-opacity">CAMPUS</a>
              <a href="#community" className="hover:opacity-65 transition-opacity">COMMUNITY</a>
              <a href="#journal" className="hover:opacity-65 transition-opacity">JOURNAL</a>
            </div>

            <div className="hidden lg:flex flex-1 justify-end">
              <a 
                href="#apply" 
                className="inline-flex items-center justify-center text-[10px] font-bold tracking-[0.15em] uppercase border border-[#222] rounded-full hover:bg-[#111] hover:text-white transition-all duration-300 whitespace-nowrap gap-3 group bg-white/50"
                style={{ height: "42px", padding: "0 6px 0 24px" }}
              >
                APPLY NOW
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-white/30 bg-white group-hover:bg-transparent">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-white"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </a>
            </div>
          </nav>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 w-full flex flex-row px-8 md:px-16 lg:px-[64px] max-w-[1600px] mx-auto h-full items-center pt-[90px]">
          
          {/* Left Column (52%) */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center" style={{ marginTop: '120px' }}>
            <motion.div 
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {/* Massive, tight heading */}
              <motion.div 
                variants={itemVariant} 
                className="text-[clamp(5rem,7.5vw,8.5rem)] font-display font-medium leading-[0.8] tracking-[-0.05em] text-[#111] max-w-[850px] flex flex-col"
              >
                <span>BUILDING</span>
                <span>THE FUTURE.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#EC4899] pr-4">
                  AT THE CORE.
                </span>
              </motion.div>

              {/* Spacer */}
              <div className="h-[40px] w-full" />

              {/* Description */}
              <motion.p 
                variants={itemVariant} 
                className="text-[16px] md:text-[18px] font-body text-black/80 leading-[1.6] font-medium max-w-[480px]"
              >
                BRO University is the world's first university where <br className="hidden md:block"/> AI, Neuroscience and Semiconductors come <br className="hidden md:block"/> together to solve humanity's biggest challenges.
              </motion.p>
              
              {/* Spacer */}
              <div className="h-[40px] w-full" />

              {/* CTAs */}
              <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-start">
                <a 
                  href="#explore" 
                  className="group relative inline-flex items-center bg-[#0A0A0A] text-white rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1"
                  style={{ height: '56px', paddingLeft: '36px', paddingRight: '8px', gap: '28px' }}
                >
                  {/* Subtle border gradient */}
                  <div className="absolute inset-0 rounded-full border-[1px] border-white/10 group-hover:border-transparent transition-colors duration-500 pointer-events-none"></div>

                  {/* Gradient Background that fades in */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 via-[#A855F7]/20 to-[#EC4899]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md pointer-events-none"></div>

                  <span className="relative z-10 text-[12px] font-bold tracking-[0.25em] uppercase leading-none">
                    EXPLORE BRO
                  </span>
                  
                  {/* Circular Arrow Icon Container */}
                  <div className="relative z-10 bg-white rounded-full flex items-center justify-center text-black shrink-0 transition-all duration-500 group-hover:scale-105" style={{ width: '40px', height: '40px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </a>
              </motion.div>

              {/* Spacer */}
              <div className="h-[48px] w-full" />

              {/* Inline Pillars */}
              <motion.div variants={itemVariant} className="flex flex-row items-center gap-12">
                {/* Pillar 1 */}
                <div className="flex flex-row items-start gap-5 pr-12 border-r border-gray-200/80">
                  <div className="w-10 h-10 flex items-start justify-center text-[#8B5CF6] shrink-0 pt-0.5">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" />
                      <line x1="20" y1="14" x2="23" y2="14" />
                      <line x1="1" y1="9" x2="4" y2="9" />
                      <line x1="1" y1="14" x2="4" y2="14" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 w-[180px]">
                    <h4 className="text-[11px] font-bold tracking-[0.05em] uppercase text-gray-900">SEMICONDUCTORS</h4>
                    <p className="text-[12px] text-gray-500/90 leading-[1.6]">Powering the future from atoms to systems.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex flex-row items-start gap-5 pr-12 border-r border-gray-200/80">
                  <div className="w-10 h-10 flex items-start justify-center text-[#A855F7] shrink-0 pt-0.5">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.5 2.5-1 3.5.5.5 1.5 1 2.5 1.5A4.5 4.5 0 0 1 20 15c0 2.5-2 4.5-4.5 4.5H8.5C6 19.5 4 17.5 4 15c0-1.5.5-3 1.5-3.5 1-.5 2-1 2.5-1.5-.5-1-1-2-1-3.5a4 4 0 0 1 4-4z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 w-[180px]">
                    <h4 className="text-[11px] font-bold tracking-[0.05em] uppercase text-gray-900">NEUROSCIENCE</h4>
                    <p className="text-[12px] text-gray-500/90 leading-[1.6]">Understanding the brain. Unlocking intelligence.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex flex-row items-start gap-5">
                  <div className="w-10 h-10 flex items-start justify-center text-[#8B5CF6] shrink-0 pt-0.5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="4" cy="4" r="1.5" />
                      <circle cx="9" cy="4" r="1.5" />
                      <circle cx="14" cy="4" r="1.5" opacity="0.5" />
                      <circle cx="19" cy="4" r="1.5" opacity="0.2" />
                      <circle cx="4" cy="9" r="1.5" />
                      <circle cx="9" cy="9" r="1.5" />
                      <circle cx="14" cy="9" r="1.5" />
                      <circle cx="19" cy="9" r="1.5" opacity="0.5" />
                      <circle cx="4" cy="14" r="1.5" opacity="0.5" />
                      <circle cx="9" cy="14" r="1.5" />
                      <circle cx="14" cy="14" r="1.5" />
                      <circle cx="19" cy="14" r="1.5" />
                      <circle cx="4" cy="19" r="1.5" opacity="0.2" />
                      <circle cx="9" cy="19" r="1.5" opacity="0.5" />
                      <circle cx="14" cy="19" r="1.5" />
                      <circle cx="19" cy="19" r="1.5" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 w-[190px]">
                    <h4 className="text-[11px] font-bold tracking-[0.05em] uppercase text-gray-900">AI</h4>
                    <p className="text-[12px] text-gray-500/90 leading-[1.6]">Building intelligent systems that amplify human potential.</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
          
          {/* Right Column (48%) is left empty as it's occupied by the absolute image */}
          <div className="hidden lg:block lg:w-[48%] relative">
             {/* Right Edge Pagination & Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute top-1/2 right-[3%] -translate-y-1/2 flex flex-col items-center gap-4 z-20"
            >
              <div className="flex flex-col gap-5 mb-24">
                <div className="w-2.5 h-2.5 rounded-full border border-white flex items-center justify-center p-[2px]"><div className="w-full h-full bg-white rounded-full"></div></div>
                <div className="w-1.5 h-1.5 rounded-full border border-white/40 mx-auto hover:border-white cursor-pointer transition-colors"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-white/40 mx-auto hover:border-white cursor-pointer transition-colors"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-white/40 mx-auto hover:border-white cursor-pointer transition-colors"></div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <span className="text-[7px] tracking-[0.3em] font-medium uppercase text-white/80">SCROLL</span>
                <div className="w-[1px] h-12 bg-white/30 relative">
                   <motion.div
                     animate={{ y: [0, 40, 0] }}
                     transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                     className="absolute top-0 left-[-1px] w-[3px] h-2 bg-white rounded-full"
                   />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Dark Bento Stats Section */}
      <BentoStats />
    </>
  );
}
