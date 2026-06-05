"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const speakers = [
  { name: "DR. ELENA\nROSTOVA", role: "/Head of AI, Nexus", image: "/elena.png" },
  { name: "MARCUS\nVANCE", role: "/Founder, Core Layer", image: "/marcus.png" },
  { name: "SARAH\nCHEN", role: "/Lead Dev, ZK-Systems", image: "/sarah.png" },
  { name: "JULIAN\nPIERCE", role: "/Neurologist, BrainCo", image: "/julian.png" },
];

export default function BASpeakers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-black relative overflow-hidden flex flex-col justify-center" style={{ minHeight: "100vh" }}>
      
      {/* Header Section */}
      <div className="w-full px-8 md:px-12 pt-24 pb-16 flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Typography */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          OUR ARCHITECTS<br />
          COMBINE TECHNICAL<br />
          EXPERTISE WITH REAL<br />
          DECENTRALIZED PRACTICE.
        </motion.h2>

        {/* Right Navigation */}
        <div className="flex flex-col items-end gap-16 mt-8 md:mt-0">
          
          {/* Arrows */}
          <div className="flex gap-1">
            <button 
              onClick={() => scroll("left")}
              className="w-14 h-14 bg-[#111111] hover:bg-[#1a1a1a] flex items-center justify-center transition-colors text-white"
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-14 h-14 bg-[#111111] hover:bg-[#1a1a1a] flex items-center justify-center transition-colors text-white"
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Slider Section */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 md:px-12 pb-24 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {speakers.map((s, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 bg-[#0c0c0c] p-6"
            style={{ width: "min(420px, 85vw)" }}
          >
            <div className="relative w-full aspect-square bg-[#1a1a1a] overflow-hidden">
              <Image 
                src={s.image}
                alt={s.name}
                fill
                style={{ objectFit: "cover" }}
                className="grayscale-[20%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end justify-between p-6 pointer-events-none">
                <h3 
                  style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: 22,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                    margin: 0
                  }}
                >
                  {s.name}
                </h3>
                <span 
                  style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    color: "white",
                    letterSpacing: "0.01em",
                    marginBottom: "2px"
                  }}
                >
                  {s.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
