import client from "./client";

export interface UpdateProfilePayload {
  name: string;
  email: string;
  about_me?: string | null;
  fitness_goals?: string | null;
  preferred_training?: string | null;
}

interface FitnessProfile {
  gender: string;
  age: number;
  height_cm: number;
  weight_kg: number;
  fitness_goal: string;
  fitness_level: string;
  workout_location: string;
  preferred_training_days: string;
}

export const saveFitnessProfile = async (
  payload: FitnessProfile,
): Promise<void> => {
  await client.post("/profile/fitness-profile", payload);
};

export const updateUserProfile = async (
  payload: UpdateProfilePayload,
): Promise<void> => {
  await client.put("/profile", payload);
};

export const uploadProfileImage = async (
  file: File,
): Promise<{ profile_image: string }> => {
  const formData = new FormData();
  formData.append("image", file);
  const { data } = await client.post("/profile/upload-image", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const removeProfileImage = async (): Promise<void> => {
  await client.delete("/profile/remove-image");
};
