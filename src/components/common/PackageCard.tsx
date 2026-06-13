import type { PackageProps } from "@/lib/types/package-types";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { useAuth } from "@/hooks/useAuth";
import { useBookingAuth } from "@/context/useBookingAuth";
import { useBookingContext } from "@/hooks/useBookingContext";
import { useNavigate } from "react-router-dom";

const PackageCard = ({
  title,
  price,
  sessions,
  features,
  isRecommended,
  trainerPackageId,
  onSelectPackage,
}: PackageProps) => {
  const { isLoggedIn } = useAuth();
  const { openSheet } = useBookingAuth();
  const { setTrainerPackageId } = useBookingContext();
  const navigate = useNavigate();

  const handleBook = () => {
    if (!isLoggedIn) {
      openSheet();
      return;
    }
    if (trainerPackageId && onSelectPackage) {
      setTrainerPackageId(trainerPackageId);
      onSelectPackage();
      return;
    }
    navigate("/trainers");
  };

  const displayPrice = String(price).startsWith("EGP")
    ? String(price)
    : `EGP ${price}`;

  return (
    <div
      className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border transition-all duration-300 w-full h-full group ${
        isRecommended
          ? "border-primary bg-primary/5 shadow-[0_0_32px_rgba(239,68,68,0.2)]"
          : "border-zinc-800 bg-[#141414] hover:border-zinc-600"
      }`}>
      {isRecommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-4 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-lg shadow-primary/30">
          ✦ Most Popular
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-white mb-5">{title}</h3>

      {/* Price */}
      <div className="mb-1">
        <span
          className={`text-3xl sm:text-4xl font-bold ${isRecommended ? "text-primary" : "text-white"}`}>
          {displayPrice}
        </span>
      </div>
      <span className="text-zinc-500 text-xs mb-5">one-time payment</span>

      {/* Sessions + duration */}
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400">
          {sessions} sessions
        </span>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400">
          60 min / session
        </span>
      </div>

      {/* Features */}
      <ul className="grow space-y-3 mb-8">
        {features.length > 0 ? (
          features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-zinc-300 text-sm">
              <HiOutlineCheckCircle
                size={18}
                className={`shrink-0 ${isRecommended ? "text-primary" : "text-zinc-500"}`}
              />
              {feature}
            </li>
          ))
        ) : (
          <li className="flex items-center gap-3 text-zinc-500 text-sm">
            <HiOutlineCheckCircle
              size={18}
              className="shrink-0 text-zinc-700"
            />
            Standard session included
          </li>
        )}
      </ul>

      {/* CTA */}
      <button
        className={`w-full py-3 rounded-xl font-bold transition-all duration-200 cursor-pointer text-sm active:scale-[0.98] ${
          isRecommended
            ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25"
            : "border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-500"
        }`}
        onClick={handleBook}>
        Get Started
      </button>
    </div>
  );
};

export default PackageCard;
