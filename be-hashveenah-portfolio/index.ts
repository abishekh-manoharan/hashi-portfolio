import mongoose from 'mongoose';
import express from 'express';
import sessions from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';
import './utils/config'
// import { session } from 'passport';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//setting up session
const store = mongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName: 'session'
})

const session = sessions({
    secret: process.env.SECRET_KEY!,
    resave: true,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 5 // 5 mins
    }
})

app.use(session);

// setting up passport
import './auth/passport';

app.use(passport.session());
app.use(passport.initialize());

// routes
app.get('/', (req,res) => {
    res.send('hello world!')
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));