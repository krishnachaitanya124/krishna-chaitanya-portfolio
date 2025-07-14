import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Download, Terminal } from "lucide-react";

export const Hero = () => {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> Initializing Krishna's portfolio...\n> Loading developer profile...\n> System ready ✓";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-subtle relative overflow-hidden">
      {/* Terminal overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Terminal Window */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground ml-2">terminal</span>
              </div>
              <div className="text-primary whitespace-pre-line min-h-[60px]">
                {terminalText}
                <span className="animate-pulse">█</span>
              </div>
            </div>

            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Terminal className="mr-2 h-3 w-3" />
                Available for new opportunities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Krishna Chaitanya
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Passionate about creating innovative web solutions with strong technical expertise 
                in modern technologies and a keen eye for user experience design.
              </p>
            </div>
            
            {/* Contact buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary shadow-elegant transition-smooth hover:scale-105 animate-glow"
                asChild
              >
                <a href="mailto:chaitanyauppada1245@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="transition-smooth hover:scale-105 border-primary/20 hover:border-primary"
                asChild
              >
                <a href="https://drive.google.com/file/d/1fkYSLbmOKXDG8r-Cl7DUVVqWvICc5SX3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon"
                className="transition-smooth hover:scale-110 hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://linkedin.com/in/uppada-krishna-chaitanya-842517271" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="transition-smooth hover:scale-110 hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://github.com/krishnachaitanya124" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="transition-smooth hover:scale-110 hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="tel:8247332482">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-30 animate-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-elegant hover:shadow-primary/20 transition-smooth">
                <img 
                  src="/lovable-uploads/491572e3-dafb-4dfb-b81e-1ba24c148a06.png" 
                  alt="Krishna Chaitanya Uppada"
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};