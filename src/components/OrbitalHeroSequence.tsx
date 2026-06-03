"use client";

import { motion } from "framer-motion";
import { Brain, Database, Network, Zap } from "lucide-react";

export default function OrbitalHeroSequence({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="relative w-full min-h-[100svh] bg-black overflow-hidden flex flex-col items-center justify-center py-32 border-b-[6px] border-black select-none">
      
      {/* NAVBAR */}
      <nav className="absolute top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto flex items-center bg-[#1c1c1c] border border-white/10 rounded-full p-[6px_6px_6px_18px] gap-1 backdrop-blur-md">
          <div className="flex items-center gap-2 pr-4 border-r border-white/10 mr-2">
            <div className="bg-[var(--nvg-orange)] text-black font-black text-base w-7 h-7 flex items-center justify-center rounded-md">B</div>
            <span className="text-white font-bold text-sm">BroUni</span>
          </div>
          {[
            { label: "Neuroscience", id: "neuroscience-programs" },
            { label: "School of AI", id: "future-schools" },
            { label: "Semiconductors", id: "future-schools" },
          ].map(link => (
            <a 
              key={link.label} 
              href={`#${link.id}`} 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white/60 hover:text-white text-[13px] font-semibold px-3.5 py-2 no-underline rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button onClick={onExplore} className="ml-2 bg-[#C4FF5E] text-black font-extrabold text-[13px] px-5 py-2.5 rounded-full border-none cursor-pointer hover:scale-105 transition-transform">
            Apply Now
          </button>
        </div>
      </nav>

      {/* FLOATING ELEMENTS (Finout Style Layout + Neo-Brutalist Aesthetic) */}
      
      {/* Middle Left (Cloud equivalent) */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[10%] xl:left-[15%] hidden md:flex w-24 h-24 bg-[var(--nvg-purple)] border-[4px] border-black rounded-[24px] shadow-[8px_8px_0_0_#000] items-center justify-center -rotate-6"
      >
        <Brain size={48} color="#000" strokeWidth={2.5} />
      </motion.div>

      {/* Top Right (Tag equivalent) */}
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] xl:right-[15%] hidden md:flex w-20 h-20 bg-[var(--nvg-orange)] border-[4px] border-black rounded-full shadow-[8px_8px_0_0_#000] items-center justify-center rotate-12"
      >
        <Zap size={40} color="#000" strokeWidth={2.5} />
      </motion.div>

      {/* Bottom Left (Windmill equivalent) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[15%] xl:left-[20%] hidden md:flex w-20 h-20 bg-[var(--nvg-green)] border-[4px] border-black rounded-2xl shadow-[8px_8px_0_0_#000] items-center justify-center -rotate-12"
      >
        <Network size={40} color="#000" strokeWidth={2.5} />
      </motion.div>

      {/* Bottom Right (Telescope equivalent) */}
      <motion.div 
        animate={{ y: [0, 15, 0] }} 
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[15%] xl:right-[20%] hidden md:flex w-28 h-28 bg-[var(--red)] border-[4px] border-black rounded-[32px] shadow-[8px_8px_0_0_#000] items-center justify-center rotate-6"
      >
        <Database size={56} color="#000" strokeWidth={2.5} />
      </motion.div>


      {/* CENTER TEXT STACK */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-5xl mt-12">
        
        <h1 className="heading-massive text-white text-[12vw] md:text-[8vw] lg:text-[110px] leading-[0.95] mb-8 drop-shadow-md">
          Your mind runs<br />the network.
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-white/80 max-w-2xl leading-relaxed mb-12">
          Join the founding cohort of minds who have outgrown traditional education by adopting the new standard for Neural and AI architectures.
        </p>

        <button 
          onClick={onExplore}
          className="bg-[var(--nvg-yellow)] text-black border-[4px] border-black shadow-[6px_6px_0_0_#000] rounded-full px-12 py-5 font-black text-xl uppercase tracking-wider hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000] transition-all"
        >
          Let&apos;s talk
        </button>

      </div>
    </section>
  );
}
