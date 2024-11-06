import React from "react";

const ExperienceCard = ({
  id,
  title,
  description,
  company,
  tech,
  date,
}: {
  id: number;
  title: string;
  description: string;
  company: string;
  tech: string[];
  date: string;
}) => {
  return (
    <div className=" flex w-full items-start justify-between gap-10">
      <h1 className=" text-gray-600 font-bold tracking-wider text-3xl">
        0{id}
      </h1>
      <div className=" w-full flex flex-col gap-2 tracking-wide">
        <div className=" flex flex-col gap-0">
          <p className="text-gray-600 font-bold">
            {company} ( {date} )
          </p>
        </div>
        <div className=" flex w-full items-center justify-start gap-10">
          <h1 className=" text-3xl font-bold">{title}</h1>
        </div>
        <div className=" w-full flex flex-col gap-2 text-gray-600">
          {description}
        </div>
        <div className=" w-full flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <span
              key={index}
              className=" bg-black bg-opacity-40 text-white text-sm tracking-wide p-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
