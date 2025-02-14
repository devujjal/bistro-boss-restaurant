import useAuth from "../../../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const DashBoardHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data = {}, isError, error, isLoading } = useQuery({
        queryKey: ['user-statistic'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-analytic/${user?.email}`);
            return res.data;
        }
    })


    // console.log(data)

    if (isError) {
        return toast.error(error.message)
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <svg xmlns="http://www.w3.org/2000/svg" className="spinner-1 w-10 h-10 shrink-0 animate-spin" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.001 5.04a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm0 18.56a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm9.197-14.23a2.32 2.32 0 1 1-2.32-4.02 2.32 2.32 0 0 1 2.32 4.02zM1.956 17.8a2.32 2.32 0 1 0 4.018-2.32 2.32 2.32 0 0 0-4.018 2.32zm16.922.85a2.32 2.32 0 1 1 2.32-4.02 2.32 2.32 0 0 1-2.32 4.02zM1.956 6.2a2.32 2.32 0 1 0 4.018 2.32A2.32 2.32 0 0 0 1.956 6.2z" clipRule="evenodd" data-original="#000000" />
                </svg>
            </div>
        )
    }


    return (
        <section>
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24 md:py-28">
                    <div>
                        <h2 className='font-inter text-md xl:text-xl'>Hi, <span>{user?.displayName}</span>, Welcome Back</h2>
                    </div>


                    <div className="flex xl:flex-row flex-col mx-auto border mt-10 rounded-lg shadow-lg">
                        {/* Left Side - Profile */}
                        <div className="w-full xl:w-1/2 bg-orange-100 flex border-r-2 border-[#D1A054] flex-col items-center justify-center py-14">
                            <div className="w-28 h-28 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white">
                                <img src={user?.photoURL} className="w-full" alt="" />
                            </div>
                            <p className="mt-4 text-lg font-semibold text-gray-800">{user?.displayName}</p>
                        </div>

                        {/* Right Side - Activities */}
                        <div className="w-full xl:w-1/2 bg-yellow-100 py-14 px-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">YOUR ACTIVITIES</h3>
                            <ul className="space-y-2">
                                <li className="text-blue-600 uppercase flex items-center">
                                    <span className="mr-2"><FaShoppingCart />
                                    </span> purchase order: <span className="ml-1">{data?.purchaseOrder.length > 0 ? data?.purchaseOrder[0].purchaseOrderDone : 0}</span>
                                </li>
                                <li className="text-blue-500 uppercase flex items-center">
                                    <span className="mr-2"><IoIosStar />
                                    </span> Reviews: <span className="ml-1">0</span>
                                </li>
                                <li className="text-orange-500 uppercase flex items-center">
                                    <span className="mr-2"><FaCalendarCheck />
                                    </span> Bookings: <span className="ml-1">0</span>
                                </li>
                                <li className="text-red-500 uppercase flex items-center">
                                    <span className="mr-2"><MdOutlinePayment />
                                    </span> Payment: <span className="ml-1">{data?.payment.length > 0 ? data?.payment[0].paymentDone : 0}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashBoardHome;