import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";
import { AlertTriangle, ServerCrash, ShieldOff, Frown } from "lucide-react";

interface ErrorConfig {
  code: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const getErrorConfig = (status?: number): ErrorConfig => {
  switch (status) {
    case 404:
      return {
        code: "404",
        title: "Page Not Found",
        description:
          "The page you're looking for doesn't exist or has been moved.",
        icon: <Frown size={28} className="text-primary" />,
      };
    case 400:
      return {
        code: "400",
        title: "Bad Request",
        description:
          "Something about this request wasn't quite right. Try going back.",
        icon: <AlertTriangle size={28} className="text-yellow-400" />,
      };
    case 401:
      return {
        code: "401",
        title: "Unauthorized",
        description: "You need to be logged in to access this page.",
        icon: <ShieldOff size={28} className="text-primary" />,
      };
    case 403:
      return {
        code: "403",
        title: "Access Denied",
        description: "You don't have permission to view this page.",
        icon: <ShieldOff size={28} className="text-primary" />,
      };
    case 500:
      return {
        code: "500",
        title: "Server Error",
        description: "Something went wrong on our end. Please try again later.",
        icon: <ServerCrash size={28} className="text-red-400" />,
      };
    default:
      return {
        code: "Oops",
        title: "Something Went Wrong",
        description:
          "An unexpected error occurred. Try going back to the home page.",
        icon: <AlertTriangle size={28} className="text-primary" />,
      };
  }
};

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const status = isRouteErrorResponse(error) ? error.status : undefined;
  const { code, title, description, icon } = getErrorConfig(status);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 gap-8">
      {/* Big code */}
      <div className="relative select-none">
        <span className="text-[120px] sm:text-[180px] font-black leading-none text-white/5 select-none">
          {code}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20
                          flex items-center justify-center shadow-lg shadow-primary/10">
            {icon}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center flex flex-col gap-3 max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 rounded-xl border border-white/10 text-white/70
                     hover:bg-white/5 hover:text-white text-sm font-medium
                     transition-all duration-200 cursor-pointer w-full sm:w-auto">
          ← Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 rounded-xl bg-primary hover:bg-cta-hover
                     text-white text-sm font-semibold transition-all duration-200
                     cursor-pointer w-full sm:w-auto
                     shadow-[0_4px_20px_rgba(255,77,77,0.3)]
                     hover:shadow-[0_4px_28px_rgba(255,77,77,0.45)]">
          Back to Home
        </button>
      </div>

      {/* Subtle hint */}
      {status && (
        <p className="text-white/20 text-xs font-mono">Error {status}</p>
      )}
    </div>
  );
}
