import TrainerCard from "@/components/common/TrainerCard";
import { Button } from "@/components/ui/button";
import {
  useGetFilter,
  useGetSearch,
  useGetTerainers,
} from "@/hooks/useGetTerainers";
import { useMemo, useState } from "react";
import NotFoundSearch from "../NotFound/NotFoundSearch";
import { useSearchParams } from "react-router-dom";
import { useFilterContext } from "@/context/FilterContext";
import { SkeletonCard } from "./Loading/SkeletonCard";

const TrainingCart = () => {
  const { durationId, specializationId, enabled } = useFilterContext()!;
  const [Load, SetLoad] = useState(3);
  const { data: trainers, isLoading } = useGetTerainers();
  const { data: searchResults, isLoading: searchLoading } = useGetSearch();
  const { data: filterResults, isLoading: filterLoading } = useGetFilter(
    durationId,
    specializationId,
    enabled,
  );

  const [Params] = useSearchParams();
  const search = Params.get("search") || "";
  const loading = isLoading || searchLoading || filterLoading;

  const data = useMemo(() => {
    if (search && enabled && searchResults && filterResults) {
      return searchResults.filter((trainer) =>
        filterResults.some((f) => f.id === trainer.id),
      );
    }
    if (search) return searchResults;
    if (enabled) return filterResults;
    return trainers;
  }, [search, enabled, searchResults, filterResults, trainers]);

  const handleMore = () => {
    SetLoad((pre) => pre + 3);
  };
  return (
    <>
      {search && searchResults?.length === 0 && !searchLoading ? (
        <div className="flex flex-column justify-center items-center text-center">
          <NotFoundSearch />
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#1F0D0D] to-[#1c1717] pb-10 w-full ">
          <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl pt-[58px]">
            <p className="text-[32px] text-center sm:text-start">
              Meet Our <span className="text-primary">Trainers</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[39px] gap-x-5 gap-y-12 justify-items-center">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))
                : data
                    ?.slice(0, Load)
                    .map((trainer) => (
                      <TrainerCard
                        key={trainer.id}
                        id={trainer.id}
                        name={trainer.name}
                        image={trainer.profile_image}
                        rating={+trainer.rating || 4.5}
                        location={trainer.location || "Cario, Egypt"}
                        specialties={trainer.specializations ?? []}
                        experience_years={trainer.experience_years || 5}
                      />
                    ))}
            </div>

            {(data?.length ?? 0) > Load && (
              <div className="flex items-center justify-center mt-10">
                <Button
                  className="px-10 py-6  text-[18px] fw-medium rounded-[5px] bg-primary hover:bg-cta-hover cursor-pointer  transition-all"
                  onClick={handleMore}
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingCart;
