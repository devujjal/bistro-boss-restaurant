import useAuth from "../../../Hooks/useAuth";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";



const AdminHome = () => {
    const { user } = useAuth();

    return (
        <section>
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24 md:py-28">
                    <div>
                        <h2>Hi, <span>{user?.displayName}</span>, Welcome Back</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 font-inter">
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-8 gap-2">
                            <FaMoneyCheckDollar color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">1000</h3>
                                <span className="font-normal text-xl text-white">Revenue</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-8 gap-2">
                            <FaUserGroup color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">1000</h3>
                                <span className="font-normal text-xl text-white">Customers</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-8 gap-2">
                            <MdProductionQuantityLimits color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">1000</h3>
                                <span className="font-normal text-xl text-white">Products</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-between py-4 rounded-md px-8 gap-2">
                            <FaCarSide color='#FFFFFF' size={40} />
                            <div className="text-center">
                                <h3 className="text-xl md:text-4xl font-semibold text-white">1000</h3>
                                <span className="font-normal text-xl text-white">Orders</span>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminHome;