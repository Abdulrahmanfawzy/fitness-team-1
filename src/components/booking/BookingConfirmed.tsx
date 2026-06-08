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
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(34,197,94,0.4)]">
        <Check size={32} strokeWidth={3} className="text-white" />
      </div>

      <h2 className="text-white font-bold text-xl mb-2">Booking Confirmed</h2>

      <p className="text-gray-400 text-sm text-center leading-relaxed mb-6 max-w-xs">
        You're all set, {user?.name ?? "there"}. Check your email
        {user?.email ? (
          <>
            {" "}
            (<span className="text-gray-300">{user.email}</span>)
          </>
        ) : null}{" "}
        for confirmation details.
      </p>

      <div className="w-full border border-[#2e2e2e] rounded-xl overflow-hidden mb-6">
        <div className="text-center py-2 bg-[#1e1e1e] border-b border-[#2e2e2e]">
          <span className="text-sm font-semibold text-white">
            Booking Summary
          </span>
        </div>
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center px-4 py-3 border-b border-[#2a2a2a] last:border-b-0 bg-[#181818]">
            <span className="text-gray-400 text-sm">{row.label}</span>
            <span
              className={`text-sm ${row.bold ? "font-bold text-white" : "text-gray-200"}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => onBackToHome?.() ?? navigate("/")}
        className="w-full py-3 rounded-xl cursor-pointer bg-cta-primary hover:bg-red-600 active:scale-[0.98] transition-all text-white font-semibold text-sm">
        Back To Home
      </button>
    </div>
  );
};
