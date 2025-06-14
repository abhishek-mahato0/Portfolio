import React from "react";
import Header from "../Header";
import { personalProjects } from "@/data/projects";
import ProjectCard from "./Card";

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-4 relative pt-20 mt-40">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      {/* Spotlight */}
      <div className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0" />
      <Header title="Projects" />
      <div className=" grid grid-cols-2 gap-10 items-center justify-center">
        {personalProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.techStack}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
