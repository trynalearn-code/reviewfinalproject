import { MongoClient } from 'mongodb';
import "dotenv/config"

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);


await client.connect()
const db = client.db('incidents');

console.log("connected to MongoDB!")

export default db





