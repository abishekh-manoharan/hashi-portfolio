"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const authUtils_1 = require("../auth/authUtils");
const parsers_1 = require("../utils/parsers");
const AuthRouter = express_1.default.Router();
// register a user post req
AuthRouter.post('/register', (req, res) => {
    console.log('register tunning');
    const newUser = (0, parsers_1.parseNewUser)(req.body);
    try {
        (0, authUtils_1.generateUser)(newUser.username, newUser.password);
        res.status(200).send('user generated');
    }
    catch (_a) {
        res.status(401).send('unable to save user.');
    }
});
// login post req
AuthRouter.post('/login', passport_1.default.authenticate('local', { successRedirect: '/auth/login-success', failureRedirect: '/auth/login-failure' }));
AuthRouter.get('/login-success', (req, res) => {
    res.json('success');
});
AuthRouter.get('/login-failure', (req, res) => {
    res.json('failure');
});
// log out
AuthRouter.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err)
            res.send('err: ' + err.message);
        res.send('success');
    });
});
// check authentication status
AuthRouter.get('/status', (req, res) => {
    const status = req.isAuthenticated();
    res.send(status);
});
exports.default = AuthRouter;
