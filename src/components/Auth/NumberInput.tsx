import type { UseFormRegister, FieldError, Path } from "react-hook-form";
import type { InfoFormData } from "@/lib/schemas/info.schema";

interface Props {
  label: string;
  field: Path<InfoFormData>;
  min: number;
  max: number;
  register: UseFormRegister<InfoFormData>;
  error?: FieldError;
  unit?: string;
}

export default function NumberInput({
  label,
  field,
  min,
  max,
  register,
  error,
  unit,
}: Props) {
  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="flex flex-col gap-1.5 flex-1">
      <label className="text-xs font-semibold text-(--gray-color) uppercase tracking-wide">
        {label}
      </label>
      <select
        {...register(field, { valueAsNumber: true })}
        defaultValue=""
        className={`h-12 rounded-lg bg-(--darkGrey-color) border text-white px-3 text-sm focus:outline-none transition-colors appearance-none cursor-pointer
          ${error ? "border-red-500" : "border-transparent focus:border-(--main-color) hover:border-white/20"}`}>
        <option value="" disabled className="text-(--gray-color)">
          Select{unit ? ` (${unit})` : ""}
        </option>
        {options.map((val) => (
          <option key={val} value={val}>
            {val}
            {unit ? ` ${unit}` : ""}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-xs mt-0.5">{error.message}</p>}
    </div>
  );
}
