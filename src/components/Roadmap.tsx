"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phases = [
  { year: "Phase 1", title: "School of Neuroscience", desc: "Current Focus: B.S., M.S., and PhD programs live. Neural-digital twin research underway." },
  { year: "Phase 2", title: "School of AI (Coming)", desc: "Integrating neural models into artificial general intelligence frameworks." },
  { year: "Phase 3", title: "Semiconductors (Coming)", desc: "Custom hardware designed to run biological-scale networks natively." },
  { year: "Phase 4", title: "Unified Ecosystem", desc: "A multi-disciplinary technology ecosystem bridging mind, software, and silicon." },
];

function AnimatedPhase({ p, index }: { p: { year: string, title: string, desc: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        rotateY,
        scale,
        opacity,
        transformPerspective: 1200,
        padding: "2.5rem",
      }}
      className="bg-[var(--bg-cream)] border-[6px] border-black rounded-[32px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_#000] transition-all overflow-hidden origin-left"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <span className="bg-black text-white font-black px-5 py-2 rounded-full text-xl shrink-0 shadow-[4px_4px_0_0_#000]">
          {p.year}
        </span>
        <h3 className="font-black text-2xl leading-none">{p.title}</h3>
      </div>
      <p className="font-bold text-lg opacity-90 leading-snug">{p.desc}</p>
    </motion.div>
  );
}

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yProgress = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={containerRef}
      className="w-full py-32 px-6 bg-[var(--nvg-purple)] text-[var(--text-dark)] flex flex-col items-center select-none overflow-hidden relative"
      style={{ perspective: "2000px" }}
    >
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16 relative z-10">
        
        {/* Left Side: Massive Text */}
        <motion.div style={{ y: yProgress }} className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-bold text-sm tracking-tight mb-6 block uppercase">Future Expansion</span>
            <h2 className="heading-massive text-[9vw] md:text-[6vw] lg:text-[80px] leading-[1.1]">
              Building a <br/> scalable <br/> technology <br/>
              <span className="opacity-40">ecosystem.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="mt-16 inline-flex items-center gap-6 bg-[var(--nvg-yellow)] border-4 border-black rounded-[24px] px-8 py-5 shadow-[8px_8px_0_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all cursor-crosshair"
          >
            <span className="font-black text-5xl">06%</span>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-black leading-tight uppercase">Data access<br/>check..</span>
              <div className="w-32 h-3 bg-black/20 rounded-full overflow-hidden">
                <div className="w-[15%] h-full bg-black rounded-full"/>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Timeline Steps */}
        <div className="flex-1 flex flex-col gap-8 pt-12 md:pt-0">
          {phases.map((p, i) => (
            <AnimatedPhase key={i} p={p} index={i} />
          ))}
        </div>

      </div>

    </section>
  );
}
