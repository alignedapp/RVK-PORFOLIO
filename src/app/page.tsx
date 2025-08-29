import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { TurningPoint } from "@/components/TurningPoint";
import { CaseStudies } from "@/components/CaseStudies";
import { PersonalNote } from "@/components/PersonalNote";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <TurningPoint />
      <CaseStudies />
      <PersonalNote />
      <FooterCTA />
    </main>
  );
}
