'use client'
import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
})

const useAxios = () => {
    return instance
};

export default useAxios;