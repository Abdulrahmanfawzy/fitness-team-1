import PackageCard from "../common/PackageCard";
import type { TrainerDetails } from "@/lib/api/triners/TrainersApi";

interface TrainingPackagesProps {
  packages: TrainerDetails["packages"];
  onSelectPackage: () => void;
}

export default function TrainingPackages({ packages, onSelectPackage }: TrainingPackagesProps) {
  if (!packages || packages.length === 0) {
    return (
      <div className="container w-10/12 mx-auto text-center py-12">
        <h2 className="profile-heading">Training packages</h2>
        <p className="text-gray-400 my-4">
          No packages available for this trainer.
        </p>
      </div>
    );
  }

  return (
    <div className="container w-10/12 mx-auto text-center py-12">
      <h2 className="profile-heading">Training packages</h2>
      <p className="text-gray-400 my-4 py-4">
        Choose a training plan that matches your goals and schedule
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard
            key={pkg.trainer_package_id}
            trainerPackageId={pkg.trainer_package_id}
            title={pkg.title}
            price={pkg.price}
            sessions={String(pkg.sessions)}
            features={pkg.features}
            isRecommended={index === 1}
            onSelectPackage={onSelectPackage} 
          />
        ))}
      </div>
    </div>
  );
}
