import SiteChrome from '@/components/SiteChrome';
import Hero from '@/components/Hero';
import TrialPanel from '@/components/TrialPanel';
import {
  CONTENT_SECTION_GAP_PX,
  FEATURE_SECTION_GAP_PX,
  PAGE_MAX_WIDTH_PX,
  PANEL_INSET_END_PX,
} from '@/lib/demoLayout';
import {
  HIDDEN_HINT_COLOR,
  PAGE_BACKGROUND,
  SHOW_HERO_MARK,
} from '@/lib/demoTheme';

export default function HomePage() {
  return (
    <div className="page-shell min-h-screen">
      <main
        className="mx-auto px-6 py-10 sm:px-10 sm:py-16"
        style={{
          maxWidth: `${PAGE_MAX_WIDTH_PX}px`,
          ['--page-background' as string]: PAGE_BACKGROUND,
          ['--reveal-hint-1-visible' as string]:
            HIDDEN_HINT_COLOR === PAGE_BACKGROUND ? '0' : '1',
          ['--reveal-hint-2-opacity' as string]: SHOW_HERO_MARK ? '0' : '1',
          ['--feature-section-gap' as string]: `${FEATURE_SECTION_GAP_PX}px`,
        }}
      >
        <div className="space-y-12">
          <SiteChrome />
          <Hero
            headline="Welcom, Adobe."
            subline="Good to have you here."
          />
          <section
            className="glass-panel rounded-3xl"
            style={{
              marginTop: `${FEATURE_SECTION_GAP_PX}px`,
              paddingTop: `${CONTENT_SECTION_GAP_PX}px`,
              paddingBottom: `${CONTENT_SECTION_GAP_PX}px`,
              paddingLeft: `${PANEL_INSET_END_PX}px`,
              paddingRight: `${PANEL_INSET_END_PX - 8}px`,
            }}
          >
            <TrialPanel />
          </section>
        </div>
      </main>
    </div>
  );
}
