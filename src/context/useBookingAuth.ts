import { useContext } from "react";
import { BookingAuthContext } from "./BookingAuthContext";

export function useBookingAuth() {
  const ctx = useContext(BookingAuthContext);
  if (!ctx)
    throw new Error("useBookingAuth must be used within BookingAuthProvider");
  return ctx;
}
