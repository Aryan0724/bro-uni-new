"use client";

import { motion } from "framer-motion";
import { Bot, Cpu } from "lucide-react";

export default function FutureSchools() {
  return (
    <section id="future-schools" className="relative w-full py-32 px-6 bg-black flex justify-center border-t border-white/10">
      <div className="max-w-7xl w-full">
        
        {/* Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <span className="inline-block px-4 py-1 border-4 border-black rounded-full font-black text-xs uppercase mb-8 tracking-wide bg-white text-black shadow-[4px_4px_0_0_#000]">
            Phase 2 & 3 Expansion
          </span>
          <h2 className="heading-massive text-[8vw] md:text-[5vw] lg:text-[72px] leading-[1] mb-6 text-white">
            Future Architecture
          </h2>
          <p className="font-bold text-lg md:text-xl max-w-2xl leading-tight text-white/90">
            The BRO University ecosystem is designed to scale seamlessly. 
            Once the neuroscience foundation is laid, we will launch two additional schools to complete the intelligence triad.
          </p>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* School of AI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-[var(--nvg-green)] border-[6px] border-black rounded-[32px] p-8 md:p-10 flex flex-col text-black hover:-translate-y-4 hover:shadow-[16px_16px_0_0_#000] transition-all duration-300"
          >
                 
            <div className="flex items-center justify-between w-full mb-12">
              <div className="w-20 h-20 bg-white border-[4px] border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
                <Bot size={40} strokeWidth={2.5} color="#000" />
              </div>
              <span className="text-xs font-black bg-black text-white px-3 py-1.5 rounded-full uppercase tracking-widest border-2 border-black">
                Launching 2027
              </span>
            </div>

            <h3 className="text-4xl font-black mb-4 leading-none">School of AI</h3>
            <p className="text-xl font-bold mb-6 leading-snug opacity-90">
              Integrating neural models into artificial general intelligence frameworks.
            </p>
            <p className="text-sm font-bold leading-relaxed mt-auto border-t-[3px] border-black pt-6 opacity-90">
              <span className="font-black uppercase tracking-wider block mb-1">Venture-Focused</span> 
              Learn from industry pioneers building the next generation of LLMs. Focus on applied venture building in AI rather than just theoretical research.
            </p>
          </motion.div>

          {/* Semiconductor Sciences */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20, delay: 0.1 }}
            className="bg-[var(--red)] border-[6px] border-black rounded-[32px] p-8 md:p-10 flex flex-col text-black hover:-translate-y-4 hover:shadow-[16px_16px_0_0_#000] transition-all duration-300"
          >
                 
            <div className="flex items-center justify-between w-full mb-12">
              <div className="w-20 h-20 bg-white border-[4px] border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
                <Cpu size={40} strokeWidth={2.5} color="#000" />
              </div>
              <span className="text-xs font-black bg-black text-white px-3 py-1.5 rounded-full uppercase tracking-widest border-2 border-black">
                Launching 2028
              </span>
            </div>

            <h3 className="text-4xl font-black mb-4 leading-none">Semiconductor Sciences</h3>
            <p className="text-xl font-bold mb-6 leading-snug opacity-90">
              Custom hardware designed to run biological-scale networks natively.
            </p>
            <p className="text-sm font-bold leading-relaxed mt-auto border-t-[3px] border-black pt-6 opacity-90">
              <span className="font-black uppercase tracking-wider block mb-1">Applied Fabrication</span> 
              A curriculum designed around hardware tape-outs. Go from architectural design to a manufactured chip in our incubation labs.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
