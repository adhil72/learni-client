import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:50000/v1"
})


instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config
})