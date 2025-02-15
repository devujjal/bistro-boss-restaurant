import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-gules.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { userLogOut } = useAuth();
    const navigate = useNavigate()
    // const location = useLocation()


    useEffect(() => {
        const interceptor = axiosSecure.interceptors.response.use(
            (res) => {
                return res
            },
            async (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    await userLogOut();
                    navigate('/login');
                }

                return Promise.reject(error)
            })

        return () => {
            axiosSecure.interceptors.response.eject(interceptor)
        }

    }, [userLogOut, navigate])


    return axiosSecure
};

export default useAxiosSecure;