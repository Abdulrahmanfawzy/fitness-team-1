import { useRef, useState } from "react";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [
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
    if (value && index < 3) refs[index + 1].current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-4">
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
          className="w-16 h-16 text-center text-2xl font-bold rounded-2xl bg-(--color-bg-raised) text-(--color-text-secondary) border-2 border-transparent placeholder:text-(--color-text-secondary)"
        />
      ))}
    </div>
  );
}
