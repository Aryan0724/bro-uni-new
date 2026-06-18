"use client";

import React from 'react';
import Image from 'next/image';
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
    <section id="hero" className="relative w-full max-w-[100vw] h-screen bg-black text-white overflow-hidden flex flex-col font-body">
      
      {/* Background — pure black + neural SVG overlay */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial center glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 55% at 65% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)"
          }}
        />
        {/* Neural network SVG — right side, subtle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 80%)",
          }}
        >
          <Image
            src="/neural-bg.svg"
            alt=""
            fill
            className="object-cover object-right"
            style={{ opacity: 0.5 }}
            priority
          />
        </div>
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
        {/* Fine grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pt-6 md:pt-10 pb-12 px-6 md:px-12">
        
        {/* TOP: Logo + Brand Title */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="w-full flex flex-col items-center"
        >
          {/* BRO University Logo mark — inverted to white */}
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="/bro-logo.png"
              alt="BRO University"
              width={72}
              height={72}
              style={{ filter: "invert(1)", opacity: 0.85 }}
              priority
            />
          </div>
          <h1 
            className="w-full text-center font-accent font-black tracking-tighter leading-[0.82] text-[12vw] md:text-[9vw] text-white whitespace-nowrap overflow-hidden"
            style={{ letterSpacing: "-0.04em" }}
          >
            BRO UNIVERSITY
          </h1>
          
          {/* Subline row */}
          <div className="w-full flex justify-between items-start mt-5 md:mt-6 text-[9px] md:text-[11px] font-body tracking-[0.18em] uppercase text-white/35 px-1">
            <div>/ Race Up Your Brain</div>
            <div>/ Deep Tech Education</div>
            <div>/ Est. 2025 · India</div>
          </div>
        </motion.div>
        
        {/* BOTTOM: Headline and CTAs */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 md:gap-10">
          
          {/* Left: Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariant}
            className="flex flex-col gap-5 max-w-xl"
          >
            <h2 className="text-[26px] md:text-[32px] font-display font-bold leading-[1.15] text-white tracking-tight uppercase">
              HEY BRO, READY TO<br />BUILD THE FUTURE?
            </h2>

            <p className="text-[13px] md:text-[14px] font-body text-white/55 leading-relaxed max-w-md">
              India&apos;s next-generation deep tech university focused on Artificial Intelligence, Neuroscience, Semiconductors, Nanotechnology, and Future Innovation.
            </p>

            <p className="text-[12px] font-body text-white/35 leading-relaxed max-w-sm border-l border-white/15 pl-4">
              Not another traditional university. A research-driven ecosystem where students become innovators, scientists, founders, and creators of future technologies.
            </p>

            <div className="flex items-center gap-4 mt-1">
              <button className="btn-primary" style={{ padding: "14px 28px", fontSize: "12px" }}>
                Join Early Access
              </button>
              <button className="btn-secondary" style={{ padding: "13px 28px", fontSize: "12px" }}>
                Explore Vision
              </button>
            </div>
          </motion.div>

          {/* Right: Scroll indicator + domain pills */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariant}
            className="shrink-0 hidden md:flex flex-col items-end gap-5 pb-2"
          >
            {/* Domain tags */}
            <div className="flex flex-col items-end gap-1.5">
              {["Artificial Intelligence", "Neuroscience", "Semiconductors", "Nanotechnology"].map((domain) => (
                <span key={domain} className="text-[9px] font-body tracking-[0.18em] text-white/25 uppercase">
                  {domain}
                </span>
              ))}
            </div>
            <div className="text-[9px] tracking-[0.28em] text-white/25 uppercase font-body">Scroll to explore</div>
            <div className="w-[1px] h-14 bg-gradient-to-b from-white/25 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
