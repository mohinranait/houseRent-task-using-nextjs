'use client'
import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://rent-houses-server-nextjs.vercel.app/api/v1',
    withCredentials: true
})

const useAxios = () => {
    return instance
};

export default useAxios;