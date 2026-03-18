import { Link } from "react-router-dom";
import { NAVBAR_ACTIONS } from "@/lib/constants/navbar/navbar.constants";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      {NAVBAR_ACTIONS.map((action) => (
        <Link
          key={action.label}
          className={`type-body-m weight-semibold inline-flex min-w-28 items-center justify-center rounded-xl px-6 py-2.5 transition-colors ${
            action.variant === "primary"
              ? "bg-cta-primary text-text-primary hover:bg-cta-hover"
              : "border border-cta-primary/80 text-text-primary hover:bg-[#171a21]"
          }`}
          to={action.href}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
