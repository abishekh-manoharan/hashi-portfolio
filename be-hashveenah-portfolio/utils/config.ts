import dotenv from 'dotenv';
import mongoose from 'mongoose';

console.log('running config')
// initislize env variables
dotenv.config();

// connecting to mongodb
if (typeof (process.env.MONGO_URL) === 'string') {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => { console.log('connected to mongodb') });
}