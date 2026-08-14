import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">© {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind.</p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-strong dark:hover:text-accent"
        >
          Back to top
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
