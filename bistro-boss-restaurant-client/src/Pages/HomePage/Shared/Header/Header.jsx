import { Link, NavLink } from "react-router";
import { RxAvatar } from "react-icons/rx";
import { useContext, useState } from "react";
import AuthContext from "../../../../Context/AuthContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import useCart from "../../../../Hooks/useCart";
import useAdmin from "../../../../Hooks/useAdmin";
import useAxiosCommon from "../../../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";


const Header = () => {

    const { user, userLogOut } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    // const axiosPublic = useAxiosCommon()

    // const { data: isAdmin = false } = useQuery({
    //     queryKey: ['admin', user?.email],
    //     enabled: !!user?.email, // Ensure query only runs if the user exists
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/user/admin/${user?.email}`);
    //         return res.data?.admin;
    //     }
    // })




    const handleLoggedOut = async () => {
        try {
            await userLogOut();
            toast.success("Successfully logged out");
        } catch (error) {
            if (error) {
                toast.error("Error logging out. Please try again.");
            }
        }
    };



    return (
        <header>

            <div className="bg-black relative">
                <div className="w-full fixed z-10 bg-opacity-60 mx-auto bg-[#1B1B1D] px-4 md:px-14">
                    <div className="flex items-center py-4">
                        <div className="font-cinzel text-[#FFFFFF] w-2/4">
                            <span className="md:text-2xl font-bold">BISTRO BOSS</span><br />
                            <span className="tracking-veryTighter">Restaurant</span>
                        </div>
                        <div className="flex w-2/4 justify-between items-center font-inter font-semibold uppercase">
                            <div className="hidden md:block">
                                <nav className="text-white flex items-center text-sm gap-3">
                                    <NavLink
                                        to={"/"}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#EEFF25]" : "text-white"
                                        }>Home</NavLink>

                                    <NavLink
                                        to={'contact-us'}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#EEFF25]" : "text-white"
                                        }>Contact Us</NavLink>


                                    {
                                        user && isAdmin ? (<NavLink
                                            to={'dashboard/admin-home'}
                                            className={({ isActive }) =>
                                                isActive ? "text-[#EEFF25]" : "text-white"
                                            }
                                        >
                                            Dashboard
                                        </NavLink>) : (
                                            <NavLink
                                                to={'dashboard/user-home'}
                                                className={({ isActive }) =>
                                                    isActive ? "text-[#EEFF25]" : "text-white"
                                                }
                                            >
                                                Dashboard
                                            </NavLink>
                                        )
                                    }
                                    {/* 
                                    {
                                        user && isAdmin === false && <NavLink
                                            to={'dashboard/user-home'}
                                            className={({ isActive }) =>
                                                isActive ? "text-[#EEFF25]" : "text-white"
                                            }
                                        >
                                            Dashboard
                                        </NavLink>
                                    } */}


                                    <NavLink
                                        to={"/our-menu"}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#EEFF25]" : "text-white"
                                        }
                                    >Our Menu</NavLink>

                                    <NavLink
                                        to={'our-shop'}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#EEFF25]" : "text-white"
                                        }
                                    >Our Shop</NavLink>

                                    <Link to={'/dashboard/my-cart'} className="w-12 block">
                                        <div className="relative">
                                            <img src="https://i.ibb.co.com/Wpm30Qk/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" className="w-full" alt="" />
                                            <span className="text-black absolute bottom-0 right-2 ">{cart?.data?.length}</span>
                                        </div>
                                    </Link>
                                </nav>
                            </div>
                            <div>
                                {
                                    user ? (
                                        <button onClick={handleLoggedOut}><FaSignOutAlt color="#FFFFFF" size={35} /> </button>
                                    ) : (
                                        <Link to={'login'}><RxAvatar color="#FFFFFF" size={35} /></Link>
                                    )
                                }

                            </div>

                            <div className="block md:hidden">
                                <button
                                    onClick={() => setToggle(true)}
                                ><IoMenu color="#FFFFFF" size={30} /></button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`absolute ${toggle ? 'block' : 'hidden'} bg-black w-4/5 z-[1] h-screen px-5 py-4 overflow-auto top-0 left-0 z-50`}>
                    <div className="relative font-cinzel text-[#FFFFFF] ">
                        <span className="text-2xl font-bold">BISTRO BOSS</span><br />
                        <span className="tracking-veryTighter">Restaurant</span>

                        <button
                            onClick={() => setToggle(false)}
                            className="absolute top-[-10px] right-0"><IoIosCloseCircleOutline size={30} color="#FFFFFF" /> </button>

                    </div>
                    <div className="font-inter font-semibold uppercase pl-3 mt-10">

                        <nav className="text-white flex flex-col text-sm gap-4">
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    isActive ? "text-[#EEFF25]" : "text-white"
                                }>Home</NavLink>

                            <NavLink
                                to={'contact-us'}
                                className={({ isActive }) =>
                                    isActive ? "text-[#EEFF25]" : "text-white"
                                }>Contact Us</NavLink>

                            <NavLink
                                to={'desboard'}
                                className={({ isActive }) =>
                                    isActive ? "text-[#EEFF25]" : "text-white"
                                }
                            >Deshboard</NavLink>

                            <NavLink
                                to={"/our-menu"}
                                className={({ isActive }) =>
                                    isActive ? "text-[#EEFF25]" : "text-white"
                                }
                            >Our Menu</NavLink>

                            <NavLink
                                to={'our-shop'}
                                className={({ isActive }) =>
                                    isActive ? "text-[#EEFF25]" : "text-white"
                                }
                            >Our Shop</NavLink>

                            {/* <Link className="w-12"><img src="https://i.ibb.co.com/Wpm30Qk/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" className="w-full" alt="" /></Link> */}
                        </nav>


                        <div className="mt-8">
                            <button><RxAvatar color="#FFFFFF" size={35} /></button>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;