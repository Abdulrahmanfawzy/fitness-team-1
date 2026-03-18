import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpFormData } from "@/lib/schemas/signup.schema";
import InputField from "@/components/Auth/InputField";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "@/assets/icons/google.png";

export default function Login() {
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
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-(--darkMain-color) rounded-xl flex items-center justify-center">
            <LogIn className="text-(--main-color)" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-4xl text-(--white-color) text-center">
            Welcome Back!
          </h2>
          <p className="text-(--gray-color) text-md flex items-center justify-center">
            Login to your account to continue.
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
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            register={register("password")}
            error={errors.password}
            icon={<Lock size={16} />}
          />
          <Link
            to="/auth/forgot-password"
            className="text-(--main-color) hover:opacity-80 transition text-end font-semibold">
            Forgot Password?
          </Link>

          <Button
            text="Login"
            icon={<ArrowRight size={16} />}
            type="submit"
            onClick={() => navigate("/")}
          />
        </form>

        <p className="font-bold text-(--white-color) flex justify-center items-center gap-2">
          Don't have an account?
          <Link
            to="/auth/signup"
            className="text-(--main-color) hover:opacity-80 transition underline">
            Sign up
          </Link>
        </p>

        <div className="flex items-center gap-3">
          <hr className="flex-1 border-white/20" />
          <span className="text-(--gray-color) font-semibold text-sm">
            Or Login with
          </span>
          <hr className="flex-1 border-white/20" />
        </div>

        <button
          type="button"
          className="w-full h-12 rounded-lg bg-(--darkGrey-color) cursor-pointer flex items-center justify-center hover:opacity-80 transition">
          <img src={googleIcon} width={20} height={20} />
        </button>
      </div>
    </AuthLayout>
  );
}
