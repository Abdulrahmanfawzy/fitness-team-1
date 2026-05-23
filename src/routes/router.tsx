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
import Info from "@/pages/auth/Info";
import ProfileLayout from "@/components/layout/ProfileLayout/ProfileLayout";
import ProfileOverview from "@/pages/UserProfile/ProfileOverview";
import PersonalInfoForm from "@/pages/UserProfile/PersonalInfoForm";
import UpcomingSessions from "@/pages/UserProfile/UpcomingSessions";
import MyPackages from "@/pages/UserProfile/MyPackages";
import ProgressActivity from "@/pages/UserProfile/ProgressActivity";
import WorkoutHistory from "@/pages/UserProfile/WorkoutHistory";
import PaymentMethods from "@/pages/UserProfile/PaymentMethods";
import BillingHistory from "@/pages/UserProfile/BillingHistory";
import SecurityPassword from "@/pages/UserProfile/SecurityPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Public routes
      { index: true, element: <Home /> },
      { path: "trainers", element: <TrainingPage /> },
      { path: "trainer/:id", element: <TrainerProfile /> },
      { path: "packages", element: <PackagePage /> },
      { path: "contact-us", element: <ContactUs /> },

      // Protected
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
              {
                path: "sessions",
                element: (
                  <UpcomingSessions
                    sessions={[
                      {
                        id: "1",
                        sessionName: "Strength Training",
                        trainerName: "Sarah Jenkins",
                        date: "Tomorrow",
                        time: "9:00 AM - 10:00 AM",
                        location: "Downtown Gym",
                      },
                      {
                        id: "2",
                        sessionName: "Cardio Blast",
                        trainerName: "Ahmed Nour",
                        date: "Friday",
                        time: "7:00 AM - 8:00 AM",
                        location: "Online",
                      },
                      {
                        id: "3",
                        sessionName: "Flexibility & Core",
                        trainerName: "Lina Hassan",
                        date: "Saturday",
                        time: "11:00 AM - 12:00 PM",
                        location: "Maadi Sports Club",
                      },
                      {
                        id: "4",
                        sessionName: "Pilates",
                        trainerName: "Lina Hassan",
                        date: "Saturday",
                        time: "11:00 AM - 12:00 PM",
                        location: "Online",
                      },
                    ]}
                  />
                ),
              },
              {
                path: "packages",
                element: (
                  <MyPackages
                    pack={{
                      name: "Single Pack",
                      status: "Active",
                      expiryDate: "May 31, 2026",
                      sessionsRemaining: 12,
                      totalSessions: 20,
                      includes: [
                        "1-on-1 Personal Training",
                        "Weekly Check-ins",
                        "Customized Nutrition Plan",
                        "Access to Pro App Features",
                      ],
                    }}
                  />
                ),
              },
              {
                path: "progress",
                element: (
                  <ProgressActivity
                    sessionComplete="12 Weeks"
                    activePackage={48}
                    nextSession={3.2}
                  />
                ),
              },
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

  // Auth routes
  {
    path: "/auth",
    element: <PublicRoute />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "verify", element: <Verify /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPass /> },
    ],
  },

  // Protected 
  {
    path: "info",
    element: <PrivateRoute />,
    children: [{ path: "", element: <Info /> }],
  },
]);
