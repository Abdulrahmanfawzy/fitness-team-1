export type NavbarLinkItem = {
  name: string;
  href: string;
  startWith: string;
};

export type NavbarActionItem = {
  label: string;
  href: string;
  variant: "primary" | "outline";
};

export const NAVBAR_LINKS: NavbarLinkItem[] = [
  { name: "Home", href: "/", startWith: "/" },
  { name: "Trainers", href: "/trainers", startWith: "/trainers" },
  { name: "Packages", href: "/packages", startWith: "/packages" },
  { name: "Contact", href: "/contact-us", startWith: "/contact-us" },
];

export const NAVBAR_ACTIONS: NavbarActionItem[] = [
  { label: "Sign up", href: "/auth/login?mode=signup", variant: "primary" },
  { label: "Login", href: "/auth/login", variant: "outline" },
];
