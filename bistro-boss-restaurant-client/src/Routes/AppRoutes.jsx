import { Route, Routes } from "react-router";
import Home from "../Pages/HomePage/Home/Home";
import Root from "../Root/Root";
import MenuPage from "../Pages/MenuPage/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="our-menu" element={<MenuPage />} />
                <Route path="our-shop" element={<ShopPage />} />
            </Route>
        </Routes>
    )
};

export default AppRoutes;