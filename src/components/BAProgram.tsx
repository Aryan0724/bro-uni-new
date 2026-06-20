"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { BroCharacter } from "./BroCharacter";

// ─── MODULE DATA ──────────────────────────────────────────────────────────────
const modules = [
  {
    id: "01",
    title: "AI & Cognitive Systems",
    duration: "Research Area",
    content: "Merging deep learning with symbolic reasoning to build interpretable, robust AI systems that understand human cognitive patterns.",
    projects: "Build a symbolic parser integrated with a neural classification layer for real-world healthcare data.",
    outcomes: "Deep understanding of how intelligence — biological and artificial — can be modelled and extended.",
    accentColor: "#ffffff",
    cameraLabel: "FRONTAL REVEAL",
  },
  {
    id: "02",
    title: "Brain-Computer Interfaces",
    duration: "Research Area",
    content: "Decoding neural signals and mapping brain activity to digital commands using advanced signal processing and transformer architectures.",
    projects: "Build a real-time EEG classifier mapping motor imagery to device commands.",
    outcomes: "Ability to design and deploy cognitive interface systems bridging human and machine intelligence.",
    accentColor: "#888888",
    cameraLabel: "ORBITAL LEFT",
  },
  {
    id: "03",
    title: "Semiconductor & Chip Design",
    duration: "Research Area",
    content: "Designing custom silicon architectures optimized for neural computation — from RTL design to full hardware simulation.",
    projects: "Simulate a neuromorphic compute unit capable of processing spiking neural network workloads.",
    outcomes: "Foundational knowledge in custom hardware design for AI-era computing.",
    accentColor: "#ffffff",
    cameraLabel: "LOW ANGLE",
  },
  {
    id: "04",
    title: "Neuroinformatics",
    duration: "Research Area",
    content: "Applying computational methods to analyse, model, and interpret large-scale neural datasets for scientific and medical applications.",
    projects: "Build a neural data pipeline that extracts biomarkers from fMRI imaging datasets.",
    outcomes: "Expertise in neural data science at the intersection of medicine, neuroscience, and AI.",
    accentColor: "#888888",
    cameraLabel: "DUTCH TILT",
  },
  {
    id: "05",
    title: "Neuropathic Pain Research",
    duration: "Research Area",
    content: "Using computational neuroscience to model chronic pain pathways, enabling the development of intelligent, data-driven treatments.",
    projects: "Develop a pain biomarker classifier from multi-modal neural signal data.",
    outcomes: "Understanding of how AI and neuroscience converge to advance human health outcomes.",
    accentColor: "#aaaaaa",
    cameraLabel: "SIDE PROFILE",
  },
  {
    id: "06",
    title: "Future Innovation Lab",
    duration: "Research Area",
    content: "Cross-disciplinary breakthrough research at the intersection of all BRO University domains — where the next 50 years of technology is designed.",
    projects: "Design and pitch a novel deep tech innovation that integrates at least two research areas.",
    outcomes: "Capacity to identify, frame, and lead breakthrough research initiatives at global scale.",
    accentColor: "#ffffff",
    cameraLabel: "HERO REVEAL",
  },
];

// Progress ranges — each module gets 1/6 of the total scroll
const RANGES = modules.map((_, i) => {
  const step = 1 / modules.length;
  const start = i * step;
  const end = (i + 1) * step;
  const pad = step * 0.15;
  return [start, start + pad, end - pad, end];
});

const SHOTS = [
  { pos: [0, -0.2, 4.5],   look: [1.5, 0.2, 0],    fov: 42 },
  { pos: [-3.0, 0.6, 3.8], look: [-1.5, 0.0, 0],   fov: 48 },
  { pos: [1.0, -1.2, 3.5], look: [1.5, 0.5, 0],    fov: 50 },
  { pos: [3.2, 0.3, 3.2],  look: [-1.5, 0.1, 0],   fov: 46 },
  { pos: [-4.2, 0.2, 0.5], look: [0.0, 0.0, -1.5], fov: 45 }, 
  { pos: [0, 0.5, 5.5],    look: [-1.5, 0.3, 0],   fov: 38 },
];

function CinematicCamera({ progress }: { progress: MotionValue<number> }) {
  const { camera } = useThree();

  useFrame((state) => {
    const p = progress.get();
    const n = modules.length;
    const raw = p * n;
    const idx = Math.min(Math.floor(raw), n - 1);
    const nextIdx = Math.min(idx + 1, n - 1);
    const t = THREE.MathUtils.smootherstep(raw - idx, 0, 1);

    const A = SHOTS[idx];
    const B = SHOTS[nextIdx];

    const tx = THREE.MathUtils.lerp(A.pos[0], B.pos[0], t);
    const ty = THREE.MathUtils.lerp(A.pos[1], B.pos[1], t);
    const tz = THREE.MathUtils.lerp(A.pos[2], B.pos[2], t);
    const lx = THREE.MathUtils.lerp(A.look[0], B.look[0], t);
    const ly = THREE.MathUtils.lerp(A.look[1], B.look[1], t);
    const fov = THREE.MathUtils.lerp(A.fov, B.fov, t);

    const time = state.clock.elapsedTime;
    const swayX = Math.sin(time * 0.3) * 0.04;
    const swayY = Math.cos(time * 0.2) * 0.025;

    const targetPos = new THREE.Vector3(tx + swayX, ty + swayY, tz);
    camera.position.lerp(targetPos, 0.03);

    if (!camera.userData.lt) camera.userData.lt = new THREE.Vector3(lx, ly, 0);
    camera.userData.lt.lerp(new THREE.Vector3(lx, ly, 0), 0.03);
    camera.lookAt(camera.userData.lt);

    if ((camera as THREE.PerspectiveCamera).fov !== undefined) {
      const cam = camera as THREE.PerspectiveCamera;
      cam.fov = THREE.MathUtils.lerp(cam.fov, fov, 0.03);
      cam.updateProjectionMatrix();
    }
  });

  return null;
}

