import React, { useState } from "react";
import { SiVodafone } from "react-icons/si";

export const VodafoneForm: React.FC = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="mt-3 animate-slideDown">
      <div className="flex items-center gap-2 mb-3">
        <SiVodafone size={16} className="text-red-500" />
        <span className="text-sm text-gray-300 font-medium">
          Pay with Vodafone Cash
        </span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center px-3 bg-[#1a1a1a] border border-[#3e3e3e] rounded-xl">
          <span className="text-sm text-gray-400">🇪🇬 +20</span>
        </div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
          placeholder="01XXXXXXXXX"
          maxLength={11}
          className="flex-1 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3e3e3e]
            focus:border-red-500 focus:outline-none text-sm text-gray-200
            placeholder:text-gray-600 transition-colors"
        />
      </div>
      <p className="text-[11px] text-gray-600 mt-2 pl-1">
        🧪 Demo mode — any phone number works
      </p>
    </div>
  );
};
