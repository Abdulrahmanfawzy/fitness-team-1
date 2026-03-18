import { ArrowRight, Play } from "lucide-react";
import Button from "../common/Button";

export default function HeaderActions() {
  return (
    <div className="mt-4 grid w-full max-w-2xl grid-cols-2 gap-4 text-sm font-semibold">
      <Button
        className="mt-0 rounded-lg"
        icon={<ArrowRight size={18} />}
        text="Book Now"
        variant="primary"
        width="w-full"
      />
      <Button
        className="mt-0 rounded-lg"
        icon={<Play size={16} />}
        iconPosition="left"
        text="Meet Our Trainers"
        variant="outline"
        width="w-full"
      />
    </div>
  );
}
