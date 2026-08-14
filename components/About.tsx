import { about, site } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export function About() {
  return (
    <Section id="about" num="02" eyebrow="About" title="About me">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-2 text-sm text-muted">
            <p className="flex items-center gap-2">
              <span aria-hidden>📍</span> {site.location}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 break-all transition-colors hover:text-accent-strong dark:hover:text-accent"
            >
              <span aria-hidden>✉️</span> {site.email}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {about.highlights.map((h, i) => (
          <Reveal key={h} delay={i * 0.04}>
            <SpotlightCard>
              <div className="flex h-full items-start gap-3 p-5">
                <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent-strong dark:text-accent">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed">{h}</span>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
