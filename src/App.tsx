import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { IdentityCards } from "./components/sections/IdentityCards";
import { Timeline } from "./components/sections/Timeline";
import { CaseStudy } from "./components/sections/CaseStudy";
import { SkillsMatrix } from "./components/sections/SkillsMatrix";
import { LearningSystem } from "./components/sections/LearningSystem";
import { PersonalDNA } from "./components/sections/PersonalDNA";
import { Vision } from "./components/sections/Vision";
import { FinalCTA } from "./components/sections/FinalCTA";

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <Nav />

      <main>
        <Hero />
        <IdentityCards />
        <Timeline />
        <CaseStudy />
        <SkillsMatrix />
        <LearningSystem />
        <PersonalDNA />
        <Vision />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
