import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/common/Button";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Otp from "@/components/Auth/Otp";
import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "@/lib/api/Auth/auth.api";
import { useState } from "react";

function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  if (!name || !domain) return email;
  return `${name[0]}***@${domain}`;
}

export default function Verify() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isForgotPassword =
    !location.state?.fromRegister && !!location.state?.email;
  const email =
    (location.state?.email as string) || searchParams.get("email") || "";

  const [code, setCode] = useState("");

  const { mutate, isPending, error } = useMutation({
    mutationFn: verifyOtp,
    onSuccess: () => {
      if (isForgotPassword) {
        navigate("/auth/reset-password", { state: { email, code } });
      } else {
        // Backend doesn't return a token on verify — redirect to login.
        // Login.tsx already handles navigating to /info if profile is incomplete.
        navigate("/auth/login", {
          state: { verified: true },
        });
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 6) return;
    mutate({ email, code });
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <h2 className="font-bold text-4xl text-foreground mt-5">
            {isForgotPassword ? "Reset Password" : "Verify your email"}
          </h2>
          <p className="text-muted-foreground text-sm">
            We sent a 6-digit code to{" "}
            <span className="text-foreground font-semibold">
              {maskEmail(email)}
            </span>
          </p>
          <p className="text-xs text-muted-foreground/60 max-w-xs leading-relaxed">
            Check your inbox and spam folder. Enter the code below to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Otp onChange={setCode} />

          {error && (
            <p className="text-destructive text-sm text-center">
              Invalid or expired code. Please try again.
            </p>
          )}

          <Button
            text={isPending ? "Verifying..." : "Verify"}
            type="submit"
            disabled={code.length < 6 || isPending}
          />
        </form>

        <p className="text-center text-xs text-muted-foreground/50">
          Didn't receive a code? Check your spam folder.
        </p>
      </div>
    </AuthLayout>
  );
}
