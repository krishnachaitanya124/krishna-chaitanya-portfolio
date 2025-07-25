import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Code2, Sparkles, Zap, Terminal, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const DigitalHero = () => {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const roles = ["Full Stack Developer", "UI/UX Designer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const text = roles[currentRole];
    let index = 0;
    
    const typeText = () => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText("");
          index = 0;
        }, 2000);
      }
    };

    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [currentRole]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-cyber-blue/10 flex items-center justify-center"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--cyber-blue)/0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--cyber-blue)/0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'matrix 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyber-blue to-electric-purple rounded-lg opacity-60 animate-bounce-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-neon-green to-cyber-blue rounded-full opacity-40 animate-pulse-glow"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-r from-electric-purple to-digital-orange transform rotate-45 opacity-50 animate-rotate-slow"></div>
      
      {/* Particle System */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-60 animate-matrix"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className={`space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'
          }`}>
            
            {/* Status Badge */}
            <Badge 
              variant="outline" 
              className="mb-6 px-6 py-2 text-sm font-medium border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 transition-all duration-300 animate-pulse-glow"
            >
              <Terminal className="w-4 h-4 mr-2" />
              System Online • Ready to Deploy
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2">Krishna Chaitanya</span>
              <span className="block bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-green bg-clip-text text-transparent animate-pulse">
                {typedText}
                <span className={`border-r-2 border-cyber-blue ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting digital experiences with cutting-edge technology. 
              Transforming ideas into powerful, scalable solutions that make an impact.
            </p>

            {/* Tech Stack Highlight */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'MySQL'].map((tech, index) => (
                <Badge 
                  key={tech}
                  variant="secondary"
                  className="px-4 py-2 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-default"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Code2 className="w-3 h-3 mr-2" />
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyber-blue to-electric-purple hover:from-electric-purple hover:to-cyber-blue text-white border-none shadow-neon hover:shadow-glow transition-all duration-500 hover:scale-105 px-8 py-3"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Explore Projects
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300 hover:scale-105 px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-12">
              {[
                { icon: Github, href: "https://github.com/krishnachaitanya124", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/uppada-krishna-chaitanya-842517271", label: "LinkedIn" },
                { icon: Mail, href: "mailto:chaitanyauppada1245@gmail.com", label: "Email" },
                { icon: FileText, href: "https://drive.google.com/file/d/1N5S5CcqZ7HZNVKeeXeX6eYUJgoWq8IYb/view?usp=sharing", label: "Resume" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-cyber-blue/20 hover:border-cyber-blue transition-all duration-300 hover:scale-110 hover:shadow-neon"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-cyber-blue transition-colors" />
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce-slow lg:hidden">
              <ChevronDown className="w-8 h-8 text-cyber-blue mx-auto opacity-70" />
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
            <div className="relative group">
              {/* Multiple layered glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-blue to-electric-purple rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-green/30 to-cyber-blue/30 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
              
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyber-blue/20 shadow-card hover:shadow-intense transition-all duration-500 hover:scale-105 group-hover:border-cyber-blue/40">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/10 to-electric-purple/10 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                <img 
                  src="/lovable-uploads/5bdf5781-a49e-4abb-a3b2-0dd77ab1929d.png" 
                  alt="Krishna Chaitanya Uppada"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-electric-purple text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-bounce" style={{animationDelay: '2s'}}>
                SIH Finalist
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cyber-blue text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-bounce" style={{animationDelay: '3s'}}>
                Full Stack Dev
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-purple/20 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};