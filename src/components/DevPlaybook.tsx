const PLAYBOOK_ITEMS = [
  'Open this repo in Cursor and use Agent View for cross-file changes.',
  'Pick a fast model for typo, image, and spacing; a thinking model for API debug.',
  'Connect MongoDB MCP, inspect usage_events, then add a team index.',
  'Kick off refactors in the background while you keep coding.',
  'See DEMO_SCRIPT.md for the timed 10–15 minute agenda.',
] as const;

export default function DevPlaybook() {
  return (
    <footer className="rounded-lg border border-white/10 bg-white/5 px-4 py-4">
      <h2 className="text-sm font-medium text-cursor-text">
        Try it in Cursor
      </h2>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-cursor-muted">
        {PLAYBOOK_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </footer>
  );
}
