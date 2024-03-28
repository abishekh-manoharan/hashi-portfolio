import express from 'express';
import passport from 'passport';

const AuthRouter = express.Router();

AuthRouter.post('/login', passport.authenticate('local', { }));

module.exports = AuthRouter;