import { services } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Services() {
  return (
    <Section id="services" num="03" eyebrow="Services" title="What I do">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={(i % 3) * 0.08}>
            <TiltCard max={5} className="h-full will-change-transform">
              <SpotlightCard>
                <div className="flex h-full flex-col p-7 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-strong dark:text-accent">
                    <span className="text-lg font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {i === 0
                      ? "Building production web interfaces and full-stack applications with modern frontend architecture."
                      : i === 1
                        ? "Designing LLM-powered systems, RAG workflows, and multimodal AI applications."
                        : "Shipping scalable infrastructure, deployment pipelines, and cloud-connected applications."}
                  </p>
                </div>
              </SpotlightCard>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
