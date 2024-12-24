import { Outlet } from "react-router";
import Header from "../Pages/HomePage/Shared/Header/Header";
import Footer from "../Pages/HomePage/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;