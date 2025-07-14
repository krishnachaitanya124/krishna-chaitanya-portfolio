import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Download, Star } from "lucide-react";

export const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/20 bg-primary/5 text-primary">
                <Star className="mr-2 h-3 w-3" />
                Available for new opportunities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Krishna Chaitanya
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-foreground/80 font-semibold">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                Passionate about creating innovative web solutions with strong technical expertise 
                in modern technologies and a keen eye for user experience design.
              </p>
            </div>
            
            {/* Contact buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
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
                className="text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href="https://linkedin.com/in/uppada-krishna-chaitanya-842517271" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href="https://github.com/krishnachaitanya124" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105">
                <img 
                  src="/lovable-uploads/491572e3-dafb-4dfb-b81e-1ba24c148a06.png" 
                  alt="Krishna Chaitanya Uppada"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};