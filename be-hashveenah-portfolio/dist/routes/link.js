import express from 'express';
import Link from '../models/links.js';
import { parseLink } from '../utils/parsers.js';
import { isAuth } from '../utils/middleware.js';
import mongoose from 'mongoose';
const LinkRouter = express.Router();
// getting all links
LinkRouter.get('/', (_req, res, next) => {
    Link.find({}).then(reslt => res.json(reslt)).catch((e) => next(e));
});
// adding a new link
// LinkRouter.post('/', isAuth, (req, res, next) => {
LinkRouter.post('/', isAuth, (req, res, next) => {
    try {
        const link = parseLink(req.body);
        const newLink = new Link(link);
        newLink
            .save()
            .then(resp => res.send(resp))
            .catch(e => res.send(e.Message));
    }
    catch (e) {
        next(e);
    }
});
LinkRouter.delete('/:id', isAuth, (req, res, next) => {
    console.log('delete link running');
    const id = new mongoose.Types.ObjectId(req.params.id);
    Link.findByIdAndDelete({ _id: id })
        .then(resp => res.send(resp))
        .catch(e => next(e));
});
LinkRouter.patch('/', isAuth, (req, res, next) => {
    console.log('patch link running');
    const link = parseLink(req.body);
    const id = new mongoose.Types.ObjectId(String(link._id));
    Link.findByIdAndUpdate({ _id: id }, { ...link }, { new: true, upsert: true })
        .then(resp => res.send(resp))
        .catch(e => next(e));
});
export default LinkRouter;
