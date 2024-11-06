import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalProjects } from "@/data/Projects";
import CardV2 from "./Molecules/CardV2";

const PersonalProjectsV2 = () => {
  const [hoveredImg, setHoveredImg] = useState<string>("");
  const handleMouseEnter = (id: number) => {
    const filt = personalProjects.filter((ele) => ele.id == id);
    console.log(filt);

    setHoveredImg(filt?.[0].image);
  };
  console.log(hoveredImg);
  return (
    <div className="flex flex-col gap-10 w-screen h-screen px-10 bg-black text-white pt-20">
      <motion.h1 className=" text-[4rem] font-bold tracking-tight">
        Personal Projects
      </motion.h1>
      <motion.div className="flex flex-col h-full w-full gap-8 relative">
        {personalProjects.map((project, index) => (
          <CardV2
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.link}
            gitUrl={project.gitLink}
            techStack={project.techStack}
            mouseEnter={() => {}}
          />
        ))}
        <AnimatePresence>
          {hoveredImg && (
            <motion.img
              src={hoveredImg}
              className=" absolute top-0 right-[20%] h-[18rem] w-[12.5rem]"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PersonalProjectsV2;
