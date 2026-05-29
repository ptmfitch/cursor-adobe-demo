type RevealTrailProps = {
  pingOk: boolean;
};

export default function RevealTrail({ pingOk }: RevealTrailProps) {
  return (
    <aside
      aria-label="Demo reveal trail"
      className="space-y-2 rounded-lg border border-dashed border-white/15 px-4 py-3 text-sm"
    >
      <p className="text-xs uppercase tracking-wide text-cursor-muted">
        Reveal trail
      </p>
      <p className="reveal-hint-1">
        Step 2: fix feature section spacing in demoLayout.ts (see
        demo-standards.mdc).
      </p>
      <p className="reveal-hint-2">
        Step 3: fix /api/ping, then load team stats.
      </p>
      {pingOk ? (
        <p className="text-adobe-amber">
          Use MCP and the right model for data and debug work.
        </p>
      ) : null}
    </aside>
  );
}
