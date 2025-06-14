import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center gap-4 text-white my-6">
      <div className="h-[2px] w-60 bg-gradient-to-l from-white/60 to-white/0" />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="h-[2px] w-60 bg-gradient-to-r from-white/60 to-white/0" />
    </div>
  );
};

export default Header;
