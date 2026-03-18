import { Star } from "lucide-react";
import {
  HEADER_RATING,
  HEADER_STATUS_ITEMS,
  type HeaderStatusItem,
} from "@/lib/constants/home/headerStatus.constants";

function StatusItem({ value, label }: HeaderStatusItem) {
  return (
    <div>
      <p className="type-title-m weight-bold leading-none text-white">
        {value}
      </p>
      <p className="mt-2 type-body-m text-text-secondary">{label}</p>
    </div>
  );
}

function RatingItem() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Star className="fill-white text-white" size={22} />
        <p className="type-title-m weight-bold leading-none text-white">
          {HEADER_RATING.value}
        </p>
      </div>
      <p className="mt-2 type-body-m text-text-secondary">
        {HEADER_RATING.label}
      </p>
    </div>
  );
}

export default function HeaderStatus() {
  return (
    <div className="mt-7 w-full max-w-4xl  ">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {HEADER_STATUS_ITEMS.map((item) => (
          <StatusItem key={item.label} label={item.label} value={item.value} />
        ))}
        <RatingItem />
      </div>
    </div>
  );
}
