import type { Metadata } from "next";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: `${site.name} | Resume`,
  description: "View the resume of Muhammad Hamza Nadeem.",
};

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Resume</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{site.name}</h1>
        </div>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg dark:bg-stone-100 dark:text-stone-900"
        >
          Open PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_20px_60px_-24px_rgba(0,0,0,0.25)]">
        <iframe
          src={site.resume}
          title={`${site.name} resume`}
          className="h-[80vh] w-full bg-white dark:bg-stone-950"
        />
      </div>
    </section>
  );
}
