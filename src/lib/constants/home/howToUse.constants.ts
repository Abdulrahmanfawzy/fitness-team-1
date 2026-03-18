import type { LucideIcon } from "lucide-react";
import { CalendarDays, MapPin, Search } from "lucide-react";

export type HowToUseStep = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const HOW_TO_USE_STEPS: HowToUseStep[] = [
  {
    id: 1,
    icon: Search,
    title: "Discover",
    description:
      "Browse our curated roster of certified trainers. Filter by specialty, availability, and price to find your perfect match.",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Choose Mode",
    description:
      "Select from in-person, virtual, or hybrid training sessions. Pick the package that fits your goals and budget.",
  },
  {
    id: 3,
    icon: CalendarDays,
    title: "Book & Train",
    description:
      "Lock in your preferred time slot instantly. Receive confirmation and start your transformation journey.",
  },
];
