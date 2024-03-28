// connecting to mongodb

import mongoose from 'mongoose';

if (typeof(process.env.MONGO_URL) === 'string') {
    mongoose.connect(process.env.MONGO_URL)
        .then(()=>{console.log('connected to mongodb')});
}
