import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <svg xmlns="http://www.w3.org/2000/svg" className="spinner-1 w-10 h-10 shrink-0 animate-spin" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.001 5.04a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm0 18.56a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm9.197-14.23a2.32 2.32 0 1 1-2.32-4.02 2.32 2.32 0 0 1 2.32 4.02zM1.956 17.8a2.32 2.32 0 1 0 4.018-2.32 2.32 2.32 0 0 0-4.018 2.32zm16.922.85a2.32 2.32 0 1 1 2.32-4.02 2.32 2.32 0 0 1-2.32 4.02zM1.956 6.2a2.32 2.32 0 1 0 4.018 2.32A2.32 2.32 0 0 0 1.956 6.2z" clipRule="evenodd" data-original="#000000" />
                </svg>
            </div>
        )
    }


    if (user) {
        return children
    }


    return <Navigate to={'/login'} state={{ from: location }} replace />
    // state={location.pathname}
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}


export default PrivateRoute;