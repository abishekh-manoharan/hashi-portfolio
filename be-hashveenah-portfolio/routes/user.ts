import { Router } from "express";
import User from '../models/user.js';
import { ExistingUser, userType } from "../types.js";
import { isAuth } from "../utils/middleware.js";

const UserRouter = Router();

UserRouter.get<userType>('/', (req,res) => {
    User.find({}).then(resp => res.send(resp));
});


// route used to update the 'art' and 'about' properties of a user
UserRouter.patch('/update', isAuth, (req, res) => {
    const body = req.body;
    
    User.find({}).then(resp => {
        const user: ExistingUser = resp[0] as ExistingUser;    
        // updating the about and art properties
        user.about = body.about;
        user.art = body.art;

        const updatedUser = new User(user);
        updatedUser.save().then((user) => {
            res.json(user).status(200);
        });
    }).catch(err => {
        res.status(400).send(err);
    });
    
    console.log(body);
});

export default UserRouter;