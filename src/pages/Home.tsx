import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "@/data/portfolioData";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent glow-effect flex items-center justify-center text-6xl font-bold text-white">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gradient font-semibold mb-4 animate-slide-up">
          {personalInfo.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
          {personalInfo.tagline}
        </p>

        {/* Short Introduction */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Transforming industrial processes through innovative automation solutions 
          and cutting-edge battery management systems. Passionate about leveraging 
          technology to drive efficiency and sustainability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button size="lg" className="group" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up">
          <Link
            to="/projects"
            className="p-6 rounded-lg bg-card hover:shadow-lg transition-all hover:scale-105 group card-gradient"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              View Projects
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Explore my technical work and innovations
            </p>
            <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-2 transition-transform mx-auto" />
          </Link>

          <Link
            to="/publications"
            className="p-6 rounded-lg bg-card hover:shadow-lg transition-all hover:scale-105 group card-gradient"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Research Papers
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Published work in automation and energy
            </p>
            <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-2 transition-transform mx-auto" />
          </Link>

          <Link
            to="/skills"
            className="p-6 rounded-lg bg-card hover:shadow-lg transition-all hover:scale-105 group card-gradient"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Technical Skills
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Expertise in PLC, SCADA, and automation
            </p>
            <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-2 transition-transform mx-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
