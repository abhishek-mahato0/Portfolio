import React from "react";
import { motion } from "framer-motion";
import Button from "../Atoms/Button";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const CardV2 = ({
  title,
  description,
  image,
  url,
  gitUrl,
  techStack,
  id,
  mouseEnter,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  gitUrl: string;
  techStack: string[];
  id: number;
  mouseEnter: (id: number) => void;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.5 },
      }}
      className=" w-[98%] grid grid-cols-8 border-b-2 border-gray-600 cursor-pointer group"
      onMouseEnter={() => mouseEnter(id)}
    >
      <div className=" col-span-7 flex flex-col w-full gap-2 pb-4">
        <h1 className=" text-3xl font-bold">{title}</h1>
        <div className=" flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black bg-opacity-40 text-white text-sm tracking-wide p-1 rounded-md"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className=" w-full flex gap-2">
          <Button
            text="Live Demo"
            link={url}
            variant="secondary"
            icon={<MdOutlineLiveTv />}
          />
          <Button
            text="Github"
            link={gitUrl}
            variant="secondary"
            icon={<FaGithub />}
          />
        </div>
      </div>
      <h1 className=" text-gray-600 font-bold tracking-wider text-3xl">
        0{id}
      </h1>
    </motion.div>
  );
};

export default CardV2;
