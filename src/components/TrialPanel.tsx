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
  };
  error?: string;
  hint?: string;
};

export default function TrialPanel() {
  const [pingStatus, setPingStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);

  const pingOk = pingStatus === 'ok';

  async function testPing() {
    setPingStatus('idle');
    try {
      const res = await fetch('/api/ping');
      if (res.ok) {
        setPingStatus('ok');
      } else {
        setPingStatus('error');
      }
    } catch {
      setPingStatus('error');
    }
  }

  async function loadStats() {
    setStatsLoading(true);
    setStats(null);
    try {
      const res = await fetch('/api/stats?team=design');
      setStats((await res.json()) as StatsResponse);
    } catch {
      setStats({ team: 'design', count: 0, events: [], error: 'Unavailable' });
    } finally {
      setStatsLoading(false);
    }
  }

  return (
    <section aria-label="Trial activity" className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={testPing}
          className="rounded-full bg-adobe-red px-5 py-2.5 text-sm font-medium text-white transition hover:bg-adobe-red/90"
        >
          Test API
        </button>
        <button
          type="button"
          onClick={loadStats}
          disabled={!pingOk || statsLoading}
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-cursor-text transition enabled:hover:border-adobe-amber/50 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
        >
          {statsLoading ? 'Loading…' : 'Load team stats'}
        </button>
        {pingStatus === 'error' ? (
          <span className="text-sm text-adobe-red/90" role="status">
            Endpoint unavailable
          </span>
        ) : null}
        {pingOk ? (
          <span className="text-sm text-emerald-400/90" role="status">
            Connected
          </span>
        ) : null}
      </div>

      {stats ? (
        <div className="rounded-2xl border border-white/8 bg-black/20 px-5 py-4">
          {stats.error ? (
            <p className="text-sm text-cursor-muted">{stats.error}</p>
          ) : (
            <dl className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wider text-cursor-muted">
                  Team
                </dt>
                <dd className="mt-1 text-2xl font-semibold capitalize text-cursor-text">
                  {stats.team}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-cursor-muted">
                  Events
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-cursor-text">
                  {stats.count}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-cursor-muted">
                  Docs examined
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-cursor-text">
                  {stats.queryMeta?.docsExamined ?? '—'}
                </dd>
              </div>
            </dl>
          )}
        </div>
      ) : null}

      <RevealTrail pingOk={pingOk} />
    </section>
  );
}
