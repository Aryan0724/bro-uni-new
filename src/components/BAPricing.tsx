"use client";

import { motion, type Variants } from "framer-motion";

const headerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function BAPricing() {
  return (
    // Section ko aur space dene ke liye padding badha di hai
    <section
      id="investor"
      className="py-40 bg-black relative border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-0">

        {/* Header Section: Center align aur badi heading */}
        <div className="flex flex-col items-center gap-6 mb-32 text-center w-full">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariant}
            className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight uppercase"
          >
            INVESTOR INTEREST
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariant}
            className="font-display font-bold text-xl md:text-3xl text-white/80 leading-[1.3] tracking-tight uppercase max-w-3xl"
          >
            BUILDING A SCALABLE 
            <br />
            <span className="text-white/30">DEEP-TECH EDUCATION ECOSYSTEM.</span>
          </motion.p>
          
          <p className="text-white/60 text-lg max-w-2xl mt-4 leading-relaxed">
            BRO University is designed to attract strategic investors, research collaborators, global faculty, and innovation partners.
          </p>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#080808] border border-white/10 flex flex-col md:flex-row"
        >
          <div className="p-12 md:p-16 flex-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8">For Institutions & Investors</p>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-8">Partner<br />With Us</h3>
            <p className="text-white/50 mb-10 max-w-md text-base leading-relaxed">
              We are building a scalable deep-tech education ecosystem with global potential. Partner with the institution defining the next era of human intelligence.
            </p>
            <ul className="space-y-5">
              {["Research institution collaboration", "Strategic investment opportunities", "Co-develop deep tech programs"].map((item) => (
                <li key={item} className="text-white/70 flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/30 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 md:p-16 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center gap-10">
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-2">Future Scientists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">300+</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-2">Future Founders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">∞</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}