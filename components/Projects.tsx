import Image from "next/image";
import { projects } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { SpotlightCard } from "@/components/SpotlightCard";

const projectImage = (name: string) => {
  switch (name) {
    case "Food Recipe App":
      return "/projects/portfolio-cover-image.jpg";
    case "Weather App":
      return "/projects/crypto-screener-cover-image.jpg";
    case "Northern Pakistan Travel Website":
      return "/projects/agency-website-cover-image.jpg";
    default:
      return "/projects/devdreaming.jpg";
  }
};

export function Projects() {
  return (
    <Section id="projects" num="07" eyebrow="Projects" title="Selected work">
      <div className="grid gap-8">
        {projects.map((p, i) => {
          const external = p.live ?? p.github;
          return (
            <Reveal key={p.name} delay={(i % 3) * 0.06}>
              <TiltCard max={6} className="h-full will-change-transform">
                <SpotlightCard>
                  <div className="flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[2/1] overflow-hidden bg-bg-alt dark:bg-bg">
                      {p.video ? (
                        <video
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-label={`${p.name} preview video`}
                        >
                          <source src={p.video} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={p.image ?? projectImage(p.name)}
                          alt={`${p.name} preview`}
                          fill
                          unoptimized
                          sizes="100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      {p.featured && (
                        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-stone-950 shadow-lg">
                          Featured
                        </span>
                      )}
                      {external && (
                        <a
                          href={external}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${p.name}`}
                          className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-accent text-stone-950 opacity-0 shadow-lg transition-all duration-300 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold">{p.name}</h3>
                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{p.category}</span>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.technologies.map((t) => (
                          <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-accent-strong px-4 py-2 text-sm font-semibold text-stone-950 dark:bg-accent"
                          >
                            Live
                          </a>
                        )}
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-muted hover:border-accent hover:text-accent-strong dark:hover:text-accent"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
