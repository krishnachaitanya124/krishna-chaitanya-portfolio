import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaitanyauppada1245@gmail.com",
      href: "mailto:chaitanyauppada1245@gmail.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+91 8247332482",
      href: "tel:8247332482"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "linkedin.com/in/uppada-krishna-chaitanya-842517271",
      href: "https://linkedin.com/in/uppada-krishna-chaitanya-842517271"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/krishnachaitanya124", 
      href: "https://github.com/krishnachaitanya124"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out for project collaborations, internship opportunities, 
                  or just to connect. I'm passionate about technology and always excited to 
                  discuss innovative ideas.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="group hover:shadow-soft transition-smooth border-border/50">
                    <CardContent className="p-4">
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 transition-smooth hover:text-primary"
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-lg group-hover:scale-110 transition-smooth">
                          <contact.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{contact.label}</p>
                          <p className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="font-semibold">Quick Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    className="gradient-primary shadow-elegant transition-smooth hover:scale-105"
                    asChild
                  >
                    <a href="mailto:chaitanyauppada1245@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="transition-smooth hover:scale-105"
                    asChild
                  >
                    <a href="https://drive.google.com/file/d/1fkYSLbmOKXDG8r-Cl7DUVVqWvICc5SX3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="Project collaboration, job opportunity, etc."
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full gradient-primary shadow-elegant transition-smooth hover:scale-105"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Availability Status */}
        <Card className="mt-12 max-w-2xl mx-auto shadow-soft border-border/50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <Badge variant="secondary">Available for Opportunities</Badge>
            </div>
            <p className="text-muted-foreground">
              Currently seeking internship and full-time opportunities in software development, 
              web development, and UI/UX design. Open to remote and on-site positions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};