import { LockKeyholeIcon, ShieldCheck } from "lucide-react";
import InputField from "../../components/Auth/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changePasswordSchema,
  type ChangePasswordFormData,
} from "@/lib/schemas/changePassword.schema";
import { changePassword } from "@/lib/api/profile.api";
import { useMutation } from "@tanstack/react-query";

const fields = [
  {
    label: "Current Password",
    placeholder: "Enter your current password",
    key: "current_password" as const,
  },
  {
    label: "New Password",
    placeholder: "Enter your new password",
    key: "password" as const,
  },
  {
    label: "Confirm New Password",
    placeholder: "Re-enter your new password",
    key: "password_confirmation" as const,
  },
];

export default function SecurityPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => reset(),
  });

  const onSubmit = (data: ChangePasswordFormData) => mutate(data);

  return (
    <div className="flex flex-col gap-8 px-4 sm:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Security & Password
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Keep your account safe by using a strong password
        </p>
      </div>

      <div className="border border-border rounded-2xl overflow-hidden max-w-lg">
        <div className="flex items-center gap-4 px-6 py-5 border-b border-border">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <ShieldCheck size={18} className="text-primary" />
          </div>
          <h4 className="text-base font-bold text-white">Change Password</h4>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-6">
          {fields.map(({ label, placeholder, key }) => (
            <InputField
              key={key}
              label={label}
              placeholder={placeholder}
              type="password"
              register={register(key)}
              error={errors[key]}
              icon={<LockKeyholeIcon size={16} />}
            />
          ))}

          <hr className="border-border" />

          <button
            type="submit"
            disabled={!isDirty || isPending}
            className="w-full h-11 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-cta-hover transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            {isPending ? "Updating..." : "Update Password"}
          </button>

          {error && (
            <p className="text-destructive text-sm">
              Failed to update password. Please check your current password.
            </p>
          )}
          {isSuccess && (
            <p className="text-success text-sm">
              Password updated successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
