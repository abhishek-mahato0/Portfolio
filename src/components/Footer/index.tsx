"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GithubIcon, GmailIcon, LinkedinIcon } from "@/icons";
import { BiHeart } from "react-icons/bi";
import { contact } from "../Contact/ContactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full relative text-gray-400 px-6 pt-20 pb-5 mt-20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
      <div className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Abhishek Mahato
          </h3>
          <p className="text-slate-400 mb-4">
            Full Stack Developer passionate about creating amazing web
            experiences
          </p>
          <p className="text-slate-400 text-sm">📍 Kathmandu, Nepal</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#about"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4 mb-4 items-center">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2rounded-full transition-colors duration-200"
            >
              <GithubIcon />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-200"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="p-2 rounded-full transition-colors duration-200"
            >
              <GmailIcon />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            Let&apos;s build something amazing together!
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t border-slate-800 pt-8 text-center"
      >
        <p className="text-slate-400 flex items-center justify-center">
          © {currentYear} Abhishek Mahato. Made with{" "}
          <BiHeart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" />
          and lots of coffee ☕
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
