"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "HOME",                  href: "#home" },
  { name: "WHY BRO",               href: "#why-bro" },
  { name: "NEUROSCIENCE PROGRAMS", href: "#neuroscience-programs" },
  { name: "RESEARCH & INNOVATION", href: "#research" },
  { name: "FUTURE SCHOOLS",        href: "#future-schools" },
  { name: "INVESTOR INTEREST",     href: "#investor" },
  { name: "ADMISSIONS / EARLY ACCESS", href: "#admissions" },
  { name: "FAQ'S",                 href: "#faqs" },
  { name: "HEY BRO MOVEMENT",     href: "#hey-bro" },
  { name: "CONTACT",               href: "#contact" },
];

export default function BANavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Use native smooth scroll to section
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-8 right-8 z-[999]"
          >
        <button
          onClick={() => setMenuOpen(true)}
          className="bg-white text-black cursor-pointer hover:bg-gray-100 transition-colors shadow-sm"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            padding: "10px 24px",
            borderRadius: "9999px"
          }}
        >
          <span style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 15, fontWeight: 500, paddingTop: "1px" }}>Menu</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ width: "5px", height: "5px", backgroundColor: "black", borderRadius: "50%" }} />
            ))}
          </div>
        </button>
      </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] pointer-events-auto"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute top-8 right-8 bg-white text-black rounded-xl shadow-2xl cursor-default overflow-y-auto"
              style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "24px", maxHeight: "90vh", width: "320px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with logo and close */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Image
                  src="/bro-logo.png"
                  alt="BRO University"
                  width={52}
                  height={52}
                  style={{ objectFit: "contain" }}
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{ width: "28px", height: "28px", backgroundColor: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}
                  className="hover:bg-gray-800 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {NAV_LINKS.map((link, i) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-black hover:text-gray-500 hover:bg-gray-50 transition-all uppercase rounded-lg px-3 py-2.5"
                    style={{
                      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    <span style={{ color: "rgba(0,0,0,0.2)", fontSize: 9, marginRight: 8 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Footer social */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "16px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  {/* Instagram */}
                  <a href="#" className="relative flex items-center justify-center text-black group transition-transform hover:scale-105" style={{ width: "36px", height: "36px" }}>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-[1.5px] border-l-[1.5px] border-black" />
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-black" />
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-[1.5px] border-l-[1.5px] border-black" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-[1.5px] border-r-[1.5px] border-black" />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  {/* Discord */}
                  <a href="#" className="relative flex items-center justify-center text-black group transition-transform hover:scale-105" style={{ width: "36px", height: "36px" }}>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-[1.5px] border-l-[1.5px] border-black" />
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-black" />
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-[1.5px] border-l-[1.5px] border-black" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-[1.5px] border-r-[1.5px] border-black" />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 2 15 22 11 13 2 9 22 2"/><line x1="22" y1="2" x2="11" y2="13"/></svg>
                  </a>
                </div>
                <a href="mailto:brouniversity@gmail.com" className="font-body text-black/50 hover:text-black transition-colors" style={{ fontSize: 11, fontWeight: 500 }}>
                  brouniversity@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
