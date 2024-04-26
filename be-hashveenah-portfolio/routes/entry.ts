import express from 'express';
import Entry from '../models/entry';
import { parseNewProjectEntry } from '../utils/parsers';
import { isAuth } from '../utils/middleware';

const EntryRouter = express.Router();

// get all entries
EntryRouter.get('/', (req, res) => {
  req.isAuthenticated() ? console.log('authenticated') : console.log('not authenticated');
  Entry.find({})
    .then(result => {
      result = result.map(res => {
        return res.toJSON()
      })
      res.send(result)
    })
    .catch(err => res.status(400).send(err));
})

// get specific entry
EntryRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  Entry.findById(id).then(result => res.json(result)).catch((err) => res.status(404).send(err.message));
})

// add new entry
EntryRouter.post('/', isAuth, (req, res) => {
  console.log(req.body)
  // ensure the format of the post request is correct
  // type the body accordingly
  const body = parseNewProjectEntry(req.body);

  const newEntry = new Entry({ ...body });
  newEntry.save()
    .then(entry => res.send(entry))
    .catch((err: Error) => {
      res.status(404).send(err.message)
    })
})

export default EntryRouter;