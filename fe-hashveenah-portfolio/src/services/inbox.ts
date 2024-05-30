import axios from 'axios';
import { Message } from '../types';

const BE_URL = import.meta.env.VITE_BE_URL+'inbox/';
const options = { withCredentials: true }; // allowing the passing of cookies for auth purposes

// sending a messages
export const sendMessage = (messageDetails: Message) => axios.post(BE_URL, messageDetails, options).then(res => res.data);

// getting all messages
export const getAllMessages = () => axios.get(BE_URL, options).then(res => res.data);

// deleting all messages
export const deleteAllMessages = () => axios.delete(BE_URL, options).then(res => res.data);

// deleting a single message 
export const deleteOneMessage = (id: string) => axios.delete(BE_URL + id).then(res => res.data);