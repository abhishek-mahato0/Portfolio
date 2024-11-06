import React from "react";

const EducationCard = ({
  id,
  title,
  college,
  location,
  date,
}: {
  id: number;
  title: string;
  location: string;
  college: string;
  date: string;
}) => {
  return (
    <div className=" flex w-full items-start justify-between gap-10">
      <h1 className=" text-gray-600 font-bold tracking-wider text-3xl">
        0{id}
      </h1>
      <div className=" w-full flex flex-col gap-2 tracking-wide">
        <div className=" flex w-full items-center justify-start gap-10">
          <h1 className=" text-3xl font-bold">{title}</h1>
        </div>
        <div className=" flex flex-col gap-0">
          <p className="text-gray-600 font-bold">
            {college} -{location} ( {date})
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
