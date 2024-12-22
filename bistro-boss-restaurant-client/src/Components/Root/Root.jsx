import { Outlet } from "react-router";
import Header from "../../Pages/HomePage/Shared/Header/Header";

const Root = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>

        </div>
    );
};

export default Root;