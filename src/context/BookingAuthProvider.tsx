import { useState, type ReactNode } from "react";
import { BookingAuthContext } from "./BookingAuthContext";

export function BookingAuthProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BookingAuthContext.Provider
      value={{
        isOpen,
        openSheet: () => setIsOpen(true),
        closeSheet: () => setIsOpen(false),
      }}>
      {children}
    </BookingAuthContext.Provider>
  );
}
