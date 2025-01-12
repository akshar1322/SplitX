import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export const connectToDatabase = async () => {
  if (client.isConnected()) {
    return client.db();
  }
  await client.connect();
  return client.db();
};