const LIGHT_CONFIGS = [
  { key: "#ffffff",  intensity: 6.0, pos: [2, 5, 3] },
  { key: "#dddddd",  intensity: 5.5, pos: [3, 2, -4] },
  { key: "#ffffff",  intensity: 6.5, pos: [-3, 2, 4] },
  { key: "#aaaaaa",  intensity: 6.0, pos: [4, -1, -2] },
  { key: "#ffffff",  intensity: 6.0, pos: [-4, 3, 1] },
  { key: "#eeeeee",  intensity: 7.0, pos: [0, 5, -3] },
];

function DynamicLighting({ progress, spotlightRef }: {
  progress: MotionValue<number>;
  spotlightRef: React.RefObject<THREE.SpotLight | null>;
}) {
  useFrame((_, delta) => {
    if (!spotlightRef.current) return;
    const p = progress.get();
    const n = modules.length;
    const raw = p * n;
    const idx = Math.min(Math.floor(raw), n - 1);
    const nextIdx = Math.min(idx + 1, n - 1);
    const t = THREE.MathUtils.smootherstep(raw - idx, 0, 1);

    const A = LIGHT_CONFIGS[idx];
    const B = LIGHT_CONFIGS[nextIdx];

    const targetColor = new THREE.Color().lerpColors(new THREE.Color(A.key), new THREE.Color(B.key), t);
    const targetIntensity = THREE.MathUtils.lerp(A.intensity, B.intensity, t);
    const targetPos = new THREE.Vector3(
      THREE.MathUtils.lerp(A.pos[0], B.pos[0], t),
      THREE.MathUtils.lerp(A.pos[1], B.pos[1], t),
      THREE.MathUtils.lerp(A.pos[2], B.pos[2], t),
    );

    spotlightRef.current.color.lerp(targetColor, 0.04);
    spotlightRef.current.intensity = THREE.MathUtils.damp(spotlightRef.current.intensity, targetIntensity, 3, delta);
    spotlightRef.current.position.lerp(targetPos, 0.04);
  });

  return null;
}

