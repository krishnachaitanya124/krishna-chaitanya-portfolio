
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Palette, Users, Trophy, Star, Target, ExternalLink } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading design teams and collaborative projects"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate about creating{" "}
            <span className="text-primary">
              digital experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated computer science student with a strong foundation in web development 
            and design. My journey combines technical expertise with creative problem-solving to 
            deliver impactful software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg group-hover:scale-110 transition-smooth">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r ${achievement.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mb-2 text-xs">
                    {achievement.year}
                  </Badge>
                  <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced My Journey Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">My Journey</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">Academic Excellence</Badge>
                  <p className="text-muted-foreground">
                    Currently pursuing B.Tech in Computer Science Engineering at GMR Institute of Technology 
                    with a strong CGPA of 9.0/10. My academic journey has been complemented by hands-on 
                    experience through internships and real-world projects.
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">Industry Experience</Badge>
                  <p className="text-muted-foreground">
                    I've had the opportunity to work with cloud computing technologies during my internship 
                    at HashTek Solutions, where I gained valuable experience with AWS services including 
                    EC2, S3, IAM, and Lambda.
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">Leadership & Innovation</Badge>
                  <p className="text-muted-foreground">
                    As the Head of Design Team at Computer Society of India and a finalist in the Smart 
                    India Hackathon Grand Finale, I've demonstrated leadership skills and innovation in 
                    technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Career Objective */}
          <Card className="shadow-soft border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Career Objective</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Utilize strong communication skills and technical expertise in web development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Apply creative abilities in UI/UX to deliver impactful projects
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Foster leadership and collaboration within dynamic team environments
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
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
