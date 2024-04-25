import axios from 'axios';

const login = (username: string, password: string) => axios.post(import.meta.env.VITE_BE_URL+'auth/login', {username, password}).then(res => res.data);

export default {
    login
}