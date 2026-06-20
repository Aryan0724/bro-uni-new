"use client";

import Link from "next/link";
import Image from "next/image";

export default function BAFooter() {
  return (
    <footer className="bg-black border-t border-white/5 relative z-10 overflow-hidden">
      
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