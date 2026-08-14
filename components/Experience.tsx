import { experience } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Experience() {
  return (
    <Section id="experience" num="08" eyebrow="Experience" title="Where I've worked">
      <div className="space-y-8">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.06}>
            <div className="relative border-l-2 border-line pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-4 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent-strong bg-background dark:border-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-strong dark:bg-accent" />
              </span>
              <SpotlightCard className="rounded-xl!">
                <div className="flex h-full flex-col p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-muted">{e.period}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-muted hover:text-accent-strong dark:hover:text-accent"
                    >
                      {e.company}
                    </a>
                    <span className="text-sm text-muted">{e.location}</span>
                  </div>
                  <div className="mt-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-line bg-bg-alt">
                    <img src={e.logo} alt={`${e.company} logo`} className="h-full w-full object-contain p-2" />
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-strong dark:bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
