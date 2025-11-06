import { Card } from "@/components/ui/card";

interface SkillCardProps {
  category: string;
  skills: string[];
}

export const SkillCard = ({ category, skills }: SkillCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in card-gradient">
      <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};
