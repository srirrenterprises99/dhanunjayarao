import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { publications } from "@/data/portfolioData";

const Publications = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Publications"
        subtitle="Research contributions to automation and energy systems"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {publications.map((pub, index) => (
          <Card
            key={index}
            className="p-8 hover:shadow-xl transition-all duration-300 animate-slide-up card-gradient"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Badge variant="outline" className="mb-3">
                  {pub.type}
                </Badge>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {pub.authors}
                </p>
                <p className="text-sm text-primary font-medium mb-4">
                  {pub.venue} • {pub.year}
                </p>
              </div>
              <FileText className="h-8 w-8 text-accent" />
            </div>

            <p className="text-muted-foreground mb-6">{pub.description}</p>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Publication
                </a>
              </Button>
              <span className="text-sm text-muted-foreground">
                DOI: {pub.doi}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Publications;
