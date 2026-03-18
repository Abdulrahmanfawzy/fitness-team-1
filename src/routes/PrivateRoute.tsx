// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isLoggedIn = false;

    return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;