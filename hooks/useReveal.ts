"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

export function useReveal<T extends HTMLElement>(amount = 0.2) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, amount });
  return { ref, inView };
}