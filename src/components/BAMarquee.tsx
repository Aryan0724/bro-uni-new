"use client";

const items = [
  "FOUNDING COHORT OPEN",
  "◆",
  "AI · NEUROSCIENCE · BLOCKCHAIN",
  "◆",
  "EXPERT-LED SESSIONS",
  "◆",
  "ENROLL NOW",
  "◆",
  "12 WEEKS · FULL CERTIFICATION",
  "◆",
  "JOIN THE MOVEMENT",
  "◆",
];

const doubled = [...items, ...items];

export default function BAMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="overflow-hidden w-full py-3.5"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase px-6"
            style={{
              color: item === "◆" ? "var(--accent)" : "rgba(255,255,255,0.25)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
