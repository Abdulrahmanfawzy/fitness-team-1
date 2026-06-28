import { createContext } from "react";

interface BookingAuthContextType {
  openSheet: () => void;
  closeSheet: () => void;
  isOpen: boolean;
}

export const BookingAuthContext = createContext<BookingAuthContextType | null>(
  null,
);
