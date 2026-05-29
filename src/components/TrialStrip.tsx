const TRIAL_STATS = [
  { label: 'Source', value: 'Pexels API' },
  { label: 'Pattern', value: 'nextjs-image-gallery' },
  { label: 'Your move', value: 'Pick & build' },
] as const;

export default function TrialStrip() {
  return (
    <section
      aria-label="Gallery overview"
      className="grid gap-3 sm:grid-cols-3"
    >
      {TRIAL_STATS.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/8 bg-white/4 px-5 py-4"
        >
          <p className="text-xs uppercase tracking-wider text-cursor-muted">
            {stat.label}
          </p>
          <p className="mt-1 text-lg font-medium text-cursor-text">
            {stat.value}
          </p>
        </div>
      ))}
    </section>
  );
}
