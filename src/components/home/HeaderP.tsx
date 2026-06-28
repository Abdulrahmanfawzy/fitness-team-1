import { cn } from "@/lib/utils";

interface HeaderPProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | "justify";
  className?: string;
}

const textAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
} as const;

export default function HeaderP({
  children,
  textAlign = "left",
  className,
}: HeaderPProps) {
  return (
    <p
      className={cn(
        "text-sm md:text-lg font-light text-text-secondary mt-2 max-w-2xl",
        textAlignClasses[textAlign],
        className,
      )}
    >
      {children}
    </p>
  );
}
