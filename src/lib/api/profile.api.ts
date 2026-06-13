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

// ─── Normalised Response Types (what the UI consumes) ────────────────────────

export interface Session {
  id: number;
  trainer_name: string;
  date: string; // "YYYY-MM-DD"
  time: string; // "HH:MM"
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

// ─── Raw API shapes (what the backend actually returns) ───────────────────────

interface RawSession {
  id: number;
  booking_id: number;
  trainer_id: number;
  session_start: string; // "2026-06-17 14:00:00"
  session_end: string;
  session_status: string;
  notes: string | null;
}

interface RawPackage {
  booking_id: number;
  trainer_id: number;
  title: string;
  description: string;
  sessions: number; // total sessions in package
  duration_days: number;
  price: string;
  is_active: number; // 1 | 0
}

// ─── Normalisation helpers ────────────────────────────────────────────────────

// "2026-06-17 14:00:00" → date: "2026-06-17", time: "14:00"
const splitDateTime = (dt: string) => {
  const [date, timeFull] = dt.split(" ");
  const time = timeFull?.slice(0, 5) ?? "";
  return { date, time };
};

const normaliseSession = (raw: RawSession): Session => {
  const { date, time } = splitDateTime(raw.session_start);
  return {
    id: raw.id,
    trainer_name: `Trainer ${raw.trainer_id}`, // trainer name not returned by API
    date,
    time,
    status: raw.session_status,
    package_name: `Booking #${raw.booking_id}`,
  };
};

const normalisePackage = (raw: RawPackage): Package => ({
  id: raw.booking_id,
  name: raw.title,
  status: raw.is_active === 1 ? "Active" : "Inactive",
  sessions_total: raw.sessions,
  sessions_used: 0, // not returned by API — default to 0
  expires_at: null, // not returned by API
});

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
  const raw: RawSession[] = data.sessions ?? [];
  return raw.map(normaliseSession);
};

export const getPackages = async (): Promise<Package[]> => {
  const { data } = await client.get("/profile/packages");
  const raw: RawPackage[] = data.packages ?? [];
  return raw.map(normalisePackage);
};

export const getProgressActivity = async (): Promise<ProgressActivity> => {
  const { data } = await client.get("/profile/progress-activity");
  return data.progress;
};

export const getWorkoutHistory = async (): Promise<WorkoutHistory[]> => {
  const { data } = await client.get("/profile/workout-history");
  return data.history ?? [];
};

export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
  const { data } = await client.get("/profile/payment-methods");
  return data.payment_methods ?? [];
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
