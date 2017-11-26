import * as dotenv from 'dotenv';
import * as mongodb from 'mongodb';
import * as bcrypt from 'bcrypt';
dotenv.config();

const users = require('./users.json');
const contacts = require('./contacts.json');
const mongoClient = mongodb.MongoClient;

const SeedCollection = (collectionName: string, initialRecords: any[]) => {
    mongoClient.connect(process.env.DB_CONN, (err: mongodb.MongoError, db: mongodb.Db) => {
        if (err) {
            console.log(err.message);
        }
        console.log('Connected to mongoDB');

        const collection = db.collection(collectionName);

        collection.drop();

        initialRecords.forEach((item) => {
            if (item.password) {
                item.password = bcrypt.hashSync(item.password, 10);
            }
        });

        collection.insertMany(initialRecords, (error: mongodb.MongoError, result: mongodb.InsertWriteOpResult) => {
            console.log(`${result.insertedCount} records inserted`);
            db.close();
            console.log('DONE !!');
        });
    });
};


SeedCollection('users', users);
SeedCollection('contacts', contacts);
