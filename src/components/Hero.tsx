import Image from 'next/image';
import { THEME } from '@/lib/theme';

type HeroProps = {
  headline: string;
  subline: string;
};

export default function Hero({ headline, subline }: HeroProps) {
  return (
    <header className="space-y-8 text-center sm:text-left">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Image
          src="/cursor-logo.png"
          alt=""
          width={THEME.layout.heroLogoSizePx}
          height={THEME.layout.heroLogoSizePx}
          className="rounded-2xl ring-1 ring-white/10"
          aria-hidden
        />
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-adobe-red">
            30-day trial
          </p>
          <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-cursor-text sm:text-5xl">
            {headline}
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-cursor-muted">
            {subline}
          </p>
        </div>
      </div>
    </header>
  );
}
