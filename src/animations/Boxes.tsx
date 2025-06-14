"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(50).fill(1);
  const cols = new Array(10).fill(1);

  return (
    <div
      style={{
        transform: `scale(0.675) rotate(0deg) translateZ(0) `,
      }}
      className={cn(
        "absolute flex h-full w-full p-4 z-0 opacity-50",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <motion.div
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-slate-700"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
