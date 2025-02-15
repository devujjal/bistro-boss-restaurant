import axios from 'axios'

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-gules.vercel.app',
})

const useAxiosCommon = () => {
    return axiosSecure
};

export default useAxiosCommon;