import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-12 animate-fade-in", className)}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
