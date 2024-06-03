import express from 'express';
import passport from 'passport';
import { generateUser } from '../auth/authUtils';
import { parseNewUser } from '../utils/parsers';
const AuthRouter = express.Router();
// register a user post req
AuthRouter.post('/register', (req, res) => {
    console.log('register tunning');
    const newUser = parseNewUser(req.body);
    try {
        generateUser(newUser.username, newUser.password);
        res.status(200).send('user generated');
    }
    catch {
        res.status(401).send('unable to save user.');
    }
});
// login post req
AuthRouter.post('/login', passport.authenticate('local', { successRedirect: '/auth/login-success', failureRedirect: '/auth/login-failure' }));
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
export default AuthRouter;
