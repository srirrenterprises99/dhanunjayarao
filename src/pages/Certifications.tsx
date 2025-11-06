import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolioData";

const Certifications = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Certifications"
        subtitle="Professional credentials and continuous learning"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in card-gradient"
          >
            <div className="flex items-start justify-between mb-4">
              <Award className="h-8 w-8 text-accent" />
              <Badge variant="secondary">{cert.category}</Badge>
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {cert.title}
            </h3>
            
            <p className="text-sm text-primary font-medium mb-1">
              {cert.issuer}
            </p>
            
            <p className="text-sm text-muted-foreground">{cert.year}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
