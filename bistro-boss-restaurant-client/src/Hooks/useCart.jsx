import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useCart = () => {
    const axiosSecure = useAxiosCommon();

    const { data: cart = [] } = useQuery({
        queryKey: ['carts' ],
        queryFn: async () => {
            const result = await axiosSecure.get('/carts');
            return result;
        }
    })

    return [cart];
};

export default useCart;