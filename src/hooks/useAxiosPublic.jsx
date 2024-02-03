import axios from "axios";

export const instancePublic = axios.create({
    baseURL: 'https://rent-houses-server-nextjs.vercel.app/api/v1',
})
const useAxiosPublic = () => {
    return instancePublic
};

export default useAxiosPublic;