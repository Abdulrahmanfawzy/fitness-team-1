import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { NAVBAR_ACTIONS } from "@/lib/constants/navbar/navbar.constants";
import { useAuth } from "@/hooks/useAuth";
import MobileSideBar from "@/components/common/SideBar/MobileSidebar";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";

export default function NavbarActions() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleClose = useCallback(() => setMobileOpen(false), []);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [user?.profile_image]);

  if (isLoggedIn) {
    return (
      <>
        <div className="hidden lg:block">
          <button
            onClick={() => navigate("/profile/overview")}
            className="relative group cursor-pointer">
            {user?.profile_image && !imgError ? (
              <img
                src={user.profile_image}
                alt="Profile"
                onError={() => setImgError(true)}
                className="w-9.5 h-9.5 mt-1 rounded-2xl object-cover ring-2 ring-transparent group-hover:ring-primary transition-all duration-200"
              />
            ) : (
              <div className="w-9.5 h-9.5 mt-1 rounded-2xl bg-primary/20 flex items-center justify-center ring-2 ring-transparent group-hover:ring-primary transition-all duration-200">
                <span className="text-sm font-bold text-primary">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success rounded-full border-2 border-background" />
          </button>
        </div>
        <div className="lg:hidden">
          <Button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="border rounded-lg">
            <Menu />
          </Button>
        </div>
        <MobileSideBar onClose={handleClose} open={mobileOpen} />
      </>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {NAVBAR_ACTIONS.map((action) => (
        <Link
          key={action.label}
          className={`type-body-m weight-semibold inline-flex min-w-28 items-center justify-center rounded-xl px-6 py-2.5 transition-colors ${
            action.variant === "primary"
              ? "bg-cta-primary text-white hover:bg-cta-hover"
              : "border border-cta-primary/80 text-foreground hover:bg-secondary"
          }`}
          to={action.href}>
          {action.label}
        </Link>
      ))}
    </div>
  );
}
