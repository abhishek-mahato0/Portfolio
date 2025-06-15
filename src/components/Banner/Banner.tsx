"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import SocialLinks from "./SocialLinks";
import { Button } from "../Button";
import FloatingIcons from "../FloatingIcons";
import TechStack from "../TechStacks";
import { Oswald } from "next/font/google";
import { ColourfulText } from "@/animations/Colorful";
import { motion } from "motion/react";

const kaiseiTokumin = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaisei",
});

const Banner = () => {
  return (
    <div
      id="home"
      className={`flex relative overflow-hidden w-full flex-col items-center justify-between h-[100vh] text-gray-100 p-8 gap-4 ${kaiseiTokumin.variable}`}
    >
      <FloatingIcons />
      {/* {!loaded && (
        <div className="absolute w-full h-full inset-0 backdrop-blur-lg z-40 transition duration-1000 ease-out">
          <div className="flex items-center justify-center h-full">
            <motion.img
              initial={{ scale: 2, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="/profile.jpg"
              alt="Loading"
              className="w-[400px] h-[400px] object-cover shadow-lg bg-gray-800 border-4 border-white dark:border-slate-900"
            />
          </div>
        </div>
      )} */}

      <motion.div className="flex flex-col items-center justify-center gap-4 mt-8">
        <motion.img
          src="profile.jpg"
          alt="Banner"
          className="w-[300px] h-[300px] object-cover rounded-full shadow-lg bg-gray-800 border-4 border-white dark:border-slate-900"
          initial={{ scale: 2, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileInView={{ opacity: 1 }}
        />
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400 text-base md:text-lg">
            FullStack <ColourfulText text="Web Developer" />
          </span>
          <h1 className="text-6xl font-kaisei md:text-7xl font-bold mt-4 text-center">
            <span className="">Abhishek</span>{" "}
            <span className="font-kaisei">Mahato</span>
          </h1>
          <p className="text-center text-gray-400 mt-4 text-lg md:text-xl max-w-2xl">
            Not just pushing pixels – pushing{" "}
            <span className="">clean code</span> , passion, and purpose into
            every project.
          </p>
          <div className="flex gap-4 mt-4">
            <SocialLinks />
          </div>
          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => window.open("#contact", "_self")}
              borderRadius="1.75rem"
              className="bg-white cursor-pointer hover:scale-105 dark:bg-slate-900 text-black dark:text-white text-xl border-neutral-200 dark:border-slate-800"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.3, ease: "easeInOut" }}
      >
        <TechStack />
      </motion.div>
    </div>
  );
};

export default Banner;
