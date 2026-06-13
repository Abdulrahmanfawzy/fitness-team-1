interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const safeUsed = current ?? 0;
  const safeTotal = total ?? 0;
  const remaining = Math.max(safeTotal - safeUsed, 0);
  const percentage =
    safeTotal > 0 ? Math.min((safeUsed / safeTotal) * 100, 100) : 0;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-3xl font-bold text-white">{remaining}</span>
          <span className="text-sm text-(--gray-color) ml-2">
            sessions remaining
          </span>
        </div>
        <span className="text-sm font-semibold text-primary">
          {safeUsed} / {safeTotal} completed
        </span>
      </div>

      <div className="w-full h-2.5 bg-(--gray-color)/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
