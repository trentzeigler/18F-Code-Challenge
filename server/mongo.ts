import { MongoClient, Db } from 'mongodb';

let database: Db;
let client: MongoClient;
/**
 * Will initialize a connection to Mongo db and return the db instance.
 */
export const initializeMongoConnection = async () => {
    try {
        client = new MongoClient('mongodb://127.0.0.1:27017/');
        await client.connect();
        database = client.db('18F_TEST');
        console.log(`DB initialized - connected to: mongodb://127.0.0.1:27017/`);
    } catch (error) {
        console.log(`Failed to initialize Mongo connection: ${error} -- stack: ${error.stack}`);
    }
    return database;
};
