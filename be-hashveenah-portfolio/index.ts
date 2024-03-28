import mongoose from 'mongoose';
import express from 'express';
require('dotenv').config(); 
require('./utils/mongooseConfig'); // connecting to mongodb

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));