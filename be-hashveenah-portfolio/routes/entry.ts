import express from 'express';
const EntryRouter = express.Router();
import { ProjectEntry } from '../types';

// get all entries
EntryRouter.get('/', (req, res, next) => {
    // TODO
})

// get specific entry
EntryRouter.get('/:id', (req, res, next) => {
    // TODO
})

// add new entry
EntryRouter.post('/', (req, res, next) => {
  const submission = req.body;

  
})