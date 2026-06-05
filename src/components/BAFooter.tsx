"use client";

import Link from "next/link";

export default function BAFooter() {
  return (
    <footer className="bg-[#050505] pt-24 pb-6 border-t border-white/5 relative z-10">
      <div className="container-inner max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        
        {/* Top Section: Massive Typography & Top-Right Logo */}
        <div className="flex justify-between items-start">
          <div className="max-w-4xl">
            <h2 className="font-sans font-medium text-3xl md:text-5xl lg:text-[54px] text-white leading-[1.1] tracking-tight">
              THE FUTURE WON&apos;T WAIT. THOSE WHO ACT TODAY WILL SHAPE TOMORROW&apos;S TRENDS. JOIN US TO BE AMONG THE FIRST.
            </h2>
          </div>
          
          {/* Top Right Interlocking Circles Logo */}
          <div className="hidden md:flex gap-[2px] opacity-80">
            <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">C</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center -ml-2">
            </div>
          </div>
        </div>

        {/* Middle Section: Button & Navigation Columns */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-8">
          
          {/* Left: White Button */}
          <div className="w-full md:w-auto">
            <Link 
              href="#pricing"
              className="bg-white text-black font-sans font-bold text-sm tracking-widest px-6 py-5 rounded-xl flex items-center justify-between gap-6 hover:bg-gray-200 transition-colors shadow-lg max-w-[280px]"
            >
              <span>BUY THE COURSE</span>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
            </Link>
          </div>

          {/* Center/Right: Navigation Grid */}
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            
            {/* Empty Spacer Column for layout matching */}
            <div className="hidden md:block"></div>

            {/* Navigation Column */}
            <div className="flex flex-col gap-6">
              <span className="font-body text-gray-400 text-sm">/Navigation</span>
              <ul className="flex flex-col gap-4">
                <li><Link href="#hero" className="font-body text-white text-[17px] hover:text-[var(--accent)] transition-colors">Hero</Link></li>
                <li><Link href="#about" className="font-body text-white text-[17px] hover:text-[var(--accent)] transition-colors">About us</Link></li>
                <li><Link href="#program" className="font-body text-white text-[17px] hover:text-[var(--accent)] transition-colors">Program</Link></li>
                <li><Link href="#pricing" className="font-body text-white text-[17px] hover:text-[var(--accent)] transition-colors">Course</Link></li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="flex flex-col gap-6">
              <span className="font-body text-gray-400 text-sm">/Social</span>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="font-body text-white text-[17px] hover:text-[var(--accent)] transition-colors">Instagram</a></li>
                <li><a href="#" className="font-body text-white text-[17px] hover:text-[var(--accent)] transition-colors">Telegram</a></li>
              </ul>
            </div>

            {/* Back to top Column */}
            <div className="flex justify-start md:justify-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-body text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 h-fit mt-1"
              >
                Back to top <span className="text-lg leading-none">↑</span>
              </button>
            </div>
            
          </div>
        </div>



      </div>
    </footer>
  );
}
