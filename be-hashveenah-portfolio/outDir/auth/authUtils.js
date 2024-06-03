"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationFunction = exports.customFields = exports.generateUser = exports.verifyPassword = void 0;
const user_1 = __importDefault(require("../models/user"));
const node_crypto_1 = __importDefault(require("node:crypto"));
// import { ExistingUser, newUser } from '../types';
// hashes the given password and compares is to the stored hashed value. returns true if matching, false otherwise.
const verifyPassword = (password, hash, salt) => {
    const genHash = node_crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return genHash === hash;
};
exports.verifyPassword = verifyPassword;
// generates a salt and hashed version of the password, then stores into the db
const generateUser = (username, password) => {
    // generate salt 
    const salt = node_crypto_1.default.randomBytes(32).toString('hex');
    // generate hash
    const genHash = node_crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    // save username, hash, salt
    const newUser = new user_1.default({
        username: username,
        hash: genHash,
        salt: salt
    });
    newUser.save().then(user => {
        if (!user) {
            throw new Error('unable to save user');
        }
    });
};
exports.generateUser = generateUser;
const customFields = {
    usernameField: 'username',
    passwordField: 'password'
};
exports.customFields = customFields;
const validationFunction = (username, password, done) => {
    try {
        user_1.default.findOne({ username: username }).then((user) => {
            if (!user) {
                return done(null, false);
            } // case when user cannot be found
            const passwordVerification = verifyPassword(password, user.hash, user.salt); // returns true if password matches hashed value, false otherwise
            // if verified, return done with user. otherwise done with false
            // we call user.toJSON so that the id field of the user can be populated as specified in the schema options set in ../models/user
            passwordVerification ? done(null, user.toJSON()) : done(null, false);
        });
    }
    catch (err) {
        done(err);
    }
};
exports.validationFunction = validationFunction;
