import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Get In Touch"
        subtitle="Let's discuss how we can work together"
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="p-6 animate-fade-in card-gradient">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6 animate-fade-in card-gradient">
            <h3 className="text-2xl font-semibold mb-6">Connect Online</h3>
            
            <div className="space-y-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary">
                  LinkedIn Profile
                </span>
              </a>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <Github className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary">
                  GitHub Profile
                </span>
              </a>
              
              <a
                href={personalInfo.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <GraduationCap className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary">
                  Google Scholar
                </span>
              </a>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-6 animate-slide-up card-gradient">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                rows={6}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
