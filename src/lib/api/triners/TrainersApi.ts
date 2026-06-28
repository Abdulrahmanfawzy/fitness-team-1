import type { TrainerResponse, FilterValues } from "@/lib/types/TrainigTypes";
import client from "../client";

export interface TrainerDetails {
  id: number;
  trainer_id: number;
  name: string;
  location: string;
  profile_image: string;
  bio: string;
  experience_years: number;
  rating: number;
  is_currently_available: boolean;
  specializations: string[];
  certifications: {
    id: number;
    certificate_name: string;
    organization: string;
    year: number;
    file_path: string;
  }[];
  availability: {
    id: number;
    day_of_week: string;
    start_time: string;
    end_time: string;
    is_active: boolean;
  }[];
  availability_exceptions: {
    id: number;
    date: string;
    is_available: boolean;
    reason: string;
  }[];
  packages: {
    trainer_package_id: number;
    package_id: number;
    title: string;
    description: string;
    sessions: number;
    duration_days: number;
    price: number;
    features: string[];
  }[];
}

// All Trainers
export const getTrainers = async (): Promise<TrainerResponse[]> => {
  const response = await client.get("/trainers");
  return response.data.data ?? [];
};

export const getTrainerById = async (id: number): Promise<TrainerDetails> => {
  const { data } = await client.get(`/trainers/${id}`);
  return data.data;
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
    id: user.id,
    name: user.name,
    profile_image: user.profile_image,
    rating: user.rating,
    location: user.location,
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
    params: { durationId, specializationId },
  });
  const data = response.data.data;

  if (!data || data.length === 0) return [];

  return data.map((user: TrainerResponse) => ({
    id: user.id,
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
