import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  label: string;
  lines: string[];
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  label,
  lines,
}) => {
  return (
    <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-border bg-raised hover:border-elevated transition-colors">
      <div className="flex items-center justify-center w-7 h-7 rounded-full mt-0.5 shrink-0 bg-primary/10 border border-primary/30">
        <span className="text-sm text-primary">{icon}</span>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest font-semibold text-muted-foreground mb-1">
          {label}
        </p>
        {lines.map((line, i) => (
          <p key={i} className="text-sm text-foreground leading-snug">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
