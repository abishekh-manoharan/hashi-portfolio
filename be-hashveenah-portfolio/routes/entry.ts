import express from 'express';
import Entry from '../models/entry';
import { parseNewProjectEntry } from '../utils/parsers';

const EntryRouter = express.Router();

// get all entries
// EntryRouter.get('/', (req, res, next) => {
//     // TODO
// })

// get specific entry
// EntryRouter.get('/:id', (req, res, next) => {
//     // TODO
// })

// add new entry
EntryRouter.post('/', (req, res) => {
  console.log(req.body)
  // ensure the format of the post request is correct
  // type the body accordingly
  const body = parseNewProjectEntry(req.body); 

  const newEntry = new Entry({...body});
  newEntry.save()
    .then(entry => res.send(entry))
    .catch((err: Error) => {
      res.status(404).send(err.message)
    })
})

export default EntryRouter;