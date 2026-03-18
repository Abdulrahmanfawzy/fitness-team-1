import { HiOutlineCheckCircle } from "react-icons/hi2";

interface PackageProps {
  title: string;
  price: string;
  sessions: string;
  features: string[];
  isRecommended?: boolean;
  onClick: () => void;
}

const PackageCard = ({
  title,
  price,
  sessions,
  features,
  isRecommended,
  onClick,
}: PackageProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col p-8 rounded-2xl border ${isRecommended ? "border-red-500 bg-[#1a1212]" : "border-zinc-800 bg-[#1a1a1a]"} w-full max-w-sm`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
          ✦ Recommended
        </div>
      )}

      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-2">
        <span className="text-3xl font-bold text-red-500">EGP {price}</span>
        <span className="text-zinc-400 text-sm ml-1">/ package</span>
      </div>

      <div className="flex justify-between text-zinc-500 text-xs font-medium border-b border-zinc-800 pb-4 mb-6">
        <span>60 MIN</span>
        <span>{sessions} essions</span>
      </div>

      <ul className="grow space-y-4 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-zinc-300 text-sm"
          >
            <span className="text-red-500 text-xs">
              <HiOutlineCheckCircle size={20} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-bold transition-all ${isRecommended ? "bg-red-500 text-white hover:bg-red-600" : "border border-zinc-700 text-white hover:bg-zinc-800"}`}
      >
        Book
      </button>
    </div>
  );
};

export default PackageCard;
