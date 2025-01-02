import { Route, Routes } from "react-router";
import Home from "../Pages/HomePage/Home/Home";
import Root from "../Root/Root";
import MenuPage from "../Pages/MenuPage/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyCart from "../Pages/DashboardPage/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/AdminDashboardPage/AllUsers/AllUsers";
import AddItem from "../Pages/AdminDashboardPage/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/AdminDashboardPage/ManageItems/ManageItems";
import UpdatePage from "../Pages/AdminDashboardPage/UpdatePage/UpdatePage";
import Payment from "../Pages/DashboardPage/Payment/Payment";
import PaymentHistory from "../Pages/DashboardPage/PaymentHistory/PaymentHistory";
import DashBoardHome from "../Pages/DashboardPage/DashBoardHome/DashBoardHome";
import AdminHome from "../Pages/AdminDashboardPage/AdminHome/AdminHome";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="our-menu" element={<MenuPage />} />
                <Route path="our-shop" element={<ShopPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>

                <Route path="user-home" element={<DashBoardHome />} />
                <Route path="my-cart" element={<MyCart />} />
                <Route path="payment" element={<Payment />} />
                <Route path="payment-history" element={<PaymentHistory />} />



                {/* Admin menu */}
                <Route path="admin-home" element={<AdminRoute><AdminHome /></AdminRoute>} />
                <Route path="add-item" element={<AdminRoute><AddItem /></AdminRoute>} />
                <Route path="manage-items" element={<AdminRoute><ManageItems /></AdminRoute>} />
                <Route path="update/:id" element={<AdminRoute><UpdatePage /></AdminRoute>} />
                <Route path="all-users" element={<AdminRoute><AllUsers /></AdminRoute>} />
            </Route>
        </Routes>
    )
};

export default AppRoutes;