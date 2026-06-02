"use client";

import { useRef, useEffect } from "react";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import { BroCharacter } from "./BroCharacter";

export default function CinematicCharacterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    let rafId: number;
    const updateScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const total = containerRef.current.offsetHeight - window.innerHeight;
        const scroll = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0;
        scrollYProgress.set(scroll);
      }
      rafId = requestAnimationFrame(updateScroll);
    };
    rafId = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(rafId);
  }, [scrollYProgress]);


  // Text 1: 0 - 0.2 (Idle)
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.25], [50, -50]);

  // Text 2: 0.25 - 0.5 (Walking)
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const text2X = useTransform(scrollYProgress, [0.25, 0.5], [-50, 0]);

  // Text 3: 0.5 - 0.75 (Dancing)
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const text3X = useTransform(scrollYProgress, [0.5, 0.75], [50, 0]);

  // Text 4: 0.75 - 1.0 (Waving)
  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0]);
  const text4Y = useTransform(scrollYProgress, [0.75, 1], [50, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-black">
      
      {/* Sticky container stays in place while we scroll through the 400vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* TEXT 1 (Center) */}
        <motion.div 
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute z-10 text-center pointer-events-none top-1/4"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white glow-purple">
            Neural Digital Twins
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto">
            Our primary research focuses on mapping cortical structures to synthetic avatars.
          </p>
        </motion.div>

        {/* TEXT 2 (Left Side) */}
        <motion.div 
          style={{ opacity: text2Opacity, x: text2X }}
          className="absolute z-10 text-left pointer-events-none left-10 md:left-32 top-1/3"
        >
          <h2 className="text-3xl md:text-6xl font-black text-white">
            Simulate The<br/><span className="text-red-500">Cortex</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-sm">
            We are training AI models directly from human cognitive patterns using high-fidelity simulations.
          </p>
        </motion.div>

        {/* TEXT 3 (Right Side) */}
        <motion.div 
          style={{ opacity: text3Opacity, x: text3X }}
          className="absolute z-10 text-right pointer-events-none right-10 md:right-32 top-1/3"
        >
          <h2 className="text-3xl md:text-6xl font-black text-white">
            Synthesize<br/><span className="text-purple-500">Consciousness</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-sm ml-auto">
            Bridging the gap between biological intelligence and artificial reasoning systems.
          </p>
        </motion.div>

        {/* TEXT 4 (Center Bottom) */}
        <motion.div 
          style={{ opacity: text4Opacity, y: text4Y }}
          className="absolute z-10 text-center pointer-events-none bottom-32"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white glow-red">
            Shape The Future
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto">
            Join the lab defining the next era of humanity.
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-10, -10, -5]} color="var(--nvg-purple)" intensity={2} />
            
            <Environment preset="city" />
            <Sparkles count={100} scale={15} size={2} speed={0.4} color="var(--nvg-green)" />
            
            {/* Pass the scroll progress to the character to scrub animation */}
            <BroCharacter progress={scrollYProgress} />
          </Canvas>
        </div>

      </div>
    </section>
  );
}
