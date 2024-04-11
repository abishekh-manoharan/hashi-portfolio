import passport from 'passport';
import passportLocal from 'passport-local';
import { verifyPassword } from './authUtils';
import User from '../models/user';
import { doneType, userType } from '../types';

console.log('./auth/passport running')
const LocalStrategy = passportLocal.Strategy;

const customFields = {
    usernameField: 'username',
    passwordField: 'password'
}

const validationFunction = (username: string, password: string, done: doneType) => {
    try {
        User.findOne({ username: username }).then((user) => {
            if (!user) { return done(null, false) } // case when user cannot be found

            const passwordVerification = verifyPassword(password, user.hash!, user.salt!) // returns true if password matches hashed value, false otherwise

            // if verified, return done with user. otherwise done with false
            // we call user.toJSON so that the id field of the user can be populated as specified in the schema options set in ../models/user
            passwordVerification ? done(null, user.toJSON()) : done(null, false); 
        })
    }
    catch (err) {
        done(err)
    }
}

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