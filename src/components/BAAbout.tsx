"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';

// A cool animated counter for the huge numbers
function Counter({ from, to, duration = 2, format = false }: { from: number, to: number, duration?: number, format?: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // cinematic ease-out
        onUpdate(value) {
          if (nodeRef.current) {
            const num = Math.round(value);
            nodeRef.current.textContent = format ? num.toLocaleString() : num.toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, format]);
  
  return <span ref={nodeRef}>{from}</span>;
}

export default function BAAbout() {
  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, rotateY: 90, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Spotlight mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="w-full h-screen min-h-[600px] bg-black relative overflow-hidden font-body flex flex-col justify-center">
      
      {/* Main Grid Container (Bento Box) */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        onMouseMove={handleMouseMove}
        className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[1px] bg-white/20 border-y border-white/20 h-full md:h-[85vh] group/grid relative [perspective:2000px]"
      >
        
        {/* Global Spotlight Effect overlaying the entire grid */}
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.06),
                transparent 80%
              )
            `,
          }}
        />

        {/* 1. 5+ Block (Left Tall) */}
        <motion.div variants={itemVariant} className="col-span-1 md:row-span-2 bg-black relative flex flex-col p-6 lg:p-10 overflow-hidden group min-h-[400px] md:min-h-0">
          <div className="z-20 flex flex-col gap-2">
            <h3 className="text-6xl lg:text-[80px] font-accent font-medium text-white tracking-tight leading-none group-hover:scale-110 group-hover:text-[#FF5500] origin-left transition-all duration-700 ease-out">
              <Counter from={0} to={5} duration={1.5} />+
            </h3>
            <p className="text-white/80 font-display text-xs lg:text-sm font-semibold uppercase tracking-widest max-w-[200px] leading-relaxed">
              YEARS OF DEDICATED RESEARCH IN COGNITIVE AI ARCHITECTURES
            </p>
          </div>
          <motion.img 
            animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src="/rock.png" 
            alt="Asteroid Rock" 
            className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-125 transition-transform duration-[3000ms] ease-out z-0 opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
        </motion.div>

        {/* 2. Top Middle Info Block (formerly spacer) */}
        <motion.div variants={itemVariant} className="hidden md:flex col-span-1 md:row-span-1 bg-[#0a0a0a] p-6 lg:p-10 relative overflow-hidden group flex-col justify-start">
           <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
           <h3 className="text-white text-4xl lg:text-5xl font-accent font-medium z-10 leading-none tracking-tighter mb-3 group-hover:text-[#FF5500] transition-colors duration-700">
             24/7
           </h3>
           <p className="text-white/70 font-display text-xs lg:text-sm font-bold uppercase tracking-widest z-10 leading-relaxed max-w-[200px] group-hover:text-white group-hover:translate-x-2 transition-all duration-700">
             LIFETIME ACCESS TO OUR EXCLUSIVE BUILDER NETWORK.
           </p>
        </motion.div>

        {/* 3. Top Middle White Block */}
        <motion.div variants={itemVariant} className="col-span-1 md:row-span-1 bg-white p-6 lg:p-10 flex flex-col items-end justify-end relative group overflow-hidden min-h-[250px] md:min-h-0">
          <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
          <p className="text-black text-right font-display text-sm lg:text-base font-bold uppercase tracking-widest z-10 leading-relaxed max-w-[240px] group-hover:-translate-y-2 transition-transform duration-700">
            <span className="text-xl lg:text-2xl block mb-2 font-accent group-hover:text-[#FF5500] transition-colors duration-700">
              <Counter from={0} to={10} duration={1.5} />+ EXPERTS
            </span>
            INDUSTRY LEADERS ACTIVELY BUILDING IN THE SPACE.
          </p>
        </motion.div>

        {/* 4. Top Right Info Block (formerly spacer) */}
        <motion.div variants={itemVariant} className="hidden md:flex col-span-1 md:row-span-1 bg-[#111] p-6 lg:p-10 relative overflow-hidden group flex-col justify-end items-end text-right">
           <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
           <h3 className="text-white text-4xl lg:text-5xl font-accent font-medium z-10 leading-none tracking-tighter mb-3 group-hover:text-[#FF5500] transition-colors duration-700">
             <Counter from={0} to={100} duration={2} />%
           </h3>
           <p className="text-white/70 font-display text-xs lg:text-sm font-bold uppercase tracking-widest z-10 leading-relaxed max-w-[200px] group-hover:text-white group-hover:-translate-x-2 transition-all duration-700">
             SIGNAL. ACTIONABLE CURRICULUM WITH ZERO FLUFF.
           </p>
        </motion.div>

        {/* 5. Bottom Middle Red Image Block (Spans 2 cols) */}
        <motion.div variants={itemVariant} className="col-span-1 md:col-span-2 md:row-span-1 bg-black relative overflow-hidden group min-h-[300px] md:min-h-0">
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            src="/img0.png" 
            alt="Hero Platform" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-[3000ms] ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
          
          <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-between z-20">
            {/* Animated white orb */}
            <motion.div 
              animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[25%] left-[45%] w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,1)] group-hover:scale-150 group-hover:bg-[#FF5500] transition-all duration-700"
            />
            <p className="text-white font-display text-xs lg:text-sm font-bold uppercase tracking-widest max-w-[260px] leading-relaxed group-hover:translate-x-2 transition-transform duration-700">
              GRADUATES SECURE FUNDING OR ROLES IN TOP TIER PROTOCOLS
            </p>
            <h3 className="text-white text-6xl lg:text-7xl font-accent font-medium self-end leading-none tracking-tighter group-hover:-translate-x-4 transition-transform duration-700">
              <Counter from={0} to={85} duration={2} />%
            </h3>
          </div>
        </motion.div>

        {/* 6. Bottom Right Orange Block */}
        <motion.div variants={itemVariant} className="col-span-1 md:row-span-1 bg-[#FF5500] relative overflow-hidden group p-6 lg:p-10 flex flex-col justify-between min-h-[250px] md:min-h-0">
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
          
          <h3 className="text-white text-4xl lg:text-[56px] font-accent font-medium z-10 leading-none tracking-tighter mt-2 md:mt-0 uppercase break-words group-hover:tracking-[0.2em] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all duration-700">
            PREMIUM
          </h3>
          <p className="text-white font-display text-xs lg:text-sm font-bold uppercase tracking-widest text-right z-10 mt-auto leading-relaxed max-w-[200px] self-end group-hover:-translate-y-2 group-hover:text-white/80 transition-all duration-700">
            EXCLUSIVE ACCESS TO PROPRIETARY TRADING ALGORITHMS.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
