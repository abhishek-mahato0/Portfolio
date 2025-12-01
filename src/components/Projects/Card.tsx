import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import { personalProjects } from "@/data/projects";
import Image from "next/image";
import { npmPackages } from "@/data/library";

function getBentoSpanClass(index: number, totalItems: number): string {
  const spanPairs = [
    ["col-span-7", "col-span-7"],
    ["col-span-6", "col-span-8"],
    ["col-span-9", "col-span-5"],
  ];

  const pair = spanPairs[Math.floor(index / 2) % spanPairs.length];
  const colSpan = pair[index % 2];

  const isLastFour = index >= totalItems - 4;
  const heightClasses = [
    "max-h-[390px]",
    "max-h-[450px]",
    "max-h-[420px]",
    "max-h-[350px]",
  ];

  const heightClass = isLastFour
    ? heightClasses[index % heightClasses.length]
    : "max-h-[350px]";

  return `${colSpan} ${heightClass}`;
}

export default function ProjectCard({ type }: { type: string }) {
  const [isMobile, setIsMobile] = useState(false);
  const options = type === "project" ? personalProjects : npmPackages;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust this breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? (
    <div className="flex flex-col gap-6 mt-6">
      {options?.map((item, i) => (
        <div key={i} className="w-full rounded-xl bg-zinc-900 p-4 shadow-md">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
            width={400}
            height={300}
            priority
          />
          <h3 className="text-white text-lg font-bold">{item.title}</h3>
          <p className="text-zinc-300 text-sm mt-1">
            {item.description?.join(" ")}
          </p>
          <div className="mt-2 text-sm text-zinc-400">
            <p className="mt-1">
              <strong>Tech Stack:</strong> {item?.techStack.join(", ")}
            </p>
            <div className="flex gap-4 mt-2">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  Live
                </a>
              )}
              {item.gitLink && (
                <a
                  href={item.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-green-400"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <BentoGrid className="w-full mt-6 space-y-5">
      {options?.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          image={item.image}
          description={item.description}
          link={item.link}
          gitLink={item?.gitLink || ""}
          tech={item?.techStack}
          className={getBentoSpanClass(i, options.length)}
        />
      ))}
    </BentoGrid>
  );
}
