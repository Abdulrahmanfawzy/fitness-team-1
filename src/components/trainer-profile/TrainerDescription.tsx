import type { TrainerDetails } from "@/lib/api/triners/TrainersApi";

interface TrainerDescriptionProps {
  trainer: TrainerDetails;
}

export default function TrainerDescription({
  trainer,
}: TrainerDescriptionProps) {
  return (
    <div className="container w-10/12 mx-auto py-6 text-center">
      <h2 className="profile-heading">
        Get to know {trainer.name.split(" ")[0]}
      </h2>
      <p className="max-w-5xl py-6 mx-auto text-gray-400">{trainer.bio}</p>
    </div>
  );
}
