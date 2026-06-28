import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import AuthBookingSheet from "@/components/trainer-profile/AuthBookingSheet";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/common/ScrollTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthBookingSheet />
    </div>
  );
}
