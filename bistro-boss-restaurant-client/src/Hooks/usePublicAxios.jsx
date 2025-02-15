import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-gules.vercel.app',
    withCredentials: true
})

const usePublicAxios = () => {
    return publicAxios;
};

export default usePublicAxios;