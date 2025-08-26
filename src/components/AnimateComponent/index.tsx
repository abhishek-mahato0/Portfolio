"use client";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function MotionWrapper({
  children,
  className,
  id,
  initial = {},
  animate = {},
  transition = {},
  whileInView = {},
  viewport = {},
  ...rest
}: MotionWrapperProps) {
  return (
    <motion.div
      id={id}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
