"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { 
    id: "01",
    title: "Research From Day One", 
    desc: "Students won't just study technology — they will build it. Every program is anchored to active research projects, real labs, and published innovation.",
    tag: "Core Principle",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    )
  },
  { 
    id: "02",
    title: "Future-Focused Programs", 
    desc: "Designed around industries that will dominate the world economy for the next 50 years — AI, Neuroscience, Semiconductors, and Nanotechnology.",
    tag: "Ecosystem",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    )
  },
  { 
    id: "03",
    title: "Innovation Ecosystem", 
    desc: "Labs, startups, patents, research publications, and global collaboration — all under one roof. Students graduate as creators, not just degree holders.",
    tag: "Infrastructure",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
        <circle cx="12" cy="12" r="2"/>
        <path d="M4.93 4.93l4.24 4.24"/>
        <path d="M14.83 14.83l4.24 4.24"/>
        <path d="M4.93 19.07l4.24-4.24"/>
        <path d="M14.83 9.17l4.24-4.24"/>
      </svg>
    )
  },
  { 
    id: "04",
    title: "Investor-Ready Vision", 
    desc: "A scalable deep-tech education ecosystem with global potential. Built for the next generation of scientists, founders, and technology leaders.",
    tag: "Scale",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
        <line x1="12" y1="20" x2="12" y2="10"/>
        <line x1="18" y1="20" x2="18" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    )
  },
];

function AnimatedCard({ card }: { card: typeof cards[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="bg-[#0a0a0a] border border-white/7 rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:border-white/15 transition-colors duration-500 group"
    >
      <div className="flex items-start justify-between">
        <span className="font-accent text-5xl font-black text-white/8 leading-none group-hover:text-white/12 transition-colors duration-500">{card.id}</span>
        <div className="flex items-center gap-3">
          <span className="text-white/30 group-hover:text-white/50 transition-colors duration-500">{card.icon}</span>
          <span className="text-[10px] font-body tracking-[0.18em] uppercase text-white/25 border border-white/10 px-3 py-1 rounded-full">{card.tag}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight tracking-tight">
          {card.title}
        </h3>
        <div className="w-8 h-[1.5px] bg-white/15 group-hover:bg-white/30 transition-colors duration-500" />
        <p className="font-body text-white/45 text-[14px] leading-relaxed">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyBro() {
  return (
    <section id="why-bro" className="w-full mt-32 pt-32 pb-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full flex flex-col items-center justify-center text-center mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[10px] font-body tracking-[0.25em] text-white/50 uppercase">
              OUR PILLARS
            </span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight uppercase">
            WHY BRO UNIVERSITY
          </h2>

          <p className="font-body text-cyan-400 text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold pb-2">
            BUILT FOR FUTURE LEADERS
          </p>
          
          <p className="font-body text-white/45 text-sm sm:text-base leading-relaxed max-w-xl">
            Four pillars that separate BRO University from every traditional institution on the planet. We don&apos;t teach history — we build the future.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ perspective: "1500px" }}>
          {cards.map((card) => (
            <AnimatedCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}