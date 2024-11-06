import { companyProjects } from "@/data/Projects";
import React from "react";
import CardV2 from "./Molecules/CardV2";

const CompanyProjects = () => {
  return (
    <div className="flex flex-col gap-10 w-screen px-10 pb-10 bg-black text-white pt-20">
      <h1 className=" text-[4rem] font-bold tracking-tight">
        Company Projects
      </h1>
      <div className=" grid grid-cols-1 h-full w-full gap-8">
        {companyProjects.map((project, index) => (
          <CardV2
            id={project.id}
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.link}
            gitUrl=""
            techStack={project.techStack}
            mouseEnter={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyProjects;
