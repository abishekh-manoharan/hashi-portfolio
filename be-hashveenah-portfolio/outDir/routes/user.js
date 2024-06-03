import { Router } from "express";
import User from '../models/user';
import { isAuth } from "../utils/middleware";
const UserRouter = Router();
UserRouter.get('/', (req, res) => {
    User.find({}).then(resp => res.send(resp));
});
// route used to update the 'art' and 'about' properties of a user
UserRouter.patch('/update', isAuth, (req, res) => {
    const body = req.body;
    User.find({}).then(resp => {
        const user = resp[0];
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
