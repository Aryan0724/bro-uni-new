"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BANavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-8 right-8 z-[999]">
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
          <span style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 16, fontWeight: 500, paddingTop: "1px" }}>Menu</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
            <div style={{ width: "5px", height: "5px", backgroundColor: "black", borderRadius: "50%" }}></div>
            <div style={{ width: "5px", height: "5px", backgroundColor: "black", borderRadius: "50%" }}></div>
            <div style={{ width: "5px", height: "5px", backgroundColor: "black", borderRadius: "50%" }}></div>
            <div style={{ width: "5px", height: "5px", backgroundColor: "black", borderRadius: "50%" }}></div>
          </div>
        </button>
      </div>

      {/* FLOATING DROPDOWN MENU */}
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
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 right-8 bg-white text-black w-[300px] rounded-xl shadow-2xl cursor-default"
              style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "40px" }}
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Logo mark */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "black" }}>
                  <span style={{ fontSize: 16, lineHeight: 1, fontFamily: "Arial" }}>&copy;</span>
                  <div style={{ display: "flex", marginLeft: "-4px" }}>
                    <div style={{ width: "14px", height: "14px", border: "1.5px solid black", borderRadius: "50%" }}></div>
                    <div style={{ width: "14px", height: "14px", border: "1.5px solid black", borderRadius: "50%", backgroundColor: "white", marginLeft: "-4px" }}></div>
                  </div>
                </div>

                {/* Center Black Circle */}
                <div style={{ width: "16px", height: "16px", backgroundColor: "black", borderRadius: "50%", position: "absolute", left: "50%", transform: "translateX(-50%)" }}></div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setMenuOpen(false)}
                  style={{ width: "28px", height: "28px", backgroundColor: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}
                  className="hover:bg-gray-800 transition-transform hover:scale-105"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
                {[
                  { name: "HOME", href: "/" },
                  { name: "ABOUT US", href: "#about" },
                  { name: "PROGRAM", href: "#program" },
                  { name: "COURSE", href: "#pricing" }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-black hover:text-gray-500 transition-colors uppercase"
                    style={{ 
                      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      width: "max-content"
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Modal Footer (Socials & Email) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "16px" }}>
                
                {/* Bracket Social Icons */}
                <div style={{ display: "flex", gap: "16px" }}>
                  {/* Instagram box */}
                  <a href="#" className="relative flex items-center justify-center text-black group transition-transform hover:scale-105" style={{ width: "40px", height: "40px" }}>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-[1.5px] border-l-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-[1.5px] border-l-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-[1.5px] border-r-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  
                  {/* Telegram box */}
                  <a href="#" className="relative flex items-center justify-center text-black group transition-transform hover:scale-105" style={{ width: "40px", height: "40px" }}>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-[1.5px] border-l-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-[1.5px] border-l-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-[1.5px] border-r-[1.5px] border-black group-hover:border-gray-500 transition-colors"></div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon><line x1="22" y1="2" x2="11" y2="13"></line></svg>
                  </a>
                </div>

                <a 
                  href="mailto:brouniversity@gmail.com" 
                  className="font-body text-black hover:text-gray-500 transition-colors"
                  style={{ fontSize: 12, fontWeight: 500 }}
                >
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
