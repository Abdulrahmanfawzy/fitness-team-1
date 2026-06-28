import ScheduleSession from "@/components/trainer-profile/ScheduleSession";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SchedulePage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const trainerId = Number(params.get("trainerId"));
  const packageId = Number(params.get("packageId"));

  useEffect(() => {
    if (!trainerId || !packageId) {
      navigate("/trainers");
    }
  }, [trainerId, packageId, navigate]);

  if (!trainerId || !packageId) return null;

  return (
    <div className="min-h-screen bg-background pt-6 pb-16">
      <ScheduleSession trainerId={trainerId} packageId={packageId} />
    </div>
  );
}
