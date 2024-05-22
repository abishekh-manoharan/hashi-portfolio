import axios from "axios";
import { UserUpdateData } from "../types";

const BE_URL = import.meta.env.VITE_BE_URL;

const getUser = axios.get(BE_URL+'user/', { withCredentials: true }).then(res => res.data);

const patchUser = (data: UserUpdateData) => axios.patch(BE_URL+'user/update', data, { withCredentials: true }).then(res => res.data);

export default {
    getUser,
    patchUser
}