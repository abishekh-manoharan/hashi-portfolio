import axios from 'axios';

const login = (username: string, password: string) => axios.post(import.meta.env.VITE_BE_URL+'auth/login', {username, password}, { withCredentials: true }).then(res => res.data);

const logout = () => axios.post(import.meta.env.VITE_BE_URL+'auth/logout').then(res => res.data);

export default {
    login,
    logout
}