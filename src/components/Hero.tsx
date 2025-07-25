import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Download, Star, Sparkles, Code2, Palette, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Floating geometric elements with enhanced animations */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float opacity-60" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-10 w-40 h-40 bg-secondary/15 rounded-3xl blur-2xl animate-float opacity-50" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float opacity-40" style={{animationDelay: '4s'}}></div>
      
      {/* Floating tech icons with staggered animations */}
      <div className={`absolute top-32 right-32 transition-all duration-1000 delay-500 ${isVisible ? 'animate-float opacity-20' : 'opacity-0 translate-y-10'}`}>
        <Code2 className="h-12 w-12 text-primary drop-shadow-lg" />
      </div>
      <div className={`absolute bottom-40 left-32 transition-all duration-1000 delay-700 ${isVisible ? 'animate-float opacity-20' : 'opacity-0 translate-y-10'}`}>
        <Palette className="h-10 w-10 text-accent drop-shadow-lg" />
      </div>
      <div className={`absolute top-1/3 right-16 transition-all duration-1000 delay-900 ${isVisible ? 'animate-float opacity-20' : 'opacity-0 translate-y-10'}`}>
        <Sparkles className="h-8 w-8 text-secondary drop-shadow-lg" />
      </div>
      <div className={`absolute top-2/3 left-16 transition-all duration-1000 delay-1100 ${isVisible ? 'animate-float opacity-20' : 'opacity-0 translate-y-10'}`}>
        <Zap className="h-9 w-9 text-primary drop-shadow-lg" />
      </div>

      <div className="container mx-auto px-6 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content with enhanced animations */}
          <div className={`space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
            <div className="space-y-4 lg:space-y-6">
              {/* Animated greeting with glow effect */}
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Badge variant="outline" className="mb-4 px-4 py-2 text-sm bg-primary/5 border-primary/20 text-primary animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for opportunities
                </Badge>
              </div>
              
              <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <span className="block mb-2 text-foreground/80">Hi, I'm</span>
                <span className="gradient-hero bg-clip-text text-transparent block animate-glow">
                  Krishna Chaitanya
                </span>
              </h1>
              
              <h2 className={`text-lg sm:text-xl md:text-2xl text-foreground/80 font-semibold transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                Full Stack Developer & UI/UX Designer
              </h2>
              
              <p className={`text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed mx-auto lg:mx-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                Passionate about creating innovative web solutions with strong technical expertise 
                in modern technologies and a keen eye for user experience design.
              </p>
            </div>
          
            {/* Enhanced contact buttons with hover effects */}
            <div className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground shadow-intense hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                asChild
              >
                <a href="mailto:chaitanyauppada1245@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-effect border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                asChild
              >
                <a href="https://drive.google.com/file/d/1fkYSLbmOKXDG8r-Cl7DUVVqWvICc5SX3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Enhanced social links */}
            <div className={`flex gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                asChild
              >
                <a href="https://linkedin.com/in/uppada-krishna-chaitanya-842517271" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 group-hover:animate-pulse" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                asChild
              >
                <a href="https://github.com/krishnachaitanya124" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 group-hover:animate-pulse" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                asChild
              >
                <a href="tel:8247332482">
                  <Phone className="h-5 w-5 group-hover:animate-pulse" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced profile image with dynamic effects */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
            <div className="relative group">
              {/* Multiple layered glow effects */}
              <div className="absolute -inset-4 gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
              
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-card hover:shadow-intense transition-all duration-500 hover:scale-105 group-hover:border-primary/40">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                <img 
                  src="/lovable-uploads/5bdf5781-a49e-4abb-a3b2-0dd77ab1929d.png" 
                  alt="Krishna Chaitanya Uppada"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-bounce" style={{animationDelay: '2s'}}>
                SIH Finalist
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-bounce" style={{animationDelay: '3s'}}>
                Full Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};