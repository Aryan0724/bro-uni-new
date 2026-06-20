"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Join() {
  const [done, setDone] = useState(false);

  return (
    // Yahan style={{ paddingTop: "120px" }} add kiya hai taaki gap exact dikhe
    <section 
      id="hey-bro" 
      className="w-full pb-32 px-6 bg-[#050505] border-t border-white/5 relative overflow-hidden"
      style={{ paddingTop: "120px" }} 
    >
      
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image src="/neural-bg.svg" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* UPPER PART: Aapka Original Join Content */}
        <div className="flex flex-col items-center text-center gap-16 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight uppercase">
              HEY BRO COMMUNITY
            </h1>
            <h2 className="font-display font-bold text-xl md:text-3xl text-white/40 leading-tight tracking-tight uppercase">
              MORE THAN A UNIVERSITY — A MOVEMENT.
            </h2>
            <p className="font-body text-white/45 text-[15px] leading-relaxed max-w-lg">
              HEY BRO is a future innovation community for students, researchers, creators, and dreamers who want to shape the future of humanity through technology.
            </p>

            <div className="flex flex-col gap-2 mt-4">
              {["Join the movement.", "Build the future.", "Race Up Your Brain."].map((line) => (
                <p key={line} className="font-display font-medium text-lg text-white/60">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-4 p-5 border border-white/10 rounded-xl bg-white/5 max-w-xl">
              <p className="font-body text-white/40 text-[13px] leading-relaxed">
                <span className="text-white/70 font-medium">HEY BRO MOVEMENT</span> — a community of GenZ, youth, researchers, engineers, and scientists united by the mission to build the future through deep technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col gap-6"
          >
            {!done ? (
              <>
                <h3 className="font-display font-bold text-xl text-white">Get Early Access</h3>
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex flex-col gap-3">
                  <input required type="text" placeholder="Your Name" className="w-full bg-[#111] text-white border border-white/10 rounded-xl px-5 py-3 outline-none" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-[#111] text-white border border-white/10 rounded-xl px-5 py-3 outline-none" />
                  <button type="submit" className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-white/90">JOIN EARLY ACCESS →</button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center text-white"><h3 className="text-xl font-bold">You're In.</h3></div>
            )}
          </motion.div>
        </div>

        {/* LOWER PART: Contact Us Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12 border-t border-white/10">
          <div>
            <span className="font-body text-white/25 text-[11px] uppercase tracking-widest">/Navigate</span>
            <ul className="flex flex-col gap-4 mt-5">
              <li><Link href="#hero" className="text-white/45 text-[14px]">Home</Link></li>
              <li><Link href="#about" className="text-white/45 text-[14px]">About</Link></li>
              <li><Link href="#why" className="text-white/45 text-[14px]">Why BRO</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-body text-white/25 text-[11px] uppercase tracking-widest">/Focus Areas</span>
            <ul className="flex flex-col gap-4 mt-5">
              <li><span className="text-white/45 text-[14px]">Neuroscience</span></li>
              <li><span className="text-white/45 text-[14px]">AI</span></li>
              <li><span className="text-white/45 text-[14px]">Semiconductors</span></li>
            </ul>
          </div>
          <div>
            <span className="font-body text-white/25 text-[11px] uppercase tracking-widest">/Contact</span>
            <ul className="flex flex-col gap-4 mt-5">
              <li><a href="mailto:brouniversity@gmail.com" className="text-white/45 text-[14px]">brouniversity@gmail.com</a></li>
              <li><a href="#" className="text-white/45 text-[14px]">Instagram</a></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}