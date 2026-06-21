import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginFormData } from "@/lib/schemas/login.schema";
import InputField from "@/components/Auth/InputField";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import googleIcon from "@/assets/icons/google.png";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/lib/api/Auth/auth.api";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const verifiedEmail = location.state?.email as string | undefined;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: verifiedEmail ?? "" },
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      const profileComplete = true;

      login(response.user, response.token, profileComplete);
      navigate(profileComplete ? "/" : "/info");
    },
  });

  const onSubmit = (data: loginFormData) => {
    mutate({ email: data.email, password: data.password });
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
            <LogIn className="text-primary" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-4xl text-foreground text-center">
            Welcome Back!
          </h2>
          <p className="text-muted-foreground text-sm text-center">
            Login to your account to continue.
          </p>
        </div>

        {location.state?.verified && (
          <div className="px-4 py-3 rounded-xl bg-success/10 border border-success/30 text-center">
            <p className="text-success text-sm font-semibold">
              Email verified! Please log in to continue.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <InputField
            label="Email"
            placeholder="Enter your email"
            type="text"
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

          {error && (
            <p className="text-destructive text-sm text-center">
              {axios.isAxiosError(error) && error.response?.status === 401
                ? "Invalid email or password."
                : "Something went wrong. Please try again."}
            </p>
          )}

          <Link
            to="/auth/forgot-password"
            className="text-primary hover:opacity-80 transition text-end font-semibold text-sm">
            Forgot Password?
          </Link>

          <Button
            text={isPending ? "Logging in..." : "Login"}
            icon={<ArrowRight size={16} />}
            type="submit"
            disabled={isPending}
          />
        </form>

        <p className="font-bold text-foreground flex justify-center items-center gap-2">
          Don't have an account?
          <Link
            to="/auth/signup"
            className="text-primary hover:opacity-80 transition underline">
            Sign up
          </Link>
        </p>

        <div className="flex items-center gap-3">
          <hr className="flex-1 border-white/20" />
          <span className="text-muted-foreground font-semibold text-sm">
            Or Login with
          </span>
          <hr className="flex-1 border-white/20" />
        </div>

        <button
          type="button"
          className="w-full h-12 rounded-lg bg-elevated cursor-pointer flex items-center justify-center hover:opacity-80 transition">
          <img src={googleIcon} width={20} height={20} alt="Google" />
        </button>
      </div>
    </AuthLayout>
  );
}
