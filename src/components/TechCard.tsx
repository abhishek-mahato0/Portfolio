import { tech } from "@/data/Tech";
import React from "react";

const TechCard = () => {
  return (
    <div className=" w-full gap-4 flex md:items-center justify-center md:flex-row flex-col">
      <p className=" text-nowrap text-xl">Technologies I Know :</p>
      <div className="w-full flex flex-wrap gap-5">
        {tech.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <item.icon width={40} height={40} />
            <p className=" text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
