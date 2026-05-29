import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017';
const DB_NAME = 'cursor_adobe_demo';
const COLLECTION = 'usage_events';
const DOCUMENT_COUNT = 5000;
const TEAMS = ['design', 'engineering', 'marketing', 'product'];
const FEATURES = [
  'agent-view',
  'ide',
  'cli',
  'web-agents',
  'mcp',
  'tab',
  'rules',
];

function pick(array, index) {
  return array[index % array.length];
}

async function seed() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION);

  await collection.drop().catch(() => {});

  const docs = Array.from({ length: DOCUMENT_COUNT }, (_, i) => ({
    team: pick(TEAMS, i),
    feature: pick(FEATURES, i * 3),
    recordedAt: new Date(Date.now() - i * 60_000),
    sessionId: `session-${Math.floor(i / 100)}`,
  }));

  await collection.insertMany(docs);

  // DEMO: Intentionally no index on `team` — add via MongoDB MCP during demo.
  const indexes = await collection.indexes();
  const hasTeamIndex = indexes.some(
    (idx) => idx.key && Object.prototype.hasOwnProperty.call(idx.key, 'team')
  );

  console.log(`Seeded ${DOCUMENT_COUNT} documents into ${DB_NAME}.${COLLECTION}`);
  console.log(`Team index present: ${hasTeamIndex} (should be false for demo)`);

  await client.close();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
