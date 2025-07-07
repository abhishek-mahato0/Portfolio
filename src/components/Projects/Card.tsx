/* eslint-disable @next/next/no-img-element */
// components/ProjectCard.jsx
import Link from "next/link";
import React from "react";
import { FaGithub, FaRegCirclePlay } from "react-icons/fa6";
import { motion } from "motion/react";

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  link,
  gitLink,
}: {
  title: string;
  description: string[];
  tech: string[];
  image: string;
  link: string;
  gitLink?: string;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={image}
        alt="project preview"
        className="w-full h-[300px] object-cover rounded-t-2xl"
      />

      <div className="p-4 flex flex-col justify-between lg:h-[350px] h-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <div className="flex flex-col gap-1">
            {description.map((desc) => (
              <p
                key={desc}
                className="text-sm text-gray-600 dark:text-gray-400 mt-2"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4 align-items-center">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm relative flex px-4 py-2 rounded-lg items-center justify-center border border-slate-800 bg-slate-900/[0.8] antialiased backdrop-blur-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FaRegCirclePlay className="mr-2" /> View Project
            </Link>
          )}
          {gitLink && (
            <Link
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm relative flex px-4 py-2 rounded-lg items-center justify-center border border-slate-800 bg-slate-900/[0.8] antialiased backdrop-blur-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FaGithub className="mr-2" /> View Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
