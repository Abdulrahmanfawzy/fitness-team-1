import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpFormData } from "@/lib/schemas/signup.schema";
import InputField from "@/components/Auth/InputField";
import { Mail, ArrowLeft } from "lucide-react";
import Button from "@/components/common/Button";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
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
            Forgot your password?
          </h2>
          <p className="text-(--gray-color) text-md  font-semibold">
            Enter your Email Address so we can send you a link to reset your
            password!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <InputField
            label="Email"
            placeholder="Enter your email"
            type="email"
            register={register("email")}
            error={errors.email}
            icon={<Mail size={16} />}
          />

          <Button
            text="Sign Up"
            type="submit"
            onClick={() => navigate("/auth/verify")}
          />
        </form>
        <Link
          to="/auth/login"
          className="flex items-center justify-center gap-2 text-(--main-color)
          font-bold rounded-md cursor-pointer hover:opacity-90
          transition text-lg">
          <ArrowLeft size={20} />
          <p>Go back to Login</p>
        </Link>
      </div>
    </AuthLayout>
  );
}
