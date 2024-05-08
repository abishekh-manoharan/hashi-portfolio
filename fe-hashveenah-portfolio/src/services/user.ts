import axios from "axios";

const BE_URL = import.meta.env.VITE_BE_URL;

const getUser = axios.get(BE_URL+'user/', { withCredentials: true }).then(res => res.data);

export default {
    getUser
}