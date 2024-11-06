import React from "react";
import ParallaxText from "./Atoms/ParallelText";
import { tech } from "@/data/Tech";
import { useScroll, useTransform, motion } from "framer-motion";

const TechStack = () => {
  return (
    <div className=" bg-black flex flex-col w-screen h-[50vh] text-white px-10 pt-20 gap-10">
      <h1 className=" text-[4rem] font-bold tracking-tight">Technologies</h1>
      <div className=" flex flex-wrap gap-10 items-center justify-between">
        {tech.map((t, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <t.icon
                key={index}
                className={`w-12 h-12 animate-bounce delay-${
                  index % 2 == 0 ? 100 : 200
                }`}
                width={35}
                height={35}
              />
              <p className=" text-xs">{t.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
