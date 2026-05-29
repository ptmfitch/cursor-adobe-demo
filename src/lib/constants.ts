export const DEV_SERVER_PORT = 3001;

export const MONGODB_URI =
  process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017';

export const MONGODB_DB_NAME = 'cursor_adobe_demo';

export const USAGE_EVENTS_COLLECTION = 'usage_events';

export const STATS_QUERY_LIMIT = 20;

export const DEMO_TEAMS = [
  'design',
  'engineering',
  'marketing',
  'product',
] as const;

export const SEED_DOCUMENT_COUNT = 5000;
