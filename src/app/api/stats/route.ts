import { NextRequest, NextResponse } from 'next/server';
import {
  DEMO_TEAMS,
  STATS_QUERY_LIMIT,
  USAGE_EVENTS_COLLECTION,
} from '@/lib/constants';
import { getDemoDb } from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  const team = request.nextUrl.searchParams.get('team') ?? 'design';

  if (!DEMO_TEAMS.includes(team as (typeof DEMO_TEAMS)[number])) {
    return NextResponse.json(
      { error: `team must be one of: ${DEMO_TEAMS.join(', ')}` },
      { status: 400 }
    );
  }

  try {
    const db = await getDemoDb();
    const collection = db.collection(USAGE_EVENTS_COLLECTION);

    // DEMO: No index on `team` — use MongoDB MCP to inspect and optimize.
    const filter = { team };
    const explain = await collection
      .find(filter)
      .sort({ recordedAt: -1 })
      .limit(STATS_QUERY_LIMIT)
      .explain('executionStats');

    const events = await collection
      .find(filter)
      .sort({ recordedAt: -1 })
      .limit(STATS_QUERY_LIMIT)
      .toArray();

    const executionStats = explain as {
      executionStats?: { totalDocsExamined?: number; executionTimeMillis?: number };
    };

    return NextResponse.json({
      team,
      count: events.length,
      events: events.map((doc) => ({
        id: String(doc._id),
        feature: doc.feature,
        recordedAt: doc.recordedAt,
      })),
      queryMeta: {
        docsExamined: executionStats.executionStats?.totalDocsExamined,
        executionTimeMillis:
          executionStats.executionStats?.executionTimeMillis,
        hint: 'Add index on team via MongoDB MCP for faster queries',
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'MongoDB query failed';
    return NextResponse.json(
      {
        error: message,
        hint: 'Run npm run mongo:up to start local MongoDB and seed data',
      },
      { status: 503 }
    );
  }
}
