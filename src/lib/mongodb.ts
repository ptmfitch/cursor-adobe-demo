import { MongoClient } from 'mongodb';
import { MONGODB_DB_NAME, MONGODB_URI } from './constants';

const globalForMongo = globalThis as unknown as {
  mongoClient: MongoClient | undefined;
};

export async function getMongoClient(): Promise<MongoClient> {
  if (!globalForMongo.mongoClient) {
    globalForMongo.mongoClient = new MongoClient(MONGODB_URI);
  }
  const client = globalForMongo.mongoClient;
  if (!client) {
    throw new Error('MongoDB client failed to initialize');
  }
  return client;
}

export async function getDemoDb() {
  const client = await getMongoClient();
  return client.db(MONGODB_DB_NAME);
}
