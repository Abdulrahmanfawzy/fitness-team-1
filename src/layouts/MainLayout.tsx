import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
