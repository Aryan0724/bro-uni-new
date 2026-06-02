"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Join() {
  const [doneAdmissions, setDoneAdmissions] = useState(false);
  const [doneInvestors, setDoneInvestors] = useState(false);

  return (
    <section className="w-full py-32 px-6 bg-[var(--nvg-green)] text-[var(--text-dark)] flex flex-col items-center select-none">
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
        
        {/* ADMISSIONS CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="flex-1 bg-[var(--bg-cream)] border-[6px] border-black rounded-[48px] flex flex-col items-center text-center overflow-hidden relative"
          style={{ padding: "4rem 2rem" }}
        >
          {!doneAdmissions ? (
            <>
              <span className="inline-block bg-[var(--nvg-purple)] text-white border-4 border-black px-6 py-2 rounded-full font-black uppercase text-sm mb-6 transform -rotate-2">
                Admissions
              </span>
              <h2 className="heading-massive text-[8vw] md:text-[60px] leading-[0.95] mb-4">
                Join the <br/> Cohort.
              </h2>
              <p className="font-bold text-lg mt-4 max-w-sm mx-auto opacity-80 leading-snug mb-8">
                Apply for the Phase 1 Neuroscience programs.
              </p>

              <form 
                onSubmit={e => { e.preventDefault(); setDoneAdmissions(true); }}
                className="flex flex-col gap-4 w-full max-w-sm"
              >
                <input 
                  required
                  type="email" 
                  placeholder="Student Email" 
                  className="w-full bg-white border-[4px] border-black rounded-[16px] px-6 py-4 font-black text-xl outline-none focus:bg-[var(--nvg-yellow)] transition-colors placeholder-black/30"
                />
                <button 
                  type="submit"
                  className="w-full bg-black text-white border-[4px] border-black rounded-[16px] px-8 py-4 font-black text-xl hover:bg-[var(--nvg-blue)] hover:text-black transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Rocket size={60} color="#000" strokeWidth={2} className="mx-auto mb-6" />
              <h2 className="font-black text-4xl mb-4">Application Received.</h2>
              <p className="font-bold opacity-80 text-xl">Our admissions team will contact you shortly.</p>
            </div>
          )}
        </motion.div>

        {/* INVESTORS CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.1 }}
          className="flex-1 bg-black text-white border-[6px] border-black rounded-[48px] flex flex-col items-center text-center overflow-hidden relative"
          style={{ padding: "4rem 2rem" }}
        >
          {!doneInvestors ? (
            <>
              <span className="inline-block bg-[var(--nvg-orange)] text-black border-4 border-black px-6 py-2 rounded-full font-black uppercase text-sm mb-6 transform rotate-2">
                Strategic Partners
              </span>
              <h2 className="heading-massive text-[8vw] md:text-[60px] leading-[0.95] mb-4 text-white">
                Back the <br/> Future.
              </h2>
              <p className="font-bold text-lg mt-4 max-w-sm mx-auto text-zinc-400 leading-snug mb-8">
                Inquire about Phase 2 AI & Semiconductor seed rounds.
              </p>

              <form 
                onSubmit={e => { e.preventDefault(); setDoneInvestors(true); }}
                className="flex flex-col gap-4 w-full max-w-sm"
              >
                <input 
                  required
                  type="email" 
                  placeholder="Corporate Email" 
                  className="w-full bg-[#111] text-white border-[4px] border-white/20 rounded-[16px] px-6 py-4 font-black text-xl outline-none focus:border-white transition-colors placeholder-white/30"
                />
                <button 
                  type="submit"
                  className="w-full bg-[var(--nvg-orange)] text-black border-[4px] border-black rounded-[16px] px-8 py-4 font-black text-xl hover:bg-white transition-colors cursor-pointer"
                >
                  Request Deck
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Rocket size={60} color="#var(--nvg-orange)" strokeWidth={2} className="mx-auto mb-6 text-[var(--nvg-orange)]" />
              <h2 className="font-black text-4xl mb-4 text-white">Deck Sent.</h2>
              <p className="font-bold text-zinc-400 text-xl">Check your corporate inbox for the materials.</p>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
