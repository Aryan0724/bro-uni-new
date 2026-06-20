"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: "c1",
    num: "01",
    title: "NEUROSCIENCE",
    subtitle: "Active / Foundation School",
    body: "Focused on brain technology, neuroinformatics, AI healthcare systems, and human-machine intelligence. The active core of BRO University.",
    white: true,
    fromRight: true,
    clip: "polygon(0 0, 100% 0, 100% 100%, 44px 100%, 0 calc(100% - 44px))",
    hasWafer: false,
    cta: false,
  },
  {
    id: "c2",
    num: "02",
    title: "ARTIFICIAL\nINTELLIGENCE",
    subtitle: "Coming Soon / Vision Section",
    body: "Focused on machine learning, intelligent systems, robotics, and future computing. Expanding from the Neuroscience foundation.",
    white: false,
    fromRight: false,
    clip: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 44px 100%, 0 calc(100% - 44px))",
    hasWafer: false,
    cta: false,
  },
  {
    id: "c3",
    num: "03",
    title: "SEMICONDUCTOR\nSCIENCES",
    subtitle: "Coming Soon / Vision Section",
    body: "Semiconductor Innovation — focused on silicon architecture, chip design, and deep-tech hardware for the AI era.",
    white: false,
    fromRight: true,
    clip: "polygon(44px 0, 100% 0, 100% 100%, 0 100%, 0 44px)",
    hasWafer: true,
    cta: false,
  },
  {
    id: "c4",
    num: "04",
    title: "NANOTECHNOLOGY\n& FUTURE INNOVATION",
    subtitle: "Vision Area",
    body: "Nanotechnology, advanced computing, research startups, robotics, deep tech ventures, and future innovation labs.",
    white: false,
    fromRight: false,
    clip: "polygon(0 0, 100% 0, 100% calc(100% - 44px), calc(100% - 44px) 100%, 0 100%)",
    hasWafer: false,
    cta: true,
  },
];

// Each card occupies a 25% slice of scroll progress (0.0-1.0)
const RANGES = CARDS.map((_, i) => {
  const step = 1 / CARDS.length;
  const start = i * step;
  const end = (i + 1) * step;
  const pad = step * 0.18;
  return [start, start + pad, end - pad, end];
});

