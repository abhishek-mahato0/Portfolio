"use client";
import React from "react";
import {
  IconExpress,
  IconJavascript,
  IconMongodb,
  IconNextjs,
  IconNodejs,
  IconPostgresql,
  IconTailwindcss,
  IconTypescript,
  ReactIcon,
} from "@/icons";
import { InfiniteMovingCards } from "@/animations/Scroll";

export const tech = [
  {
    name: "JavaScript",
    icon: IconJavascript,
  },
  {
    name: "TypeScript",
    icon: IconTypescript,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: IconNextjs,
  },
  {
    name: "Tailwind CSS",
    icon: IconTailwindcss,
  },
  {
    name: "Node.js",
    icon: IconNodejs,
  },
  {
    name: "Express.js",
    icon: IconExpress,
  },
  {
    name: "MongoDB",
    icon: IconMongodb,
  },
  {
    name: "PostgreSQL",
    icon: IconPostgresql,
  },
];

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <InfiniteMovingCards items={tech} />
    </div>
  );
};

export default TechStack;
