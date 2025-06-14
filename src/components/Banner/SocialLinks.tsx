import { GithubIcon, GmailIcon, LinkedinIcon } from "@/icons";
import React from "react";

const info = [
  {
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/abhishek-mahato-012272239/",
    border: "border-gray-400 border-r-1 pr-4",
  },
  {
    icon: <GithubIcon />,
    link: "https://github.com/abhishek-mahato0",
    border: "border-gray-400 border-r-1 pr-4",
  },
  {
    icon: <GmailIcon />,
    link: "mailto:abhishek.mahato98258@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-2">
      {info.map((item, index) => {
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 hover:text-white transition-colors duration-300 ${
              item.border ?? null
            } `}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
