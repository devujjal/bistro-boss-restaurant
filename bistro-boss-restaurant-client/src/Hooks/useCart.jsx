import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosCommon();
    const { user } = useAuth();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/carts?email=${user?.email}`);
            return result;
        }
    })

    return [cart, refetch];
};

export default useCart;