"use client";
import { motion } from "motion/react";
import React from "react";

const Header = ({
  title,
  isInView = true,
}: {
  title: string;
  isInView?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center gap-4 text-white mt-6 mb-2"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </motion.div>
  );
};

export default Header;
