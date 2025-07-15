
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Briefcase } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AYUSH Startup Registration Portal",
      description: "Developed a web-based portal to simplify registration for AYUSH startups. Implemented a user-friendly interface with digital forms, document uploads, and real-time status tracking.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      date: "Dec 2024",
      category: "Web Development",
      status: "Completed",
      github: "https://github.com/krishnachaitanya124/Ayush_Startups",
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
        return "bg-accent text-accent-foreground";
      case "In Progress":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured{" "}
            <span className="text-primary">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, healthcare applications, 
            and security systems using modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-border/50 h-full"
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Project Header */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:scale-110 transition-smooth">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-sm text-card-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm text-card-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 transition-smooth hover:scale-105"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button with GitHub Link */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="transition-smooth hover:scale-105"
            asChild
          >
            <a href="https://github.com/krishnachaitanya124" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
