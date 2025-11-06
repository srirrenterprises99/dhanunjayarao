import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, GraduationCap, Zap } from "lucide-react";
import { achievements } from "@/data/portfolioData";

const categoryIcons: Record<string, any> = {
  Academic: GraduationCap,
  Sports: Trophy,
  Technical: Zap,
};

const Achievements = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Achievements"
        subtitle="Recognition and milestones throughout my journey"
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {achievements.map((achievement, index) => {
          const Icon = categoryIcons[achievement.category] || Trophy;
          return (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:translate-x-2 animate-slide-up card-gradient"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  
                  <Badge variant="secondary">{achievement.category}</Badge>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
