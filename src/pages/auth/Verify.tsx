import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpFormData } from "@/lib/schemas/signup.schema";
import Button from "@/components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import Otp from "@/components/Auth/Otp";

export default function Verify() {
  const navigate = useNavigate();

  const { handleSubmit } = useForm<signUpFormData>({
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
            Enter Verification Code
          </h2>
          <p className="text-(--gray-color) text-md font-semibold">
            Please enter code that we have sent to your email
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Otp />

          <Button
            text="Verify"
            type="submit"
            onClick={() => navigate("/auth/info")}
          />
        </form>
        <Link
          to="/auth/login"
          className="flex items-center justify-center text-(--main-color)
          font-bold gap-2 rounded-md cursor-pointer hover:opacity-90
          transition text-sm">
          <p className="text-(--color-text-secondary)">
            Don’t receive the code?
          </p>{" "}
          <span>Resend 00:34</span>
        </Link>
      </div>
    </AuthLayout>
  );
}
