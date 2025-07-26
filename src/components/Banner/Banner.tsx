"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import SocialLinks from "./SocialLinks";
import FloatingIcons from "../FloatingIcons";
import TechStack from "../TechStacks";
import { Oswald } from "next/font/google";
import { motion } from "motion/react";
import { TypewriterText } from "@/animations/TypeWriter";
import { getFormattedExperience } from "../Experience";
import Link from "next/link";

const kaiseiTokumin = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaisei",
});

const Banner = () => {
  return (
    <div
      className={`flex relative overflow-hidden w-full flex-col items-center justify-between min-h-[100vh] text-gray-100 p-8 gap-4 ${kaiseiTokumin.variable}`}
    >
      <FloatingIcons />

      <motion.div className="flex flex-col items-center justify-center gap-4 mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glowing ring effect */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 blur-xl opacity-30 animate-pulse z-0"></div>

          {/* Profile Image */}
          <img
            src="profile-2.png"
            alt="Abhishek Mahato"
            loading="lazy"
            className="relative w-[350px] h-[350px] object-cover rounded-full shadow-2xl border-4 border-white dark:border-slate-900 z-10"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400 text-base md:text-lg">
            <TypewriterText
              texts={[
                "Full Stack Developer",
                "Tech Enthusiast",
                `${getFormattedExperience()} of experience`,
                "AI/ML Developer",
                "GenAI Developer",
              ]}
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
            <div className="flex flex-wrap gap-4 mt-6">
              {/* ✅ Primary Button – Gradient Background */}
              <Link
                href="/Abhishek-Mahato-resume.pdf"
                target="_blank"
                className="flex items-center justify-center w-[230px] px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-gray-300 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg font-semibold"
              >
                View Resume
              </Link>

              {/* ✅ Secondary Button – Gradient Border */}
              <div className="rounded-full p-[1px] bg-gradient-to-r from-blue-500 to-purple-500 w-[230px] flex items-center justify-center hover:scale-105">
                <Link
                  href="/Abhishek-Mahato-resume.pdf"
                  download
                  className="flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r from-black to-gray-900  text-gray-300 rounded-full text-lg font-semibold"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
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
