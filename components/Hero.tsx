"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site, social } from "@/data/content";
import { Magnetic } from "@/components/Magnetic";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div aria-hidden className="animate-blob absolute -left-32 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />
      <div aria-hidden className="animate-blob absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent/15 blur-[90px] [animation-delay:-6s]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-24 sm:px-8 md:grid-cols-[1.4fr_1fr] md:py-32">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {site.name.split(" ")[0]}
            <span className="block bg-gradient-to-r from-accent-strong via-accent to-accent-strong bg-clip-text text-transparent dark:from-accent dark:via-amber-300 dark:to-accent">
              {site.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-lg font-semibold tracking-tight sm:text-xl"
          >
            {site.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-accent-strong px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-accent-strong/90 dark:bg-accent"
              >
                View my work
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Magnetic>

            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg dark:bg-stone-100 dark:text-stone-900"
            >
              View Resume
            </a>

            <div className="flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-lg border border-line p-2.5 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-strong hover:shadow-[0_8px_20px_-8px_rgba(245,158,11,0.5)] dark:hover:text-accent"
                >
                  {s.label === "GitHub" ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  ) : s.label === "LinkedIn" ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center md:justify-end"
        >
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-accent/20 blur-2xl" />
            <div className="group relative aspect-square w-64 overflow-hidden rounded-3xl border border-line bg-surface sm:w-80 lg:w-96">
              <Image
                src={site.profileImage}
                alt={`${site.name} portrait`}
                fill
                sizes="(max-width: 768px) 100vw, 24rem"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 rounded-xl border border-line bg-surface px-4 py-2 text-xs font-medium shadow-lg"
            >
              Open to opportunities
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
