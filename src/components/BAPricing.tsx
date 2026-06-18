"use client";

import { motion } from "framer-motion";

const headerVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function BAPricing() {
  return (
    <>
      {/* ── INVESTOR SECTION ── */}
      <section id="investor" className="section-padding bg-black relative border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section label + Heading */}
          <div className="text-center mb-20">
            <motion.span
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariant}
              className="text-[10px] font-body tracking-[0.25em] text-white/30 uppercase block mb-5"
            >
              / Investor Interest
            </motion.span>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariant}
              className="font-display font-bold text-5xl md:text-7xl text-white leading-[1.05] tracking-tight uppercase"
            >
              BUILDING A SCALABLE<br /><span className="text-white/25">DEEP-TECH EDUCATION ECOSYSTEM.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-body text-white/40 text-[15px] leading-relaxed mt-6 max-w-2xl mx-auto"
            >
              BRO University is designed to attract strategic investors, research collaborators, global faculty, and innovation partners.
            </motion.p>
          </div>

          {/* Investor card */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#080808] flex flex-col md:flex-row gap-0 border border-white/8"
            >
              {/* Left column */}
              <div className="flex flex-col gap-8 p-12 flex-1">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-body tracking-[0.2em] text-white/30 uppercase">For Institutions &amp; Investors</span>
                  <h3 className="font-display font-bold text-4xl text-white tracking-tight leading-none">
                    Partner<br />With Us
                  </h3>
                  <div className="w-8 h-[1px] bg-white/20 mt-1" />
                  <p className="font-body text-white/40 text-[14px] leading-relaxed max-w-xs">
                    We are building a scalable deep-tech education ecosystem with global potential. Partner with the institution defining the next era of human intelligence.
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {[
                    "Research institution collaboration",
                    "Strategic investment opportunities",
                    "Co-develop deep tech programs",
                    "Access to founding talent pipeline",
                    "Global innovation partnership",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-body text-[13px] text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a href="mailto:brouniversity@gmail.com" className="btn-white inline-flex" style={{ padding: "15px 30px", fontSize: "12px" }}>
                    Partner With Us →
                  </a>
                </div>
              </div>

              {/* Right column — stats */}
              <div className="flex flex-col justify-center gap-10 p-12 border-t md:border-t-0 md:border-l border-white/5 min-w-[260px]">
                {[
                  { label: "500+", sub: "Future Scientists" },
                  { label: "300+", sub: "Future Founders" },
                  { label: "∞", sub: "Global Impact" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="font-display font-bold text-5xl text-white tracking-tight">{stat.label}</span>
                    <span className="text-[10px] font-body tracking-[0.2em] text-white/30 uppercase">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── ADMISSIONS / EARLY ACCESS SECTION ── */}
      <section id="admissions" className="section-padding bg-black relative border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section label + Heading */}
          <div className="text-center mb-20">
            <motion.span
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariant}
              className="text-[10px] font-body tracking-[0.25em] text-white/30 uppercase block mb-5"
            >
              / Admissions &amp; Early Access
            </motion.span>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariant}
              className="font-display font-bold text-5xl md:text-7xl text-white leading-[1.05] tracking-tight uppercase"
            >
              JOIN THE<br /><span className="text-white/25">FOUNDING COHORT.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-body text-white/40 text-[15px] leading-relaxed mt-6 max-w-xl mx-auto"
            >
              Be among the first students and researchers to access BRO University&apos;s neuroscience-first innovation ecosystem.
            </motion.p>
          </div>

          {/* Two CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] border border-white/8 bg-white/5 max-w-5xl mx-auto">

            {/* Become an Early Supporter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#080808] flex flex-col gap-8 p-12 group hover:bg-[#0d0d0d] transition-colors duration-300"
            >
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-body tracking-[0.2em] text-white/30 uppercase">For Students &amp; Researchers</span>
                <h3 className="font-display font-bold text-4xl text-white tracking-tight leading-none">
                  Become an<br />Early Supporter
                </h3>
                <div className="w-8 h-[1px] bg-white/20 mt-1" />
                <p className="font-body text-white/40 text-[14px] leading-relaxed max-w-xs">
                  Join the founding community. Be among the first to access neuroscience programs, research opportunities, and the HEY BRO ecosystem as it comes to life.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  "Priority access to founding cohort",
                  "Early research collaboration opportunities",
                  "HEY BRO community membership",
                  "Direct engagement with founding team",
                  "Shape the university's research direction",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-[13px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button className="btn-primary" style={{ padding: "15px 30px", fontSize: "12px" }}>
                  Join Early Access →
                </button>
              </div>
            </motion.div>

            {/* Partner section for mobile/secondary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#080808] flex flex-col gap-8 p-12 group hover:bg-[#0d0d0d] transition-colors duration-300"
            >
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-body tracking-[0.2em] text-white/30 uppercase">THE FUTURE WILL BELONG TO INNOVATORS.</span>
                <h3 className="font-display font-bold text-4xl text-white tracking-tight leading-none">
                  Why Join<br />Now?
                </h3>
                <div className="w-8 h-[1px] bg-white/20 mt-1" />
                <p className="font-body text-white/40 text-[14px] leading-relaxed max-w-xs">
                  Those who act today will shape tomorrow&apos;s world. BRO University is building from the ground up — and early supporters become part of its foundation.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  "Be part of a research-first institution",
                  "Access future Neuroscience programs",
                  "Early access to AI & Semiconductor tracks",
                  "Network with founders and researchers",
                  "Shape the BRO University ecosystem",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-[13px] text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a href="mailto:brouniversity@gmail.com" className="btn-white inline-flex" style={{ padding: "15px 30px", fontSize: "12px" }}>
                  Request Info Pack →
                </a>
              </div>
            </motion.div>

          </div>

          {/* Closing strong line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center font-display font-bold text-2xl md:text-4xl text-white/10 tracking-tight uppercase mt-20"
          >
            HEY BRO, THE FUTURE STARTS HERE.
          </motion.p>

        </div>
      </section>
    </>
  );
}
