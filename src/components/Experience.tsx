import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Cloud, Database, Server } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Cloud Computing Intern",
      company: "HashTek Solutions",
      location: "Visakhapatnam",
      period: "Jun 2024 – Jul 2024",
      type: "Internship",
      description: "Completed a 4-week offline internship focused on Cloud Computing using AWS services.",
      skills: ["AWS", "EC2", "S3", "IAM", "Lambda", "Cloud Computing"],
      achievements: [
        "Gained hands-on experience with key AWS tools including EC2, S3, IAM, and Lambda",
        "Completed comprehensive cloud computing projects",
        "Received certification for successful completion"
      ],
      certificate: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gaining practical experience through internships and real-world projects 
            in cloud computing and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-border/50 mb-8"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-smooth mt-1">
                          <Cloud className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-card-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                            {exp.certificate && (
                              <Badge variant="secondary" className="text-xs">
                                Certified
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {exp.certificate && (
                      <div className="pt-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="transition-smooth hover:scale-105"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Certificate
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Cloud Technologies Showcase */}
          <Card className="shadow-soft border-border/50 mt-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Cloud Technologies Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full">
                    <Server className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold">EC2 & Compute</h4>
                  <p className="text-sm text-muted-foreground">
                    Virtual server management and scalable computing solutions
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full">
                    <Database className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold">S3 & Storage</h4>
                  <p className="text-sm text-muted-foreground">
                    Object storage and data management solutions
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full">
                    <Cloud className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold">Lambda & IAM</h4>
                  <p className="text-sm text-muted-foreground">
                    Serverless computing and identity access management
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};