import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBookingContext } from "@/hooks/useBookingContext";
import { useAuth } from "@/hooks/useAuth";

interface BookingConfirmedProps {
  onBackToHome?: () => void;
}

export const BookingConfirmed: React.FC<BookingConfirmedProps> = ({
  onBackToHome,
}) => {
  const navigate = useNavigate();
  const { trainerName, packageTitle, selectedDate, selectedTime, amount } =
    useBookingContext();
  const { user } = useAuth();

  const rows = [
    { label: "Trainer", value: trainerName ?? "—" },
    { label: "Package", value: packageTitle ?? "—" },
    { label: "Date", value: selectedDate ?? "—" },
    { label: "Time", value: selectedTime ?? "—", bold: true },
    { label: "Amount", value: amount ? `EGP ${amount}` : "—" },
  ];

  return (
    <div className="flex flex-col items-center w-full animate-fadeIn">
      <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(34,197,94,0.4)]">
        <Check size={32} strokeWidth={3} className="text-white" />
      </div>

      <h2 className="text-white font-bold text-xl mb-2">Booking Confirmed</h2>

      <p className="text-muted-foreground text-sm text-center leading-relaxed mb-6 max-w-xs">
        You're all set, {user?.name ?? "there"}. Check your email
        {user?.email ? (
          <>
            {" "}
            (<span className="text-foreground">{user.email}</span>)
          </>
        ) : null}{" "}
        for confirmation details.
      </p>

      <div className="w-full border border-border rounded-xl overflow-hidden mb-6">
        <div className="text-center py-2 bg-card border-b border-border">
          <span className="text-sm font-semibold text-white">
            Booking Summary
          </span>
        </div>
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center px-4 py-3 border-b border-border last:border-b-0 bg-raised">
            <span className="text-muted-foreground text-sm">{row.label}</span>
            <span
              className={`text-sm ${row.bold ? "font-bold text-white" : "text-foreground"}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => onBackToHome?.() ?? navigate("/")}
        className="w-full py-3 rounded-xl cursor-pointer bg-cta-primary hover:bg-cta-hover active:scale-[0.98] transition-all text-white font-semibold text-sm">
        Back To Home
      </button>
    </div>
  );
};
