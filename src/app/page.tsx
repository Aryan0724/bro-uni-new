import BAHero from "@/components/BAHero";
import BAAbout from "@/components/BAAbout";
import BATarget from "@/components/BATarget";
import BAProgram from "@/components/BAProgram";
import BASpeakers from "@/components/BASpeakers";
import BAPricing from "@/components/BAPricing";
import BAFAQ from "@/components/BAFAQ";
import Problem from "@/components/Problem";
import BACTA from "@/components/BACTA";
import BAFooter from "@/components/BAFooter";

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] font-body selection:bg-[var(--accent)] selection:text-black">
      <BAHero />
      <BAAbout />
      <BATarget />
      <BAProgram />
      <BASpeakers />
      <BAPricing />
      <BAFAQ />
      <Problem />
      <BACTA />
      <BAFooter />
    </main>
  );
}
