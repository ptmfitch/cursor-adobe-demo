import CapabilityStrip from '@/components/CapabilityStrip';
import DemoClient from '@/components/DemoClient';
import DevPlaybook from '@/components/DevPlaybook';
import FeatureGrid from '@/components/FeatureGrid';
import Hero from '@/components/Hero';
import {
  FEATURE_SECTION_GAP_PX,
  PAGE_MAX_WIDTH_PX,
} from '@/lib/demoLayout';
import { HIDDEN_HINT_COLOR, PAGE_BACKGROUND } from '@/lib/demoTheme';

export default function HomePage() {
  return (
    <main
      className="mx-auto min-h-screen px-6 py-12"
      style={{
        maxWidth: `${PAGE_MAX_WIDTH_PX}px`,
        // CSS vars drive reveal trail visibility
        ['--page-background' as string]: PAGE_BACKGROUND,
        ['--hidden-hint-color' as string]: HIDDEN_HINT_COLOR,
        ['--feature-section-gap' as string]: `${FEATURE_SECTION_GAP_PX}px`,
      }}
    >
      <div className="space-y-10">
        <Hero headline="Welcom, Adobe — your 30-day Cursor trial starts here." />
        <CapabilityStrip />
        <FeatureGrid />
        <DemoClient />
        <DevPlaybook />
      </div>
    </main>
  );
}
