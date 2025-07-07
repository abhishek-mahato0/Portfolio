"use client";
import React from "react";
import Header from "../Header";
import { personalProjects } from "@/data/projects";
import ProjectCard from "./Card";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div
      className="w-full flex flex-col gap-4 relative pt-20 mt-40 lg:px-0 px-2"
      id="projects"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      {/* Spotlight */}
      <motion.div
        className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <Header title="Projects" />
      <p className="text-center text-gray-400 w-full lg:w-[70%] mx-auto text-base md:text-lg">
        A collection of full-stack projects showcasing practical solutions,
        real-world use cases, and clean, scalable code using modern web
        technologies.
      </p>
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 items-center justify-center mt-4">
        {personalProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.techStack}
            image={project.image}
            link={project.link}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
