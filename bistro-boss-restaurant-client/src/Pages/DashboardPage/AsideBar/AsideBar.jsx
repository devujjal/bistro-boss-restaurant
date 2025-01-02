import { MdHome } from "react-icons/md";
import { PiCalendarCheckFill } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { MdOutlinePadding } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import PropTypes from "prop-types";


const AsideBar = ({ setToggle, isAdmin }) => {



    return (
        <aside
            className="bg-[#D1A054] h-screen fixed top-0 left-0 w-64 py-6 px-4 font-cinzel flex flex-col overflow-auto">
            <div className="relative">
                <div className="font-cinzel text-[#151515] w-[180px] mb-5">
                    <h2 className="md:text-2xl font-bold">BISTRO BOSS</h2>
                    <span className="tracking-veryTighter font-medium">Restaurant</span>
                </div>

                <div
                    className="absolute block md:hidden -right-3 top-2 h-6 w-6 p-[6px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full">
                    <button onClick={() => setToggle(false)}><IoClose /></button>
                </div>
            </div>

            <div>

                <ul className="space-y-1 mt-6 border-b-2 border-white pb-5">
                    {
                        isAdmin === true ? <>
                            <AdminMenu />

                        </> : <>
                            <li>
                                <NavLink
                                    to={'/dashboard/user-home'}
                                    className="text-black text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                                    <MdHome size={27} color="#151515" className="mr-2" />
                                    <span className="text-[#151515] font-medium">User Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                                    <PiCalendarCheckFill size={25} color="#151515" className="mr-2" />

                                    <span className="text-[#151515] font-medium">RESERVAIION</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/payment-history'}
                                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                                    <MdPayments size={25} color="#151515" className="mr-2" />

                                    <span className="text-[#151515] font-medium">PAYMENT HISTORY</span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/my-cart'}
                                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                                    <FaCartArrowDown size={25} color="#151515" className="mr-2" />

                                    <span className="text-[#151515] font-medium">MY CART</span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                                    <MdRateReview size={25} color="#151515" className="mr-2" />

                                    <span className="text-[#151515] font-medium">ADD REVIEW</span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                                    <MdOutlinePadding size={25} color="#151515" className="mr-2" />

                                    <span className="text-[#151515] font-medium">My Booking</span>

                                </NavLink>
                            </li>
                        </>}
                </ul>



                <ul className="space-y-1 mt-6 border-b-2 border-white pb-5">
                    <li>
                        <Link to={'/'}
                            className="text-black text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                            <MdHome size={27} color="#151515" className="mr-2" />
                            <span className="text-[#151515] font-medium">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/our-menu'}
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                            <IoMenu size={25} color="#151515" className="mr-2" />

                            <span className="text-[#151515] font-medium">MENU</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/our-shop'}
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                            <FaShoppingBag size={22} color="#151515" className="mr-2" />

                            <span className="text-[#151515] font-medium">SHOP</span>

                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                            <CgMail size={25} color="#151515" className="mr-2" />

                            <span className="text-[#151515] font-medium">CONTACT</span>

                        </Link>
                    </li>

                </ul>




                <ul className="space-y-3 mt-3">
                    <li>
                        <a
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                                viewBox="0 0 512 512">
                                <path
                                    d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                    data-original="#000000" />
                            </svg>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                                viewBox="0 0 6.35 6.35">
                                <path
                                    d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                    data-original="#000000" />
                            </svg>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

AsideBar.propTypes = {
    setToggle: PropTypes.func,
    isAdmin: PropTypes.bool
}

export default AsideBar;