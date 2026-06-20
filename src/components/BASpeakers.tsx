"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const researchers = [
  { name: "DR. ELENA\nROSTOVA", role: "/Head of Neuroscience", image: "/elena.png" },
  { name: "MARCUS\nVANCE", role: "/Director, AI Research", image: "/marcus.png" },
  { name: "SARAH\nCHEN", role: "/Lead, Semiconductor Lab", image: "/sarah.png" },
  { name: "JULIAN\nPIERCE", role: "/Neurologist & BCI Pioneer", image: "/julian.png" },
];

export default function BASpeakers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-black relative overflow-hidden flex flex-col justify-center border-t border-white/5" style={{ minHeight: "100vh" }}>
      
      {/* Header */}
      <div className="w-full px-8 md:px-12 pt-24 pb-16 flex flex-col md:flex-row justify-between items-start">
        
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* 1. Chota label '/ Research Team' yahan se permanently hata diya hai */}
          
          {/* 2. Main Big & Bold Heading - Updated to 'RESEARCH TEAM' only */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "clamp(32px, 4.2vw, 56px)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            RESEARCH TEAM
          </motion.h2>

          {/* 3. Description Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "clamp(20px, 2.3vw, 28px)",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "-0.01em",
              lineHeight: 1.35,
              textTransform: "uppercase",
              margin: 0,
              maxWidth: "850px"
            }}
          >
            OUR RESEARCH TEAM COMBINES WORLD-CLASS<br className="hidden md:inline" /> 
            EXPERTISE WITH REAL DEEP TECH INNOVATION.
          </motion.p>
        </div>

        {/* Arrows */}
        <div className="flex gap-1 mt-8 md:mt-0">
          <button 
            onClick={() => scroll("left")}
            className="w-14 h-14 bg-[#111] hover:bg-[#1a1a1a] flex items-center justify-center transition-colors text-white"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-14 h-14 bg-[#111] hover:bg-[#1a1a1a] flex items-center justify-center transition-colors text-white"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

      </div>

      {/* Slider */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 md:px-12 pb-24 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {researchers.map((r, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 bg-[#0c0c0c] p-6"
            style={{ width: "min(400px, 85vw)" }}
          >
            <div className="relative w-full aspect-square bg-[#1a1a1a] overflow-hidden">
              <Image 
                src={r.image}
                alt={r.name}
                fill
                style={{ objectFit: "cover", filter: "grayscale(30%)" }}
                className="hover:grayscale-0 hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end justify-between p-6 pointer-events-none">
                <h3 
                  style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: 20,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                    margin: 0
                  }}
                >
                  {r.name}
                </h3>
                <span 
                  style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.01em",
                    marginBottom: "2px"
                  }}
                >
                  {r.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}