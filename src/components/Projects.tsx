import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Briefcase, Sparkles, Zap, Shield } from "lucide-react";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const { ref: projectsRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef, visibleItems: cardsVisible } = useStaggeredReveal(3, 200);

  const projects = [
    {
      title: "AYUSH Startup Registration Portal",
      description: "Developed a web-based portal to simplify registration for AYUSH startups. Implemented a user-friendly interface with digital forms, document uploads, and real-time status tracking.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      date: "Dec 2024",
      category: "Web Development",
      status: "Completed",
      github: "https://github.com/krishnachaitanya124/Ayush_Startups",
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "User-friendly interface with digital forms",
        "Document upload functionality", 
        "Real-time status tracking",
        "Startup registration management"
      ]
    },
    {
      title: "Medicine Reminder & Tracker",
      description: "Implemented a medication schedule app for patients using MongoDB, Express.js, React.js, and Node.js. Users can add medicines with dosage, time, and reminders; notifications ensure timely intake.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
      date: "Feb 2025",
      category: "Healthcare App",
      status: "Completed",
      github: "https://github.com/krishnachaitanya124/Medicine-Remainder-and-Tracker",
      liveDemo: "https://med-frontend1.onrender.com/",
      icon: Sparkles,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Medication schedule management",
        "Dosage and time tracking",
        "Push notifications for reminders",
        "Patient medication history"
      ]
    },
    {
      title: "Fingerprint-Based Out Pass Generation System",
      description: "Created a biometric-based out pass system for hostel students using fingerprint authentication. Enabled secure, real-time pass issuance with email and SMS notifications.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      date: "Jan 2025 - Apr 2025",
      category: "Security System",
      status: "Completed",
      github: "https://github.com/krishnachaitanya124/Gatepass_Frontend",
      liveDemo: "http://82.29.162.24/",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Biometric fingerprint authentication",
        "Real-time pass issuance",
        "Email and SMS notifications",
        "Secure student verification"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent text-accent-foreground shadow-lg";
      case "In Progress":
        return "bg-primary text-primary-foreground shadow-lg";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section ref={projectsRef} id="projects" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-20 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="secondary" className="mb-4 glass-effect">
            <Zap className="w-4 h-4 mr-2" />
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, healthcare applications, 
            and security systems using modern technologies.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-intense transition-all duration-500 hover:-translate-y-3 border-border/50 h-full glass-effect overflow-hidden relative ${
                cardsVisible[index] ? 'animate-slide-up' : 'opacity-0 translate-y-20'
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Project gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <CardContent className="p-6 h-full flex flex-col relative">
                {/* Enhanced Project Header */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={`text-xs ${getStatusColor(project.status)} animate-pulse`}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                    <Badge variant="outline" className="text-xs glass-effect">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Enhanced Project Description */}
                <p className="text-muted-foreground mb-4 flex-grow group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Key Features */}
                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-sm text-card-foreground flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm text-card-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                      View Code
                    </a>
                  </Button>
                  {project.liveDemo && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 glass-effect hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 group/btn border-primary text-primary hover:border-accent"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced View All Projects Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="outline" 
            size="lg"
            className="gradient-primary text-primary-foreground border-none shadow-intense hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            asChild
          >
            <a href="https://github.com/krishnachaitanya124" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};