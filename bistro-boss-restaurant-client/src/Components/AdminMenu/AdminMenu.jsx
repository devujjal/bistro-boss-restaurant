import { MdHome } from "react-icons/md";
import { NavLink } from "react-router";
import { FaListUl } from "react-icons/fa6";
import { FaBook, FaUsers } from "react-icons/fa";
import { LiaUtensilsSolid } from "react-icons/lia";


const AdminMenu = () => {
    return (
        <>
            <li>
                <NavLink
                    to={'/dashboard/admin-home'}
                    className="text-black text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                    <MdHome size={27} color="#151515" className="mr-2" />
                    <span className="text-[#151515] font-medium">Admin Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/dashboard/add-item'}
                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                    <LiaUtensilsSolid size={25} color="#151515" className="mr-2" />

                    <span className="text-[#151515] font-medium">ADD ITEMS</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/dashboard/manage-items'}
                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                    <FaListUl size={25} color="#151515" className="mr-2" />

                    <span className="text-[#151515] font-medium">MANAGE ITEMS</span>

                </NavLink>
            </li>
            <li>
                <NavLink
                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                    <FaBook size={25} color="#151515" className="mr-2" />

                    <span className="text-[#151515] font-medium">MANAGE BOOKING</span>

                </NavLink>
            </li>
            <li>
                <NavLink to={'/dashboard/all-users'}
                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all cursor-pointer">
                    <FaUsers size={25} color="#151515" className="mr-2" />

                    <span className="text-[#151515] font-medium">ALL USERS</span>

                </NavLink>
            </li>
        </>
    );
};

export default AdminMenu;