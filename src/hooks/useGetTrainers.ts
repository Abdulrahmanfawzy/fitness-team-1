import { useQuery } from "@tanstack/react-query";
import {
  getFilterResults,
  getFilterValues,
  getTrainers,
} from "@/lib/api/triners/TrainersApi";
import { getSearchResults } from "@/lib/api/triners/TrainersApi";
import { useSearchParams } from "react-router-dom";

// All Trainers
export const useGetTrainers = () => {
  return useQuery({ queryKey: ["trainers"], queryFn: getTrainers });
};

// Search
export const useGetSearch = () => {
  const [Params] = useSearchParams();
  const search = Params.get("search") || "";

  return useQuery({
    queryKey: ["getSearch", search],
    queryFn: () => getSearchResults(search),
    enabled: !!search,
  });
};

// Filter
export const useGetFilter = (
  durationId: number,
  specializationId: number,
  enabled: boolean,
) => {
  return useQuery({
    queryKey: ["getFilter", durationId, specializationId],
    queryFn: () => getFilterResults(durationId, specializationId),
    enabled: enabled,
  });
};

export const useGetFilterValues = () => {
  return useQuery({
    queryKey: ["getFilterValues"],
    queryFn: () => getFilterValues(),
  });
};
