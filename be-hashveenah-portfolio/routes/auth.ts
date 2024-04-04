import express from 'express';
import passport from 'passport';

const AuthRouter = express.Router();

AuthRouter.post('/login', passport.authenticate('local', { successRedirect: '/login-success', failureRedirect: '/login-failure'}));

AuthRouter.get('/login-success', (req, res, next) => {
  res.json('success')  
})

AuthRouter.get('/login-failure', (req, res, next) => {
  res.json('failure')  
})

module.exports = AuthRouter;