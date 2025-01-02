import { Outlet } from "react-router";
import AsideBar from "../../Pages/DashboardPage/AsideBar/AsideBar";
import ResMenu from "./ResMenu";
import { useState } from "react";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
    const [toggle, setToggle] = useState(false)
    const [isAdmin] = useAdmin();

    return (
        <div className="flex flex-col md:flex-row h-screen">

            <div className="block md:hidden">
                <ResMenu setToggle={setToggle} />
            </div>
            <div className={`${toggle === true ? 'block' : 'hidden'} md:block w-64 z-10 text-white`}>
                <AsideBar setToggle={setToggle} isAdmin={isAdmin} />
            </div>


            <main className="flex-1">
                <Outlet />
            </main>
        </div>

    );
};

export default Dashboard;