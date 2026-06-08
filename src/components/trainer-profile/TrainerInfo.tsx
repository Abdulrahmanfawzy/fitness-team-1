import { FaCheck, FaLocationDot, FaStar } from "react-icons/fa6";
import { BiMoney } from "react-icons/bi";
import { TbStar } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useBookingAuth } from "@/context/useBookingAuth";
import type { TrainerDetails } from "@/lib/api/triners/TrainersApi";

const FALLBACK_AVATAR = `https://ui-avatars.com/api/?background=363636&color=fff&size=400&font-size=0.35&name=`;

interface TrainerInfoProps {
  trainer: TrainerDetails;
}

export default function TrainerInfo({ trainer }: TrainerInfoProps) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { openSheet } = useBookingAuth();

  const handleBook = () => {
    if (isLoggedIn) navigate("/booking");
    else openSheet();
  };

  const minPrice = Math.min(...trainer.packages.map((p) => p.price));
  const isVerified = trainer.packages.length > 0;
  const roundedRating = Math.round(trainer.rating);

  return (
    <div className="bg-linear-to-b from-neutral-700 to-neutral-950 pb-16 overflow-hidden">
      <h2 className="text-center text-white text-2xl sm:text-[28px] font-semibold tracking-[-0.01em] py-8 sm:py-10">
        Meet your Trainer
      </h2>

      <div className="max-w-3xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row gap-8 sm:gap-10 items-center sm:items-start">
        {/* Avatar */}
        <div className="flex flex-col items-center shrink-0">
          <div className="p-0.75 rounded-[22px] bg-linear-to-br from-white/15 to-white/4">
            <img
              src={
                trainer.profile_image ||
                FALLBACK_AVATAR + encodeURIComponent(trainer.name)
              }
              alt={trainer.name}
              onError={(e) => {
                e.currentTarget.src =
                  FALLBACK_AVATAR + encodeURIComponent(trainer.name);
                e.currentTarget.onerror = null;
              }}
              className="w-56 sm:w-64 rounded-[19px] object-cover aspect-3/4 block"
            />
          </div>

          {trainer.is_currently_available && (
            <div className="mt-3 flex items-center gap-1.5 whitespace-nowrap bg-neutral-900/70 backdrop-blur-sm text-white text-[11px] font-medium px-4 py-2 rounded-full border border-white/10">
              <span className="w-1.75 h-1.75 rounded-full bg-green-500 shrink-0" />
              Available this week
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-0 flex-1 min-w-0 pt-1">
          <div className="flex items-center gap-2.5 flex-wrap mb-3">
            <h3 className="text-[34px] sm:text-[40px] text-white font-bold tracking-[-0.025em] leading-[1.1]">
              {trainer.name}
            </h3>
            {isVerified && (
              <span className="flex items-center gap-1.5 bg-red-600/15 border border-red-500/25 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-[0.07em] flex-shrink-0 self-center mt-1">
                <FaCheck className="w-2.25 h-2.25" />
                Verified
              </span>
            )}
          </div>

          <ul className="flex gap-1.5 flex-wrap mb-4 list-none p-0">
            {trainer.specializations.map((tag) => (
              <li
                key={tag}
                className="flex items-center gap-2 bg-white/8 border border-white/12 text-white text-xs font-medium px-3 py-[5px] rounded-full cursor-default select-none">
                <span className="w-1.25 h-1.25 rounded-full bg-red-500 shrink-0" />
                {tag}
              </li>
            ))}
          </ul>

          <p className="text-white/55 text-sm sm:text-[15px] font-normal leading-relaxed mb-5">
            Helping clients build strength for{" "}
            <span className="text-white/85 font-semibold">
              {trainer.experience_years}+ years
            </span>
          </p>

          <div className="w-full h-px bg-white/10 mb-5" />

          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/9 rounded-xl px-4 py-3.5 min-h-18 cursor-default">
              <TbStar className="text-red-500 w-4.5 h-4.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.08em] font-semibold">
                  Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-[15px] leading-none">
                    {trainer.rating}
                  </span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          i < roundedRating ? "text-red-500" : "text-white/18"
                        }`}
                      />
                    ))}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/9 rounded-xl px-4 py-3.5 min-h-18 cursor-default">
              <FaLocationDot className="text-red-500 w-4.5 h-4.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.08em] font-semibold">
                  Location
                </span>
                <span className="text-white text-[14px] font-semibold leading-snug">
                  {trainer.location}
                </span>
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-3 bg-white/5 border border-white/9 rounded-xl px-4 py-3.5 min-h-18 cursor-default">
              <BiMoney className="text-red-500 w-5 h-5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.08em] font-semibold">
                  Starting price
                </span>
                <span className="text-white/80 text-sm leading-snug">
                  From{" "}
                  <span className="text-red-400 font-bold text-base">
                    EGP {minPrice.toFixed(2)}
                  </span>{" "}
                  / session
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleBook}
            className="w-full sm:w-auto sm:min-w-55 py-3.5 px-8 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-[15px] font-bold tracking-[0.02em] rounded-xl transition-colors duration-150 cursor-pointer">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
}
