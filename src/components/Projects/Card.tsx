/* eslint-disable @next/next/no-img-element */
// components/ProjectCard.jsx
import Link from "next/link";
import React from "react";
import { FaGithub, FaRegCirclePlay } from "react-icons/fa6";

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  link,
}: {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-300"
      />
      <div className="p-4 flex flex-col justify-between h-[220px]">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {description}
          </p>
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
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm relative flex px-4 py-2 rounded-lg items-center justify-center border border-slate-800 bg-slate-900/[0.8] antialiased backdrop-blur-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaRegCirclePlay className="mr-2" /> View Project
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm relative flex px-4 py-2 rounded-lg items-center justify-center border border-slate-800 bg-slate-900/[0.8] antialiased backdrop-blur-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaGithub className="mr-2" /> View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
