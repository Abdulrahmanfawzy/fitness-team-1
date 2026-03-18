import { useLocation } from "react-router-dom";
import Logo from "@/components/common/Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/70 bg-bg-primary/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden lg:block">
          <NavbarMenu pathname={pathname} />
        </div>

        <NavbarActions />
      </div>
    </header>
  );
}
