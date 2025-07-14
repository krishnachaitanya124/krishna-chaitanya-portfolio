import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Cloud, Award, Trophy } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Front-End Development", 
      icon: Palette,
      skills: [
        { name: "React JS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Angular JS", level: 75 },
        { name: "Responsive Design", level: 88 }
      ]
    },
    {
      title: "Back-End & Database",
      icon: Database, 
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "API Development", level: 85 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 75 },
        { name: "Visual Studio Code", level: 95 },
        { name: "Git/GitHub", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Canva", level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Cloud Computing Intern Certificate",
      issuer: "HashTek Solutions",
      date: "2024",
      verified: true,
      link: "https://drive.google.com/file/d/1MiWrEAxi19BK7eN10RZc7PtdiG_b7hq1/view?usp=sharing"
    },
    {
      title: "SIH Grand Finale 2024",
      issuer: "Smart India Hackathon",
      date: "2024",
      verified: true,
      link: "https://drive.google.com/file/d/1cXxKwc8wzcUNj7LUcjwTQ3luEs4zkOOm/view?usp=sharing"
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Grand Finale",
      description: "Finalist - National Level Hackathon",
      year: "2024",
      organization: "Government of India Initiative"
    },
    {
      title: "Head of Design Team",
      description: "Computer Society of India",
      year: "Mar 2025 – Present", 
      organization: "GMRIT Rajam"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, certifications, 
            and achievements in software development and design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 gradient-primary rounded-lg group-hover:scale-110 transition-smooth">
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Certificates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <Card className="shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 gradient-primary rounded-lg">
                  <Trophy className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 space-y-1">
                    <h4 className="font-semibold text-card-foreground">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {achievement.year}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {achievement.organization}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 gradient-primary rounded-lg">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <Badge variant={cert.verified ? "default" : "secondary"}>
                            {cert.verified ? "Verified" : "In Progress"}
                          </Badge>
                        </div>
                      </div>
                      <h4 className="font-semibold mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                      {cert.link && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          asChild
                        >
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            View Certificate
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack Summary */}
        <Card className="mt-12 shadow-soft border-border/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Core Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", 
                "Python", "Java", "AWS", "HTML/CSS", "Git", "VS Code", "Figma"
              ].map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};