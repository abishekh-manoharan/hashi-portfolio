import express from 'express';
import Entry from '../models/entry';
import { parseNewProjectEntry } from '../utils/parsers';
import { isAuth } from '../utils/middleware';

const EntryRouter = express.Router();

// get all entries
EntryRouter.get('/', (req, res) => {
  console.log('getting all entries')
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

// update entries
EntryRouter.patch('/patch', isAuth, (req, res) => {
  const body = req.body;
  console.log('patch')
  // console.log(body);

  Entry.findByIdAndUpdate({ _id: body.id }, { ...body }, { new: true })
    .then(result => {
      res.send(result)
    })
    .catch(e => {
      console.log("error in patch " + e.name);
    });

  Entry.findById(body.id)
    .then(res => {
      if (!res) {
        const newEntry = new Entry({ _id: body.id, name: body.name, date: body.date, imgSrc: body.imgSrc, medium: body.medium, about: body.about });
        newEntry.save();
      }
      console.log('entry saved successfully')
    })
    .catch((e) => {
      console.log("entry not saved")
      console.log("entry not saved" + e.message)
    });
})

// delete entry
EntryRouter.delete('/delete/:id', isAuth, (req, res) => {
  // const body = req.body;
  const id = req.params.id;

  Entry.findByIdAndDelete({ _id: id })
    .then(result => result ? res.send('deletion successful') : res.send('error in deletion'))
    .catch(e => console.log(e.message))
})

export default EntryRouter;