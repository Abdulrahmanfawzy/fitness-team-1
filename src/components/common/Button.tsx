import type { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  width?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  variant?: "primary" | "outline" | "outlinePrimary";
  className?: string;
  iconPosition?: "left" | "right";
  withShadow?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  text = "",
  width = "w-full",
  onClick,
  type = "button",
  icon,
  variant = "primary",
  className = "",
  iconPosition = "right",
  withShadow = true,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/80"
      : variant === "outlinePrimary"
        ? "border border-cta-primary text-cta-primary bg-transparent hover:bg-cta-primary/10"
        : "border border-ring text-text-primary hover:bg-primary/10";

  const shadowStyle =
    variant === "primary" && withShadow
      ? { boxShadow: "0 10px 30px 0 rgba(255, 77, 77, 0.2)" }
      : undefined;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? text}
      style={shadowStyle}
      className={`${width} mt-4 flex items-center justify-center gap-2 rounded-md py-3 font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses} ${className}`}
    >
      {icon && iconPosition === "left" ? icon : null}
      {text ? <span>{text}</span> : null}
      {icon && iconPosition === "right" ? icon : null}
    </button>
  );
}
