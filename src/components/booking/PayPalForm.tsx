export const PayPalForm: React.FC = () => (
  <div className="mt-3 flex flex-col gap-2">
    <label className="text-xs text-muted-foreground uppercase tracking-widest">
      PayPal Email
    </label>
    <input
      type="email"
      placeholder="you@example.com"
      className="w-full px-4 py-3 rounded-xl bg-raised border border-border text-foreground placeholder:text-muted-foreground text-sm focus:border-primary focus:outline-none transition-colors"
    />
    <p className="text-xs text-muted-foreground mt-1">
      🟢 Demo mode — any email works
    </p>
  </div>
);
