import { Clock, MapPin, NotepadText } from "lucide-react";
import ActionButton from "./ActionButton";

interface SessionCardProps {
  sessionName: string;
  trainerName: string;
  date: string;
  time: string;
  location: string;
  onReschedule?: () => void;
  onViewDetails?: () => void;
}

export default function SessionCard({
  sessionName,
  trainerName,
  date,
  time,
  location,
  onReschedule,
  onViewDetails,
}: SessionCardProps) {
  const initial = trainerName?.charAt(0) ?? "?";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-(--gray-color) rounded-xl p-4 sm:p-5 gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-raised flex items-center justify-center text-(--gray-color) text-lg font-semibold shrink-0">
          {initial}
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-semibold text-white text-base sm:text-xl">
            {sessionName}
          </span>
          <span className="text-sm text-(--gray-color)">
            with {trainerName ?? "—"}
          </span>
          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-(--gray-color)">
            <span className="flex items-center gap-1">
              <NotepadText size={14} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {time}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:shrink-0">
        <ActionButton
          text="Reschedule"
          variant="outline"
          width="w-full sm:w-45"
          onClick={onReschedule}
        />
        <ActionButton
          text="View Details"
          width="w-full sm:w-45"
          onClick={onViewDetails}
        />
      </div>
    </div>
  );
}
