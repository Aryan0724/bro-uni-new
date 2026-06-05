"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: "c1",
    num: "01",
    title: "LAW\nFIRMS",
    body: "New market of blockchain legal services at your fingertips. Get ahead of crypto regulation.",
    white: true,
    fromRight: true,
    clip: "polygon(0 0, 100% 0, 100% 100%, 44px 100%, 0 calc(100% - 44px))",
  },
  {
    id: "c2",
    num: "02",
    title: "COMPLIANCE\nOFFICERS",
    body: "Master AML/KYC rules and reduce crypto risks. Become the compliance authority your firm needs.",
    white: false,
    fromRight: false,
    clip: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 44px 100%, 0 calc(100% - 44px))",
  },
  {
    id: "c3",
    num: "03",
    title: "ENTRE-\nPRENEURS",
    body: "Secure your startup, avoid fraud, and gain investor trust in the Web3 ecosystem.",
    white: false,
    fromRight: true,
    clip: "polygon(44px 0, 100% 0, 100% 100%, 0 100%, 0 44px)",
  },
  {
    id: "c4",
    num: "04",
    title: "READY\nTO JOIN?",
    body: "Join hundreds of professionals already transforming their careers with BRO University.",
    white: false,
    fromRight: false,
    cta: true,
    clip: "polygon(0 0, 100% 0, 100% calc(100% - 44px), calc(100% - 44px) 100%, 0 100%)",
  },
];

// Each card occupies a 25% slice of scroll progress (0.0-1.0)
// Appear at start of slice, full at 20%, hold, fade at 80%, gone by end
const RANGES = CARDS.map((_, i) => {
  const step = 1 / CARDS.length; // 0.25
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

  // Card slides in from the far edge of its half, exits toward center
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

  // Ghost number on opposite side slides in from the opposite direction
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

  // Card stays within its half: right half starts at 54%, left half ends at 46%
  const side = fromRight
    ? { left: "54%", right: "auto" }
    : { right: "54%", left: "auto" };

  // Ghost label on the opposite half
  const ghostSide = fromRight
    ? { right: "54%", left: "auto" }
    : { left: "54%", right: "auto" };

  const bg = card.white ? "#f5f5f5" : "#0f0f0f";
  const titleColor = card.white ? "#0d0d0d" : "#ffffff";
  const bodyColor = card.white ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)";
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
        width: "min(400px, 42vw)",
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
          minHeight: 260,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 24,
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

        {/* Title */}
        <h3
          style={{
            fontFamily:
              '"Helvetica Neue", "HelveticaNeueCyr Medium", Helvetica, Arial, sans-serif',
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 700,
            color: titleColor,
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            margin: 0,
            whiteSpace: "pre-line",
            paddingTop: 8,
          }}
        >
          {card.title}
        </h3>

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
              fontSize: 14,
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
            /* Orange + join button */
            <button
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#fc6500",
                border: "none",
                boxShadow: "0 0 22px rgba(252,101,0,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 24,
                color: "white",
                fontWeight: "bold",
                lineHeight: 1,
              }}
            >
              +
            </button>
          ) : (
            /* Arrow indicator */
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

// ─── Section label that fades in ──────────────────────────────────────────────
function SectionLabel({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.08, 0.92, 1.0], [0, 1, 1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-10 left-10 z-20"
    >
      <div style={{ position: "relative", padding: "14px 18px" }}>
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
              ...Object.fromEntries(
                Object.entries(corner)
                  .filter(([k]) => ["top", "left", "right", "bottom"].includes(k))
                  .map(([k, v]) => [k, v === 0 ? 0 : undefined])
              ),
              ...(corner.borderLeft
                ? { borderLeft: "1.5px solid rgba(255,255,255,0.55)" }
                : {}),
              ...(corner.borderRight
                ? { borderRight: "1.5px solid rgba(255,255,255,0.55)" }
                : {}),
              ...(corner.borderTop
                ? { borderTop: "1.5px solid rgba(255,255,255,0.55)" }
                : {}),
              ...(corner.borderBottom
                ? { borderBottom: "1.5px solid rgba(255,255,255,0.55)" }
                : {}),
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
            fontSize: 10,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            lineHeight: 1.6,
            margin: 0,
            textAlign: "center",
          }}
        >
          THIS COURSE
          <br />
          WILL BE USEFUL
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
            background: i === active ? "#00e5ff" : "rgba(255,255,255,0.25)",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function BATarget() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Cyan dot travels from 8% to 88% vertically as you scroll
  const dotY = useTransform(scrollYProgress, [0, 1], ["8%", "88%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: "500vh", background: "#000" }}
    >
      {/* ══════════════════════════════════════════════════
          STICKY VIEWPORT — everything visible lives here
         ══════════════════════════════════════════════════ */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* ── Background: rich red gradient ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #c00000 0%, #5a0000 40%, #0a0000 75%, #000000 100%)",
          }}
        />

        {/* ── Background: cinematic image masked to right side ── */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 30%, black 60%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 30%, black 60%)",
          }}
        >
          <img
            src="/hero_bg.png"
            alt=""
            className="w-full h-full object-cover object-bottom"
            style={{ opacity: 0.65 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(80,10,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
            }}
          />
        </div>

        {/* ── Center dividing line ── */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: 1,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)",
          }}
        />

        {/* ── Section label top-left ── */}
        <SectionLabel progress={scrollYProgress} />

        {/* ── Heading top-center ── */}
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
            WHO IS THIS FOR
          </p>
        </motion.div>

        {/* ── Cyan tracking dot on center line ── */}
        <motion.div
          style={{ top: dotY }}
          className="absolute left-1/2 -translate-x-1/2 z-30"
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#00e5ff",
              boxShadow: "0 0 18px 6px rgba(0,229,255,0.7)",
            }}
          />
        </motion.div>

        {/* ── Cards ── */}
        {CARDS.map((card, i) => (
          <AnimatedCard
            key={card.id}
            card={card}
            range={RANGES[i]}
            progress={scrollYProgress}
          />
        ))}

        {/* ── Card step indicator ── */}
        <CardIndicator progress={scrollYProgress} />

      </div>
    </section>
  );
}
