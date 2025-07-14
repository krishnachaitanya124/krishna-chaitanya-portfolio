import { useState } from "react";
import { WelcomePage } from "@/components/WelcomePage";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (!showPortfolio) {
    return <WelcomePage onEnterPortfolio={() => setShowPortfolio(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
