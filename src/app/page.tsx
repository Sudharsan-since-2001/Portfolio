import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioTabs } from "@/components/PortfolioTabs";

import { HowISolveSection } from "@/components/HowISolveSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="border-t border-muted/20">
        <AboutSection isTinted={true} />
      </div>
      <ExperienceSection />
      <HowISolveSection isTinted={true} />
      <ServicesSection />
      <PortfolioTabs isTinted={true} />

    </main>
  );
}
