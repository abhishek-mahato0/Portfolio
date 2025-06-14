/* eslint-disable @next/next/no-img-element */
import React from "react";
import SocialLinks from "./SocialLinks";
import { Button } from "../Button";
import FloatingIcons from "../FloatingIcons";
import TechStack from "../TechStacks";

const Banner = () => {
  return (
    <div className="flex relative overflow-hidden flex-col items-center justify-between h-[100vh] text-white p-8 gap-4">
      <FloatingIcons />
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <img
          src="banner.jpg"
          alt="Banner"
          className="w-[300px] h-[300px] object-cover rounded-full shadow-lg"
        />
        <span className="text-gray-400 text-base md:text-lg">
          FullStack Web Developer
        </span>
        <h1 className="text-6xl md:text-7xl font-bold mt-4 text-center">
          Abhishek <span className="font-kaisei text-gray-400">Mahato</span>
        </h1>
        <p className="text-center text-gray-400 mt-4 text-lg md:text-xl max-w-2xl">
          Not just pushing pixels – pushing <span className="">clean code</span>{" "}
          , passion, and purpose into every project.
        </p>
        <div className="flex gap-4 mt-4">
          <SocialLinks />
        </div>
        <div className="flex gap-4 mt-8">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white text-xl border-neutral-200 dark:border-slate-800"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="mb-10">
        <TechStack />
      </div>
    </div>
  );
};

export default Banner;
