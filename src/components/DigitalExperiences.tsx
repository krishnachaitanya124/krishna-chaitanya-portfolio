import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Zap, Shield, Heart, Calendar, Database } from "lucide-react";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";

export const DigitalExperiences = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef, visibleItems } = useStaggeredReveal(3, 200);

  const projects = [
    {
      title: "AYUSH Startup Registration Portal",
      subtitle: "Streamlining Healthcare Innovation",
      description: "A comprehensive digital platform that revolutionizes the startup registration process for AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy) companies, making healthcare innovation more accessible.",
      impact: {
        metric: "100+",
        label: "Startups Empowered"
      },
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      features: [
        "Digital form automation",
        "Real-time status tracking", 
        "Document management system",
        "Administrative dashboard"
      ],
      category: "Healthcare Innovation",
      status: "Live in Production",
      github: "https://github.com/krishnachaitanya124/Ayush_Startups",
      icon: Heart,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)"
    },
    {
      title: "Medicine Reminder & Tracker",
      subtitle: "Smart Healthcare Management", 
      description: "An intelligent medication management system that helps patients maintain consistent treatment routines through smart reminders, dosage tracking, and comprehensive health monitoring.",
      impact: {
        metric: "24/7",
        label: "Health Monitoring"
      },
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Smart reminder system",
        "Dosage optimization",
        "Health analytics dashboard",
        "Emergency notifications"
      ],
      category: "HealthTech",
      status: "Production Ready",
      github: "https://github.com/krishnachaitanya124/Medicine-Remainder-and-Tracker",
      icon: Database,
      gradient: "from-blue-500 via-cyan-500 to-indigo-500",
      bgPattern: "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)"
    },
    {
      title: "Biometric Security System",
      subtitle: "Next-Gen Access Control",
      description: "A cutting-edge fingerprint-based authentication system for hostel out-pass generation, combining biometric security with real-time notifications for enhanced safety and efficiency.",
      impact: {
        metric: "99.9%",
        label: "Security Accuracy"
      },
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      features: [
        "Fingerprint authentication",
        "Real-time pass generation",
        "Multi-channel notifications",
        "Security analytics"
      ],
      category: "Security Systems",
      status: "Enterprise Solution",
      github: "https://github.com/krishnachaitanya124/Gatepass_Frontend",
      icon: Shield,
      gradient: "from-purple-500 via-violet-500 to-pink-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)"
    }
  ];

  return (
    <section ref={sectionRef} id="digital-experiences" className="py-20 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyber-blue/30 to-electric-purple/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-neon-green/20 to-digital-orange/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="mb-4 px-4 py-2 border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue">
            <Zap className="w-4 h-4 mr-2" />
            Digital Experiences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafting Solutions That{" "}
            <span className="bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-green bg-clip-text text-transparent">
              Transform Lives
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications that make a meaningful impact across healthcare, security, and innovation sectors
          </p>
        </div>

        <div ref={cardsRef} className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative overflow-hidden border-border/50 hover:border-cyber-blue/50 transition-all duration-700 hover:shadow-digital ${
                visibleItems[index] ? 'animate-slide-up' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30" style={{ background: project.bgPattern }}></div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>

              <CardContent className="p-8 relative">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  
                  {/* Project Info - Left Side */}
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2 text-xs border-primary/30 bg-primary/10 text-primary">
                            {project.category}
                          </Badge>
                          <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-cyber-blue font-medium">{project.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyber-blue" />
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyber-blue to-electric-purple rounded-full flex-shrink-0 group-hover:animate-pulse"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground">Built With:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default group-hover:animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Impact Metrics - Right Side */}
                  <div className="lg:col-span-1">
                    <div className="space-y-6">
                      
                      {/* Impact Card */}
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-muted/20 border border-border/50 group-hover:border-cyber-blue/30 transition-all duration-500">
                        <div className="text-center space-y-3">
                          <div className="text-3xl font-bold bg-gradient-to-r from-cyber-blue to-electric-purple bg-clip-text text-transparent">
                            {project.impact.metric}
                          </div>
                          <p className="text-sm text-muted-foreground">{project.impact.label}</p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="text-center">
                        <Badge 
                          className="px-4 py-2 bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 text-neon-green border-neon-green/30 hover:bg-neon-green/30 transition-all duration-300"
                        >
                          <Calendar className="w-3 h-3 mr-2" />
                          {project.status}
                        </Badge>
                      </div>

                      {/* Decorative Elements */}
                      <div className="flex justify-center gap-4 opacity-40">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyber-blue to-electric-purple rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-electric-purple to-neon-green rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-neon-green to-digital-orange rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced View All Projects Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="group bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-green hover:from-neon-green hover:via-cyber-blue hover:to-electric-purple text-white border-none shadow-neon hover:shadow-glow transition-all duration-500 hover:scale-105 px-8 py-3"
            asChild
          >
            <a href="#" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <ExternalLink className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Explore Full Portfolio
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};