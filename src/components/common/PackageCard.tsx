import type { PackageProps } from "@/lib/types/package-types";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useBookingAuth } from "@/context/useBookingAuth";

const PackageCard = ({
  title,
  price,
  sessions,
  features,
  isRecommended,
}: PackageProps) => {
  const { isLoggedIn } = useAuth();
  const { openSheet } = useBookingAuth();
  const navigate = useNavigate();

  const handleBook = () => {
    if (isLoggedIn) navigate("/booking");
    else openSheet();
  };

  return (
    <div
      className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border transition-all w-full h-full ${
        isRecommended
          ? "border-red-500 shadow-[0_0_24px_rgba(255,77,77,0.35)]"
          : "border-zinc-800 bg-[#1a1a1a]"
      }`}>
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
          ✦ Recommended
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-2">
        <span className="text-2xl sm:text-3xl font-bold text-red-500">
          {price}
        </span>
        <span className="text-zinc-400 text-sm ml-1">/ package</span>
      </div>
      <div className="flex justify-between text-zinc-500 text-xs font-medium border-b border-zinc-800 pb-4 mb-6">
        <span>60 MIN</span>
        <span>{sessions}</span>
      </div>
      <ul className="grow space-y-3 sm:space-y-4 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-zinc-300 text-sm">
            <span className="text-red-500 shrink-0">
              <HiOutlineCheckCircle size={20} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg font-bold transition-all cursor-pointer text-sm sm:text-base ${
          isRecommended
            ? "bg-red-500 text-white hover:bg-red-600"
            : "border border-zinc-700 text-white hover:bg-zinc-800"
        }`}
        onClick={handleBook}>
        Book
      </button>
    </div>
  );
};

export default PackageCard;
