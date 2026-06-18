"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    id: "001",
    question: "Who is BRO University for?",
    answer: "BRO University is built for curious, driven individuals who want to work at the frontier of deep technology — whether you are a student, researcher, creator, or professional looking to pivot into the future of AI, Neuroscience, Semiconductors, or Nanotechnology."
  },
  {
    id: "002",
    question: "Is BRO University a recognized institution?",
    answer: "BRO University is currently in its founding phase — being designed, built, and structured from the ground up. We are working toward full institutional recognition. Early supporters will be part of the founding cohort and shape the university's direction."
  },
  {
    id: "003",
    question: "What makes BRO University different from traditional universities?",
    answer: "Traditional universities teach theory about technologies that already exist. BRO University is designed around technologies that will define the next 50 years — with research happening from day one, student ventures, live labs, and global collaboration baked into the structure."
  },
  {
    id: "004",
    question: "What is the HEY BRO community?",
    answer: "HEY BRO is the innovation community surrounding BRO University — open to students, researchers, creators, and dreamers. It is the movement behind the institution, a place where the future of humanity's technology is being discussed, built, and launched."
  },
  {
    id: "005",
    question: "How can I partner with or invest in BRO University?",
    answer: "We welcome strategic partnerships with research institutions, deep tech companies, investors, and governments. Please reach out to us directly at brouniversity@gmail.com with your proposal and we will respond promptly."
  }
];

export default function BAFAQ() {
  return (
    <section id="faqs" className="pt-32 pb-[20vh] bg-black relative border-b border-white/5 overflow-visible">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        
        <div className="text-center mb-24">
          <span className="text-[10px] font-body tracking-[0.25em] text-white/30 uppercase block mb-5">/ Frequently Asked</span>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white leading-[1.05] tracking-tight uppercase">
            QUESTIONS <span className="text-white/25">ANSWERED.</span>
          </h2>
        </div>

        <div className="flex flex-col relative z-10 pb-[20vh]">
          {faqs.map((faq, idx) => {
            const offset = 200 + idx * 10;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="sticky shadow-[0_-20px_50px_rgba(0,0,0,0.9)]"
                style={{ top: `${offset}px` }}
              >
                <div 
                  className="bg-[#080808] border border-white/6 rounded-[2.5rem] w-full p-10 md:p-16 mb-[50vh] min-h-[45vh] flex flex-col justify-center relative overflow-hidden"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                  <div 
                    className="absolute -right-8 -bottom-16 text-[280px] font-accent font-black text-transparent pointer-events-none select-none leading-none"
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.025)" }}
                  >
                    {faq.id}
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <div className="shrink-0 pt-2">
                      <span className="font-accent text-white/20 text-2xl md:text-3xl font-bold tracking-widest">
                        {faq.id}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                      <h3 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight leading-[1.15]">
                        {faq.question}
                      </h3>
                      <div className="w-10 h-[1.5px] bg-white/15" />
                      <p className="font-body text-lg md:text-xl text-white/35 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
