interface CheckProps {
  label: string;
  type: "radio" | "checkbox";
  name?: string;
  value: string;
  checked?: boolean;
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
    <label
      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg cursor-pointer border transition-all text-sm font-medium
        ${
          checked
            ? "bg-(--darkMain-color) border-(--main-color) text-(--main-color)"
            : "bg-(--darkGrey-color) border-transparent text-(--gray-color) hover:border-white/20"
        }`}>
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span>{label}</span>
    </label>
  );
}
