import client from "./client";

// ─── Payload Types ────────────────────────────────────────────────────────────

export interface UpdateProfilePayload {
  name: string;
  email: string;
  about_me?: string | null;
  fitness_goals?: string | null;
  preferred_training?: string | null;
}

export interface FitnessProfilePayload {
  gender: string;
  age: number;
  height_cm: number;
  weight_kg: number;
  fitness_goal: string;
  fitness_level: string;
  workout_location: string;
  preferred_training_days: string;
}

export interface ChangePasswordPayload {
  current_password: string;
  password: string;
  password_confirmation: string;
}

export interface AddPaymentMethodPayload {
  card_number: string;
  card_holder: string;
  expiry_date: string;
}

// ─── Response Types ───────────────────────────────────────────────────────────

export interface Session {
  id: number;
  trainer_name: string;
  date: string;
  time: string;
  status: string;
  package_name: string;
}

export interface Package {
  id: number;
  name: string;
  status: string;
  sessions_total: number;
  sessions_used: number;
  expires_at: string | null;
}

export interface ProgressActivity {
  completed_sessions: number;
  upcoming_sessions: number;
  cancelled_sessions: number;
}

export interface WorkoutHistory {
  id: number;
  date: string;
  exercise: string;
  duration_minutes: number;
  calories_burned: number | null;
}

export interface PaymentMethod {
  id: number;
  type: string;
  last_four: string | null;
  is_default: boolean;
}

export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  user: {
    id: number;
    name: string;
    about_me: string | null;
    fitness_goals: string | null;
    preferred_training: string | null;
    profile_image: string | null;
  };
}


// ─── API Calls ────────────────────────────────────────────────────────────────

export const saveFitnessProfile = async (
  payload: FitnessProfilePayload,
): Promise<void> => {
  await client.post("/profile/fitness-profile", payload);
};

export const updateUserProfile = async (
  payload: UpdateProfilePayload,
): Promise<UpdateProfileResponse> => {
  const { data } = await client.put("/profile", payload);
  return data;
};

export const getSessions = async (): Promise<Session[]> => {
  const { data } = await client.get("/profile/sessions");
  return data.sessions;
};

export const getPackages = async (): Promise<Package[]> => {
  const { data } = await client.get("/profile/packages");
  return data.packages;
};

export const getProgressActivity = async (): Promise<ProgressActivity> => {
  const { data } = await client.get("/profile/progress-activity");
  return data.progress;
};

export const getWorkoutHistory = async (): Promise<WorkoutHistory[]> => {
  const { data } = await client.get("/profile/workout-history");
  return data.history;
};

export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
  const { data } = await client.get("/profile/payment-methods");
  return data.payment_methods;
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
  await client.delete("/landing/removeImage");
};

export const changePassword = async (
  payload: ChangePasswordPayload,
): Promise<void> => {
  await client.post("/profile/change-password", payload);
};


// export const addPaymentMethod = async (
//   payload: AddPaymentMethodPayload,
// ): Promise<PaymentMethod> => {
//   const { data } = await client.post("/profile/payment-methods", payload);
//   return data;
// };

// export const deletePaymentMethod = async (id: number): Promise<void> => {
//   await client.delete(`/cards/${id}`);
// };