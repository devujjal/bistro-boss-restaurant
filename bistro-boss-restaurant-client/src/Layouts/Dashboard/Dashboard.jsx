import { Outlet } from "react-router";
import AsideBar from "../../Pages/DashboardPage/AsideBar/AsideBar";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 bg-gray-800 text-white">
                <AsideBar />
            </div>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>

    );
};

export default Dashboard;