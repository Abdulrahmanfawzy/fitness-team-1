import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTrainerById } from "@/lib/api/triners/TrainersApi";
import OtherTrainers from "@/components/trainer-profile/OtherTrainers";
import TrainerCertifictions from "@/components/trainer-profile/TrainerCertification";
import TrainerDescription from "@/components/trainer-profile/TrainerDescription";
import TrainerInfo from "@/components/trainer-profile/TrainerInfo";
import TrainingPackages from "@/components/trainer-profile/TrainingPackages";
import Spinner from "@/components/common/Spinner";

export default function TrainerProfile() {
  const { id } = useParams<{ id: string }>();
  const trainerId = Number(id);
  const navigate = useNavigate();

  const { data: trainer, isLoading } = useQuery({
    queryKey: ["trainer", trainerId],
    queryFn: () => getTrainerById(trainerId),
    enabled: !!trainerId,
  });

  if (isLoading) return <Spinner fullPage />;

  if (!trainer) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Trainer not found.</p>
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
        onSelectPackage={(packageId: number) =>
          navigate(`/schedule?trainerId=${trainerId}&packageId=${packageId}`)
        }
      />
      <OtherTrainers />
    </>
  );
}
