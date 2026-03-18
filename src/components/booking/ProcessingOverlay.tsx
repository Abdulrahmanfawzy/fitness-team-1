import React from "react";

interface ProcessingOverlayProps {
  method: "card" | "paypal" | "vodafone";
}

const labels: Record<ProcessingOverlayProps["method"], string> = {
  card: "Charging your card…",
  paypal: "Redirecting to PayPal…",
  vodafone: "Confirming Vodafone Cash…",
};

export const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ method }) => (
  <div className="absolute inset-0 bg-[#141414]/80 backdrop-blur-sm rounded-xl
    flex flex-col items-center justify-center gap-4 z-10 animate-fadeIn">
    {/* Spinner */}
    <div className="relative w-14 h-14">
      <svg className="animate-spin w-14 h-14" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="24" stroke="#2e2e2e" strokeWidth="4" />
        <path
          d="M28 4a24 24 0 0 1 24 24"
          stroke="#ef4444"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
      </div>
    </div>
    <p className="text-gray-300 text-sm font-medium">{labels[method]}</p>
    <p className="text-gray-600 text-xs">Please wait…</p>
  </div>
);
