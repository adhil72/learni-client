import axios from "axios";

export const instance = axios.create({
    baseURL: "https://learni-api.onrender.com/v1"
})


instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config
})