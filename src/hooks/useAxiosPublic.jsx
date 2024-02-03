import axios from "axios";

export const instancePublic = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
})
const useAxiosPublic = () => {
    return instancePublic
};

export default useAxiosPublic;