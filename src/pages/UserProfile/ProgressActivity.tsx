import { Clock, Flame, Package } from "lucide-react";
import StatBadge from "../../components/common/UserProfile/StatBadge";
import SessionsOverTime from "../../components/common/UserProfile/SessionOverTime";
import { useProgressActivity } from "@/hooks/useProfileData";

export default function ProgressActivity() {
  const { data: progress } = useProgressActivity();

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Progress & Activity
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <StatBadge
          icon={<Flame size={24} />}
          label="Completed Sessions"
          value={progress?.completed_sessions ?? 0}
        />
        <StatBadge
          icon={<Package size={24} />}
          label="Upcoming Sessions"
          value={progress?.upcoming_sessions ?? 0}
        />
        <StatBadge
          icon={<Clock size={24} />}
          label="Cancelled Sessions"
          value={progress?.cancelled_sessions ?? 0}
        />
      </div>
      <SessionsOverTime />
    </div>
  );
}
