import { Outlet } from "react-router";
import AsideBar from "../../Pages/DashboardPage/AsideBar/AsideBar";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 bg-gray-800 text-white">
                <AsideBar />
            </div>
            <div className="flex-1 bg-gray-100 p-4">
                <Outlet />
            </div>
        </div>

    );
};

export default Dashboard;