import { ADOBE_AMBER } from '@/lib/demoTheme';
import { HERO_LOGO_SIZE_PX } from '@/lib/demoLayout';

type HeroProps = {
  headline: string;
};

export default function Hero({ headline }: HeroProps) {
  return (
    <header className="space-y-4">
      <div
        className="h-1 w-24 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${ADOBE_AMBER}, #ED1C24)`,
        }}
      />
      <div className="flex items-center gap-4">
        {/* DEMO: Missing file — add public/cursor-mark.svg */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/placeholder-cursor-logo.png"
          alt="Cursor"
          width={HERO_LOGO_SIZE_PX}
          height={HERO_LOGO_SIZE_PX}
          className="rounded-md"
        />
        <h1 className="text-2xl font-semibold tracking-tight text-cursor-text sm:text-3xl">
          {headline}
        </h1>
      </div>
      <p className="text-base leading-relaxed text-cursor-muted">
        Ship faster with agents across editor, terminal, and web — your 30-day
        trial starts now.
      </p>
    </header>
  );
}
