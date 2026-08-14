type SectionProps = {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, num, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-accent-strong dark:text-accent">
            {num}.
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        </div>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
