import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import {
  updateUserProfile,
  type UpdateProfilePayload,
} from "@/lib/api/profile.api";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  personalInfoSchema,
  type PersonalInfoFormData,
} from "@/lib/schemas/personalInfo.schema";
import { toast } from "sonner";

export default function PersonalInfoForm() {
  const { user, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      about_me: "",
      fitness_goals: "",
      preferred_training: "",
    },
  });

  useEffect(() => {
    if (!user) return;
    reset({
      name: user.name ?? "",
      email: user.email ?? "",
      about_me: user.about_me ?? "",
      fitness_goals: user.fitness_goals ?? "",
      preferred_training: user.preferred_training ?? "",
    });
  }, [user, reset]);

  const { mutate: saveProfile } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (_, variables) => {
      // Use the submitted form values directly — the backend only persists
      // name/email and returns null for the other fields (backend limitation).
      updateUser({
        name: variables.name,
        about_me: variables.about_me ?? null,
        fitness_goals: variables.fitness_goals ?? null,
        preferred_training: variables.preferred_training ?? null,
      });
      toast.success("Profile updated successfully!");
    },
    onError: () => {
      toast.error("Failed to update profile. Please try again.");
    },
  });

  const onSubmit = (data: UpdateProfilePayload) => {
    saveProfile(data);
  };

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        Personal Information
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-(--gray-color) rounded-xl p-4 sm:p-6 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Full Name
            </label>
            <Input
              {...register("name")}
              placeholder="Full Name"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.name && errors.name.message}
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Email Address
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.email && errors.email.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-semibold text-(--gray-color)">
            About Me
          </label>
          <Input
            {...register("about_me")}
            placeholder="Tell us about yourself"
            className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
          />
          <p className="text-sm text-red-500 mt-1">
            {errors.about_me && errors.about_me.message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Fitness Goal
            </label>
            <Input
              {...register("fitness_goals")}
              placeholder="e.g. Build Muscle"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.fitness_goals && errors.fitness_goals.message}
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Preferred Training
            </label>
            <Input
              {...register("preferred_training")}
              placeholder="e.g. Both (Online & Gym)"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.preferred_training && errors.preferred_training.message}
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isDirty || isSubmitting}
          className="w-full sm:w-147 mx-auto h-12 text-sm font-semibold text-white bg-primary border border-primary rounded-sm hover:bg-primary/80 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
