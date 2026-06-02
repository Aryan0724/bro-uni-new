"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
} from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, { stiffness: 100, damping: 18, mass: 0.6 });
  const smoothY = useSpring(cursorY, { stiffness: 100, damping: 18, mass: 0.6 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const rafRef = useRef<number | null>(null);
  const rawPos = useRef({ x: -100, y: -100 });

  // Dot tracks raw mouse exactly
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawPos.current = { x: e.clientX, y: e.clientY };
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const tick = () => {
      cursorX.set(rawPos.current.x);
      cursorY.set(rawPos.current.y);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", () => setIsClicking(true));
    window.addEventListener("mouseup", () => setIsClicking(false));

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest("button, a, [role='button']");
      const isInputEl = !!target.closest("input, textarea, select");
      setIsHovering(isInteractive && !isInputEl);
      setIsInput(isInputEl);
    };
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", () => setIsClicking(true));
      window.removeEventListener("mouseup", () => setIsClicking(false));
      window.removeEventListener("mouseover", onOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Precise dot — exact position */}
      <motion.div
        className="fixed z-[99999] pointer-events-none top-0 left-0"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.4 : 1,
          opacity: isInput ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
      >
        <div
          className="w-2 h-2 rounded-full bg-cyan-accent"
          style={{
            boxShadow: "0 0 8px rgba(0,212,255,0.9), 0 0 16px rgba(0,212,255,0.4)",
          }}
        />
      </motion.div>

      {/* Lagged ring */}
      <motion.div
        className="fixed z-[99998] pointer-events-none top-0 left-0 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 32,
          height: 32,
          border: "1px solid rgba(0,212,255,0.45)",
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovering ? 2.4 : isClicking ? 0.65 : 1,
          borderColor: isHovering
            ? "rgba(168,85,247,0.9)"
            : "rgba(0,212,255,0.45)",
          opacity: isInput ? 0 : 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </>
  );
}
