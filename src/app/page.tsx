import BAHero from "@/components/BAHero";
import WhyBro from "@/components/WhyBro";
import BAProgram from "@/components/BAProgram";
import Problem from "@/components/Problem";
import BASpeakers from "@/components/BASpeakers";
import BATarget from "@/components/BATarget";
import BAPricing from "@/components/BAPricing";
import BAFAQ from "@/components/BAFAQ";
import Join from "@/components/Join";
import BACTA from "@/components/BACTA";
import BAFooter from "@/components/BAFooter";

export default function Home() {
  return (
    <main id="home" className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] font-body selection:bg-[var(--accent)] selection:text-black">
      {/* 1. Hero Section */}
      <BAHero />

      {/* 2. Why BRO University */}
      <WhyBro />

      {/* 3. Neuroscience Programs Overview — robot/3D animation */}
      <BAProgram />

      {/* 4. Research & Innovation Focus — text animation + team */}
      <Problem />
      <BASpeakers />

      {/* 5. Future Schools / Deep Tech Ecosystem — animated card section */}
      <BATarget />

      {/* 6. Investor CTA + 7. Admissions CTA */}
      <BAPricing />

      {/* 8. FAQ's */}
      <BAFAQ />

      {/* 9. HEY BRO Movement */}
      <Join />

      {/* 10. Contact */}
      <BACTA />

      {/* Footer */}
      <BAFooter />
    </main>
  );
}
