import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { getTrainerById } from "@/lib/api/triners/TrainersApi";
import OtherTrainers from "@/components/trainer-profile/OtherTrainers";
import ScheduleSession from "@/components/trainer-profile/ScheduleSession";
import TrainerCertifictions from "@/components/trainer-profile/TrainerCertification";
import TrainerDescription from "@/components/trainer-profile/TrainerDescription";
import TrainerInfo from "@/components/trainer-profile/TrainerInfo";
import TrainingPackages from "@/components/trainer-profile/TrainingPackages";

export default function TrainerProfile() {
  const { id } = useParams<{ id: string }>();
  const trainerId = Number(id);
  const scheduleRef = useRef<HTMLDivElement>(null);

  const { data: trainer, isLoading } = useQuery({
    queryKey: ["trainer", trainerId],
    queryFn: () => getTrainerById(trainerId),
    enabled: !!trainerId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center">
        <p className="text-white">Trainer not found.</p>
      </div>
    );
  }

  return (
    <>
      <TrainerInfo trainer={trainer} />
      <TrainerDescription trainer={trainer} />
      <TrainerCertifictions trainer={trainer} />
      <TrainingPackages
        packages={trainer.packages}
        onSelectPackage={() => {
          scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <OtherTrainers />
      <div ref={scheduleRef}>
        <ScheduleSession trainerId={trainerId} />
      </div>
    </>
  );
}
