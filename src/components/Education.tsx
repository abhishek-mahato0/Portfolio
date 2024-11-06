import { experience } from "@/data/Experience";
import React from "react";
import ExperienceCard from "./Molecules/ExperienceCard";
import EducationCard from "./Molecules/EducationCard";
import { education } from "@/data/Eduction";

const Education = () => {
  return (
    <div className="flex flex-col gap-10 w-screen px-10 bg-white text-black pt-20 pb-20">
      <h1 className=" text-[4rem] font-bold tracking-tight">Education</h1>
      <div className="flex w-full items-center justify-center ">
        <div className=" lg:w-[50%] md:[70%] w-full gap-8 flex flex-col">
          {education.map((exp, index) => (
            <EducationCard
              key={index}
              id={index + 1}
              title={exp.title}
              date={exp.year}
              college={exp.college}
              location={exp.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
