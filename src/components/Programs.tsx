"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database } from "lucide-react";

const PROGRAMS = [
  {
    title: "B.S. in Applied Neuroscience",
    desc: "A rigorous foundation in neurobiology, computational systems, and human-computer interfacing. Built for the next generation of neural architects.",
    Icon: Brain,
    color: "#8B5CF6", // Purple
    duration: "4 Years",
    tag: "Undergraduate",
  },
  {
    title: "M.S. in Neural Engineering",
    desc: "Advanced study intersecting brain science with silicon. Learn to build direct cortical interfaces and neural processing models.",
    Icon: Cpu,
    color: "#22C55E", // Green
    duration: "2 Years",
    tag: "Graduate",
  },
  {
    title: "PhD in Cognitive Architecture",
    desc: "Pioneering research into artificial general intelligence, synthetic consciousness, and large-scale brain simulations.",
    Icon: Database,
    color: "#F97316", // Orange
    duration: "4-5 Years",
    tag: "Doctoral",
  },
];

export default function Programs() {
  return (
    <section id="neuroscience-programs" className="relative w-full py-32 px-6 bg-[var(--nvg-purple)] text-black flex justify-center">
      <div className="max-w-7xl w-full">
        
        {/* Header */}
        <div className="mb-24">
          <span className="inline-block px-4 py-1 border-4 border-black rounded-full font-black text-xs uppercase mb-8 tracking-wide bg-white text-black shadow-[4px_4px_0_0_#000]">
            Phase 1
          </span>
          <h2 className="heading-massive text-[9vw] md:text-[6vw] lg:text-[80px] leading-[1] mb-6">
            Academic<br/>Programs
          </h2>
          <p className="font-bold text-lg md:text-xl max-w-2xl leading-tight">
            Phase 1 is strictly dedicated to the School of Neuroscience. We are selecting the founding cohort of minds who will bridge the gap between biological and artificial intelligence.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring", damping: 15 }}
              className="bg-[var(--bg-cream)] border-[6px] border-black rounded-[32px] p-8 md:p-10 flex flex-col hover:-translate-y-4 hover:shadow-[16px_16px_0_0_#000] transition-all duration-300 relative"
            >
              
              <div className="flex justify-between items-start mb-12">
                <div className="w-20 h-20 bg-white border-[4px] border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
                  <prog.Icon size={40} strokeWidth={2.5} color="#000" />
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/60">
                    {prog.tag}
                  </span>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                    {prog.duration}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-black mb-4 leading-none">{prog.title}</h3>
              <p className="font-bold opacity-80 mb-12 leading-snug">
                {prog.desc}
              </p>

              <button className="mt-auto self-start flex items-center gap-2 font-black uppercase text-sm tracking-wider border-b-4 border-black hover:pr-4 transition-all">
                View Curriculum <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
