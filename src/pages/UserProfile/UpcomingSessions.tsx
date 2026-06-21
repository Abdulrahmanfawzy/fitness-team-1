import { useState } from "react";
import SessionCard from "@/components/common/UserProfile/SessionCard";
import { useSessions } from "@/hooks/useProfileData";
import Spinner from "@/components/common/Spinner";
import type { Session } from "@/lib/api/profile.api";
import { X, NotepadText, Clock } from "lucide-react";

export default function UpcomingSessions() {
  const { data: allSessions = [], isLoading } = useSessions();

  // Filter out past sessions — backend never updates status automatically
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sessions = allSessions.filter((s) => new Date(s.date) >= today);
  const [selected, setSelected] = useState<Session | null>(null);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          Upcoming Sessions
        </h2>
      </div>

      <div className="flex flex-col gap-4 sm:mt-4">
        {sessions.length === 0 ? (
          <p className="text-muted-foreground text-sm px-1">
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
              onViewDetails={() => setSelected(session)}
            />
          ))
        )}
      </div>

      {/* Details Modal */}
      {selected && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-lg">
                  Session on {selected.date}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <X size={18} className="text-muted-foreground" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: <NotepadText size={15} />,
                    label: "Date",
                    value: selected.date,
                  },
                  {
                    icon: <Clock size={15} />,
                    label: "Time",
                    value: selected.time,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-raised border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      {row.icon}
                      {row.label}
                    </div>
                    <span className="text-white text-sm font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="w-full mt-5 py-3 rounded-xl bg-primary hover:bg-cta-hover text-white font-semibold text-sm transition-colors cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
