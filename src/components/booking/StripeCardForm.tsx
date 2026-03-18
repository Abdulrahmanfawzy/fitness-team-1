import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

interface StripeCardFormProps {
  error: string | null;
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#e5e7eb",
      fontFamily: '"Inter", sans-serif',
      fontSize: "14px",
      "::placeholder": { color: "#6b7280" },
      backgroundColor: "transparent",
    },
    invalid: { color: "#ef4444" },
  },
  hidePostalCode: true,
};

export const StripeCardForm: React.FC<StripeCardFormProps> = ({ error }) => {
  return (
    <div className="w-full mt-3">
      <div
        className={`px-4 py-3 rounded-xl border transition-all ${error ? "border-red-500" : "border-[#3e3e3e] focus-within:border-red-400"
          } bg-[#1a1a1a]`}
      >
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1.5 pl-1">{error}</p>
      )}
      <p className="text-[11px] text-gray-600 mt-2 pl-1">
        🔒 Test card: <span className="text-gray-500">4242 4242 4242 4242</span> · Any future date · Any CVC
      </p>
    </div>
  );
};
