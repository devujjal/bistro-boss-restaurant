import { Link, NavLink } from "react-router";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


const Header = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <header>
            <div className="bg-black relative">
                <div className="container mx-auto px-3">
                    <div className="flex items-center py-4">
                        <div className="font-cinzel text-[#FFFFFF] w-2/4">
                            <span className="md:text-2xl font-bold">BISTRO BOSS</span><br />
                            <span className="tracking-veryTighter">Restaurant</span>
                        </div>
                        <div className="flex w-2/4 justify-between items-center font-inter font-semibold uppercase">
                            <div className="hidden md:block">
                                <nav className="text-white flex items-center text-sm gap-3">
                                    <NavLink to={""}>Home</NavLink>
                                    <NavLink to={""}>Contact Us</NavLink>
                                    <NavLink to={""}></NavLink>
                                    <NavLink to={""}>Deshboard</NavLink>
                                    <NavLink to={""}>Our Menu</NavLink>
                                    <NavLink to={""}>Our Shop</NavLink>
                                    <Link className="w-12 block"><img src="https://i.ibb.co.com/Wpm30Qk/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" className="w-full" alt="" /></Link>
                                </nav>
                            </div>
                            <div>
                                <button><RxAvatar color="#FFFFFF" size={35} /></button>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    onClick={() => setToggle(true)}
                                ><IoMenu color="#FFFFFF" size={30} /></button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`absolute ${toggle ? 'block' : 'hidden'} bg-black w-4/5 h-screen px-5 py-4 overflow-auto top-0 left-0`}>
                    <div className="relative font-cinzel text-[#FFFFFF] ">
                        <span className="text-2xl font-bold">BISTRO BOSS</span><br />
                        <span className="tracking-veryTighter">Restaurant</span>

                        <button 
                        onClick={() => setToggle(false)}
                        className="absolute top-[-10px] right-0"><IoIosCloseCircleOutline size={30} color="#FFFFFF" /> </button>

                    </div>
                    <div className="font-inter font-semibold uppercase pl-3 mt-10">
                        <nav className="text-white flex flex-col text-sm gap-4">
                            <NavLink to={""}>Home</NavLink>
                            <NavLink to={""}>Contact Us</NavLink>
                            <NavLink to={""}>Deshboard</NavLink>
                            <NavLink to={""}>Our Menu</NavLink>
                            <NavLink to={""}>Our Shop</NavLink>
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