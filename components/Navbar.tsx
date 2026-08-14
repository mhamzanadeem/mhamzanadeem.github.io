"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { site } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const targets = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      active === href ? "text-accent-strong dark:text-accent" : "text-muted hover:text-accent-strong dark:hover:text-accent"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur">
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-accent-strong via-accent to-accent-strong"
      />
      <nav className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <a href="#top" className="text-lg font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          {site.name.split(" ")[0]}
          <span className="text-accent-strong dark:text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`block text-sm font-medium ${active === l.href ? "text-accent-strong dark:text-accent" : "text-muted hover:text-accent-strong dark:hover:text-accent"}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
