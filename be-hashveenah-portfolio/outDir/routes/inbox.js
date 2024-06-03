"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parsers_1 = require("../utils/parsers");
const middleware_1 = require("../utils/middleware");
const inbox_1 = __importDefault(require("../models/inbox"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const InboxRouter = express_1.default.Router();
// gets all messages
InboxRouter.get('/', middleware_1.isAuth, (_req, res) => {
    inbox_1.default.find({}).then(result => res.send(result));
});
// add a new message
InboxRouter.post('/', (req, res, next) => {
    try {
        const message = (0, parsers_1.parseMessage)(req.body);
        const newMessage = new inbox_1.default(message);
        newMessage
            .save()
            .then((result) => {
            res.send(result);
        });
    }
    catch (e) {
        if (e instanceof Error) {
            next(e);
        }
    }
});
// delete a single message based on id
InboxRouter.delete('/:id', middleware_1.isAuth, (req, res, next) => {
    const id = new mongoose_1.default.Types.ObjectId(req.params.id);
    inbox_1.default.findByIdAndDelete({ _id: id })
        .then((result) => {
        res.send(result);
    }).catch((e) => {
        if (e instanceof Error) {
            next(e);
        }
    });
});
// delete all messages
InboxRouter.delete('/', middleware_1.isAuth, (req, res, next) => {
    inbox_1.default.deleteMany({})
        .then(result => res.send(result))
        .catch((e) => {
        if (e instanceof Error) {
            next(e);
        }
    });
});
exports.default = InboxRouter;
