import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import {
  updateUserProfile,
  type UpdateProfilePayload,
} from "@/lib/api/profile.api";
import { useMutation } from "@tanstack/react-query";

export default function PersonalInfoForm() {
  const { user, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm<UpdateProfilePayload>({
    defaultValues: {
      name: "",
      email: "",
      about_me: "",
      fitness_goals: "",
      preferred_training: "",
    },
  });

  // Pre-fill form once user is loaded from context
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
    onSuccess: (_, payload) => {
      updateUser({
        name: payload.name,
        email: payload.email,
        about_me: payload.about_me ?? null,
        fitness_goals: payload.fitness_goals ?? null,
        preferred_training: payload.preferred_training ?? null,
      });
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
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Email Address
            </label>
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
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
