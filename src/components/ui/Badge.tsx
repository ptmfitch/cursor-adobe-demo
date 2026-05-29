type BadgeProps = {
  label: string;
  variant?: 'default' | 'effort';
  className?: string;
};

export default function Badge({
  label,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const baseStyle =
    variant === 'effort'
      ? 'border-white/10 bg-white/5 text-cursor-muted'
      : 'border-white/15 bg-white/8 text-cursor-text';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${className || baseStyle}`}
    >
      {label}
    </span>
  );
}
