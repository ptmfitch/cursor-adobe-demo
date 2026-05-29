import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  CATEGORY_STYLES,
  DEMO_FEATURE_IDEAS,
  EFFORT_LABELS,
  EFFORT_ORDER,
  type DemoFeatureIdea,
} from '@/lib/demoFeatureIdeas';

function IdeaCard({ idea }: { idea: DemoFeatureIdea }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge label={EFFORT_LABELS[idea.effort]} variant="effort" />
        {idea.categories.map((category) => (
          <Badge
            key={category}
            label={category}
            className={CATEGORY_STYLES[category]}
          />
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-cursor-text">{idea.title}</h3>
        <p className="text-sm leading-relaxed text-cursor-muted">{idea.pitch}</p>
      </div>
      <p className="mt-auto rounded-xl border border-white/6 bg-black/20 px-3 py-2 font-mono text-[11px] leading-relaxed text-cursor-muted/80">
        {idea.prompt}
      </p>
    </Card>
  );
}

export default function FeatureIdeasPanel() {
  return (
    <section aria-label="Build ideas" className="space-y-10">
      <SectionHeader
        eyebrow="Build live"
        title="Pick a gallery feature to ship."
        description="Each card is a demo-ready addition inspired by nextjs-image-gallery. Point at the reference API, pick a prompt, build with Agent."
      />
      {EFFORT_ORDER.map((effort) => {
        const ideas = DEMO_FEATURE_IDEAS.filter((idea) => idea.effort === effort);

        return (
          <div key={effort} className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-cursor-muted">
              {EFFORT_LABELS[effort]}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {ideas.map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