function ModuleCard({
  mod,
  progress,
  range,
  index,
  onHover,
  onLeave,
}: {
  mod: (typeof modules)[0];
  progress: MotionValue<number>;
  range: number[];
  index: number;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [r0, r1, r2, r3] = range;
  const opacity = useTransform(progress, [r0, r1, r2, r3], [0, 1, 1, 0]);
  const yOffset = useTransform(
    progress,
    [r0, r1, r2, r3],
    ["calc(-50% + 32px)", "calc(-50% + 0px)", "calc(-50% + 0px)", "calc(-50% - 32px)"]
  );
  const scale = useTransform(progress, [r0, r1, r2, r3], [0.96, 1, 1, 0.98]);

  const isRight = index % 2 === 0;

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        position: "absolute",
        top: "54%", 
        left: isRight ? "auto" : "12%",
        right: isRight ? "12%" : "auto",
        y: yOffset,
        opacity,
        scale,
        zIndex: 10,
        width: 420,
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          background: "#0d0d0d",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
          padding: "36px 36px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          position: "relative",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ position: "absolute", top: 16, left: 16, width: 18, height: 18, borderLeft: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid rgba(255,255,255,0.3)" }} />

        <span style={{ position: "absolute", top: 12, right: 20, fontSize: 72, fontWeight: 900, fontFamily: 'var(--font-display), sans-serif', color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none", letterSpacing: "-0.05em" }}>
          {mod.id}
        </span>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8 }}>
          <span style={{ fontFamily: 'var(--font-display), sans-serif', fontSize: 22, fontWeight: 800, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>
            MODULE {mod.id}
          </span>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2, padding: "4px 8px" }}>
            {mod.duration}
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-display), sans-serif', fontSize: "clamp(24px, 2.5vw, 28px)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0, maxWidth: "90%" }}>
          {mod.title}
        </h3>

        <div style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />

        <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: 0, fontWeight: 400 }}>
          {mod.content}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
          <div>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", display: "block", marginBottom: 6, opacity: 0.8 }}>
              PROJECT:
            </span>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, margin: 0 }}>
              {mod.projects}
            </p>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", display: "block", marginBottom: 6, opacity: 0.8 }}>
              OUTCOME:
            </span>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, margin: 0 }}>
              {mod.outcomes}
            </p>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            {modules.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 2, background: i === index ? "#ffffff" : i < index ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)", margin: "0 2px", transition: "background 0.3s ease" }} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BAProgram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<THREE.SpotLight>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15, 1], [1, 1, 0, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.15, 1], [0, -30, -30]);
  const hudOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1.0], [0, 1, 1, 0]);

  if (isMobile) {
    return (
      <section id="neuroscience-programs" className="w-full py-24 px-6 bg-[#000000] relative font-body flex flex-col gap-10">
        <div className="w-full flex flex-col">
          <span className="font-accent text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-2 block">
            RESEARCH AREAS
          </span>
          <h2 className="text-5xl leading-tight text-white font-display font-bold tracking-tight mb-4 uppercase">
            NEUROSCIENCE <br /> PROGRAMS <br /> <span className="text-neutral-500">OVERVIEW.</span>
          </h2>
          <p className="font-body text-neutral-400 text-sm leading-relaxed max-w-sm">
            Academic research pathways in Neuroscience, Brain-Computer Interfaces, Neuroinformatics, and AI Healthcare Systems.
          </p>
        </div>
        {mounted && (
          <div className="w-full h-[250px] relative bg-neutral-950 rounded-2xl overflow-hidden border border-white/5 shadow-inner">
            <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 4, 2]} intensity={1.5} />
              <BroCharacter progress={scrollYProgress} hoveredCard={null} />
              <Environment preset="city" />
            </Canvas>
          </div>
        )}
        <div className="flex flex-col gap-6 mt-4">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-[#080808] border border-white/6 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="text-2xl font-bold text-white/60">[{mod.id}]</span>
                <span className="px-2 py-0.5 border border-neutral-800 rounded text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{mod.duration}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white tracking-tight leading-snug">{mod.title}</h3>
              <p className="font-body text-neutral-500 text-xs leading-relaxed">{mod.content}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="neuroscience-programs"
      className="relative w-full bg-[#000000] pt-52" // Increased top padding from pt-32 to pt-52 for generous spacing from WhyBro
      style={{ height: "750vh" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.95) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #000000)" }} />

        {mounted && (
          <div className="absolute inset-0 w-full h-full z-0">
            <Canvas camera={{ position: [0, -0.2, 4.5], fov: 42 }}>
              <ambientLight intensity={0.02} />
              <directionalLight position={[10, 15, 8]} intensity={0.2} color="#ffffff" />
              <directionalLight position={[-5, -5, -5]} intensity={0.1} color="#888888" />
              <spotLight ref={spotlightRef} position={[2, 5, -3]} angle={0.5} penumbra={1.0} intensity={7.0} color="#ffffff" castShadow />
              <BroCharacter progress={scrollYProgress} hoveredCard={hoveredCard} />
              <CinematicCamera progress={scrollYProgress} />
              <DynamicLighting progress={scrollYProgress} spotlightRef={spotlightRef} />
              <Environment preset="night" />
            </Canvas>
          </div>
        )}

        <div className="max-w-7xl mx-auto h-full w-full relative z-20 px-8 lg:px-12 pointer-events-none">
          
          <div className="absolute top-16 left-8 max-w-2xl py-8 pointer-events-none">
            <motion.div
              style={{ opacity: headingOpacity, y: headingY, display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="flex flex-col select-none">
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 12, display: "block" }}>
                  / RESEARCH PATHWAYS
                </span>
                
                {/* Bumped up heading scale dynamically to match premium giant hero weights */}
                <h2 style={{ fontFamily: 'var(--font-display), sans-serif', fontSize: "clamp(48px, 5.5vw, 72px)", fontWeight: 900, color: "white", letterSpacing: "-0.04em", lineHeight: 1.02, textTransform: "uppercase", margin: 0 }}>
                  NEUROSCIENCE<br />PROGRAMS<br />
                  <span style={{ color: "rgba(255,255,255,0.25)" }}>OVERVIEW.</span>
                </h2>
                
                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginTop: 22, maxWidth: 420 }}>
                  Academic research pathways in Neuroscience, Brain-Computer Interfaces, Neuroinformatics, and AI Healthcare Systems.
                </p>
              </div>

              <button className="btn-white pointer-events-auto mt-6 px-7 py-3.5 border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 uppercase tracking-wider text-xs font-bold rounded-lg" style={{ alignSelf: "flex-start" }}>
                EXPLORE RESEARCH →
              </button>
            </motion.div>
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {modules.map((mod, i) => (
              <ModuleCard
                key={mod.id}
                mod={mod}
                progress={scrollYProgress}
                range={RANGES[i]}
                index={i}
                onHover={() => setHoveredCard(i)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
          
        </div>

        <motion.div style={{ opacity: hudOpacity }} className="absolute bottom-12 left-12 z-30 pointer-events-none">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
              SCROLL TO EXPLORE RESEARCH
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}