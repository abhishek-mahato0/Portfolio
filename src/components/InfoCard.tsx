import { Info } from "@/data/Info";
import React from "react";

const InfoCard = () => {
  return (
    <div className=" w-full flex flex-col gap-2">
      {Info.map((item, index) => (
        <div key={index} className=" w-full flex gap-1">
          <p className="text-xl">{item.title} : </p>
          <p className={`text-lg ${item?.isLink ? "cursor-pointer" : ""}`}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
