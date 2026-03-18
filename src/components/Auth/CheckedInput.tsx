interface CheckProps {
  label: string;
  type: "radio" | "checkbox";
  name?: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function CheckedInput({
  label,
  type,
  name,
  value,
  checked,
  onChange,
}: CheckProps) {
  return (
    <label className="flex items-center gap-3 px-4 py-3 rounded-lg bg-(--color-bg-raised) cursor-pointer">
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className="text-(--color-text-base)">{label}</span>
    </label>
  );
}
