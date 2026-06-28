import { z } from "zod";

export const infoSchema = z.object({
  gender: z.string().min(1, "Please select your gender"),
  fitness_level: z.string().min(1, "Please select your fitness level"),
  workout_location: z.string().min(1, "Please select your workout location"),
  preferred_training_days: z.string().min(1, "Please select training days"),
  fitness_goals: z.array(z.string()).min(1, "Please select at least one goal"),
  height_cm: z.coerce
    .number()
    .min(100, "At least 100 cm")
    .max(250, "Max 250 cm"),
  weight_kg: z.coerce.number().min(30, "At least 30 kg").max(300, "Max 300 kg"),
  age: z.coerce.number().min(10, "At least 10").max(100, "Max 100"),
});

export type InfoFormData = z.infer<typeof infoSchema>;
