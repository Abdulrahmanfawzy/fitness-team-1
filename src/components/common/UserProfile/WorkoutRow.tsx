import { Clock, Flame, Dumbbell } from "lucide-react";

interface WorkoutRowProps {
  title: string;
  date: string;
  duration: string;
  cals: number;
}

export default function WorkoutRow({
  title,
  date,
  duration,
  cals,
}: WorkoutRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl px-6 py-5 bg-(--color-raised) hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300 group cursor-pointer">
      <div className="flex items-center gap-5">
        <div className="w-13 h-13 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
          <Dumbbell size={22} className="text-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white font-semibold text-lg group-hover:text-primary transition-colors duration-300">
            {title}
          </span>
          <span className="text-sm text-(--gray-color)">{date}</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-(--gray-color)">
          <Clock size={16} />
          <span className="font-medium">{duration}</span>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
          <Flame size={16} className="text-primary" />
          <span className="text-base font-bold text-primary">{cals} kcal</span>
        </div>
      </div>
    </div>
  );
}
