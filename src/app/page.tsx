"use client";

import { motion } from "framer-motion";


import CustomCursor from "@/components/CustomCursor";
import OrbitalHeroSequence from "@/components/OrbitalHeroSequence";
import Problem from "@/components/Problem";
import WhyBro from "@/components/WhyBro";
import Programs from "@/components/Programs";
import FutureSchools from "@/components/FutureSchools";
import Roadmap from "@/components/Roadmap";
import Join from "@/components/Join";
import CinematicCharacterSection from "@/components/CinematicCharacterSection";

// ─── SECOND MARQUEE (between sections) ────────────────────────────────────────
function MarqueeStrip2() {
  const items2 = [
    "FOUNDING COHORT OPEN",
    "◆",
    "INVESTOR DEMO 2026",
    "◆",
    "THE NEXT HUMAN ERA",
    "◆",
    "APPLY NOW",
    "◆",
    "NEURO × AI × SILICON",
    "◆",
    "JOIN THE MOVEMENT",
    "◆",
  ];
  const doubled = [...items2, ...items2];
  return (
    <div className="overflow-hidden w-full border-t border-b border-white/4 py-3 my-0">
      <div className="marquee-track-reverse">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[10px] font-bold tracking-[0.3em] uppercase px-4 ${
              item === "◆"
                ? "text-purple-accent"
                : "text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const handleExplore = () => {
    // Scroll past the hero section
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleJoin = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen text-white select-none bg-black font-sans w-full">
      {/* ── CUSTOM CURSOR ── */}
      <CustomCursor />

      {/* ── ORBITAL HERO SEQUENCE (PINNED) ── */}
      <OrbitalHeroSequence onExplore={handleExplore} />

      {/* ── MARQUEE DIVIDER ── */}
      <MarqueeStrip2 />

      {/* ── PROBLEM / CONTRAST ── */}
      <Problem />

      {/* ── WHY BRO ── */}
      <WhyBro />

      {/* ── PROGRAMS OVERVIEW ── */}
      <Programs />

      {/* ── PINNED 3D CHARACTER SECTION (Research & Innovation) ── */}
      <CinematicCharacterSection />

      {/* ── FUTURE SCHOOLS (AI & Semiconductor Vision) ── */}
      <FutureSchools />

      {/* ── ROADMAP (Future Schools Timeline) ── */}
      <Roadmap />

      {/* ── JOIN ── */}
      <Join />

      {/* ── FOOTER ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full py-12 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-7xl mx-auto"
        style={{ borderTop: "1px solid rgba(255,32,32,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono font-black text-xl glow-red" style={{ color: "var(--red)" }}>BRO</span>
          <span className="h-4 w-[1px] bg-white/10" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/25 uppercase">
            University · Est. 2026
          </span>
        </div>
        <div className="font-mono text-[9px] tracking-[0.25em] text-white/20 text-center">
          WHERE INTELLIGENCE IS BORN
        </div>
        <div className="flex gap-6">
          {["Protocols", "Networks", "Investors"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono text-[9px] tracking-widest text-white/25 hover:text-red-500 transition-colors duration-300 uppercase cursor-none"
            >
              {link}
            </a>
          ))}
        </div>
      </motion.footer>
    </main>
  );
}
