import { SectionHeader } from "@/components/SectionHeader";
import { TimelineItem } from "@/components/TimelineItem";
import { experience } from "@/data/portfolioData";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Professional Experience"
        subtitle="My journey in industrial automation and research"
      />

      <div className="max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.title}
            organization={exp.company}
            location={exp.location}
            duration={exp.duration}
            type={exp.type}
            details={exp.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
