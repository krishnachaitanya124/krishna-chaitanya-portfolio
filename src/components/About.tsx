import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Palette, Users } from "lucide-react";

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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate about creating{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 gradient-primary rounded-lg group-hover:scale-110 transition-smooth">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently pursuing B.Tech in Computer Science Engineering at GMR Institute of Technology 
                with a strong CGPA of 9.0/10. My academic journey has been complemented by hands-on 
                experience through internships and real-world projects.
              </p>
              <p>
                I've had the opportunity to work with cloud computing technologies during my internship 
                at HashTek Solutions, where I gained valuable experience with AWS services including 
                EC2, S3, IAM, and Lambda.
              </p>
              <p>
                As the Head of Design Team at Computer Society of India and a finalist in the Smart 
                India Hackathon Grand Finale, I've demonstrated leadership skills and innovation in 
                technology solutions.
              </p>
            </div>
          </div>

          <Card className="shadow-soft border-border/50">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-6">Career Objective</h4>
              <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                "To utilize my strong communication skills, technical expertise in web development, 
                and creative abilities in UI/UX to deliver impactful projects. I aim to contribute 
                to innovative software and design solutions while fostering leadership and 
                collaboration within a dynamic team environment."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};