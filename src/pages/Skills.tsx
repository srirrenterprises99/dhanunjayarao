import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { skills } from "@/data/portfolioData";

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Technical Skills"
        subtitle="Comprehensive expertise across automation and engineering domains"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard category="Programming Languages" skills={skills.programming} />
        <SkillCard category="Hardware & Equipment" skills={skills.hardware} />
        <SkillCard category="Software Tools" skills={skills.software} />
        <SkillCard category="Domain Expertise" skills={skills.domains} />
      </div>
    </div>
  );
};

export default Skills;
