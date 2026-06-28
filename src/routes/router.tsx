import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";
import TrainingPage from "@/pages/TrainingPage/TrainingPage";
import TrainerProfile from "@/pages/trainerprofile/TrainerProfile";
import PackagePage from "@/pages/PackagePage";
import ContactUs from "@/pages/contact/ContactUs";
import StripeWrapper from "@/pages/booking/StripeWrapper";
import Booking from "@/pages/booking/Booking";
import SignUp from "@/pages/auth/SignUp";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPass";
import Verify from "@/pages/auth/Verify";
import ResetPass from "@/pages/auth/ResetPass";
import ProfileLayout from "@/components/layout/ProfileLayout/ProfileLayout";
import ProfileOverview from "@/pages/UserProfile/ProfileOverview";
import PersonalInfoForm from "@/pages/UserProfile/PersonalInfoForm";
import UpcomingSessions from "@/pages/UserProfile/UpcomingSessions";
import WorkoutHistory from "@/pages/UserProfile/WorkoutHistory";
import PaymentMethods from "@/pages/UserProfile/PaymentMethods";
import BillingHistory from "@/pages/UserProfile/BillingHistory";
import SecurityPassword from "@/pages/UserProfile/SecurityPassword";
import SchedulePage from "@/pages/booking/SchedulePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Something went wrong. Please refresh.</p>
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "trainers", element: <TrainingPage /> },
      { path: "trainer/:id", element: <TrainerProfile /> },
      { path: "packages", element: <PackagePage /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "schedule", element: <SchedulePage /> },
      {
        path: "booking",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: (
              <StripeWrapper>
                <Booking />
              </StripeWrapper>
            ),
          },
        ],
      },
      {
        path: "profile",
        element: <PrivateRoute />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          {
            element: <ProfileLayout />,
            children: [
              { path: "overview", element: <ProfileOverview /> },
              { path: "personal-info", element: <PersonalInfoForm /> },
              { path: "sessions", element: <UpcomingSessions /> },
              { path: "workout-history", element: <WorkoutHistory /> },
              { path: "payment", element: <PaymentMethods /> },
              { path: "billing", element: <BillingHistory /> },
              { path: "security", element: <SecurityPassword /> },
            ],
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
      { path: "reset-password", element: <ResetPass /> },
    ],
  },

  {
    path: "/auth/verify",
    element: <Verify />,
  },
]);
