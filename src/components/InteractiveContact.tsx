import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Github, 
  Linkedin, 
  MapPin,
  Phone,
  Calendar,
  Zap
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/components/ui/use-toast";

export const InteractiveContact = () => {
  const { ref: contactRef, isVisible } = useScrollReveal({ threshold: 0.3 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const mailtoLink = `mailto:krishnachaitanya124@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Message Ready!",
        description: "Your email client will open with the message pre-filled.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnachaitanya124@gmail.com",
      href: "mailto:krishnachaitanya124@gmail.com",
      gradient: "from-cyber-blue to-electric-purple"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "krishnachaitanya124",
      href: "https://github.com/krishnachaitanya124",
      gradient: "from-electric-purple to-neon-green"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/krishnachaitanya",
      gradient: "from-neon-green to-digital-orange"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      gradient: "from-digital-orange to-cyber-blue"
    }
  ];

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyber-blue/30 to-electric-purple/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-neon-green/20 to-digital-orange/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="mb-4 px-4 py-2 border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              Amazing Together?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project, collaboration opportunities, or just have a tech conversation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className={`group border-border/50 hover:border-cyber-blue/50 transition-all duration-500 hover:shadow-digital ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
          }`}>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyber-blue to-electric-purple shadow-lg">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Send a Message</h3>
                    <p className="text-sm text-muted-foreground">I'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="border-border/50 focus:border-cyber-blue transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="border-border/50 focus:border-cyber-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion / Collaboration"
                      className="border-border/50 focus:border-cyber-blue transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={4}
                      required
                      className="border-border/50 focus:border-cyber-blue transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-cyber-blue to-electric-purple hover:from-electric-purple hover:to-cyber-blue text-white border-none shadow-neon hover:shadow-glow transition-all duration-500 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`} style={{animationDelay: '200ms'}}>
            
            {/* Quick Connect */}
            <Card className="border-border/50 hover:border-cyber-blue/50 transition-all duration-500 hover:shadow-digital">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-neon-green to-cyber-blue shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Quick Connect</h3>
                    <p className="text-sm text-muted-foreground">Reach out through your preferred platform</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-border/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${method.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{method.label}</div>
                        <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border-border/50 hover:border-cyber-blue/50 transition-all duration-500 hover:shadow-digital">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-digital-orange to-electric-purple shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Availability</h3>
                    <p className="text-sm text-muted-foreground">Currently open for new opportunities</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-sm">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-sm">Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-sm">Available for technical consultations</span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-neon-green/10 border border-neon-green/20">
                  <div className="text-xs text-neon-green font-medium">⚡ Quick Response Time: Within 24 hours</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};