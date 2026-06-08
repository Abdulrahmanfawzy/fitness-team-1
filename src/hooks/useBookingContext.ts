import { useContext } from "react";
import { BookingContext } from "@/context/BookingContext";

export function useBookingContext() {
  const ctx = useContext(BookingContext);
  if (!ctx)
    throw new Error("useBookingContext must be used within BookingProvider");
  return ctx;
}
