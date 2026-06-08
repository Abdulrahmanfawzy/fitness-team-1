import SectionHighlight from "@/components/common/SectionHighlight";
import Button from "@/components/common/Button";
import TrainerCard from "@/components/common/TrainerCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useGetTrainers } from "@/hooks/useGetTrainers";

const DESKTOP_BREAKPOINT = 1024;

export default function MeetTheExperts() {
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
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-center px-3 py-12 md:py-16">
      <SectionHighlight text="our trainers" />
      <div className="flex justify-between items-center flex-col md:flex-row w-full">
        <h2 className="mt-4 text-left text-4xl md:text-h1 font-bold">
          Meet the <span className="text-cta-primary">Experts</span>
        </h2>
        <div className="flex items-center gap-3">
          <Button
            ariaLabel="Previous trainers"
            className="mt-0 h-14 rounded-2xl py-0"
            disabled={safeStartIndex === 0}
            icon={<ChevronLeft size={22} />}
            onClick={handlePrev}
            variant="outline"
            width="w-14"
            withShadow={false}
          />
          <Button
            ariaLabel="Next trainers"
            className="mt-0 h-14 rounded-2xl py-0"
            disabled={safeStartIndex >= maxStartIndex}
            icon={<ChevronRight size={22} />}
            onClick={handleNext}
            variant="outline"
            width="w-14"
            withShadow={false}
          />
          <Button
            className="mt-0 h-14 rounded-2xl px-8 py-0"
            text="View All"
            variant="outlinePrimary"
            width="w-auto"
            withShadow={false}
          />
        </div>
      </div>

      <div className="mt-8 grid w-full grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
        {isLoading
          ? // Skeleton placeholders while loading
            Array.from({ length: itemsPerView }).map((_, i) => (
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
