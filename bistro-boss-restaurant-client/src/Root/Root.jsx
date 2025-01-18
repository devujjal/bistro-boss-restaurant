import { Outlet } from "react-router";
import Header from "../Pages/HomePage/Shared/Header/Header";
import Footer from "../Pages/HomePage/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;