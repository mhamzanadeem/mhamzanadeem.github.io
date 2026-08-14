import { proficiency } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Proficiency() {
  return (
    <Section id="proficiency" num="06" eyebrow="Proficiency" title="Technical Proficiency">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proficiency.map((item, i) => (
          <Reveal key={item.label} delay={(i % 3) * 0.05}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <div className="proficiency-bar mt-4">
                <span style={{ width: `${item.value}%` }} />
              </div>
              <p className="mt-3 text-sm font-medium text-muted">{item.value}%</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
