import { tech } from "@/data/tech";
import React from "react";

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {tech?.map((item, index) => {
        // Only place icons around the edges, outside center 600x600px zone
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        const isInsideCenter = top > 30 && top < 70 && left > 30 && left < 70;

        if (isInsideCenter) return null; // Skip icons that would overlap main content

        const direction =
          Math.random() > 0.5 ? "float-vertical" : "float-horizontal";
        const delay = Math.random() * 4;

        return (
          <div
            key={index}
            className={`absolute blur-[1px] opacity-40 ${direction}`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              width: "40px",
              height: "40px",
            }}
          >
            <item.icon className="w-full h-full text-white" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
