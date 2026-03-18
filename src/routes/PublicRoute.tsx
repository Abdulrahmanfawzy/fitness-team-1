import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const isLoggedIn = false;

    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;