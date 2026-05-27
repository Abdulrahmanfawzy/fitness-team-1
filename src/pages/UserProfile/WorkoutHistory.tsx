import WorkoutRow from "@/components/common/UserProfile/WorkoutRow";
import { useWorkoutHistory } from "@/hooks/useProfileData";

export default function WorkoutHistory() {
  const { data: workouts = [], isLoading } = useWorkoutHistory();

  if (isLoading) return <p className="text-white px-10">Loading...</p>;

  return (
    <div className="flex flex-col gap-8 px-4 sm:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Workout History
        </h2>
        <p className="text-md pl-2 text-(--gray-color) mt-1">
          Your recent training sessions
        </p>
      </div>

      <div className="border border-(--gray-color) rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-(--gray-color) bg-(--color-raised)/40">
          <span className="text-md font-bold uppercase tracking-widest text-(--gray-color)">
            Workout
          </span>
          <div className="flex items-center gap-8 pr-5">
            <span className="text-md font-bold uppercase tracking-widest text-(--gray-color)">
              Duration
            </span>
            <span className="text-md font-bold uppercase tracking-widest text-(--gray-color)">
              Calories
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4">
          {workouts.length === 0 ? (
            <p className="text-(--gray-color) text-sm p-2">
              No workout history yet.
            </p>
          ) : (
            workouts.map((w) => (
              <WorkoutRow
                key={w.id}
                title={w.exercise}
                date={w.date}
                duration={`${w.duration_minutes} min`}
                cals={w.calories_burned ?? 0}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
