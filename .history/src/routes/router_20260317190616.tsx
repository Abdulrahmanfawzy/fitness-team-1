// router.tsx
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Trainers from "@/pages/trainers/Trainers";
import Packages from "@/pages/packages/Packages";
import PrivateRoute from "./PrivateRoute";
import Booking from "@/pages/booking/Booking";
import ContactUs from "@/pages/contact/ContactUs";
import Login from "@/pages/auth/Login";
import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";
>>>>>>> 43b3cfd72bb0e7ea9f3e3bbd8615f471dbfaed93

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "trainers",
        element: <Trainers />,
      },
      {
        path: "trainer/:id",
        // element: <TrainerProfile />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
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
    path: "/booking",
    element: <PrivateRoute />, // هنا في المستقبل تحمي الصفحة
    children: [{ path: "", element: <Booking /> }],
  },
]);
