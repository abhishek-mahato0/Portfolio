import React from "react";

const Button = ({
  text,
  link,
  className,
  icon,
  variant,
}: {
  text: string;
  link: string;
  className?: string;
  icon?: any;
  variant?: string;
}) => {
  function getVariant() {
    switch (variant) {
      case "primary":
        return "text-white bg-black";
      case "secondary":
        return "text-black bg-white";
      case "outline":
        return "text-black border-[1px] border-black";
      default:
        return "";
    }
  }
  return (
    <a
      href={link}
      target="_blank"
      className={`${className} flex items-center justify-center px-3 py-2 ${getVariant()} rounded-md border-2 border-solid border-gray-900 transition-opacity duration-300 hover:opacity-80 text-sm`}
      style={{
        borderColor: "rgb(34, 34, 34)",
      }}
    >
      {text}
      {icon && <span className="ml-1">{icon}</span>}
    </a>
  );
};

export default Button;
