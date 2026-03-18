// router.tsx

import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Trainers from "@/pages/trainers/Trainers";
import Packages from "@/pages/packages/Packages";
import PrivateRoute from "./PrivateRoute";
import Booking from "@/pages/booking/Booking";
import ContactUs from "@/pages/contact/ContactUs";
import Login from "@/pages/auth/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <PublicRoute />,
        children: [
            { path: "login", element: <Login /> },
            // { path: "signup", element: <SignUp /> },
            // { path: "forgot-password", element: <ForgotPassword /> },
            // { path: "info", element: <Info /> },
        ],
    },
    {
        path: "/trainers",
        element: <Trainers />,
    },
    {
        path: "/trainer/:id",
        // element: <TrainerProfile />,
    },
    {
        path: "/packages",
        element: <Packages />,
    },
    {
        path: "/booking",
        element: <PrivateRoute />, // هنا في المستقبل تحمي الصفحة
        children: [{ path: "", element: <Booking /> }],
    },
    {
        path: "/contact-us",
        element: <ContactUs />,
    },
]);