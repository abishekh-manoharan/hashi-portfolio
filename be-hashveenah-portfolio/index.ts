import express from 'express';
import sessions from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';
import EntryRouter from './routes/entry.js';
import AuthRouter from './routes/auth.js';
import UserRouter from './routes/user.js';
import InboxRouter from './routes/inbox.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passportLocal from 'passport-local';
import { validationFunction, customFields } from './auth/authUtils.js';
import User from './models/user.js';
import { userType } from './types.js';
import { errorHandler } from './utils/middleware.js';
import LinkRouter from './routes/link.js';


const app = express();

// initislize env variables
dotenv.config();

// connecting to mongodb
if (typeof (process.env.MONGO_URL) === 'string') {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => { console.log('connected to mongodb') });
}
console.log('process.env.FE_URL');
console.log(process.env.FE_URL);
app.use(express.static('fe-dist'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: ['http://localhost:5173', process.env.FE_URL as string, 'https://hashveenah.com', 'https://www.hashveenah.com', 'https://hashi-portfolio.onrender.com'],
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH", "DELETE"],
        credentials: true,
    })
);
//setting up session
const store = mongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName: 'session'
})

const session = sessions({
    secret: process.env.SECRET_KEY!,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        sameSite: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    }
})

app.use(session);



// setting up passport
const LocalStrategy = passportLocal.Strategy;
const localStrategy = new LocalStrategy(customFields, validationFunction);
passport.use(localStrategy);

passport.serializeUser((user: userType, done) => {
    done(null, user.id);
});

passport.deserializeUser((user_id, done) => {
    User.findById(user_id)
        .then((user) => {
            done(null, user)
        })
        .catch((err) => done(err))
});

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/entry', EntryRouter);
app.use('/auth', AuthRouter);
app.use('/user', UserRouter);
app.use('/inbox', InboxRouter);
app.use('/link', LinkRouter);
app.get('/', (req, res) => {
    res.send('hello world!')
})
// handle all other requests to redirect to the home page
app.all('*', (req,res) => {
    if(process.env.FE_URL) res.redirect(process.env.FE_URL);
})
app.use(errorHandler)
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));


