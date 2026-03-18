import React, { useState } from "react";
import { FaPaypal } from "react-icons/fa";

export const PayPalForm: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="mt-3 animate-slideDown">
      <div className="flex items-center gap-2 mb-3">
        <FaPaypal size={18} className="text-blue-400" />
        <span className="text-sm text-gray-300 font-medium">
          Pay with PayPal
        </span>
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="PayPal email address"
        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3e3e3e]
          focus:border-blue-500 focus:outline-none text-sm text-gray-200
          placeholder:text-gray-600 transition-colors"
      />
      <p className="text-[11px] text-gray-600 mt-2 pl-1">
        🧪 Demo mode — any email works
      </p>
    </div>
  );
};
