const CAPABILITIES = [
  {
    label: 'Models',
    description: 'Match model depth to the job.',
  },
  {
    label: 'MCP',
    description: 'Query and fix real services in-repo.',
  },
  {
    label: 'Rules',
    description: 'Team standards travel with the project.',
  },
  {
    label: 'Surfaces',
    description: 'IDE, CLI, and web — one agent stack.',
  },
] as const;

export default function CapabilityStrip() {
  return (
    <section
      aria-label="Cursor capabilities"
      className="grid gap-3 sm:grid-cols-2"
    >
      {CAPABILITIES.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-3"
        >
          <p className="text-sm font-medium text-adobe-red">{item.label}</p>
          <p className="mt-1 text-sm text-cursor-muted">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
