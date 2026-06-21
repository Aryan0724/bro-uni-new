"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Join() {
  const [done, setDone] = useState(false);

  return (
    <section id="hey-bro" className="w-full bg-black relative overflow-hidden py-32 md:py-48">
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-48 relative z-10">
        
        {/* Top Section: Headline */}
        <div className="flex flex-col gap-12">
          <span className="font-body text-sm font-bold tracking-[0.2em] text-white/40 uppercase">
            06 // Community
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-6xl md:text-8xl lg:text-[140px] font-black text-white uppercase tracking-tighter leading-none"
          >
            HEY BRO<br />
            <span className="text-white/20">COMMUNITY.</span>
          </motion.h2>
        </div>

        {/* Middle Section: Manifesto & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16">
          
          {/* Left: Manifesto */}
          <div className="flex flex-col">
            <h3 className="font-display text-4xl md:text-6xl lg:text-[80px] font-black text-white uppercase tracking-tighter leading-none mb-12">
              More than a university.<br />A movement.
            </h3>
            <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed max-w-xl mb-16">
              HEY BRO is a future innovation community for students, researchers, creators, and dreamers who want to shape the future of humanity through technology.
            </p>
            <div className="flex flex-col gap-6">
              {["Join the movement.", "Build the future."].map((line, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-8 h-[2px] bg-white/20"></div>
                  <span className="font-display font-medium text-xl md:text-3xl text-white uppercase">{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex flex-col justify-start lg:pl-16 lg:border-l border-white/10 mt-16 lg:mt-0">
            {!done ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-xl"
              >
                <h4 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16">
                  Get Early Access
                </h4>
                <form 
                  onSubmit={(e) => { e.preventDefault(); setDone(true); }} 
                  className="flex flex-col gap-16"
                >
                  <div className="flex flex-col gap-4">
                    <label className="font-body text-sm font-bold tracking-[0.2em] text-white/40 uppercase">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="ENTER NAME" 
                      className="w-full h-16 md:h-20 bg-transparent text-white border-b-2 border-white/20 px-0 pb-4 font-display text-3xl md:text-5xl uppercase tracking-tighter outline-none focus:border-white transition-colors placeholder:text-white/10 leading-none" 
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="font-body text-sm font-bold tracking-[0.2em] text-white/40 uppercase">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="ENTER EMAIL" 
                      className="w-full h-16 md:h-20 bg-transparent text-white border-b-2 border-white/20 px-0 pb-4 font-display text-3xl md:text-5xl uppercase tracking-tighter outline-none focus:border-white transition-colors placeholder:text-white/10 leading-none" 
                    />
                  </div>
                  
                  <div className="relative group shrink-0 mt-8 inline-block self-start w-full md:w-auto">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                    
                    <button 
                      type="submit" 
                      className="relative overflow-hidden w-full md:w-auto flex items-center justify-center bg-white text-black font-bold tracking-[0.2em] uppercase text-sm md:text-base leading-none rounded-full border border-transparent hover:border-white transition-colors duration-300 gap-4"
                      style={{ minHeight: '80px', padding: '0 48px' }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center justify-center gap-4 w-full h-full">
                        JOIN HEY BRO
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-2 shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"></div>
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center lg:items-start justify-center py-12 text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-12 shadow-[0_0_80px_rgba(168,85,247,0.4)]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tighter">You&apos;re In.</h3>
                <p className="font-body text-xl text-white/50 mt-6">Welcome to the movement.</p>
              </div>
            )}
          </div>
        </div>

        {/* Lower Footer (Editorial Index) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 pt-16 border-t border-white/10">
          
          <div className="flex flex-col gap-8">
            <span className="font-body text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
              / Navigate
            </span>
            <ul className="flex flex-col gap-4">
              <li><Link href="#hero" className="font-display text-xl uppercase tracking-tighter text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="font-display text-xl uppercase tracking-tighter text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#why" className="font-display text-xl uppercase tracking-tighter text-white/70 hover:text-white transition-colors">Why BRO</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <span className="font-body text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
              / Focus Areas
            </span>
            <ul className="flex flex-col gap-4">
              <li><span className="font-display text-xl uppercase tracking-tighter text-white/70">Neuroscience</span></li>
              <li><span className="font-display text-xl uppercase tracking-tighter text-white/70">Artificial Intelligence</span></li>
              <li><span className="font-display text-xl uppercase tracking-tighter text-white/70">Semiconductors</span></li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <span className="font-body text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
              / Contact
            </span>
            <ul className="flex flex-col gap-4">
              <li><a href="mailto:brouniversity@gmail.com" className="font-display text-xl uppercase tracking-tighter text-white/70 hover:text-white transition-colors">Email Us</a></li>
              <li><a href="#" className="font-display text-xl uppercase tracking-tighter text-white/70 hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div className="flex flex-col lg:items-end justify-between gap-12">
            <div className="font-display font-black text-6xl text-white tracking-tighter uppercase leading-none">
              BRO<br />UNI.
            </div>
            <div className="font-body text-xs text-white/30 tracking-[0.2em] uppercase lg:text-right">
              © 2026 BRO UNIVERSITY.<br />ALL RIGHTS RESERVED.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}