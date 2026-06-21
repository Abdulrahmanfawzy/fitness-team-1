import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

interface StripeCardFormProps {
  error: string | null;
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#e5e7eb",
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "14px",
      "::placeholder": { color: "#9ca3af" },
      backgroundColor: "transparent",
    },
    invalid: { color: "#ef4444" },
  },
  hidePostalCode: true,
};

export const StripeCardForm: React.FC<StripeCardFormProps> = ({ error }) => (
  <div className="w-full mt-3">
    <div
      className={`px-4 py-3 rounded-xl border transition-all bg-raised ${error ? "border-destructive" : "border-border focus-within:border-primary"}`}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </div>
    {error && <p className="text-destructive text-xs mt-1.5 pl-1">{error}</p>}
    {import.meta.env.MODE === "development" && (
      <p className="text-[11px] text-muted-foreground mt-2 pl-1">
        🔒 Test card:{" "}
        <span className="text-foreground/50">4242 4242 4242 4242</span> · Any
        future date · Any CVC
      </p>
    )}
  </div>
);
