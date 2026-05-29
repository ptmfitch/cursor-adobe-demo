import {
  FEATURE_CARD_GAP_PX,
  FEATURE_SECTION_GAP_PX,
} from '@/lib/demoLayout';

const FEATURES = [
  {
    title: 'Agent View',
    description: 'Multi-file edits with full project context.',
  },
  {
    title: 'IDE',
    description: 'Agents live where you code — preview in seconds.',
  },
  {
    title: 'CLI',
    description: 'Same agents from terminal and CI pipelines.',
  },
  {
    title: 'Web Agents',
    description: 'Kick off work from the browser, pick up in-editor.',
  },
] as const;

/** DEMO: Uneven gaps — card index 1 uses double gap per broken layout constant usage */
const CARD_GAPS_PX = [
  FEATURE_CARD_GAP_PX,
  FEATURE_CARD_GAP_PX * 2,
  FEATURE_CARD_GAP_PX,
  FEATURE_CARD_GAP_PX,
] as const;

export default function FeatureGrid() {
  return (
    <section
      aria-label="Cursor 3 surfaces"
      className="space-y-3"
      style={{ marginTop: `${FEATURE_SECTION_GAP_PX}px` }}
    >
      <h2 className="text-sm font-medium uppercase tracking-wide text-cursor-muted">
        Cursor 3
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {FEATURES.map((feature, index) => (
          <article
            key={feature.title}
            className="rounded-lg border border-adobe-red/30 bg-white/5 p-4"
            style={{ marginBottom: `${CARD_GAPS_PX[index]}px` }}
          >
            <h3 className="font-medium text-cursor-text">{feature.title}</h3>
            <p className="mt-1 text-sm text-cursor-muted">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
