import { experience } from "@/data/Experience";
import React from "react";
import ExperienceCard from "./Molecules/ExperienceCard";

const Experience = () => {
  return (
    <div className="flex flex-col gap-10 w-screen px-10 bg-white text-black pt-20 pb-20">
      <h1 className=" text-[4rem] font-bold tracking-tight">Experience</h1>
      <div className="flex w-full items-center justify-center ">
        <div className=" lg:w-[50%] md:[70%] w-full gap-8 flex flex-col">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              id={index + 1}
              title={exp.title}
              description={exp.description}
              company={exp.company}
              tech={exp.tech}
              date={exp.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
