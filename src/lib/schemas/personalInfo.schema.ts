import { z } from "zod";

export const personalInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  about_me: z.string().max(500, "Max 500 characters").optional().nullable(),
  fitness_goals: z.string().max(200).optional().nullable(),
  preferred_training: z.string().max(200).optional().nullable(),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
