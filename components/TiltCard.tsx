"use client";

import { useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  max?: number;
  as?: keyof HTMLElementTagNameMap;
};

export function TiltCard({ children, className = "", max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(2px)`;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ transition: "transform 0.18s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
}