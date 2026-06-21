import { CalendarClock } from "lucide-react";
import StatBadge from "../../components/common/UserProfile/StatBadge";
import { useProgressActivity } from "@/hooks/useProfileData";
import Spinner from "@/components/common/Spinner";

export default function ProgressActivity() {
  const { data: progress, isLoading } = useProgressActivity();
  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Progress & Activity
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <StatBadge
          icon={<CalendarClock size={24} />}
          label="Upcoming Sessions"
          value={String(progress?.upcoming_sessions ?? 0)}
        />
      </div>
    </div>
  );
}
