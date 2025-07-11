"use client";
import React, { useRef } from "react";
import Header from "../Header";
import { personalProjects } from "@/data/projects";
import ProjectCard from "./Card";
import { motion, useInView } from "motion/react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div
      className="w-ful flex flex-col gap-4 relative pt-20 mt-40 lg:px-0 px-2"
      id="projects"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      {/* Spotlight */}
      <motion.div
        ref={ref}
        className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <Header isInView={isInView} title="Projects" />
      <motion.p className="text-center text-gray-400 w-full lg:w-[70%] mx-auto text-base md:text-lg">
        A collection of full-stack projects showcasing practical solutions,
        real-world use cases, and clean, scalable code using modern web
        technologies.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full items-center justify-center mt-4"
      >
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
      </motion.div>
    </div>
  );
};

export default Projects;
