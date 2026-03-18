// router.tsx
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Booking from "@/pages/booking/Booking";
import ContactUs from "@/pages/contact/ContactUs";
import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";

import TrainerProfile from "@/pages/trainerprofile/TrainerProfile";

import PackagePage from "@/pages/PackagePage";
import TrainingPage from "@/pages/TrainingPage/TrainingPage";
import StripeWrapper from "@/pages/booking/StripeWrapper";
import SignUp from "@/pages/auth/SignUp";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPass";
import Verify from "@/pages/auth/Verify";
import ResetPass from "@/pages/auth/ResetPass";
import Info from "@/pages/auth/Info";


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
        element: <TrainingPage />,
      },
      {
        path: "trainer/:id",
        element: <TrainerProfile />,
      },
      {
        path: "packages",
        element: <PackagePage />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "/booking",
        // element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: (
              <StripeWrapper>
                <Booking />
              </StripeWrapper>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <PublicRoute />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "verify", element: <Verify /> },
      { path: "reset-password", element: <ResetPass /> },
      { path: "info", element: <Info /> },
    ],
  },
]);
