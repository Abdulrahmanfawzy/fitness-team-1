import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpFormData } from "@/lib/schemas/signup.schema";
import InputField from "@/components/Auth/InputField";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { LockKeyholeIcon } from "lucide-react";

export default function ResetPass() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: signUpFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <h2 className="font-bold text-4xl text-(--white-color) mt-5">
            Reset password?
          </h2>
          <p className="text-(--gray-color) text-md  font-semibold">
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
            register={register("password")}
            error={errors.password}
            icon={<LockKeyholeIcon size={16} />}
          />

          <Button
            text="Sign Up"
            type="submit"
            onClick={() => navigate("/auth/verify")}
          />
        </form>
      </div>
    </AuthLayout>
  );
}
