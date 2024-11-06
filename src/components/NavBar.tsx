import { GithubIcon, LinkedinIcon } from "@/icons";
import React from "react";
const info = [
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/abhishek-mahato-012272239/",
  },
  {
    icon: GithubIcon,
    link: "https://github.com/abhishek-mahato0",
  },
];
const NavInfo = () => {
  return (
    <div className=" flex gap-2">
      {info.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="flex items-center gap-1"
        >
          <item.icon />
        </a>
      ))}
    </div>
  );
};

const NavBar = () => {
  return (
    <div className=" w-full flex h-20 text-xl lg:text-lg sm:text-sm items-center justify-between z-30 px-10 bg-transparent">
      <p className=" font-bold">A.M.</p>
      <div className=" flex items-end gap-6">
        <NavInfo />
        {/* <p>Menu</p> */}
      </div>
    </div>
  );
};

export default NavBar;
