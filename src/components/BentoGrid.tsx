"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-14",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  image,
  title,
  description,
  tech,
  gitLink,
  link,
  className,
}: {
  image: string;
  title: string;
  description: string[];
  tech: string[];
  gitLink?: string;
  link: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} // ease-in-out
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden group shadow-input transition duration-300 hover:shadow-xl rounded-xl border border-neutral-200 bg-white dark:bg-black dark:border-white/[0.2]",
        className
      )}
    >
      {/* Image */}
      <Image
        src={image}
        className="w-full h-full object-fill transition duration-300 group-hover:blur-sm"
        alt={title}
        width={400}
        height={300}
        priority
      />

      <div className="flex hover:underline gap-4 opacity-0 group-hover:opacity-100 items-center mt-2 absolute top-0 right-[10px] z-40">
        {gitLink && (
          <Link
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl flex items-center gap-1 hover:underline"
          >
            <FaGithub />
          </Link>
        )}
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl flex items-center gap-1 hover:underline text-blue-400"
          >
            <BsFillPlayCircleFill />
          </Link>
        )}
      </div>

      {/* Content overlay on hover */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white">
        <div className="mt-auto transition-transform duration-300 group-hover:translate-x-2">
          <div className="mt-2 mb-1 font-bold text-xl">{title}</div>
          <div className="flex flex-col gap-1 text-neutral-200 text-sm">
            {description?.map((ele) => (
              <p key={ele}>{ele}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-3 mt-2">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/10 text-xs rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
