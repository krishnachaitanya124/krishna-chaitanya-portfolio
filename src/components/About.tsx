import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Palette, Users, Trophy, Star, Target, ExternalLink, Sparkles } from "lucide-react";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";

export const About = () => {
  const { ref: aboutRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: highlightsRef, visibleItems: highlightsVisible } = useStaggeredReveal(4, 150);
  const { ref: achievementsRef, visibleItems: achievementsVisible } = useStaggeredReveal(3, 200);

  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with modern technologies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Creating intuitive and beautiful user experiences",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading design teams and collaborative projects",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon Finalist",
      description: "National level competition finalist",
      year: "2024",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Head of Design Team",
      description: "Leading CSI design initiatives",
      year: "2025",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Star,
      title: "9.0 CGPA Achievement",
      description: "Academic excellence in Computer Science",
      year: "Current",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section ref={aboutRef} id="about" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="secondary" className="mb-4 glass-effect">
            <Sparkles className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate about creating{" "}
            <span className="bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-green bg-clip-text text-transparent">
              digital experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated computer science student with a strong foundation in web development 
            and design. My journey combines technical expertise with creative problem-solving to 
            deliver impactful software solutions.
          </p>
        </div>

        <div ref={highlightsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-intense transition-all duration-500 hover:-translate-y-3 border-border/50 glass-effect overflow-hidden relative ${
                highlightsVisible[index] ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              <CardContent className="p-6 text-center relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 bg-gradient-to-br ${item.gradient} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Key Achievements Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-primary bg-clip-text text-transparent">Key Achievements</h3>
          <div ref={achievementsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-intense transition-all duration-500 hover:-translate-y-2 border-border/50 glass-effect overflow-hidden relative ${
                  achievementsVisible[index] ? 'animate-scale-in' : 'opacity-0 scale-75'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                <CardContent className="p-6 text-center relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r ${achievement.color} rounded-full group-hover:scale-110 group-hover:animate-pulse transition-all duration-500 shadow-lg`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mb-2 text-xs glass-effect">
                    {achievement.year}
                  </Badge>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced My Journey Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl shadow-lg">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">My Journey</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 group">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs glass-effect">Academic Excellence</Badge>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Currently pursuing B.Tech in Computer Science Engineering at GMR Institute of Technology 
                    with a strong CGPA of 9.0/10. My academic journey has been complemented by hands-on 
                    experience through internships and real-world projects.
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300 group">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs glass-effect">Industry Experience</Badge>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    I've had the opportunity to work with cloud computing technologies during my internship 
                    at HashTek Solutions, where I gained valuable experience with AWS services including 
                    EC2, S3, IAM, and Lambda.
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-secondary/30 hover:border-secondary transition-colors duration-300 group">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs glass-effect">Leadership & Innovation</Badge>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    As the Head of Design Team at Computer Society of India and a finalist in the Smart 
                    India Hackathon Grand Finale, I've demonstrated leadership skills and innovation in 
                    technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Career Objective */}
          <Card className="shadow-intense border-border/50 relative overflow-hidden glass-effect group hover:shadow-2xl transition-all duration-500">
            {/* Animated background gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 gradient-mesh rounded-full -translate-y-20 translate-x-20 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full translate-y-16 -translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
            
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl shadow-lg">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold">Career Objective</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 group/item hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                  <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                    Utilize strong communication skills and technical expertise in web development
                  </p>
                </div>
                <div className="flex items-start gap-3 group/item hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                  <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                    Apply creative abilities in UI/UX to deliver impactful projects
                  </p>
                </div>
                <div className="flex items-start gap-3 group/item hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                  <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                    Foster leadership and collaboration within dynamic team environments
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 glass-effect rounded-lg group-hover:shadow-lg transition-all duration-300">
                <p className="text-sm font-medium text-center">
                  "Committed to contributing innovative software and design solutions 
                  that make a meaningful impact in the technology industry."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};