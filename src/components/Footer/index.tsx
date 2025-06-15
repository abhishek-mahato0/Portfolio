import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full relative text-gray-400 px-6 pt-20 pb-5 mt-20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
      <div className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Left - Branding */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-lg font-semibold">Abhishek Mahato</h3>
          <p>FullStack Web Developer</p>
          <p className="text-xs">Based in Kathmandu, Nepal</p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-medium">Quick Links</h4>
          <Link href="#home" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-white transition">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Right - Socials */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-medium">Connect</h4>
          <a
            href="https://github.com/abhishek-mahato0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abhishek-mahato0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Abhishek Mahato. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
