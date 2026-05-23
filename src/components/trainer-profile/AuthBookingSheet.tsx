import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Dumbbell, ArrowRight } from "lucide-react";
import { useBookingAuth } from "@/context/useBookingAuth";

export default function AuthBookingSheet() {
  const navigate = useNavigate();
  const { isOpen, closeSheet } = useBookingAuth();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSheet();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeSheet]);

  const goTo = (path: string) => {
    closeSheet();
    navigate(path);
  };

  const content = (
    <div className="relative bg-[#161616] border border-white/10 px-6 pt-6 pb-8 w-full rounded-t-3xl sm:rounded-2xl">
      {/* Drag handle — mobile only */}
      <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-6 sm:hidden" />

      {/* Close */}
      <button
        onClick={closeSheet}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white">
        <X size={18} />
      </button>

      {/* Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
          <Dumbbell className="text-primary w-6 h-6" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center mb-6">
        <h2 className="text-white text-xl font-semibold mb-2">
          Sign in to Book a Session
        </h2>
        <p className="text-white/50 text-sm leading-relaxed">
          You're one step away from starting your fitness journey.
          <br />
          Log in or create a free account to continue.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => goTo("/auth/login")}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 group">
          Log In
          <ArrowRight
            size={16}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
        <button
          onClick={() => goTo("/auth/signup")}
          className="w-full h-12 border border-white/15 hover:border-white/30 hover:bg-white/5 text-white/80 hover:text-white font-medium rounded-xl transition-all">
          Create an Account
        </button>
      </div>

      <p className="text-center text-white/25 text-xs mt-5">
        Free to join · No credit card required
      </p>
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeSheet}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile — bottom sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}>
        {content}
      </div>

      {/* Desktop — centered modal */}
      <div
        className={`fixed inset-0 z-50 hidden sm:flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}>
        <div
          className={`w-full max-w-md transition-all duration-300 ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}>
          {content}
        </div>
      </div>
    </>
  );
}
