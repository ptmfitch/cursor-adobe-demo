type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-adobe-red">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-cursor-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-cursor-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
