import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const connectToDatabase = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db();  // Returns the connected database instance
};
