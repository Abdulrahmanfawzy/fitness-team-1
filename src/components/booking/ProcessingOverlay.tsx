import type { PaymentMethod } from "@/lib/types/booking-types";
import Spinner from "@/components/common/Spinner";

interface ProcessingOverlayProps {
  method: PaymentMethod;
}

const labels: Record<PaymentMethod, string> = {
  card: "Processing payment...",
  paypal: "Connecting to PayPal...",
};

export const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({
  method,
}) => (
  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-xl z-10 flex flex-col items-center justify-center gap-3">
    <Spinner size="md" />
    <p className="text-sm text-muted-foreground">{labels[method]}</p>
  </div>
);
