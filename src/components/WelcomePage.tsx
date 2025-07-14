import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Briefcase } from "lucide-react";

interface WelcomePageProps {
  onEnterPortfolio: () => void;
}

export const WelcomePage = ({ onEnterPortfolio }: WelcomePageProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Elegant animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Floating icons */}
      <div className="absolute top-40 left-1/4 animate-float">
        <Code className="h-8 w-8 text-primary/30" style={{animationDelay: '1s'}} />
      </div>
      <div className="absolute top-60 right-1/4 animate-float">
        <Briefcase className="h-8 w-8 text-accent/30" style={{animationDelay: '2s'}} />
      </div>
      <div className="absolute bottom-40 left-1/3 animate-float">
        <Sparkles className="h-8 w-8 text-primary/30" style={{animationDelay: '0.5s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main welcome text */}
          <div className="space-y-6">
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight text-foreground transition-all duration-1000 ${
              animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Krishna Chaitanya's
              </span>
            </h1>
            <h2 className={`text-4xl md:text-6xl font-bold text-primary transition-all duration-1000 delay-300 ${
              animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Portfolio
            </h2>
          </div>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Full Stack Developer & UI/UX Designer passionate about creating innovative solutions
          </p>

          {/* Professional highlights */}
          <div className={`flex flex-wrap justify-center gap-4 text-sm transition-all duration-1000 delay-700 ${
            animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium">SIH 2024 Grand Finalist</span>
            <span className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full font-medium">Cloud Computing Certified</span>
            <span className="px-4 py-2 bg-secondary/10 text-foreground border border-secondary/20 rounded-full font-medium">Full Stack Expert</span>
          </div>

          {/* Enter portfolio button */}
          <div className={`transition-all duration-1000 delay-1000 ${
            animationComplete ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}>
            <Button
              size="lg"
              onClick={onEnterPortfolio}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6 group"
            >
              Enter Portfolio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Quick access note */}
          <p className={`text-sm text-foreground/60 transition-all duration-1000 delay-1200 ${
            animationComplete ? 'opacity-100' : 'opacity-0'
          }`}>
            Discover my projects, skills, and experience
          </p>
        </div>
      </div>
    </div>
  );
};