import { parseMessage } from '../utils/parsers';
import { isAuth } from '../utils/middleware';
import Inbox from '../models/inbox';
import express from 'express';
import mongoose from 'mongoose';

const InboxRouter = express.Router();

// gets all messages
InboxRouter.get('/', isAuth, (_req, res) => {
    Inbox.find({}).then(result => res.send(result));
})

// add a new message
InboxRouter.post('/', (req, res, next) => {
    try {
        const message = parseMessage(req.body);

        const newMessage = new Inbox(message);
        newMessage
            .save()
            .then((result) => {
                res.send(result);
            })
    } catch (e) {
        if(e instanceof Error) {
            next(e)
        }
    }
})

// delete a single message based on id
InboxRouter.delete('/:id', isAuth, (req, res, next) => {
    const id = new mongoose.Types.ObjectId(req.params.id);

    Inbox.findByIdAndDelete({_id: id})
        .then((result) => {
            res.send(result);
        }).catch((e) => {
            if(e instanceof Error) {
                next(e);
            }
        })
});

// delete all messages
InboxRouter.delete('/', isAuth, (req, res, next) => {
    Inbox.deleteMany({})
        .then(result => res.send(result))
        .catch((e) => {
            if(e instanceof Error) {
                next(e);
            }
        })
});

export default InboxRouter;