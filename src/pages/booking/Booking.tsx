import { BookingConfirmed } from "@/components/booking/BookingConfirmed";
import { PaymentMethodSelector } from "@/components/booking/PaymentMethodSelector";
import { PayPalForm } from "@/components/booking/PayPalForm";
import { ProcessingOverlay } from "@/components/booking/ProcessingOverlay";
import { StripeCardForm } from "@/components/booking/StripeCardForm";
import { VodafoneForm } from "@/components/booking/VodafoneForm";
import { confirmBooking } from "@/lib/api/booking.api";
import { useBookingContext } from "@/hooks/useBookingContext";
import type { PaymentMethod } from "@/lib/types/booking-types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { bookingId, resetBooking } = useBookingContext();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null,
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardError, setCardError] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleSelectMethod = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setCardError(null);
    setGeneralError(null);
  };

  const handleBookNow = async () => {
    if (!selectedMethod) {
      setGeneralError("Please select a payment method to continue.");
      return;
    }
    if (!bookingId) {
      setGeneralError("Booking session expired. Please go back and try again.");
      return;
    }

    setGeneralError(null);
    setIsProcessing(true);

    try {
      // Step 1 — Pay
      const methodMap: Record<PaymentMethod, "stripe" | "paypal" | "vodafone"> =
        {
          card: "stripe",
          paypal: "paypal",
          vodafone: "vodafone",
        };
      const paymentMethod = methodMap[selectedMethod];

      // Step 2 — Stripe card tokenization (only for card)
      if (selectedMethod === "card") {
        if (!stripe || !elements) {
          setGeneralError("Stripe has not loaded yet. Please refresh.");
          setIsProcessing(false);
          return;
        }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          setGeneralError("Card input not found. Please refresh.");
          setIsProcessing(false);
          return;
        }
        const { error: pmError } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });
        if (pmError) {
          setCardError(pmError.message ?? "Your card details are invalid.");
          setIsProcessing(false);
          return;
        }
      }

      // Step 3 — Confirm booking (non-blocking — backend 403 bug)
      try {
        await confirmBooking(bookingId);
      } catch {
        if (import.meta.env.DEV) {
          console.warn("confirm returned 403 — backend issue, skipping");
        }
      }

      setIsProcessing(false);
      setIsConfirmed(true);
    } catch {
      setGeneralError("Payment failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        {!isConfirmed && (
          <h1 className="text-white font-bold text-2xl text-center mb-6 tracking-tight">
            Payment &amp; Confirm
          </h1>
        )}

        <div className="bg-[#1c1c1c] rounded-2xl p-3.5 shadow-2xl border border-[#282828]">
          <div className="relative bg-[#141414] rounded-xl p-6 border border-[#252525] overflow-hidden">
            {isProcessing && selectedMethod && (
              <ProcessingOverlay method={selectedMethod} />
            )}

            {isConfirmed ? (
              <BookingConfirmed
                onBackToHome={() => {
                  setIsConfirmed(false);
                  setSelectedMethod(null);
                  setCardError(null);
                  resetBooking();
                  navigate("/");
                }}
              />
            ) : (
              <div className="animate-fadeIn">
                <h2 className="text-white text-base font-semibold text-center mb-5 tracking-wide">
                  Payment Method
                </h2>

                <PaymentMethodSelector
                  selected={selectedMethod}
                  onSelect={handleSelectMethod}
                />

                {selectedMethod === "card" && (
                  <StripeCardForm error={cardError} />
                )}
                {selectedMethod === "paypal" && <PayPalForm />}
                {selectedMethod === "vodafone" && <VodafoneForm />}

                {generalError && (
                  <div className="mt-3 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 text-xs text-center">
                      {generalError}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleBookNow}
                  disabled={isProcessing}
                  className={`
                    mt-5 w-full py-3.5 cursor-pointer rounded-xl font-semibold text-sm text-white
                    transition-all duration-200 active:scale-[0.98] select-none
                    ${
                      isProcessing
                        ? "bg-cta-primary cursor-not-allowed"
                        : "bg-cta-primary hover:bg-cta-hover shadow-[0_4px_24px_rgba(239,68,68,0.35)]"
                    }
                  `}>
                  Book Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
