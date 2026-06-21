"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const cards = [
  {
    id: "01",
    title: "BUILT FOR FUTURE LEADERS",
    desc: "Students won't just study technology — they will build it.",
  },
  {
    id: "02",
    title: "FUTURE-FOCUSED PROGRAMS",
    desc: "Designed around industries that will dominate the world economy.",
  },
  {
    id: "03",
    title: "INNOVATION ECOSYSTEM",
    desc: "Labs, startups, patents, research, and global collaboration.",
  },
  {
    id: "04",
    title: "INVESTOR-READY VISION",
    desc: "A scalable deep-tech education ecosystem with global potential.",
  },
];

function StackedCard({ 
  card, 
  index, 
  progress,
  totalCards
}: { 
  card: typeof cards[0]; 
  index: number; 
  progress: MotionValue<number>;
  totalCards: number;
}) {
  const start = index * 0.25;
  const peakStart = start + 0.08; 
  const peakEnd = start + 0.17;   
  const end = start + 0.25;       

  const isFirst = index === 0;
  const isLast = index === totalCards - 1;

  const input = isFirst 
    ? [0, peakEnd, end] 
    : isLast 
      ? [start - 0.08, peakStart, 1] 
      : [start - 0.08, peakStart, peakEnd, end];

  const opacityOutput = isFirst 
    ? [1, 1, 0] 
    : isLast 
      ? [0, 1, 1] 
      : [0, 1, 1, 0];

  const scaleOutput = isFirst 
    ? [1, 1, 0.8] 
    : isLast 
      ? [0.8, 1, 1] 
      : [0.8, 1, 1, 0.8];

  const yOutput = isFirst 
    ? [0, 0, -800] 
    : isLast 
      ? [800, 0, 0] 
      : [800, 0, 0, -800];

  const filterOutput = isFirst
    ? ["blur(0px)", "blur(0px)", "blur(20px)"]
    : isLast 
      ? ["blur(20px)", "blur(0px)", "blur(0px)"]
      : ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"];

  const opacity = useTransform(progress, input, opacityOutput);
  const scale = useTransform(progress, input, scaleOutput);
  const y = useTransform(progress, input, yOutput);
  const filter = useTransform(progress, input, filterOutput);
  
  const isActive = useTransform(progress, (v) => v >= (start - 0.08) && v <= (isLast ? 1 : end));

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full flex flex-col justify-center origin-left"
      style={{ 
        opacity, 
        scale, 
        y,
        filter,
        pointerEvents: isActive ? 'auto' : 'none',
        zIndex: index * 10
      }}
    >
      <div className="relative w-full flex flex-col justify-center">
        
        <div className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 text-[250px] md:text-[400px] font-display font-black leading-none text-black/[0.03] select-none pointer-events-none">
          {card.id}
        </div>

        <div className="relative z-10 flex flex-col gap-6 md:gap-10">
          
          <div className="flex flex-col gap-4">
            <h3 
              className="font-display font-black text-5xl md:text-7xl lg:text-[80px] uppercase leading-[0.9] tracking-tighter text-black"
            >
              {card.title}
            </h3>
            
            <p className="font-body text-xl md:text-3xl text-black/60 max-w-xl leading-relaxed">
              {card.desc}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-4 group cursor-pointer w-fit">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-black text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-black transition-colors duration-300 group-hover:text-purple-600">
              Explore Pillar
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function WhyBro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      id="why-bro" 
      ref={containerRef}
      className="w-full h-[400vh] bg-[#f8f9fa] border-t border-black/5 relative"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1500px] w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row relative z-10">
          
          <div className="w-full lg:w-5/12 lg:pr-16 xl:pr-24 relative z-20 flex flex-col justify-center mb-12 lg:mb-0">
            <div className="flex flex-col items-start gap-8 pl-6 md:pl-12">
              
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black/5 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 rounded-full origin-top"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>

              <h2 className="font-display text-7xl md:text-8xl xl:text-[120px] font-black uppercase leading-[0.85] tracking-tighter text-black">
                WHY<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                  BRO.
                </span>
              </h2>

              <p className="font-body text-black/60 text-lg md:text-xl xl:text-2xl max-w-sm leading-relaxed mt-2">
                Four pillars that separate BRO University from every traditional institution on the planet. We don&apos;t teach history — we build the future.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative h-[450px] md:h-[600px]">
            {cards.map((card, i) => (
              <StackedCard 
                key={card.id} 
                card={card} 
                index={i} 
                progress={scrollYProgress} 
                totalCards={cards.length}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}