import axios from 'axios';
import { ProjectEntry } from '../types';

const BE_URL = import.meta.env.VITE_BE_URL;

// getting all project entries 
const getAllEntries = axios.get<ProjectEntry[]>(BE_URL+'entry/').then(res => res.data)

export default {
    getAllEntries
}