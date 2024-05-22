import axios from 'axios';
import { ProjectEntry, ProjectEntryWithImageKey } from '../types';

const BE_URL = import.meta.env.VITE_BE_URL;

// getting all project entries 
const getAllEntries = () => axios.get<ProjectEntry[] | ProjectEntryWithImageKey[]>(BE_URL + 'entry/', { withCredentials: true, headers: { 'Cache-Control': 'no-cache' } }).then(res => res.data)

// get a specific entry
const getEntryById = (id: string): Promise<ProjectEntry> => axios.get(BE_URL + 'entry/' + id).then(res => res.data)

// patch an entry 
const patchEntry = (entry: ProjectEntry) => axios.patch(BE_URL + 'entry/patch', entry, { withCredentials: true }).then(res => res.data);

export default {
    getAllEntries,
    getEntryById,
    patchEntry
}