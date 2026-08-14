import { education } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Education() {
  return (
    <Section id="education" num="05" eyebrow="Education" title="Education">
      <div className="space-y-6">
        {education.map((entry) => (
          <Reveal key={entry.institution}>
            <SpotlightCard>
              <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-2xl border border-line bg-bg-alt">
                  <img src={entry.logo} alt={`${entry.institution} logo`} className="h-full w-full object-contain p-2" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">{entry.degree}</h3>
                    <span className="font-mono text-xs text-muted">{entry.dates}</span>
                  </div>
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-accent-strong dark:hover:text-accent"
                  >
                    {entry.institution}
                  </a>
                  <p className="mt-2 text-sm text-muted">{entry.location}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.chips.map((chip) => (
                      <span key={chip} className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
