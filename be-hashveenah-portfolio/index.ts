import express from 'express';
import sessions from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';
import EntryRouter from './routes/entry';
import AuthRouter from './routes/auth';
import cors from 'cors';

import './utils/config'
// import { session } from 'passport';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
        maxAge: 1000 * 60 * 5 // 5 min
    }
})

app.use(session);

// setting up passport
import './auth/passport';

app.use(passport.session());
app.use(passport.initialize());

// routes
app.use('/entry', EntryRouter);
app.use('/auth', AuthRouter);
app.get('/', (req,res) => {
    res.send('hello world!')
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));