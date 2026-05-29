type RevealTrailProps = {
  pingOk: boolean;
};

export default function RevealTrail({ pingOk }: RevealTrailProps) {
  return (
    <div
      aria-live="polite"
      className="space-y-1.5 pt-6 text-center sm:text-left"
    >
      <p className="reveal-hint reveal-hint-1">
        Remove the hero mark.
      </p>
      <p className="reveal-hint reveal-hint-2">
        Balance the panel inset in demoLayout.ts.
      </p>
      <p className="reveal-hint reveal-hint-3">
        Repair the ping endpoint.
      </p>
      {pingOk ? (
        <p className="reveal-hint reveal-hint-4">
          Index usage_events.team — use MCP.
        </p>
      ) : null}
    </div>
  );
}
