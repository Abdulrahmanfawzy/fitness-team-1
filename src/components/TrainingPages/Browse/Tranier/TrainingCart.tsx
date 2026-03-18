import TrainerCard from "@/components/common/TrainerCard";
import { Button } from "@/components/ui/button";
import { Trainers } from "@/lib/constants/PageTraning";
import { useState } from "react";
const TrainingCart = () => {
  const [Load, SetLoad] = useState(6);

  const handleMore = () => {
    SetLoad((pre) => pre + 6);
  };
  return (
    <div className="bg-gradient-to-b from-[#1F0D0D] to-[#141212] min-h-screen lg:min-h-[1299px] pb-10 w-full ">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl pt-[58px]">
        <p className="text-[32px] text-center sm:text-start">
          Meet Our <span className="text-primary">Trainers</span>
        </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[39px] gap-x-5 gap-y-12 justify-items-center">
          {Trainers.slice(0, Load).map((trainer) => (
            <TrainerCard
              name={trainer.name}
              image={trainer.img}
              rating={trainer.rating}
              price={+trainer.price}
              location={trainer.place}
              specialties={trainer.specialtie}
            />
          ))}
        </div>
        {/* <div className="flex flex-column justify-center items-center text-center">
          <NotFoundSearch />
        </div> */}

        {Load < Trainers.length && (
          <div className="flex items-center justify-center mt-10">
            <Button
              className="px-10 py-6  text-[18px] fw-medium rounded-[5px] bg-primary hover:bg-cta-hover cursor-pointer  transition-all"
              onClick={handleMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingCart;
