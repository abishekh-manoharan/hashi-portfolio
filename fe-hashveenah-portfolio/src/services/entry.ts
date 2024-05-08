import axios from 'axios';
import { ProjectEntry } from '../types';

const BE_URL = import.meta.env.VITE_BE_URL;

// getting all project entries 
const getAllEntries = axios.get<ProjectEntry[]>(BE_URL + 'entry/', { withCredentials: true }).then(res => res.data)

// get a specific entry
const getEntryById = (id: string): Promise<ProjectEntry> => axios.get(BE_URL + 'entry/' + id).then(res => res.data)


export default {
    getAllEntries, 
    getEntryById
}