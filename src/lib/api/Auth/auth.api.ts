import client from "../client";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  profile_image: string | null;
  membership_date: string | null;
  about_me: string | null;
  fitness_goals: string | null;
  preferred_training: string | null;
  // fitness profile fields from Info page
  gender: string | null;
  age: number | null;
  height_cm: number | null;
  weight_kg: number | null;
  fitness_level: string | null;
  workout_location: string | null;
  preferred_training_days: string | null;
  // invoices
  invoices: Invoice[];
}

export interface Invoice {
  invoice_id: string;
  date: string;
  description: string;
  amount: string;
  status: string;
}

export interface AuthResponse {
  status: boolean;
  message: string;
  token: string;
  user: AuthUser;
  is_complete_the_profile: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface VerifyOtpPayload {
  email: string;
  code: string;
}

export interface ResetPasswordPayload {
  email: string;
  code: string;
  password: string;
  password_confirmation: string;
}

export const loginUser = async (
  payload: LoginPayload,
): Promise<AuthResponse> => {
  const { data } = await client.post("/login", payload);
  return data;
};

export const registerUser = async (
  payload: RegisterPayload,
): Promise<AuthResponse> => {
  const { data } = await client.post("/register", payload);
  return data;
};

export const logout = async (): Promise<void> => {
  await client.post("/logout");
};

export const verifyOtp = async (payload: VerifyOtpPayload): Promise<void> => {
  await client.post("/verify-otp", null, { params: payload });
};

export const forgotPassword = async (
  payload: ForgotPasswordPayload,
): Promise<void> => {
  await client.post("/forgot-password", payload);
};

export const getProfile = async (): Promise<{ user: AuthUser }> => {
  const { data } = await client.get("/profile");
  const { 0: invoices, ...rest } = data;
  return {
    user: {
      ...rest,
      invoices: invoices ?? [],
    },
  };
};

export const resetPassword = async (
  payload: ResetPasswordPayload,
): Promise<void> => {
  await client.post("/reset-password", null, { params: payload });
};

export const getGoogleRedirectUrl = async (): Promise<{ url: string }> => {
  const { data } = await client.get("/auth/google/redirect");
  return data;
};
