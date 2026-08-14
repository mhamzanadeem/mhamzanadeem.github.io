type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SpotlightCard({ children, className = "", innerClassName = "" }: SpotlightCardProps) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(245,158,11,0.35)] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 100%), rgba(245,158,11,0.14), transparent 70%)",
        }}
      />
      <div className={`relative h-full ${innerClassName}`}>{children}</div>
    </div>
  );
}