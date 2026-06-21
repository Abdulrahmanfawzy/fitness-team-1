import {
  User,
  FileText,
  CalendarClock,
  Dumbbell,
  CreditCard,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MenuItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export const menuItems: MenuItem[] = [
  { label: "Profile Overview", path: "/profile/overview", icon: User },
  {
    label: "Profile Information",
    path: "/profile/personal-info",
    icon: FileText,
  },
  { label: "Sessions", path: "/profile/sessions", icon: CalendarClock },
  {
    label: "Workout History",
    path: "/profile/workout-history",
    icon: Dumbbell,
  },
  { label: "Payment Methods", path: "/profile/payment", icon: CreditCard },
  { label: "Billing History", path: "/profile/billing", icon: Receipt },
  {
    label: "Security & Password",
    path: "/profile/security",
    icon: ShieldCheck,
  },
];
