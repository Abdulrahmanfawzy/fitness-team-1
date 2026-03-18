import { Check } from "lucide-react";
import { BOOKING } from "@/lib/constants/booking";

interface BookingConfirmedProps {
  onBackToHome: () => void;
}

export const BookingConfirmed: React.FC<BookingConfirmedProps> = ({
  onBackToHome,
}) => {
  return (
    <div className="flex flex-col items-center w-full animate-fadeIn">
      {/* Success Icon */}
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(34,197,94,0.4)]">
        <Check size={32} strokeWidth={3} className="text-white" />
      </div>

      {/* Title */}
      <h2 className="text-white font-bold text-xl mb-2">Booking Confirmed</h2>

      {/* Message */}
      <p className="text-gray-400 text-sm text-center leading-relaxed mb-6 max-w-xs">
        You're All Set, {BOOKING.userName}. Check Your Email (
        <span className="text-gray-300">{BOOKING.email}</span>) For Confirmation
        Details And Preparation Instructions.
      </p>

      {/* Summary */}
      <div className="w-full border border-[#2e2e2e] rounded-xl overflow-hidden mb-6">
        <div className="text-center py-2 bg-[#1e1e1e] border-b border-[#2e2e2e]">
          <span className="text-sm font-semibold text-white">Booking Summary</span>
        </div>
        {[
          { label: "Trainer", value: BOOKING.trainer },
          { label: "Package", value: BOOKING.package },
          { label: "Date", value: BOOKING.date },
          { label: "Time", value: BOOKING.time, bold: true },
        ].map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center px-4 py-3 border-b border-[#2a2a2a] last:border-b-0 bg-[#181818]"
          >
            <span className="text-gray-400 text-sm">{row.label}</span>
            <span
              className={`text-sm ${row.bold ? "font-bold text-white" : "text-gray-200"
                }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={onBackToHome}
        className="w-full py-3 rounded-xl cursor-pointer bg-cta-primary hover:bg-red-600 active:scale-[0.98] transition-all text-white font-semibold text-sm"
      >
        Back To Home
      </button>
    </div>
  );
};
