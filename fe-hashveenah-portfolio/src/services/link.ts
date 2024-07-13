import axios from "axios";
import { Link } from '../types';

const BE_URL = import.meta.env.VITE_BE_URL+'link/';
const options = { withCredentials: true }; // allowing the passing of cookies for auth purposes

const getAllLinks = (): Promise<Link[]> => axios.get(BE_URL, options).then(res => res.data);

const postLink = (link: Link) => axios.post(BE_URL, link, options).then(res => res.data);

const deleteLink = (id: string) => axios.delete(BE_URL+id, options).then(res => res.data);

const patchLink = (link: Link) => axios.patch(BE_URL, link, options).then(res => res.data);

export default {
    getAllLinks,
    postLink,
    deleteLink,
    patchLink
};