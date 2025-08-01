import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container max-w-7xl mx-auto py-3 px-6 flex items-center justify-between">
        <div className="flex items-center font-bold text-xl">
          Krishna Chaitanya
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="font-medium hover:text-primary transition-colors duration-200"
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </Button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border py-4">
          <div className="container max-w-7xl mx-auto flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="font-medium hover:text-primary transition-colors duration-200 w-full justify-center"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};
