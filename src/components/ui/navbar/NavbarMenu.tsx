import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "@/lib/constants/navbar/navbar.constants";

type NavbarMenuProps = {
  pathname: string;
};

export default function NavbarMenu({ pathname }: NavbarMenuProps) {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {NAVBAR_LINKS.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.startWith);

          return (
            <li key={link.name}>
              <Link
                className={`type-body-m weight-semibold rounded-lg px-4 py-2 transition-colors ${
                  isActive
                    ? "bg-[#2a1517] text-cta-primary"
                    : "text-text-primary hover:text-cta-primary"
                }`}
                to={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
