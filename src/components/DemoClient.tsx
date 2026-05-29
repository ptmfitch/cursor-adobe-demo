'use client';

import { useState } from 'react';
import RevealTrail from './RevealTrail';

type StatsResponse = {
  team: string;
  count: number;
  events: { id: string; feature: string; recordedAt: string }[];
  queryMeta?: {
    docsExamined?: number;
    executionTimeMillis?: number;
    hint?: string;
  };
  error?: string;
  hint?: string;
};

export default function DemoClient() {
  const [pingStatus, setPingStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const [pingMessage, setPingMessage] = useState('');
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);

  const pingOk = pingStatus === 'ok';

  async function testPing() {
    setPingStatus('idle');
    setPingMessage('');
    try {
      const res = await fetch('/api/ping');
      const data = await res.json();
      if (res.ok) {
        setPingStatus('ok');
        setPingMessage(data.message ?? 'API ready');
      } else {
        setPingStatus('error');
        setPingMessage(data.error ?? `HTTP ${res.status}`);
      }
    } catch {
      setPingStatus('error');
      setPingMessage('Network error');
    }
  }

  async function loadStats() {
    setStatsLoading(true);
    setStats(null);
    try {
      const res = await fetch('/api/stats?team=design');
      const data = (await res.json()) as StatsResponse;
      setStats(data);
    } catch {
      setStats({ team: 'design', count: 0, events: [], error: 'Request failed' });
    } finally {
      setStatsLoading(false);
    }
  }

  return (
    <section className="space-y-4" aria-label="API demo controls">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={testPing}
          className="rounded-md bg-adobe-red px-4 py-2 text-sm font-medium text-white transition hover:bg-adobe-red/90"
        >
          Test API
        </button>
        <button
          type="button"
          onClick={loadStats}
          disabled={!pingOk || statsLoading}
          className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-cursor-text transition enabled:hover:border-adobe-amber/60 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {statsLoading ? 'Loading…' : 'Load team stats'}
        </button>
      </div>

      {pingStatus !== 'idle' ? (
        <p
          className={`text-sm ${
            pingOk ? 'text-green-400' : 'text-adobe-red'
          }`}
          role="status"
        >
          {pingOk ? `Ping OK: ${pingMessage}` : `Ping failed: ${pingMessage}`}
        </p>
      ) : null}

      {!pingOk ? (
        <p className="text-xs text-cursor-muted">
          Fix /api/ping to unlock team stats. Use MongoDB MCP to inspect and
          optimize the stats query.
        </p>
      ) : null}

      {stats ? (
        <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm">
          {stats.error ? (
            <p className="text-adobe-red">
              {stats.error}
              {stats.hint ? ` — ${stats.hint}` : ''}
            </p>
          ) : (
            <>
              <p className="text-cursor-text">
                Team <strong>{stats.team}</strong>: {stats.count} events
              </p>
              {stats.queryMeta ? (
                <p className="mt-1 text-cursor-muted">
                  docsExamined: {stats.queryMeta.docsExamined ?? '—'} ·{' '}
                  {stats.queryMeta.executionTimeMillis ?? '—'}ms —{' '}
                  {stats.queryMeta.hint}
                </p>
              ) : null}
            </>
          )}
        </div>
      ) : null}

      <RevealTrail pingOk={pingOk} />
    </section>
  );
}