// ─── Single animated card ─────────────────────────────────────────────────────
function AnimatedCard({
  card,
  range,
  progress,
}: {
  card: (typeof CARDS)[0];
  range: number[];
  progress: MotionValue<number>;
}) {
  const [r0, r1, r2, r3] = range;
  const { fromRight } = card;

  const x = useTransform(
    progress,
    [r0, r1, r2, r3],
    [
      fromRight ? "120%" : "-120%",
      "0%",
      "0%",
      fromRight ? "-40%" : "40%",
    ]
  );
  const opacity = useTransform(progress, [r0, r1, r2, r3], [0, 1, 1, 0]);
  const scale = useTransform(progress, [r0, r1, r2, r3], [0.85, 1, 1, 0.94]);

  // Ghost number on opposite side
  const ghostX = useTransform(
    progress,
    [r0, r1, r2, r3],
    [
      fromRight ? "-60%" : "60%",
      "0%",
      "0%",
      fromRight ? "40%" : "-40%",
    ]
  );

  const side = fromRight
    ? { left: "54%", right: "auto" }
    : { right: "54%", left: "auto" };

  const ghostSide = fromRight
    ? { right: "54%", left: "auto" }
    : { left: "54%", right: "auto" };

  const bg = card.white ? "#f5f5f5" : "#0f0f0f";
  const titleColor = card.white ? "#0d0d0d" : "#ffffff";
  const subtitleColor = card.white ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.4)";
  const bodyColor = card.white ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.55)";
  const numColor = card.white ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.12)";

  return (
    <>
      {/* Ghost large number on opposite side */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          y: "-50%",
          ...ghostSide,
          x: ghostX,
          opacity,
          zIndex: 10,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: fromRight ? "flex-end" : "flex-start",
          gap: 12,
          padding: "0 40px",
        }}
      >
        <span
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "clamp(80px, 12vw, 160px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.07)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            userSelect: "none",
          }}
        >
          {card.num}
        </span>
        <p
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            margin: 0,
            textAlign: fromRight ? "right" : "left",
          }}
        >
          {card.title.replace("\n", " ")}
        </p>
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          y: "-50%",
          width: "min(420px, 44vw)",
          ...side,
          x,
          opacity,
          scale,
          zIndex: 20,
        }}
      >
        <div
          style={{
            background: bg,
            clipPath: card.clip,
            padding: "36px 36px 32px",
            position: "relative",
            minHeight: card.hasWafer ? 300 : 260,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 16,
            boxShadow: card.white
              ? "0 20px 60px rgba(0,0,0,0.45)"
              : "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* Big number watermark */}
          <span
            style={{
              position: "absolute",
              top: 12,
              right: 20,
              fontSize: 80,
              fontWeight: 900,
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              color: numColor,
              lineHeight: 1,
              userSelect: "none",
              letterSpacing: "-0.05em",
            }}
          >
            {card.num}
          </span>

          {/* Corner accent */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              width: 18,
              height: 18,
              borderLeft: card.white
                ? "2px solid rgba(0,0,0,0.25)"
                : "2px solid rgba(255,255,255,0.3)",
              borderTop: card.white
                ? "2px solid rgba(0,0,0,0.25)"
                : "2px solid rgba(255,255,255,0.3)",
            }}
          />

          {/* Title + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 8 }}>
            <h3
              style={{
                fontFamily:
                  '"Helvetica Neue", "HelveticaNeueCyr Medium", Helvetica, Arial, sans-serif',
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 700,
                color: titleColor,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: subtitleColor,
                margin: 0,
              }}
            >
              {card.subtitle}
            </p>
          </div>

          {/* Silicon Wafer visual for card 03 */}
          {card.hasWafer && (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ position: "relative", width: 72, height: 72, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <Image
                  src="/silicon-wafer.png"
                  alt="Silicon Wafer"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                  Silicon Wafer
                </span>
                <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
                  Semiconductor Innovation
                </span>
              </div>
            </div>
          )}

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: card.white
                ? "rgba(0,0,0,0.12)"
                : "rgba(255,255,255,0.1)",
            }}
          />

          {/* Body + CTA row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 16,
            }}
          >
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.65,
                color: bodyColor,
                margin: 0,
                flex: 1,
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              {card.body}
            </p>

            {card.cta ? (
              <button
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#ffffff",
                  border: "none",
                  boxShadow: "0 0 22px rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: 24,
                  color: "black",
                  fontWeight: "bold",
                  lineHeight: 1,
                }}
              >
                +
              </button>
            ) : (
              <div
                style={{
                  flexShrink: 0,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: card.white
                    ? "1.5px solid rgba(0,0,0,0.2)"
                    : "1.5px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: card.white ? "#0d0d0d" : "white",
                    fontSize: 14,
                    opacity: 0.6,
                  }}
                >
                  →
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

// ─── Section label top-left ──────────────────────────────────────────────────
function SectionLabel({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.08, 0.92, 1.0], [0, 1, 1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-12 left-12 z-20"
    >
      <div style={{ position: "relative", padding: "18px 24px" }}>
        {[
          { top: 0, left: 0, borderLeft: true, borderTop: true },
          { top: 0, right: 0, borderRight: true, borderTop: true },
          { bottom: 0, left: 0, borderLeft: true, borderBottom: true },
          { bottom: 0, right: 0, borderRight: true, borderBottom: true },
        ].map((corner, ci) => (
          <div
            key={ci}
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderLeft: corner.borderLeft ? "1.5px solid rgba(255,255,255,0.55)" : undefined,
              borderRight: corner.borderRight ? "1.5px solid rgba(255,255,255,0.55)" : undefined,
              borderTop: corner.borderTop ? "1.5px solid rgba(255,255,255,0.55)" : undefined,
              borderBottom: corner.borderBottom ? "1.5px solid rgba(255,255,255,0.55)" : undefined,
              top: corner.top === 0 ? 0 : undefined,
              left: corner.left === 0 ? 0 : undefined,
              right: corner.right === 0 ? 0 : undefined,
              bottom: corner.bottom === 0 ? 0 : undefined,
            }}
          />
        ))}
        <p
          style={{
            color: "white",
            fontFamily:
              '"Helvetica Neue", "HelveticaNeueCyr Medium", sans-serif',
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            lineHeight: 1.5,
            margin: 0,
            textAlign: "center",
            whiteSpace: "nowrap"
          }}
        >
          FUTURE SCHOOLS
          <br />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.25em" }}>
            DEEP TECH ECOSYSTEM
          </span>
        </p>
      </div>
    </motion.div>
  );
}

// ─── Active card indicator (bottom center) ────────────────────────────────────
function CardIndicator({ progress }: { progress: MotionValue<number> }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    return progress.on("change", (v) => {
      const idx = Math.min(
        CARDS.length - 1,
        Math.floor(v * CARDS.length)
      );
      setActive(idx);
    });
  }, [progress]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 8,
        zIndex: 30,
      }}
    >
      {CARDS.map((_, i) => (
        <div
          key={i}
          style={{
            width: i === active ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === active ? "#ffffff" : "rgba(255,255,255,0.25)",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BATarget() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["8%", "88%"]);

  return (
    <section
      ref={containerRef}
      id="future-schools"
      className="relative w-full"
      style={{ height: "500vh", background: "#000" }}
    >
      {/* sticky viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #111111 0%, #0a0a0a 40%, #050505 75%, #000000 100%)",
          }}
        />

        {/* Center dividing line */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: 1,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)",
          }}
        />

        {/* Section label top-left */}
        <SectionLabel progress={scrollYProgress} />

        {/* Heading top-center */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.08, 0.92, 1.0], [0, 1, 1, 0]),
          }}
          className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p
            style={{
              color: "rgba(255,255,255,0.38)",
              fontFamily: '"Helvetica Neue", sans-serif',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            FUTURE SCHOOLS / DEEP TECH ECOSYSTEM
          </p>
        </motion.div>

        {/* Cyan tracking dot on center line */}
        <motion.div
          style={{ top: dotY }}
          className="absolute left-1/2 -translate-x-1/2 z-30"
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 0 18px 6px rgba(255,255,255,0.7)",
            }}
          />
        </motion.div>

        {/* Cards mapping */}
        {CARDS.map((card, i) => (
          <AnimatedCard
            key={card.id}
            card={card}
            range={RANGES[i]}
            progress={scrollYProgress}
          />
        ))}

        {/* Card step indicator */}
        <CardIndicator progress={scrollYProgress} />

      </div>
    </section>
  );
}