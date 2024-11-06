"use client";
import { motion } from "framer-motion";

// Animation for each letter
const letterVariants = {
  initial: {
    backgroundColor: "black",
    color: "black",
    y: 0, // Initial position for bounce
  },
  animate: (index: number) => ({
    backgroundColor: "white",
    color: "black",
    y: [0, -10, 0], // Bouncing effects
    transition: {
      backgroundColor: { duration: index === 0 ? 2 : 0.5 }, // Longer delay for the first letter
      color: { delay: index === 0 ? 0.2 : 0 }, // Slight color delay for blink
      y: { duration: 0.5, ease: "easeInOut", repeat: 1, repeatType: "mirror" }, // Bounce effect
    },
  }),
};

// Container animation to stagger the children (letters)
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of each letter
      delayChildren: 2, // Add a delay for the first letter's animation
    },
  },
};

export default function LoadingText() {
  const text = "Loading..";

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="overflow-visible flex"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="text-2xl p-2"
          custom={index}
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
