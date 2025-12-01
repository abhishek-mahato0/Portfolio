"use client";
import React, { useRef } from "react";
import Header from "../Header";
import { motion, useInView } from "motion/react";
import ProjectCard from "../Projects/Card";

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div
      className="w-ful flex flex-col gap-4 relative pt-20 mt-40 lg:px-0 px-2 h-full"
      id="packages"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

      {/* Spotlight */}
      <motion.div
        ref={ref}
        className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <Header isInView={isInView} title="Packages" />
      <motion.p className="text-center text-gray-400 w-full lg:w-[70%] mx-auto text-base md:text-lg">
        A collection of my open-source libraries and packages published on npm,
        showcasing my contributions to the developer community.
      </motion.p>
      <ProjectCard type="library" />
    </div>
  );
};

export default Packages;
