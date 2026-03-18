import { Bookmark } from "lucide-react";
import Carousels from "./Carousel";

const TopTrainer = () => {
  return (
    <>
      <div className="w-full max-w-[812px] mx-auto mt-20 lg:mt-10">
        <p className="text-white text-center text-[20px] sm:text-[24px] mb-[40px] sm:mb-[64px]">
          Our top
          <span className="relative inline-flex items-center justify-center align-middle mx-1">
            <Bookmark size={28} className="text-red-600 sm:size-8" />
            <span className="absolute text-[14px] sm:text-[16px] font-bold pb-1">5</span>
          </span>
          Trainers
        </p>
      </div>
      <Carousels />
    </>
  );
};

export default TopTrainer;