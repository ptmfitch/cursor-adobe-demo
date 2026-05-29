import FeatureIdeasPanel from '@/components/FeatureIdeasPanel';
import GalleryPreview from '@/components/GalleryPreview';
import Hero from '@/components/Hero';
import SiteChrome from '@/components/SiteChrome';
import SiteFooter from '@/components/SiteFooter';
import TrialStrip from '@/components/TrialStrip';
import { THEME } from '@/lib/theme';

export default function HomePage() {
  return (
    <div className="page-shell min-h-screen">
      <main
        className="mx-auto px-6 py-10 sm:px-10 sm:py-16"
        style={{ maxWidth: `${THEME.layout.pageMaxWidthPx}px` }}
      >
        <div
          className="flex flex-col"
          style={{ gap: `${THEME.layout.sectionGapPx}px` }}
        >
          <SiteChrome />
          <Hero
            headline="Welcome, Adobe."
            subline="Build at the speed of ideas."
          />
          <TrialStrip />
          <section
            className="glass-panel rounded-3xl"
            style={{ padding: `${THEME.layout.panelPaddingPx}px` }}
          >
            <GalleryPreview />
          </section>
          <section
            className="glass-panel rounded-3xl"
            style={{ padding: `${THEME.layout.panelPaddingPx}px` }}
          >
            <FeatureIdeasPanel />
          </section>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
