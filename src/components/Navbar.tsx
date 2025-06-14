import React from "react";

const links = [
  { id: 1, name: "Projects", url: "/projects" },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Experience",
    url: "/experience",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className=" w-[100%] h-[50px] flex justify-between items-center text-white px-4 py-2 border-b-2 border-gray-800">
      <h1 className="text-2xl">AM</h1>
      <div className="flex gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
