"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const links = [
  { id: 1, name: "Projects", url: "#projects" },
  { id: 3, name: "Experience", url: "#experience" },
  { id: 4, name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="w-full sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-gray-700 text-white"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold tracking-wide relative gap-1 flex items-center text-gray-400"
        >
          <span className="z-10">A</span>
          <Image
            src="/profile.jpg"
            alt="Logo"
            className="w-8 h-8 rounded-full absolute opacity-70 z-0 left-[10px] top-[0px] bg-transparent"
            height={40}
            width={40}
          />
          <span className="ml-4 z-10">M</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white"
          >
            {isOpen ? <CgClose size={24} /> : <BiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <AnimatePresence>
          <motion.div
            className="md:hidden px-6 py-4 flex flex-col gap-4 bg-black/80 border-t border-gray-700 absolute left-0 w-full"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.nav>
  );
};

export default Navbar;
