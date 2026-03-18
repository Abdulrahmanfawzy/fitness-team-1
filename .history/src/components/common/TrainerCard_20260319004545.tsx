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
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-card">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover object-top"
        />
        <span className="absolute top-3 right-3 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 bg-gray-800/30">
          <Star size={14} className="text-primary fill-primary" />
          {rating}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
          <p className="text-sm">
            <span className="text-primary font-bold">EGP {price}</span>
            <span className="text-white"> /session</span>
          </p>
        </div>

        <div className="flex min-h-21 flex-wrap content-start gap-2">
          {specialties.map((s) => (
            <span
              key={s}
              className="text-sm text-white bg-overlay rounded-4xl px-2 py-1 font-light">
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-white text-sm">
          <MapPin size={16} className="text-primary" />
          <span className="text-white">{location}</span>
        </div>

        <Button text=" View Profile →" />
        {/* <Button text="View Profile" icon={<ArrowRight size={16} />} type="submit" /> */}

        <Button
          className="mt-auto"
          text="View Profile"
          icon={<ArrowRight size={16} />}
          type="submit"
      </div>
    </div>
        )
}