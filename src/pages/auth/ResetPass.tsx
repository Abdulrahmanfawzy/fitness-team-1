import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  type resetPasswordFormData,
} from "@/lib/schemas/password.schema";
import InputField from "@/components/Auth/InputField";
import Button from "@/components/common/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { LockKeyholeIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/lib/api/Auth/auth.api";
import { useEffect } from "react";

export default function ResetPass() {
  const navigate = useNavigate();
  const location = useLocation();

const email = location.state?.email as string | undefined;
const code = location.state?.code as string | undefined;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      navigate("/auth/login");
    },
  });

  useEffect(() => {
    if (!email || !code) {
      navigate("/auth/forgot-password", { replace: true });
    }
  }, [email, code, navigate]);

  if (!email || !code) return null; 

  const onSubmit = (data: resetPasswordFormData) => {
    mutate({
      email,
      code,
      password: data.password,
      password_confirmation: data.password_confirmation,
    });
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <h2 className="font-bold text-4xl text-(--white-color) mt-5">
            Reset password
          </h2>
          <p className="text-(--gray-color) text-md font-semibold">
            Please set your new password
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <InputField
            label="New Password"
            placeholder="Enter your new password"
            type="password"
            register={register("password")}
            error={errors.password}
            icon={<LockKeyholeIcon size={16} />}
          />
          <InputField
            label="Re-enter Password"
            placeholder="Re-enter your new password"
            type="password"
            register={register("password_confirmation")}
            error={errors.password_confirmation}
            icon={<LockKeyholeIcon size={16} />}
          />

          {error && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}

          <Button
            text={isPending ? "Resetting..." : "Reset Password"}
            type="submit"
            disabled={isPending}
          />
        </form>
      </div>
    </AuthLayout>
  );
}
