"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import SocialLinks from "./SocialLinks";
import { Button } from "../Button";
import FloatingIcons from "../FloatingIcons";
import TechStack from "../TechStacks";
import { Oswald } from "next/font/google";
import { motion } from "motion/react";
import { TypewriterText } from "@/animations/TypeWriter";

const kaiseiTokumin = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaisei",
});

const Banner = () => {
  return (
    <div
      id="home"
      className={`flex relative overflow-hidden w-full flex-col items-center justify-between min-h-[100vh] text-gray-100 p-8 gap-4 ${kaiseiTokumin.variable}`}
    >
      <FloatingIcons />

      <motion.div className="flex flex-col items-center justify-center gap-4 mt-8">
        <motion.img
          src="profile-2.png"
          alt="Banner"
          className="w-[300px] h-[300px] object-cover rounded-full shadow-lg bg-gray-800 border-4 border-white dark:border-slate-900"
          initial={{ scale: 2, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1 }}
        />
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400 text-base md:text-lg">
            <TypewriterText
              texts={["Full Stack Developer", "Tech Enthusiast"]}
            />
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            className="text-6xl font-kaisei md:text-7xl font-bold mt-4 text-center"
          >
            <span className="">Abhishek</span>{" "}
            <span className="font-kaisei">Mahato</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-center text-gray-400 mt-4 text-lg md:text-xl max-w-2xl"
          >
            Not just pushing pixels – pushing{" "}
            <span className="">clean code</span> , passion, and purpose into
            every project.
          </motion.p>
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
