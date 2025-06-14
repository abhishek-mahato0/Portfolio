import React from "react";
import Header from "../Header";

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
    title: "Software Developer",
    company: "Innovate Tech",
    role: "Fullstack developer",
    location: "Baluwatar, Kathmandu, Nepal",
    date: "5 July, 2024 - present",
    description:
      "Built a resource-sharing system for easy access to educational materials and developed an Ebook module for collaborative editing and submission. Enhanced user experience with interactive scribble, notifications, and real-time chat, focusing on a seamless, user-friendly interface.",
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
    title: "Frontend Trainee",
    company: "Naxa Pvt Ltd",
    role: "React frontend developer trainee",
    location: "Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal",
    date: "30 May 2023, 2023- 28 June 2024",
    description:
      "Built a disaster prevention website with predictive analytics and contributed to a municipal tracking system, focusing on UI/UX, data management, and system reliability through collaborative development and testing. ",
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
    title: "Frontend Intern",
    company: "Naxa Pvt Ltd",
    role: "React frontend developer intern",
    location: "Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal",
    date: "5 Sep, 2022 - 30 May, 2023",
    description:
      "Built a disaster prevention website with predictive analytics and contributed to a municipal tracking system, focusing on UI/UX, data management, and system reliability through collaborative development and testing. ",
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

const Experience = () => {
  return (
    <div className="w-full relative mt-10 pt-20">
      {/* Fading white top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      {/* Spotlight */}
      <div className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center justify-between gap-4">
        <Header title="Experience" />

        <div className="text-center text-gray-400 p-10 bg-gray-900 mb-4 rounded-lg">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block px-4 py-2 bg-black rounded-lg text-base mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>

        {experience.map((exp, index) => (
          <div
            key={index}
            className="px-4 py-6 shadow-md grid grid-cols-3 border-b border-b-gray-700 w-full"
          >
            <p>{exp.company}</p>
            <p className="text-center">{exp.title}</p>
            <p className="text-right">{exp.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
