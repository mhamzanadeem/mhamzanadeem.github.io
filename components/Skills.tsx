import { skills } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" num="04" eyebrow="Skills" title="What I work with">
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06}>
            <div className="post-it-shadow relative rounded-sm border border-line bg-surface p-6 transition-all duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.02]">
              <h3 className="text-center font-bold uppercase tracking-wide text-muted">{group.title}</h3>
              <div aria-hidden className="my-3 h-px w-full bg-current opacity-20" />
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded border border-line px-2 py-0.5 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
