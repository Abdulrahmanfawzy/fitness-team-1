import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  accentColor?: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  label,
  lines,
  accentColor = "#ef4444",
}) => {
  return (
    <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-[#2a2a2a] bg-[#181818] hover:border-[#3a3a3a] transition-colors">
      <div
        className="flex items-center justify-center w-7 h-7 rounded-full mt-0.5 shrink-0"
        style={{ backgroundColor: `${accentColor}22`, border: `1px solid ${accentColor}44` }}
      >
        <span style={{ color: accentColor }} className="text-sm">{icon}</span>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest font-semibold text-gray-500 mb-1">
          {label}
        </p>
        {lines.map((line, i) => (
          <p key={i} className="text-sm text-gray-300 leading-snug">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
