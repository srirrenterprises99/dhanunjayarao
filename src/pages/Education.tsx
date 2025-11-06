import { SectionHeader } from "@/components/SectionHeader";
import { TimelineItem } from "@/components/TimelineItem";
import { education } from "@/data/portfolioData";

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Education"
        subtitle="Academic foundation and qualifications"
      />

      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.degree}
            organization={edu.institution}
            location={edu.location}
            duration={edu.duration}
            grade={edu.grade}
            details={edu.achievements}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
