import { parseMessage } from '../utils/parsers';
import Inbox from '../models/inbox';
import express from 'express';

const InboxRouter = express.Router();

// gets all messages
InboxRouter.get('/', (_req, res) => {
    console.log('getting all inbox entries')
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

// delete a single message
InboxRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Inbox.findByIdAndDelete({id: id})
        .then((result) => {
            res.send(result);
        }).catch((e) => {
            if(e instanceof Error) {
                next(e);
            }
        })
});

export default InboxRouter;