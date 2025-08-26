import React from "react";
import Header from "../Header";
import { cn } from "@/utils";
import CarrerTImeline from "./CarrerTImeline";
import { getFormattedExperience } from "@/utils/getExperience";
import MotionWrapper from "../AnimateComponent";
import { skills } from "@/utils/common";

const Experience = () => {
  return (
    <div className="w-full relative mt-10 pt-20 min-h-screen" id="skills&exp">
      {/* Fading white top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      {/* Spotlight */}
      <div className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0" />

      <MotionWrapper
        className="relative z-10 flex flex-col items-center justify-between gap-4"
        id="experience"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header animation */}
        <MotionWrapper
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Header isInView={true} title="Skills & Experience" />
        </MotionWrapper>

        {/* Paragraph fade-in */}
        <MotionWrapper
          className="text-center text-gray-400 text-lg md:text-xl lg:w-[70%] w-full px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {getFormattedExperience()} of experience building full-stack web
          applications with a focus on performance, usability, and modern tech
          stacks.
        </MotionWrapper>

        {/* Skills Grid */}
        <MotionWrapper
          className="relative text-center text-gray-400 p-10 bg-gray-900 mb-4 rounded-lg mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div
            className={cn(
              "absolute inset-0 z-0 opacity-45",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />

          {/* Skills with stagger animation */}
          <MotionWrapper
            className="relative z-10 flex flex-wrap justify-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <MotionWrapper
                key={index}
                className="inline-block px-4 py-2 bg-black rounded-lg text-base mr-2 mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {skill}
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </MotionWrapper>

        {/* Career Timeline animation */}
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <CarrerTImeline />
        </MotionWrapper>
      </MotionWrapper>
    </div>
  );
};

export default Experience;
