import Image from "next/image";
import React from "react";
import Button from "../Atoms/Button";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  title,
  description,
  image,
  url,
  gitUrl,
  techStack,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  gitUrl: string;
  techStack: string[];
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-[65vh] relative overflow-hidden group"
    >
      <AnimatePresence>
        {isHovered && (
          <div className="w-full flex flex-wrap items-center justify-start gap-y-2 gap-x-4 p-4 absolute top-0 left-0 z-20">
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
        )}
      </AnimatePresence>

      <img
        src={image}
        className="w-full h-full"
        width={100}
        height={100}
        alt={title}
      />

      <div className="w-full h-full bg-black absolute top-0 left-0 transition-opacity duration-300 bg-opacity-10 group-hover:bg-opacity-70 flex flex-col items-start justify-end z-10">
        <h1 className="text-white bg-black p-4 bg-opacity-70 group-hover:bg-opacity-0 group-hover:px-4 group-hover:pb-0 w-full text-2xl font-bold z-40">
          {title}
        </h1>
        {isHovered && (
          <AnimatePresence>
            <div className=" px-4 pb-4 w-full">
              {isHovered && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white tracking-wide"
                >
                  {description}
                </motion.p>
              )}
            </div>
          </AnimatePresence>
        )}
      </div>

      <AnimatePresence>
        {isHovered && (
          <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30 text-white font-bold">
            {gitUrl === "" ? null : (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View Code
              </motion.a>
            )}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Live Demo
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
