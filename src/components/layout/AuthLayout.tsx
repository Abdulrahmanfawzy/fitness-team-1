import bg from "../../assets/auth-bg.png";
import type { childrenType } from "@/lib/types/main.type";

export default function AuthLayout({ children }: childrenType) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center  py-9"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 backdrop-blur-xs bg-black/60 border border-(--darkMain-color) p-8 rounded-3xl shadow-xl w-128 h-fit">
        {children}
      </div>
    </div>
  );
}
