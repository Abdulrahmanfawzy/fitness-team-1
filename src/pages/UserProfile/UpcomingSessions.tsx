import SessionCard from "@/components/common/UserProfile/SessionCard";
import { useSessions } from "@/hooks/useProfileData";
import { Link } from "react-router-dom";

export default function UpcomingSessions() {
  const { data: sessions = [], isLoading } = useSessions();

  if (isLoading) return <p className="text-white px-10">Loading sessions...</p>;

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          Upcoming Sessions
        </h2>
        <Link
          to="/sessions/past"
          className="text-sm sm:text-2xl font-semibold underline text-primary hover:text-primary/80 transition-colors duration-200 shrink-0">
          View Past Sessions
        </Link>
      </div>

      <div className="flex flex-col gap-4 sm:mt-4">
        {sessions.length === 0 ? (
          <p className="text-(--gray-color) text-sm px-1">
            No upcoming sessions.
          </p>
        ) : (
          sessions.map((session) => (
            <SessionCard
              key={session.id}
              sessionName={session.package_name}
              trainerName={session.trainer_name}
              date={session.date}
              time={session.time}
              location="—"
            />
          ))
        )}
      </div>
    </div>
  );
}
