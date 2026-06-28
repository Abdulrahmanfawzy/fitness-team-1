import { Plus } from "lucide-react";
import { FaPaypal } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import type { PaymentMethod } from "@/lib/types/booking-types";

interface PaymentMethodSelectorProps {
  selected: PaymentMethod | null;
  onSelect: (method: PaymentMethod) => void;
}

const methods: {
  id: PaymentMethod;
  label: string;
  icon: React.ReactNode;
  addNew?: boolean;
}[] = [
  {
    id: "card",
    label: "Add New Card",
    icon: <CiCreditCard1 size={18} className="text-muted-foreground" />,
    addNew: true,
  },
  {
    id: "paypal",
    label: "PayPal",
    icon: <FaPaypal size={16} className="text-blue-400" />,
  },
];

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  selected,
  onSelect,
}) => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {methods.map((method) => {
        const isSelected = selected === method.id;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect(method.id)}
            className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer text-left
              ${
                isSelected
                  ? "border-primary bg-brand-deep shadow-[0_0_0_1px_rgba(239,68,68,0.25),0_0_16px_rgba(239,68,68,0.08)]"
                  : "border-border bg-raised hover:border-elevated hover:bg-raised"
              }`}>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-elevated border border-elevated">
                {method.icon}
              </span>
              <span
                className={`text-sm font-medium transition-colors ${isSelected ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>
                {method.label}
              </span>
            </div>
            {method.addNew ? (
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full border transition-all ${isSelected ? "border-primary bg-primary" : "border-elevated group-hover:border-muted-foreground"}`}>
                {isSelected ? (
                  <div className="w-2 h-2 rounded-full bg-white" />
                ) : (
                  <Plus size={12} className="text-muted-foreground" />
                )}
              </div>
            ) : (
              <div
                className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all ${isSelected ? "border-primary" : "border-elevated group-hover:border-muted-foreground"}`}>
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};
