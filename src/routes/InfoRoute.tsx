import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const InfoRoute = () => {
  const { isLoggedIn, isProfileComplete } = useAuth();
  if (!isLoggedIn) return <Navigate to="/auth/login" />;
  if (isProfileComplete) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default InfoRoute;
