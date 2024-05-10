import { Router } from "express";
import User from '../models/user';
import { userType } from "../types";

const UserRouter = Router();

UserRouter.get<userType>('/', (req,res) => {
    User.find({}).then(resp => res.send(resp));
});

export default UserRouter;