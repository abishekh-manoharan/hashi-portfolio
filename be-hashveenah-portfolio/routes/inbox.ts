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
InboxRouter.post('/', (req, res) => {
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
            res.status(500).send('error: ' + e.message);
        } else {
            res.status(500).send('unknown error occured')
        }
    }

})

export default InboxRouter;