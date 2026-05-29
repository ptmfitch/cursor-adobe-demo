import { SHOW_HERO_MARK } from '@/lib/demoTheme';
import { HERO_MARK_SIZE_PX } from '@/lib/demoLayout';

type HeroProps = {
  headline: string;
  subline: string;
};

export default function Hero({ headline, subline }: HeroProps) {
  return (
    <header className="space-y-8 text-center sm:text-left">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {SHOW_HERO_MARK ? (
          /* DEMO: broken asset — swap to /cursor-mark.svg or remove */
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/placeholder-cursor-logo.png"
            alt=""
            width={HERO_MARK_SIZE_PX}
            height={HERO_MARK_SIZE_PX}
            className="rounded-2xl ring-1 ring-white/10"
          />
        ) : null}
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-adobe-red">
            30-day trial
          </p>
          <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-cursor-text sm:text-5xl">
            {headline}
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-cursor-muted">
            {subline}
          </p>
        </div>
      </div>
    </header>
  );
}
