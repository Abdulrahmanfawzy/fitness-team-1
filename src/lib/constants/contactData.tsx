import { Clock, Mail, Phone } from "lucide-react";

export const INFO_CARDS = [
    {
        icon: <Phone size={13} />,
        label: "Phone",
        lines: ["+1 (555) 123-4567"],
        accentColor: "#ef4444",
    },
    {
        icon: <Mail size={13} />,
        label: "Email",
        lines: ["INFO@Gmail.COM"],
        accentColor: "#ef4444",
    },
    {
        icon: <Clock size={13} />,
        label: "Hours",
        lines: ["MON-FRI 6AM-10PM", "SAT-SUN 8AM-8PM"],
        accentColor: "#ef4444",
    },
];

export const FAQS = [
    {
        question: "How do I cancel a booking?",
        answer:
            "You can cancel a booking up to 24 hours before the session from your dashboard under 'My Bookings'. Cancellations made less than 24 hours in advance are subject to a cancellation fee.",
    },
    {
        question: "What is your refund policy?",
        answer:
            "Full refunds are issued for cancellations made 24+ hours before the session. For late cancellations or no-shows, a 50% charge applies. Refunds are processed within 5–7 business days.",
    },
    {
        question: "Can I change my trainer?",
        answer:
            "Yes! You can request a trainer change at any time from your profile settings. Changes take effect from your next booking. Simply select a new trainer from the available roster.",
    },
    {
        question: "Do you offer online sessions?",
        answer:
            "Absolutely. All our trainers offer virtual sessions via video call. Simply select 'Online' when booking. Equipment requirements vary by trainer — check their profile for details.",
    },
];