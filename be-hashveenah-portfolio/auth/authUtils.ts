
import User from '../models/user';
import crypto from 'node:crypto';
import {  doneType } from '../types';
// import { ExistingUser, newUser } from '../types';

// hashes the given password and compares is to the stored hashed value. returns true if matching, false otherwise.
const verifyPassword = (password: string, hash: string, salt: string): boolean => {
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return genHash === hash;
}

// generates a salt and hashed version of the password, then stores into the db
const generateUser = (username: string, password: string) => {
    // generate salt 
    const salt = crypto.randomBytes(32).toString('hex');

    // generate hash
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    // save username, hash, salt
    const newUser = new User({
        username: username,
        hash: genHash,
        salt: salt
    });

    newUser.save().then((user) => {
        if (!user) {
            throw new Error('unable to save user')
        }
    })
}

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

export {
    verifyPassword,
    generateUser,
    customFields,
    validationFunction
};