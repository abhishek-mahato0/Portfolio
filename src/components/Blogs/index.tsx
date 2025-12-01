import React from "react";
import Header from "../Header";
import { cn } from "@/utils";
import { getFormattedExperience } from "@/utils/getExperience";
import MotionWrapper from "../AnimateComponent";
import { skills } from "@/utils/common";
import { motion } from "motion/react";
import { blogs } from "@/data/blogs";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="w-full relative mt-10 pt-20 min-h-screen" id="blogs">
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
          <Header isInView={true} title="Blogs" />
          <p className="text-center text-gray-400 w-full lg:w-[70%] mx-auto text-base md:text-lg">
            A collection of my technical blogs and articles where I share my
            knowledge on web development, programming languages, and industry
            best practices.
          </p>
        </MotionWrapper>
        {blogs.map((blog, index) => (
          <MotionWrapper
            key={blog.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 * index }}
            className={cn(
              "w-full lg:w-[70%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-300",
              "flex flex-col md:flex-row md:justify-between md:items-center gap-2"
            )}
          >
            <Link href={blog.url} target="_blank" rel="noopener noreferrer">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mt-2">{blog.summary}</p>
              </div>
            </Link>
          </MotionWrapper>
        ))}
      </MotionWrapper>
    </div>
  );
};

export default Blogs;
