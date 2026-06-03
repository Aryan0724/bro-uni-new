"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Microscope, Zap, Factory, Globe } from "lucide-react";

const rows = [
  { icon: Microscope, title: "Research First", desc: "Labs run the curriculum — not administrators." },
  { icon: Zap, title: "Future Degrees", desc: "Neural interfaces, cognitive silicon." },
  { icon: Factory, title: "Student Ventures", desc: "VC fund backs student startups." },
  { icon: Globe, title: "Global Network", desc: "Fabs in Taiwan. Labs in Switzerland." },
];

function AnimatedCard({ r, index }: { r: { icon: React.ElementType, title: string, desc: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotateX,
        scale,
        opacity,
        transformPerspective: 1200,
        backgroundColor: "var(--nvg-orange)",
        padding: "3rem",
      }}
      className="border-[6px] border-black rounded-[32px] flex flex-col items-start hover:-translate-y-4 hover:shadow-[12px_16px_0_0_#000] transition-all duration-300 overflow-hidden relative"
    >
      <div className="mb-8 bg-white border-4 border-black w-24 h-24 rounded-2xl flex items-center justify-center shrink-0">
        <r.icon size={48} strokeWidth={2.5} color="#000" />
      </div>
      <h3 className="font-sans font-black text-3xl mb-4 leading-none">{r.title}</h3>
      <p className="font-bold text-lg opacity-90 leading-tight max-w-[90%]">{r.desc}</p>
    </motion.div>
  );
}

export default function WhyBro() {
  return (
    <section className="w-full py-32 px-6 bg-[var(--nvg-orange)] text-[var(--text-dark)] flex flex-col items-center select-none overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <span className="inline-block px-4 py-1 border-2 border-black rounded-full font-black text-xs uppercase mb-8 tracking-wide">
          1. Introduction
        </span>
        <h2 className="heading-massive text-[10vw] md:text-[8vw] lg:text-[120px] leading-[0.95] mb-8">
          Meet the <br/> Navigators
        </h2>
        <p className="font-bold max-w-sm mx-auto text-center leading-snug text-lg">
          Empowered digital avatars designed to represent you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl" style={{ perspective: "1500px" }}>
        {rows.map((r, i) => (
          <AnimatedCard key={i} r={r} index={i} />
        ))}
      </div>

    </section>
  );
}
