import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { about } from "@/data/portfolioData";
import { Code2, Lightbulb, Sparkles, Users } from "lucide-react";

const iconMap: Record<string, any> = {
  Code2,
  Lightbulb,
  Sparkles,
  Users,
};

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="About Me"
        subtitle="Learn more about my journey and expertise"
      />

      {/* Introduction */}
      <Card className="p-8 mb-12 animate-fade-in card-gradient">
        <p className="text-lg text-foreground leading-relaxed">
          {about.introduction}
        </p>
      </Card>

      {/* Strengths */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Core Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.strengths.map((strength, index) => {
            const Icon = iconMap[strength.icon];
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up card-gradient"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Languages */}
      <Card className="p-8 mb-12 animate-fade-in card-gradient">
        <h2 className="text-2xl font-bold mb-4">Languages</h2>
        <div className="flex flex-wrap gap-3">
          {about.languages.map((language, index) => (
            <Badge key={index} variant="secondary" className="text-base py-2 px-4">
              {language}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Career Goal */}
      <Card className="p-8 animate-fade-in card-gradient">
        <h2 className="text-2xl font-bold mb-4">Career Objective</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {about.careerGoal}
        </p>
      </Card>
    </div>
  );
};

export default About;
