import type { TrainerResponse, FilterValues } from "@/lib/types/TrainigTypes";
import client from "../client";

// All Trainers
export const getTerainers = async (): Promise<
  TrainerResponse[] | undefined
> => {
  const response = await client.get("/trainers");
  return response.data.data;
};

// Search
export const getSearchResults = async (
  params: string,
): Promise<TrainerResponse[]> => {
  const response = await client.get("/search", {
    params: { search_value: params },
  });

  const data = response.data.data;

  if (!data || data.length === 0) return [];

  return data.map((user: TrainerResponse) => ({
    id: user.trainer_id,
    name: user.name,
    profile_image: user.profile_image,
    rating: user.rating,
    location: user.location ,
    specializations: user.specializations ?? [],
    experience_years: user.experience_years,
  }));
};

// Filter
export const getFilterResults = async (
  durationId: number,
  specializationId: number,
): Promise<TrainerResponse[]> => {
  const response = await client.get("/search/searchFilter", {
    data: {
      durationId,
      specializationId,
    },
  });
  const data = response.data.data;

  if (!data || data.length === 0) return [];

  return data.map((user: TrainerResponse) => ({
    id: user.trainer_id,
    name: user.name,
    profile_image: user.profile_image,
    rating: user.rating,
    location: user.location,
    specializations: user.specializations ?? [],
    experience_years: user.experience_years,
  }));
};

// Get Filter Values
export const getFilterValues = async (): Promise<
  FilterValues[] | undefined
> => {
  const response = await client.get("/specializations");

  return response.data.data;
};
