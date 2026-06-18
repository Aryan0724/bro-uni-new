"use client";

import Link from "next/link";
import Image from "next/image";

export default function BAFooter() {
  return (
    <footer className="bg-black border-t border-white/5 relative z-10 overflow-hidden">

      {/* HEY BRO MOVEMENT — Full width hero block */}
      <div className="relative w-full border-b border-white/5 py-20 px-6 md:px-12 overflow-hidden">
        {/* Neural background very faint */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.7) 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.7) 60%, transparent 100%)"
          }}
        >
          <Image src="/neural-bg.svg" alt="" fill className="object-cover object-center" style={{ opacity: 0.18 }} />
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-body tracking-[0.3em] text-white/25 uppercase">/ The Movement</span>
            
            {/* Mega HEY BRO text */}
            <h2
              className="font-accent font-black text-white leading-[0.88] tracking-tighter uppercase"
              style={{ fontSize: "clamp(52px, 9vw, 130px)", letterSpacing: "-0.04em" }}
            >
              HEY BRO
            </h2>
            <h3
              className="font-accent font-black text-white/20 leading-[0.88] tracking-tighter uppercase"
              style={{ fontSize: "clamp(24px, 4vw, 56px)", letterSpacing: "-0.03em" }}
            >
              MOVEMENT.
            </h3>
          </div>

          {/* Movement meaning */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start max-w-4xl">
            <p className="font-body text-white/55 text-[15px] md:text-[17px] leading-relaxed flex-1 border-l border-white/10 pl-6">
              HEY BRO MOVEMENT is a community of GenZ, youth, researchers, engineers, and scientists — united by the belief that the future of humanity must be built, not inherited.
            </p>
            <div className="flex flex-col gap-3 shrink-0">
              <p className="font-body text-white/30 text-[12px] tracking-widest uppercase">Join the movement</p>
              <Link 
                href="#"
                className="btn-primary inline-flex"
                style={{ padding: "14px 28px", fontSize: "12px" }}
              >
                <span>Become an Early Supporter</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center ml-3">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
              <Link 
                href="mailto:brouniversity@gmail.com"
                className="btn-secondary inline-flex"
                style={{ padding: "13px 28px", fontSize: "12px" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>

          {/* CTA closing manifesto */}
          <div className="border-t border-white/5 pt-8">
            <p className="font-display font-medium text-white/20 text-[16px] md:text-[20px] tracking-tight uppercase leading-snug">
              THE FUTURE WILL BELONG TO INNOVATORS.<br />
              THOSE WHO ACT TODAY WILL SHAPE TOMORROW&apos;S WORLD.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-14">
        
        {/* Logo + Nav row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo block */}
          <div className="flex flex-col gap-5">
            <Image
              src="/bro-logo.png"
              alt="BRO University"
              width={80}
              height={80}
              style={{ filter: "invert(1)", opacity: 0.75 }}
            />
            <p className="font-body text-white/30 text-[11px] leading-relaxed max-w-[160px]">
              India&apos;s next-generation deep tech university.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <span className="font-body text-white/25 text-[11px] uppercase tracking-widest">/Navigate</span>
            <ul className="flex flex-col gap-4">
              <li><Link href="#hero" className="font-body text-white/45 text-[14px] hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="#about" className="font-body text-white/45 text-[14px] hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href="#why" className="font-body text-white/45 text-[14px] hover:text-white transition-colors duration-200">Why BRO</Link></li>
              <li><Link href="#future-schools" className="font-body text-white/45 text-[14px] hover:text-white transition-colors duration-200">Deep Tech</Link></li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-col gap-5">
            <span className="font-body text-white/25 text-[11px] uppercase tracking-widest">/Focus Areas</span>
            <ul className="flex flex-col gap-4">
              <li><span className="font-body text-white/45 text-[14px]">Neuroscience</span></li>
              <li><span className="font-body text-white/45 text-[14px]">Artificial Intelligence</span></li>
              <li><span className="font-body text-white/45 text-[14px]">Semiconductors</span></li>
              <li><span className="font-body text-white/45 text-[14px]">Nanotechnology</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <span className="font-body text-white/25 text-[11px] uppercase tracking-widest">/Contact</span>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:brouniversity@gmail.com" className="font-body text-white/45 text-[14px] hover:text-white transition-colors duration-200 break-all">
                  brouniversity@gmail.com
                </a>
              </li>
              <li><a href="#" className="font-body text-white/45 text-[14px] hover:text-white transition-colors duration-200">Instagram</a></li>
              <li><a href="#" className="font-body text-white/45 text-[14px] hover:text-white transition-colors duration-200">Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-white/5 pt-8">
          <p className="font-body text-white/20 text-[11px] tracking-wide uppercase">
            © 2025 BRO UNIVERSITY · All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-body text-white/20 text-[11px] hover:text-white/50 transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
              Back to top ↑
            </button>
            <p className="font-body text-white/15 text-[11px] tracking-widest uppercase hidden md:block">
              India&apos;s Next-Generation Deep Tech University
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
