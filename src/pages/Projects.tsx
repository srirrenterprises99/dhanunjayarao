import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolioData";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader
        title="Projects"
        subtitle="Innovative solutions in automation and battery systems"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            role={project.role}
            technologies={project.technologies}
            achievements={project.achievements}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
