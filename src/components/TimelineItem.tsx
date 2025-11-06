import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  organization: string;
  location?: string;
  duration: string;
  description?: string;
  details?: string[];
  grade?: string;
  type?: string;
}

export const TimelineItem = ({
  title,
  organization,
  location,
  duration,
  description,
  details,
  grade,
  type,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent glow-effect border-4 border-background" />
      
      {/* Timeline line */}
      <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-border" />
      
      <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up card-gradient">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          {type && <Badge variant="outline">{type}</Badge>}
        </div>
        
        <p className="text-primary font-medium mb-1">{organization}</p>
        {location && <p className="text-sm text-muted-foreground mb-1">{location}</p>}
        <p className="text-sm text-muted-foreground mb-3">{duration}</p>
        
        {grade && (
          <p className="text-sm font-medium text-accent mb-3">{grade}</p>
        )}
        
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        
        {details && details.length > 0 && (
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-accent mr-2 mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};
