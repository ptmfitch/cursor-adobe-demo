import { NextResponse } from 'next/server';

/** DEMO: Intentionally broken — fix to return 200 for reveal step 3. */
export async function GET() {
  return NextResponse.json(
    { error: 'DEMO_BREAK: ping endpoint disabled for trial demo' },
    { status: 500 }
  );
}
