import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  achievements?: string[];
}

export const ProjectCard = ({
  title,
  description,
  role,
  technologies,
  achievements,
}: ProjectCardProps) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up card-gradient group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
      </div>
      
      <p className="text-sm text-accent font-medium mb-3">{role}</p>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      {achievements && achievements.length > 0 && (
        <div className="border-t border-border pt-4">
          <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-accent mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};
