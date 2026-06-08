import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/common/Button";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Otp from "@/components/Auth/Otp";
import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "@/lib/api/Auth/auth.api";
import { useState } from "react";

function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  return `${name[0]}***@${domain}`;
}

export default function Verify() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isForgotPassword = !!location.state?.email;
  const email =
    (location.state?.email as string) || searchParams.get("email") || "";

  const [code, setCode] = useState("");

  const { mutate, isPending, error } = useMutation({
    mutationFn: verifyOtp,
    onSuccess: () => {
      if (isForgotPassword) {
        navigate("/auth/reset-password", { state: { email, code } });
      } else {
        navigate("/info");
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
          <h2 className="font-bold text-4xl text-(--white-color) mt-5">
            Enter Verification Code
          </h2>
          <p className="text-(--gray-color) text-md font-semibold">
            We sent a code to{" "}
            <span className="text-(--white-color)">{maskEmail(email)}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Otp onChange={setCode} />

          {error && (
            <p className="text-red-400 text-sm text-center">
              Invalid or expired OTP. Please try again.
            </p>
          )}

          <Button
            text={isPending ? "Verifying..." : "Verify"}
            type="submit"
            disabled={code.length < 6 || isPending}
          />
        </form>
      </div>
    </AuthLayout>
  );
}
