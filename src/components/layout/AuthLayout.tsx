import bg from "../../assets/auth-bg.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex justify-center sm:py-12 overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative z-10 w-full sm:w-lg sm:h-fit sm:my-auto
                      bg-black/80 sm:bg-black/60
                      sm:backdrop-blur-xs
                      sm:border sm:border-(--darkMain-color)
                      sm:rounded-3xl sm:shadow-xl
                      p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
