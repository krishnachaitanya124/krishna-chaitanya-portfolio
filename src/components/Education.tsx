import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      institution: "GMR Institute of Technology, Rajam",
      degree: "B.Tech in Computer Science Engineering",
      grade: "CGPA: 9.0/10",
      period: "Oct 2022 – Present",
      status: "current"
    },
    {
      institution: "SASI Junior College, Visakhapatnam", 
      degree: "Intermediate in MPC",
      grade: "Marks: 966/1000",
      period: "Jun 2020 – Mar 2022",
      status: "completed"
    },
    {
      institution: "ZP High School, Haridaspuram",
      degree: "Board of Secondary Education",
      grade: "Marks: 592/600",
      period: "Jun 2019 – Mar 2020", 
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Academic{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey has provided a strong foundation in computer science 
            and engineering principles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-elegant transition-smooth hover:-translate-y-1 border-border/50 ${
                  edu.status === 'current' ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-smooth mt-1">
                          {edu.status === 'current' ? (
                            <GraduationCap className="h-5 w-5 text-primary-foreground" />
                          ) : (
                            <Award className="h-5 w-5 text-primary-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-card-foreground">
                            {edu.institution}
                          </h3>
                          <p className="text-muted-foreground mb-2">{edu.degree}</p>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={edu.status === 'current' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {edu.grade}
                            </Badge>
                            {edu.status === 'current' && (
                              <Badge variant="outline" className="text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Achievements */}
          <Card className="mt-12 shadow-soft border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    9.0/10
                  </div>
                  <p className="text-sm text-muted-foreground">Current CGPA</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    96.6%
                  </div>
                  <p className="text-sm text-muted-foreground">Intermediate Marks</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    98.7%
                  </div>
                  <p className="text-sm text-muted-foreground">Secondary Education</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};