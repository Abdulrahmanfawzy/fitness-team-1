import { ArrowRight, MapPin, Star } from "lucide-react";
import Button from "./Button";
interface TrainerCardProps {
  image: string;
  name: string;
  rating: number;
  price: number;
  specialties: string[];
  location: string;
}
export default function TrainerCard({
  image,
  name,
  rating,
  price,
  specialties,
  location,
}: TrainerCardProps) {
  return (
    <div className="bg-(--lightGrey-color) rounded-2xl overflow-hidden w-90">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover object-top"
        />
        <span className="absolute top-3 right-3 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5">
          <Star size={14} className="text-(--main-color) fill-(--main-color)" />
          {rating}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-sm">
            <span className="text-(--main-color) font-bold">EGP {price}</span>
            <span className="text-(--white-color)"> /session</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {specialties.map((s) => (
            <span
              key={s}
              className="text-sm text-(--gray-color) bg-(--secondary-gray) rounded-4xl px-2 ">
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-(--gray-color) text-sm">
          <MapPin size={16} className="text-(--main-color)" />
          <span className="text-(--white-color)">{location}</span>
        </div>
        <Button text=" View Profile →" />
        {/* <Button text="View Profile" icon={<ArrowRight size={16} />} type="submit" /> */}
      </div>
    </div>
  );
}
