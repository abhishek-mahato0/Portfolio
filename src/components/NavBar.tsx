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
    <div className=" w-full sticky top-0 flex h-20  text-orange-600 text-xl border-b-2 border-b-[#292929] items-center justify-between px-5">
      <p>Abhishek Mahato</p>
      <NavInfo />
    </div>
  );
};

export default NavBar;
