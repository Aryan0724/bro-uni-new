"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, MotionValue, useMotionValue } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── 3D VORTEX SCENE (The Consuming Force) ───────────────────────────────────
function BlackHoleScene({ 
  scrollProgress,
  targetX,
  targetY
}: { 
  scrollProgress: MotionValue<number>,
  targetX: MotionValue<number>,
  targetY: MotionValue<number>
}) {
  const groupRef = useRef<THREE.Group>(null);
  const voidRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const accretionRef = useRef<THREE.Points>(null);
  const { viewport, camera } = useThree();
  
  const bhX = -viewport.width * 0.45; 

  const { positions, colors } = useMemo(() => {
    const particleCount = 20000;
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    const colorWhite = new THREE.Color("#FFFFFF");
    const colorOrange = new THREE.Color("#888888"); 
    const colorPurple = new THREE.Color("#555555"); 

    for (let i = 0; i < particleCount; i++) {
      const radius = 2 + Math.random() * 4; 
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 2;
      
      pos[i * 3] = Math.cos(angle) * radius; 
      pos[i * 3 + 1] = Math.sin(angle) * radius; 
      pos[i * 3 + 2] = z; 
      
      let c = colorWhite;
      const mix = Math.random();
      if (mix > 0.6) c = colorOrange;
      if (mix > 0.85) c = colorPurple;

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    const scroll = scrollProgress.get();
    
    if (groupRef.current) {
      const appearProgress = Math.max(0, Math.min(1, (scroll - 0.1) / 0.1));
      
      // The Growth Phase
      const growthProgress = Math.max(0, Math.min(1, (scroll - 0.5) / 0.4));
      
      // Limit max scale to 15 to prevent extreme camera clipping bugs
      const scale = appearProgress + Math.pow(growthProgress, 4) * 15; 
      
      groupRef.current.scale.set(scale, scale, scale);

      // 🌟 TRUE ROOT CAUSE OF THE GRAY SCREEN 🌟
      // The camera is at z=5. The black hole group is at z=-2. Total distance = 7.
      // The white event horizon glow has a radius of 2.1.
      // If the scale reaches (7 / 2.1) = 3.33, the white glowing disk PHYSICALLY slices through the camera lens!
      // Because it has 30% white opacity, when it touches the camera, it completely covers your screen in a gray haze.
      // To fix this, we MUST force the white glow and particles to completely fade to 0 opacity BEFORE scale reaches 3.33!
      // This fades them out perfectly between scale 2.0 and 3.0.
      const fadeOutScale = Math.max(0, Math.min(1, (3.0 - scale) / 1.0));

      if (glowRef.current) {
        const mat = glowRef.current.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.3 * fadeOutScale;
      }

      if (accretionRef.current) {
        accretionRef.current.rotation.z -= delta * 2;
        accretionRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
        
        const mat = accretionRef.current.material as THREE.PointsMaterial;
        const baseOpacity = Math.max(0, Math.min(1, (scroll - 0.1) / 0.1));
        mat.opacity = baseOpacity * fadeOutScale;
      }
    }

    if (voidRef.current) {
      const vector = new THREE.Vector3();
      voidRef.current.getWorldPosition(vector);
      vector.project(camera); 
      
      targetX.set(vector.x * 50); 
      targetY.set(-vector.y * 50); 
    }
  });

  return (
    <group ref={groupRef} position={[bhX, 0, -2]}>
      {/* 🌟 DoubleSide ensures the pure black void renders even if the camera passes inside it */}
      <mesh ref={voidRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
      </mesh>
      
      <mesh ref={glowRef} position={[0, 0, -0.1]}>
        <circleGeometry args={[2.1, 64]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.3} />
      </mesh>
      
      <points ref={accretionRef} position={[0, 0, -0.5]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

// ─── SPATIALLY DISTORTED LETTER COMPONENT ────────────────────────────────────
function SuckedLetter({ 
  letter, 
  globalIndex, 
  totalLetters, 
  scrollProgress,
  targetX,
  targetY,
  color = "inherit"
}: { 
  letter: string, 
  globalIndex: number,
  totalLetters: number,
  scrollProgress: MotionValue<number>,
  targetX: MotionValue<number>,
  targetY: MotionValue<number>,
  color?: string
}) {
  const delayOffset = (globalIndex / totalLetters) * 0.2; 
  
  const vibStart = 0.2;
  const pullStart = 0.35 + delayOffset; 
  const consumed = 0.8; 

  const vibrateX = useTransform(scrollProgress, (latest) => {
    if (latest < vibStart || latest > pullStart + 0.1) return 0;
    const intensity = Math.sin(latest * Math.PI) * 15; 
    return Math.sin(latest * 1500 + globalIndex) * intensity;
  });
  
  const vibrateY = useTransform(scrollProgress, (latest) => {
    if (latest < vibStart || latest > pullStart + 0.1) return 0;
    const intensity = Math.sin(latest * Math.PI) * 15; 
    return Math.cos(latest * 1500 + globalIndex) * intensity;
  });

  const suckX = useTransform(scrollProgress, (scroll) => {
    if (scroll <= pullStart) return 0;
    if (scroll >= consumed) return targetX.get();
    const progress = (scroll - pullStart) / (consumed - pullStart);
    return Math.pow(progress, 3) * targetX.get();
  });

  const suckY = useTransform(scrollProgress, (scroll) => {
    if (scroll <= pullStart) return 0;
    if (scroll >= consumed) return targetY.get();
    const progress = (scroll - pullStart) / (consumed - pullStart);
    return Math.pow(progress, 3) * targetY.get();
  });
  
  const x = useMotionTemplate`calc(${vibrateX}px + ${suckX}vw)`;
  const y = useMotionTemplate`calc(${vibrateY}px + ${suckY}vh)`;

  const scaleXRaw = useTransform(scrollProgress, [pullStart, consumed], [1, 20]); 
  const scaleYRaw = useTransform(scrollProgress, [pullStart, consumed], [1, 0.1]); 
  const skewXRaw = useTransform(scrollProgress, [pullStart, consumed], [0, 80]); 
  
  const blur = useTransform(scrollProgress, [pullStart, consumed], [0, 20]);
  const opacity = useTransform(scrollProgress, [consumed - 0.05, consumed], [1, 0]);
  
  const smoothScaleX = useSpring(scaleXRaw, { stiffness: 150, damping: 25 });
  const smoothScaleY = useSpring(scaleYRaw, { stiffness: 150, damping: 25 });
  const smoothSkew = useSpring(skewXRaw, { stiffness: 150, damping: 25 });

  return (
    <motion.span
      style={{
        display: "inline-block",
        x, 
        y, 
        scaleX: smoothScaleX,
        scaleY: smoothScaleY,
        skewX: smoothSkew,
        opacity,
        filter: useTransform(blur, b => `blur(${b}px)`),
        color,
        transformOrigin: "center left", 
        whiteSpace: "pre" 
      }}
    >
      {letter}
    </motion.span>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 20, 
    mass: 0.5,
    restDelta: 0.0001
  });

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const sentence = "Traditional institutions teach the history of technology. We are building the ecosystem that will create its future.";
  const words = sentence.split(" ");
  let globalLetterTracker = 0;
  const totalLetters = sentence.length;

  const extractionOpacity = useTransform(smoothScroll, [0.85, 0.9], [1, 0]);
  const sceneOpacity = useTransform(smoothScroll, [0.85, 0.92], [1, 0]);

  const resolutionOpacity = useTransform(smoothScroll, [0.92, 0.98], [0, 1]);
  const resolutionY = useTransform(smoothScroll, [0.92, 0.98], [20, 0]);

  return (
    <section ref={containerRef} id="research" className="relative w-full h-[450vh] bg-black">
      
      {/* PINNED VIEWPORT */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* 3D BACKGROUND VOID */}
        <motion.div style={{ opacity: sceneOpacity }} className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <BlackHoleScene 
              scrollProgress={smoothScroll} 
              targetX={targetX}
              targetY={targetY}
            />
          </Canvas>
        </motion.div>

        {/* DOM TYPOGRAPHY OVERLAY */}
        <div className="relative z-10 w-full max-w-6xl px-6 pointer-events-none select-none">
          
          {/* THE EXTRACTION */}
          <motion.div style={{ opacity: extractionOpacity }} className="absolute inset-0 flex items-center justify-center p-6">
            <h2 className="heading-massive text-[6vw] md:text-[5vw] lg:text-[72px] leading-[1.1] text-white flex flex-wrap justify-center text-center">
              {words.map((word, wIdx) => {
                const lowerWord = word.toLowerCase();
                const isHighlight = lowerWord.includes("ecosystem") || lowerWord.includes("institutions") || lowerWord.includes("future");
                return (
                  <span 
                    key={wIdx} 
                    className="inline-block whitespace-nowrap"
                    style={{ marginRight: "0.35em" }}
                  >
                    {word.split("").map((letter) => {
                      const currentIndex = globalLetterTracker++;
                      return (
                        <SuckedLetter 
                          key={currentIndex}
                          letter={letter} 
                          globalIndex={currentIndex} 
                          totalLetters={totalLetters} 
                          scrollProgress={smoothScroll}
                          targetX={targetX}
                          targetY={targetY}
                          color={isHighlight ? "var(--accent)" : "inherit"}
                        />
                      );
                    })}
                  </span>
                );
              })}
            </h2>
          </motion.div>

          {/* THE RESOLUTION */}
          <motion.div 
            style={{ opacity: resolutionOpacity, y: resolutionY }} 
            className="absolute inset-0 flex items-center justify-center p-6"
          >
            <h2 className="heading-massive text-[5vw] md:text-[4vw] lg:text-[56px] leading-[1.1] text-white text-center max-w-4xl">
              A research-driven ecosystem where students become{" "}
              <span style={{ color: "white" }}>creators</span>.
            </h2>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
