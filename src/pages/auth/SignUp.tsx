import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpFormData } from "@/lib/schemas/signup.schema";
import InputField from "@/components/Auth/InputField";
import { Mail, User, Lock } from "lucide-react";
import Button from "@/components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "@/assets/icons/google.png";
import { useMutation } from "@tanstack/react-query";
import { getGoogleRedirectUrl, registerUser } from "@/lib/api/Auth/auth.api";

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: (response, variables) => {
      // Store credentials temporarily — login happens after email verification
      sessionStorage.setItem(
        "pending_auth",
        JSON.stringify({
          user: response.user,
          token: response.token,
        }),
      );
      navigate(`/auth/verify?email=${encodeURIComponent(variables.email)}`, {
        state: { fromRegister: true },
      });
    },
  });

  const onSubmit = (data: signUpFormData) => {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
      role: "trainee",
    });
  };

  const handleGoogleLogin = async () => {
    const { url } = await getGoogleRedirectUrl();
    window.location.href = url;
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <h2 className="font-bold mt-4 text-4xl text-foreground text-center">
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
          <InputField
            label="Confirm Password"
            placeholder="Re-enter your password"
            type="password"
            register={register("password_confirmation")}
            error={errors.password_confirmation}
            icon={<Lock size={16} />}
          />

          {error && (
            <p className="text-destructive text-sm text-center">
              Registration failed. Please try again.
            </p>
          )}

          <Button
            text={isPending ? "Creating account..." : "Sign Up"}
            type="submit"
            disabled={isPending}
          />
        </form>

        <p className="font-bold text-foreground flex justify-center items-center gap-2">
          Already have an account?
          <Link
            to="/auth/login"
            className="text-primary hover:opacity-80 transition underline">
            Login
          </Link>
        </p>

        <div className="flex items-center gap-3">
          <hr className="flex-1 border-white/20" />
          <span className="text-muted-foreground font-semibold text-sm">
            Or Sign Up
          </span>
          <hr className="flex-1 border-white/20" />
        </div>

        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-full h-12 rounded-lg bg-elevated mb-6 cursor-pointer flex items-center justify-center hover:opacity-80 transition"
          onClick={handleGoogleLogin}>
          <img
            src={googleIcon}
            width={20}
            height={20}
            alt="Google Icon"
            aria-hidden="true"
          />
        </button>
      </div>
    </AuthLayout>
  );
}
