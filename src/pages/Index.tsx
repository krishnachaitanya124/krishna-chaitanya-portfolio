import { useState } from "react";
import { WelcomePage } from "@/components/WelcomePage";
import { Navigation } from "@/components/Navigation";
import { DigitalHero } from "@/components/DigitalHero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { DigitalExperiences } from "@/components/DigitalExperiences";
import { InteractiveContact } from "@/components/InteractiveContact";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (!showPortfolio) {
    return <WelcomePage onEnterPortfolio={() => setShowPortfolio(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DigitalHero />
      <About />
      <Education />
      <Experience />
      <TechStack />
      <DigitalExperiences />
      <InteractiveContact />
    </div>
  );
};

export default Index;
