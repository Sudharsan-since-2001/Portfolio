import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { ContactSection } from "@/components/ContactSection";

import { HowISolveSection } from "@/components/HowISolveSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="nb-divider" />
      <AboutSection isTinted={true} />
      <div className="nb-divider" />
      <ExperienceSection />
      <div className="nb-divider" />
      <HowISolveSection isTinted={true} />
      <ServicesSection />
      <PortfolioTabs isTinted={true} />
      <div className="nb-divider" />
      <ContactSection />
    </main>
  );
}
