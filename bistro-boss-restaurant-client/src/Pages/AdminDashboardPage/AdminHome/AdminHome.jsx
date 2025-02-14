import useAuth from "../../../Hooks/useAuth";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ShapeBarChart from "../../../Components/ShapeBarChart/ShapeBarChart";
import PieChartStatistic from "../../../Components/PieChart/PieChartStatistic";


const AdminHome = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data = {}, isError, error, isLoading } = useQuery({
        queryKey: ['admin-analytic'],
        queryFn: async () => {
            const res = await axiosSecure.get('/analytic');
            return res.data;
        }
    })


    const pieChartData = data?.chartData?.map(item => {
        return { name: item?._id, value: item?.totalAmount }
    }) || [];


    // console.log(pieChartData)

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
        <section className="py-10">
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24 md:py-28">
                    <div>
                        <h2>Hi, <span>{user?.displayName}</span>, Welcome Back</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 font-inter">
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-5 gap-2">
                            <FaMoneyCheckDollar color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">{data?.finalRevenue && parseFloat(data?.finalRevenue[0].totalAmount).toFixed(2)}</h3>
                                <span className="font-normal text-xl text-white">Revenue</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-6 gap-2">
                            <FaUserGroup color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">{data?.customers}</h3>
                                <span className="font-normal text-xl text-white">Customers</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-8 gap-2">
                            <MdProductionQuantityLimits color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">{data?.products}</h3>
                                <span className="font-normal text-xl text-white">Products</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-8 gap-2">
                            <FaCarSide color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">{data?.orders}</h3>
                                <span className="font-normal text-xl text-white">Orders</span>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div>
                        <ShapeBarChart data={data?.chartData} />
                    </div>
                    <div>
                        <PieChartStatistic data={pieChartData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminHome;