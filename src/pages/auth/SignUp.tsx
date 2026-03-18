import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpFormData } from "@/lib/schemas/signup.schema";
import InputField from "@/components/Auth/InputField";
import { Mail, User, Lock } from "lucide-react";
import Button from "@/components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "@/assets/icons/google.png";

export default function SignUp() {
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
        <h2 className="font-bold mt-4 text-4xl text-(--white-color) text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <InputField
            label="Name"
            placeholder="Enter your name"
            register={register("name")}
            error={errors.name}
            icon={<User size={16} />}
          />
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
          <Button text="Sign Up" type="submit" onClick={() => navigate("/")} />
        </form>
        <p className="font-bold text-(--white-color) flex justify-center items-center gap-2">
          Already have an account?
          <Link
            to="/auth/login"
            className="text-(--main-color) hover:opacity-80 transition underline">
            Login
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <hr className="flex-1 border-white/20" />
          <span className="text-(--gray-color) font-semibold text-sm">
            Or Sign Up
          </span>
          <hr className="flex-1 border-white/20" />
        </div>
        <button
          type="button"
          className="w-full h-12 rounded-lg bg-(--darkGrey-color) mb-6 cursor-pointer flex items-center justify-center hover:opacity-80 transition">
          <img src={googleIcon} width={20} height={20} />
        </button>
      </div>
    </AuthLayout>
  );
}
