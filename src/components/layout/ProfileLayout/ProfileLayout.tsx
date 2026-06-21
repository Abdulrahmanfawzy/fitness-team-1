import SideBar from "@/components/common/SideBar/SideBar";
import MobileSideBar from "@/components/common/SideBar/MobileSidebar";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useCallback } from "react";

function ProfileLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleClose = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="mx-auto flex max-w-7xl w-full px-4 sm:px-6 lg:px-8 my-10 gap-5">
      <div className="sticky top-20 h-screen hidden lg:block">
        <SideBar />
      </div>

      <MobileSideBar open={mobileOpen} onClose={handleClose} mode="profile" />

      <main className="flex-1 p-5 lg:p-0">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden flex items-center gap-2 mb-5 px-4 py-2.5 rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <Menu size={16} />
          Menu
        </button>

        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
