import { useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  NAVBAR_LINKS,
  NAVBAR_ACTIONS,
} from "@/lib/constants/navbar/navbar.constants";
import { menuItems } from "@/lib/constants/Profile/SideBar";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  mode?: "nav" | "profile";
}

const MobileSideBar = ({ open, onClose, mode = "nav" }: MobileSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user, isLoggedIn } = useAuth();

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    handleClose();
  }, [location.pathname, handleClose]);

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  const links = mode === "profile" ? menuItems : null;

  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${open ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside
        className={`absolute top-0 right-0 h-screen w-[280px] bg-card shadow-2xl flex flex-col duration-300 transition-all ${open ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-bold text-white text-base">
            {mode === "profile" ? "Profile Menu" : "Menu"}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <X size={18} className="text-muted-foreground" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          {mode === "profile"
            ? // Profile menu items
              links?.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}>
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </Link>
                );
              })
            : // Navbar links
              NAVBAR_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.startWith);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}>
                    {link.name}
                  </Link>
                );
              })}
        </nav>

        {/* Footer */}
        <div className="px-3 pb-6 pt-2 border-t border-border flex flex-col gap-2">
          {isLoggedIn ? (
            <>
              {mode === "nav" && (
                <button
                  onClick={() => navigate("/profile/overview")}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all cursor-pointer">
                  <User size={16} />
                  {user?.name ?? "Profile"}
                </button>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all cursor-pointer">
                <LogOut size={16} />
                Log Out
              </button>
            </>
          ) : (
            NAVBAR_ACTIONS.map((action) => (
              <Link
                key={action.label}
                to={action.href}
                className={`w-full text-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  action.variant === "primary"
                    ? "bg-primary text-white hover:bg-cta-hover"
                    : "border border-border text-foreground hover:bg-muted"
                }`}>
                {action.label}
              </Link>
            ))
          )}
        </div>
      </aside>
    </div>
  );
};

export default MobileSideBar;
