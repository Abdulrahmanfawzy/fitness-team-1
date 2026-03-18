import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 cursor-pointer
        ${open ? "border-[#3a3a3a] bg-[#181818]" : "border-[#252525] bg-[#141414] hover:border-[#333]"}`}
      onClick={() => setOpen((p) => !p)}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
          {question}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-300 shrink-0 ml-4 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-[#252525] pt-3">
          {answer}
        </p>
      </div>
    </div>
  );
};
