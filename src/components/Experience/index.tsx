"use client";
import React from "react";
import Header from "../Header";
import { cn } from "@/utils";
import { motion } from "motion/react";
import CarrerTImeline from "./CarrerTImeline";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.Js",
  "Next.Js",
  "Redux",
  "Redux Toolkit",
  "Zustand",
  "React Query",
  "Tailwind CSS",
  "Bootstrap",
  "ShadCn",
  "Nodejs",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "RESTful APIs",
  "GraphQL",
  "WebSockets",
  "Git",
  "GitHub",
  "Gitlab",
  "Cypress",
  "Jest",
  "Playwright",
  "DotNet",
  "Java",
  "Python",
  "C#",
];

export const experience = [
  {
    id: 0,
    title: "Software Developer",
    company: "Innovate Tech",
    role: "Fullstack developer",
    location: "Baluwatar, Kathmandu, Nepal",
    date: "5 July, 2024 - present",
    description: [
      "Spearheaded the end-to-end development and implementation of dynamic, high-performance web applications, contributing across database design, backend API development (Node.js), and intuitive user interfaces (React.js, TypeScript).",
      "Engineered and optimized new core UI features, establishing a library of reusable, scalable components that accelerated future development cycles.",
      "Designed and integrated robust RESTful APIs, ensuring seamless data flow, optimized data fetching strategies, and strong backend-frontend communication.",
      "Actively contributed to all phases of the software development life cycle, from conceptualization and design to deployment and performance monitoring, in an agile environment.",
    ],
    tech: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "React Query",
      "RTK Query",
      "Next.Js",
      "TailwindCSS",
      "BootStrap",
      "Socket.io",
    ],
  },
  {
    id: 1,
    title: "Frontend Developer",
    company: "Naxa Pvt Ltd",
    role: "React frontend developer trainee",
    location: "Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal",
    date: "5 Sep 2023 - 28 June 2024",
    description: [
      "Developed and meticulously maintained highly responsive and interactive UIs for cutting-edge geospatial web applications, enhancing user engagement and data visualization.",
      "Optimized complex frontend state management and data fetching strategies using React Query and Redux Toolkit, significantly improving application responsiveness and reducing load times by 10%.",
      "Proficiently managed version control using Git/GitHub, actively collaborating within an Agile team to ensure stable releases and streamline development workflows.",
    ],
    tech: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
      "TypeScript",
      "ShadCn",
      "TailwindCSS",
      "WEB GIS",
      "OpenLayers",
      "MaplibreGL",
      "Jest",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Naxa Pvt Ltd",
    role: "React frontend developer intern",
    location: "Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal",
    date: "5 June, 2022 - 5 Sep, 2023",
    description: [
      "Actively contributed to the development of responsive React.js UIs, implementing new features and effectively managing application state with Redux to ensure data consistency and responsiveness.",
      "Collaborated closely with senior developers on critical front-end tasks, utilizing Git/GitHub for streamlined code integration and version control, contributing to timely project milestones.",
    ],
    tech: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
      "TypeScript",
      "ShadCn",
      "TailwindCSS",
      "WEB GIS",
      "OpenLayers",
      "MaplibreGL",
      "Jest",
    ],
  },
];

function getFormattedExperience() {
  const startDate = new Date("2022-09-05");
  const now = new Date();
  const diffInMs = Number(now) - Number(startDate);
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;

  const exactYears = diffInMs / msInYear;
  const fullYears = Math.floor(exactYears);
  const decimal = (exactYears - fullYears).toFixed(2).split(".")[1]; // Get only the first 2 digits after decimal

  const firstDecimalDigit = parseInt(decimal[0], 10); // First digit after '.'

  if (firstDecimalDigit < 5) {
    return `${fullYears}+ years`;
  } else {
    return `${fullYears + 1} years`;
  }
}

const Experience = () => {
  return (
    <motion.div className="w-full relative mt-10 pt-20 min-h-screen">
      {/* Fading white top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      {/* Spotlight */}
      <div className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-between gap-4"
        id="experience"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Header title="Experience" />
        <p className="text-center text-gray-400 text-lg md:text-xl lg:w-[70%] w-full">
        {getFormattedExperience()} of experience building full-stack web applications with a
          focus on performance, usability, and modern tech stacks.
        </p>

        <div className="relative text-center text-gray-400 p-10 bg-gray-900 mb-4 rounded-lg mt-4">
          <div
            className={cn(
              "absolute inset-0 z-0 opacity-45",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block px-4 py-2 bg-black rounded-lg text-base mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
        <CarrerTImeline />
      </motion.div>
    </motion.div>
  );
};

export default Experience;
