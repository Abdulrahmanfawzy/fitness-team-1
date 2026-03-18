export type FooterLinkItem = {
  name: string;
  href: string;
};

export type FooterSocialItem = {
  name: "Instagram" | "TikTok" | "Facebook" | "X";
  href: string;
};

export type FooterContactItem = {
  kind: "location" | "email" | "phone";
  value: string;
};

export const FOOTER_DESCRIPTION =
  "Elite personal training for peak performance. Transform your body, elevate your mindset.";

export const FOOTER_QUICK_LINKS: FooterLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Our Trainers", href: "/trainers" },
  { name: "Packages", href: "/packages" },
  { name: "Book Session", href: "/booking" },
  { name: "Contact Us", href: "/contact-us" },
];

export const FOOTER_SPECIALTIES: string[] = [
  "Strength Training",
  "HIIT & Cardio",
  "Yoga & Mindfulness",
  "Sports Performance",
  "Functional Fitness",
  "Women's Fitness",
];

export const FOOTER_CONTACT_ITEMS: FooterContactItem[] = [
  { kind: "location", value: "Egypt" },
  { kind: "email", value: "hello@elitesync.com" },
  { kind: "phone", value: "+20 123 456 7890" },
];

export const FOOTER_SOCIAL_ITEMS: FooterSocialItem[] = [
  { name: "Instagram", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "X", href: "#" },
];

export const FOOTER_POLICY_LINKS: FooterLinkItem[] = [
  { name: "Privacy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export const FOOTER_COPYRIGHT = "2026 EliteSync. All rights reserved.";
