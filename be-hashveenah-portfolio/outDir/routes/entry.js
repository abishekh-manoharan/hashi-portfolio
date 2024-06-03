"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const entry_1 = __importDefault(require("../models/entry"));
const parsers_1 = require("../utils/parsers");
const middleware_1 = require("../utils/middleware");
const EntryRouter = express_1.default.Router();
// get all entries
EntryRouter.get('/', (req, res) => {
    console.log('getting all entries');
    entry_1.default.find({})
        .then(result => {
        result = result.map(res => {
            return res.toJSON();
        });
        res.send(result);
    })
        .catch(err => res.status(400).send(err));
});
// get specific entry
EntryRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    entry_1.default.findById(id).then(result => res.json(result)).catch((err) => res.status(404).send(err.message));
});
// add new entry
EntryRouter.post('/', middleware_1.isAuth, (req, res) => {
    console.log(req.body);
    // ensure the format of the post request is correct
    // type the body accordingly
    const body = (0, parsers_1.parseNewProjectEntry)(req.body);
    const newEntry = new entry_1.default(Object.assign({}, body));
    newEntry.save()
        .then(entry => res.send(entry))
        .catch((err) => {
        res.status(404).send(err.message);
    });
});
// update entries
EntryRouter.patch('/patch', middleware_1.isAuth, (req, res) => {
    const body = req.body;
    console.log('patch');
    // console.log(body);
    entry_1.default.findByIdAndUpdate({ _id: body.id }, Object.assign({}, body), { new: true })
        .then(result => {
        res.send(result);
    })
        .catch(e => {
        console.log("error in patch " + e.name);
    });
    entry_1.default.findById(body.id)
        .then(res => {
        if (!res) {
            const newEntry = new entry_1.default({ _id: body.id, name: body.name, date: body.date, imgSrc: body.imgSrc, medium: body.medium, about: body.about });
            newEntry.save();
        }
        console.log('entry saved successfully');
    })
        .catch((e) => {
        console.log("entry not saved");
        console.log("entry not saved" + e.message);
    });
});
// delete entry
EntryRouter.delete('/delete/:id', middleware_1.isAuth, (req, res) => {
    // const body = req.body;
    const id = req.params.id;
    entry_1.default.findByIdAndDelete({ _id: id })
        .then(result => result ? res.send('deletion successful') : res.send('error in deletion'))
        .catch(e => console.log(e.message));
});
exports.default = EntryRouter;
