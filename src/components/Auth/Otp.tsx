import { useRef, useState } from "react";

interface OtpProps {
  onChange: (value: string) => void;
}

export default function Otp({ onChange }: OtpProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));
    if (value && index < 5) refs[index + 1].current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {otp.map((val, i) => (
        <input
          key={i}
          ref={refs[i]}
          type="text"
          placeholder="-"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-14 h-14 text-center text-2xl font-bold rounded-2xl bg-(--color-bg-raised) text-(--color-text-secondary) border-2 border-transparent focus:border-(--main-color) outline-none placeholder:text-(--color-text-secondary) transition"
        />
      ))}
    </div>
  );
}
