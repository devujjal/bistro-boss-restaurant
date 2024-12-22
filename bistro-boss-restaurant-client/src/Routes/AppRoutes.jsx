import { Route, Routes } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/HomePage/Home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
};

export default AppRoutes;