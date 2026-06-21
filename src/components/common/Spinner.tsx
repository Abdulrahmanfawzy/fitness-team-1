interface SpinnerProps {
  fullPage?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-4 h-4 border-2",
  md: "w-8 h-8 border-2",
  lg: "w-12 h-12 border-[3px]",
};

export default function Spinner({
  fullPage = false,
  size = "md",
}: SpinnerProps) {
  const spinner = (
    <div
      className={`${sizeMap[size]} border-primary border-t-transparent rounded-full animate-spin`}
    />
  );

  if (fullPage) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center py-10">
      {spinner}
    </div>
  );
}
