import { personalProjects } from "@/data/Projects";
import React from "react";
import Card from "./Molecules/Card";
import { motion } from "framer-motion";
import { appearAnimate, appearInitial } from "@/AnimationConstants";

const PersonalProjects = () => {
  return (
    <div className="flex flex-col gap-10 w-screen h-screen px-10 bg-white text-black pt-20">
      <motion.h1
        whileInView={{ ...appearAnimate }}
        initial={{
          ...appearInitial,
        }}
        className=" text-[4rem] font-bold tracking-tight"
      >
        Personal Projects
      </motion.h1>
      <motion.div className=" grid grid-cols-3 h-full w-full gap-8">
        {personalProjects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.link}
            gitUrl={project.gitLink}
            techStack={project.techStack}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PersonalProjects;
