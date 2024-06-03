"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const middleware_1 = require("../utils/middleware");
const UserRouter = (0, express_1.Router)();
UserRouter.get('/', (req, res) => {
    user_1.default.find({}).then(resp => res.send(resp));
});
// route used to update the 'art' and 'about' properties of a user
UserRouter.patch('/update', middleware_1.isAuth, (req, res) => {
    const body = req.body;
    user_1.default.find({}).then(resp => {
        const user = resp[0];
        // updating the about and art properties
        user.about = body.about;
        user.art = body.art;
        const updatedUser = new user_1.default(user);
        updatedUser.save().then((user) => {
            res.json(user).status(200);
        });
    }).catch(err => {
        res.status(400).send(err);
    });
    console.log(body);
});
exports.default = UserRouter;
