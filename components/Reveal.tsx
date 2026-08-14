"use client";

import { motion } from "motion/react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}