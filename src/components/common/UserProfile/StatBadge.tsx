interface StatBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function StatBadge({ icon, label, value }: StatBadgeProps) {
  return (
    <div className="flex items-center gap-4 bg-primary/5 border border-primary rounded-xl px-5 py-4 flex-1">
      <span className="text-primary">{icon}</span>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          {label}
        </p>
        <p className="text-white font-bold">{value}</p>
      </div>
    </div>
  );
}
