"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.85, rotateY: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function BentoStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      ref={ref}
      className="w-full bg-black text-white relative overflow-hidden font-body border-t border-white/5"
      style={{ perspective: '2000px' }}
    >
      {/* Mouse-follow radial glow on the whole grid */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(400px circle at 50% 50%, rgba(139,92,246,0.06), transparent 80%)',
        }}
      />

      {/* 4-col + 1 wide: 2 rows */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[1px] bg-white/10 md:h-[85vh] group/grid">

        {/* Card 1 — Tall left card with wafer image bg */}
        <motion.div
          custom={0}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-1 md:row-span-2 bg-black relative flex flex-col p-8 lg:p-10 overflow-hidden group min-h-[400px] md:min-h-0"
        >
          <Image
            src="/wafer.png"
            alt="Wafer background"
            fill
            className="object-cover object-center opacity-60 group-hover:scale-110 transition-transform duration-[3000ms] ease-out z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-transparent z-10 pointer-events-none" />
          <div className="z-20 flex flex-col gap-3 relative">
            <h3
              className="text-[72px] lg:text-[88px] font-display font-medium text-white tracking-tight leading-none transition-all duration-700 ease-out group-hover:scale-110 origin-left"
              style={{ color: 'white' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#A855F7')}
              onMouseLeave={e => (e.currentTarget.style.color = 'white')}
            >
              500+
            </h3>
            <p className="text-white/70 font-display text-xs lg:text-sm font-semibold uppercase tracking-widest max-w-[200px] leading-relaxed">
              FUTURE SCIENTISTS SOLVING REAL WORLD PROBLEMS
            </p>
          </div>
        </motion.div>

        {/* Card 2 — "24/7 Access" dark card */}
        <motion.div
          custom={1}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-1 md:row-span-1 bg-[#0a0a0a] p-8 lg:p-10 relative overflow-hidden group flex flex-col justify-start"
        >
          <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
          <h3 className="text-white text-5xl lg:text-6xl font-display font-medium z-10 leading-none tracking-tighter mb-3 transition-colors duration-700 group-hover:text-[#8B5CF6]">
            300+
          </h3>
          <p className="text-white/60 font-display text-xs lg:text-sm font-bold uppercase tracking-widest z-10 leading-relaxed max-w-[200px] group-hover:text-white group-hover:translate-x-2 transition-all duration-700">
            FUTURE FOUNDERS BUILDING IDEAS THAT MATTER.
          </p>
        </motion.div>

        {/* Card 3 — White card (top right) */}
        <motion.div
          custom={2}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-1 md:row-span-1 bg-white p-8 lg:p-10 flex flex-col items-end justify-end relative group overflow-hidden min-h-[250px] md:min-h-0"
        >
          <div className="absolute inset-0 bg-neutral-100 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
          <p className="text-black text-right font-display text-sm lg:text-base font-bold uppercase tracking-widest z-10 leading-relaxed max-w-[240px] group-hover:-translate-y-2 transition-transform duration-700">
            <span className="text-2xl lg:text-3xl block mb-2 font-display transition-colors duration-700 group-hover:text-[#7C3AED]">
              100+ EXPERTS
            </span>
            INDUSTRY LEADERS ACTIVELY BUILDING IN THE SPACE.
          </p>
        </motion.div>

        {/* Card 4 — dark, top-right, 100% stat */}
        <motion.div
          custom={3}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-1 md:row-span-1 bg-[#111] p-8 lg:p-10 relative overflow-hidden group flex flex-col justify-end items-end text-right"
        >
          <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
          <h3 className="text-white text-5xl lg:text-6xl font-display font-medium z-10 leading-none tracking-tighter mb-3 transition-colors duration-700 group-hover:text-[#EC4899]">
            100%
          </h3>
          <p className="text-white/60 font-display text-xs lg:text-sm font-bold uppercase tracking-widest z-10 leading-relaxed max-w-[200px] group-hover:text-white group-hover:-translate-x-2 transition-all duration-700">
            SIGNAL. ACTIONABLE CURRICULUM WITH ZERO FLUFF.
          </p>
        </motion.div>

        {/* Card 5 — Cinematic image card (wide 2-col) */}
        <motion.div
          custom={4}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-1 md:col-span-2 md:row-span-1 bg-black relative overflow-hidden group min-h-[300px] md:min-h-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#0d0d1a] to-black z-0" />
          {/* Glowing orb */}
          <div className="absolute top-[30%] left-[48%] w-5 h-5 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.9)] group-hover:scale-150 group-hover:bg-[#A855F7] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-700 z-10" />
          {/* Standing figure silhouette effect using gradient */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[3px] h-[40%] z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700"
            style={{ background: 'linear-gradient(to bottom, white, transparent)' }}
          />
          <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between z-20">
            <p className="text-white font-display text-xs lg:text-sm font-bold uppercase tracking-widest max-w-[260px] leading-relaxed group-hover:translate-x-2 transition-transform duration-700">
              GRADUATES SECURE ROLES AT WORLD-CLASS COMPANIES
            </p>
            <h3 className="text-white text-6xl lg:text-7xl font-display font-medium self-end leading-none tracking-tighter group-hover:-translate-x-4 transition-transform duration-700">
              85%
            </h3>
          </div>
        </motion.div>

        {/* Card 6 — Accent gradient card "NEXT GEN" */}
        <motion.div
          custom={5}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="col-span-1 md:row-span-1 relative overflow-hidden group p-8 lg:p-10 flex flex-col justify-between min-h-[250px] md:min-h-0"
          style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)' }}
        >
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
          <h3 className="text-white text-4xl lg:text-[52px] font-display font-medium z-10 leading-none tracking-tighter mt-2 md:mt-0 uppercase break-words group-hover:tracking-[0.1em] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3B82F6] group-hover:to-[#EC4899] transition-all duration-700">
            NEXT<br/>GEN
          </h3>
          <p className="text-white font-display text-xs lg:text-sm font-bold uppercase tracking-widest text-right z-10 mt-auto leading-relaxed max-w-[200px] self-end group-hover:-translate-y-2 group-hover:text-white/70 transition-all duration-700">
            EXCLUSIVE ACCESS TO FUTURE-DEFINING RESEARCH & NETWORKS.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
