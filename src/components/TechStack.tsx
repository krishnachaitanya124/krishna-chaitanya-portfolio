import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";

export const TechStack = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef, visibleItems } = useStaggeredReveal(6, 150);

  const techCategories = [
    {
      category: "Frontend",
      icon: Globe,
      gradient: "from-cyber-blue to-electric-purple",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"],
      description: "Building responsive, interactive user interfaces"
    },
    {
      category: "Backend", 
      icon: Database,
      gradient: "from-neon-green to-cyber-blue",
      technologies: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware"],
      description: "Scalable server-side architecture and APIs"
    },
    {
      category: "Database",
      icon: Database,
      gradient: "from-electric-purple to-digital-orange",
      technologies: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      description: "Efficient data storage and retrieval systems"
    },
    {
      category: "Development",
      icon: Code2,
      gradient: "from-digital-orange to-neon-green",
      technologies: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools"],
      description: "Modern development tools and workflows"
    },
    {
      category: "Deployment",
      icon: Cloud,
      gradient: "from-cyber-blue to-neon-green",
      technologies: ["Vercel", "Netlify", "GitHub Actions", "Docker"],
      description: "Cloud deployment and CI/CD pipelines"
    },
    {
      category: "Specializations",
      icon: Zap,
      gradient: "from-electric-purple to-cyber-blue",
      technologies: ["MERN Stack", "Full Stack Development", "Responsive Design", "Performance Optimization"],
      description: "Comprehensive development expertise"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="mb-4 px-4 py-2 border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue">
            <Code2 className="w-4 h-4 mr-2" />
            Technology Arsenal
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-green bg-clip-text text-transparent">
              Mastering Modern Tech Stack
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, performant, and user-centric applications
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, index) => (
            <Card
              key={category.category}
              className={`group relative overflow-hidden border-border/50 hover:border-cyber-blue/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-digital h-full ${
                visibleItems[index] ? 'animate-slide-up' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <CardContent className="p-6 h-full flex flex-col relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default group-hover:animate-pulse"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 right-10 w-12 h-12 bg-gradient-to-r from-cyber-blue to-electric-purple rounded-lg opacity-30 animate-rotate-slow"></div>
        <div className="absolute bottom-20 left-10 w-8 h-8 bg-gradient-to-r from-neon-green to-digital-orange rounded-full opacity-40 animate-bounce-slow"></div>
      </div>
    </section>
  );
};