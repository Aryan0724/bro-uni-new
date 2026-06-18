"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Join() {
  const [done, setDone] = useState(false);

  return (
    <section id="hey-bro" className="w-full py-32 px-6 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* Neural background overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(135deg, transparent 20%, rgba(0,0,0,0.5) 50%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(135deg, transparent 20%, rgba(0,0,0,0.5) 50%, transparent 80%)"
        }}
      >
        <Image src="/neural-bg.svg" alt="" fill className="object-cover" style={{ opacity: 0.2 }} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">

        {/* HEY BRO Community Block */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col gap-6"
          >
            <span className="text-[10px] font-body tracking-[0.25em] text-white/30 uppercase">/ HEY BRO Community</span>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-[1.05] tracking-tight uppercase">
              MORE THAN A UNIVERSITY —<br /><span className="text-white/30">A MOVEMENT.</span>
            </h2>
            <p className="font-body text-white/45 text-[15px] leading-relaxed max-w-lg">
              HEY BRO is a future innovation community for students, researchers, creators, and dreamers who want to shape the future of humanity through technology.
            </p>
            
            {/* Manifesto lines */}
            <div className="flex flex-col gap-3 border-l border-white/10 pl-6 mt-2">
              {["Join the movement.", "Build the future.", "Race Up Your Brain."].map((line) => (
                <p key={line} className="font-display font-medium text-lg md:text-xl text-white/60 tracking-tight">
                  {line}
                </p>
              ))}
            </div>

            {/* Movement description */}
            <div className="mt-2 p-5 border border-white/8 rounded-xl bg-white/2">
              <p className="font-body text-white/35 text-[12px] leading-relaxed tracking-wide">
                <span className="text-white/55 font-medium">HEY BRO MOVEMENT</span> — a community of GenZ, youth, researchers, engineers, and scientists united by the mission to build the future through deep technology.
              </p>
            </div>

            <div className="mt-2">
              <button className="btn-primary" style={{ padding: "15px 32px" }}>
                Join HEY BRO
              </button>
            </div>
          </motion.div>

          {/* Right: Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="flex-1 bg-[#0a0a0a] border border-white/7 rounded-2xl p-8 md:p-10 flex flex-col gap-6"
          >
            {!done ? (
              <>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                    Get Early Access
                  </h3>
                  <p className="font-body text-white/40 text-[13px] leading-relaxed">
                    Be among the first to know about admissions, research opportunities, and community events.
                  </p>
                </div>
                <form
                  onSubmit={(e) => { e.preventDefault(); setDone(true); }}
                  className="flex flex-col gap-3"
                >
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#111] text-white border border-white/10 rounded-xl px-5 py-4 font-body text-[14px] outline-none focus:border-white/30 transition-colors placeholder-white/25"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#111] text-white border border-white/10 rounded-xl px-5 py-4 font-body text-[14px] outline-none focus:border-white/30 transition-colors placeholder-white/25"
                  />
                  <select
                    className="w-full bg-[#111] text-white/60 border border-white/10 rounded-xl px-5 py-4 font-body text-[14px] outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="">Area of Interest</option>
                    <option value="neuroscience">Neuroscience</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="semiconductor">Semiconductors</option>
                    <option value="nanotech">Nanotechnology</option>
                    <option value="future">Future Innovation</option>
                  </select>
                  <button type="submit" className="btn-primary w-full mt-2" style={{ padding: "15px", justifyContent: "center" }}>
                    Join Early Access →
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">You&apos;re In.</h3>
                <p className="font-body text-white/40 text-[13px] leading-relaxed max-w-xs">
                  Welcome to the HEY BRO community. We&apos;ll reach out soon with next steps.
                </p>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
