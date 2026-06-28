import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from "react-hook-form";
import CheckedInput from "@/components/Auth/CheckedInput";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: readonly string[];
  control: Control<T>;
  error?: string;
  onChangeTransform?: (value: string) => unknown;
  valueTransform?: (fieldValue: unknown, item: string) => boolean;
}

export default function RadioGroup<T extends FieldValues>({
  label,
  name,
  options,
  control,
  error,
  onChangeTransform,
  valueTransform,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-(--white-color) text-sm font-semibold">{label}</p>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="flex flex-wrap gap-2">
            {options.map((item) => (
              <CheckedInput
                key={item}
                label={item}
                type="radio"
                name={name}
                value={item}
                checked={
                  valueTransform
                    ? valueTransform(field.value, item)
                    : field.value === item
                }
                onChange={() =>
                  field.onChange(
                    onChangeTransform ? onChangeTransform(item) : item,
                  )
                }
              />
            ))}
          </div>
        )}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
