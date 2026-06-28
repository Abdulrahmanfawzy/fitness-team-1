import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Clock3, RotateCcw, ShieldCheck } from "lucide-react";

export type WhyEliteSyncFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WHY_ELITE_SYNC_FEATURES: WhyEliteSyncFeature[] = [
  {
    title: "Expert Trainers",
    description:
      "Our trainers are experts who pass strict tests to give you the best fitness experience.",
    icon: ShieldCheck,
  },
  {
    title: "Real Progress",
    description:
      "Follow your workout journey with easy charts and data on your personal page.",
    icon: ArrowUpRight,
  },
  {
    title: "Easy Booking",
    description:
      "Book sessions at any hour, day or night. We fit your busy daily life perfectly.",
    icon: Clock3,
  },
  {
    title: "Refund Guarantee",
    description:
      "Not happy with your first class? We will give you your full money back, no stress.",
    icon: RotateCcw,
  },
];
