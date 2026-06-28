import TrainerCard from "@/components/common/TrainerCard";
import { useGetTrainers } from "@/hooks/useGetTrainers";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const DESKTOP_BREAKPOINT = 1024;

export default function OtherTrainers() {
  const { data: trainers = [], isLoading } = useGetTrainers();

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= DESKTOP_BREAKPOINT
      ? 3
      : 1,
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= DESKTOP_BREAKPOINT ? 3 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = Math.max(0, trainers.length - itemsPerView);
  const safeStartIndex = Math.min(startIndex, maxStartIndex);

  const visibleTrainers = useMemo(
    () => trainers.slice(safeStartIndex, safeStartIndex + itemsPerView),
    [safeStartIndex, itemsPerView, trainers],
  );

  const handlePrev = () =>
    setStartIndex((prev) => Math.max(0, prev - itemsPerView));

  const handleNext = () =>
    setStartIndex((prev) => Math.min(maxStartIndex, prev + itemsPerView));

  return (
    <div className="container w-10/12 mx-auto text-center py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="profile-heading">Explore Other Trainers</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={safeStartIndex === 0}
            aria-label="Previous trainers"
            className="h-10 w-10 rounded-xl border border-border flex items-center justify-center
                       disabled:opacity-40 disabled:cursor-not-allowed
                       hover:bg-muted transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={safeStartIndex >= maxStartIndex}
            aria-label="Next trainers"
            className="h-10 w-10 rounded-xl border border-border flex items-center justify-center
                       disabled:opacity-40 disabled:cursor-not-allowed
                       hover:bg-muted transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: itemsPerView }).map((_, i) => (
              <div key={i} className="h-96 rounded-2xl bg-card animate-pulse" />
            ))
          : visibleTrainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                id={trainer.id}
                image={trainer.profile_image}
                location={trainer.location}
                name={trainer.name}
                rating={Number(trainer.rating)}
                specialties={trainer.specializations}
                experience_years={trainer.experience_years}
              />
            ))}
      </div>
    </div>
  );
}
