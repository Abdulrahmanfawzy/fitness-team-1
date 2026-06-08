import { getTrainerById } from "@/lib/api/triners/TrainersApi";
import { useQuery } from "@tanstack/react-query";

export const useGetTrainerById = (id: number) => {
  return useQuery({
    queryKey: ["trainer", id],
    queryFn: () => getTrainerById(id),
    enabled: !!id,
  });
};
