import Image from "next/image";
import React from "react";

const links = [
  { id: 1, name: "Projects", url: "#projects" },
  { id: 2, name: "About", url: "#about" },
  { id: 3, name: "Experience", url: "#experience" },
  { id: 4, name: "Contact", url: "#contact" },
];

const Navbar = () => {
  return (
    <div className="w-full h-[60px] sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-gray-700 flex justify-between items-center text-white">
      <div className="w-[1300px] mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold tracking-wide relative gap-1 flex text-gray-400">
          <span className="z-10">A</span>
          <Image
            src="/profile.jpg"
            alt="Logo"
            className="w-8 h-8 rounded-full absolute opacity-70 z-0 left-[10px] top-[0px] bg-transparent"
            height={40}
            width={40}
          />
          <span className="ml-4 z-10">M</span>
        </h1>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
