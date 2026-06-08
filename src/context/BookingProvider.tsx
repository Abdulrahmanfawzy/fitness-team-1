import { useState, type ReactNode } from "react";
import { BookingContext } from "./BookingContext";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<{
    trainerId: number | null;
    trainerPackageId: number | null;
    selectedDate: string | null;
    selectedTime: string | null;
  }>({
    trainerId: null,
    trainerPackageId: null,
    selectedDate: null,
    selectedTime: null,
  });

  const [result, setResult] = useState<{
    bookingId: number | null;
    amount: string | null;
    trainerName: string | null;
    packageTitle: string | null;
  }>({ bookingId: null, amount: null, trainerName: null, packageTitle: null });

  const [trainerPackageId, setTrainerPackageId_state] = useState<number | null>(
    null,
  );

  const setBookingSelection = (data: {
    trainerId: number;
    trainerPackageId: number;
    selectedDate: string;
    selectedTime: string;
  }) => {
    setSelection(data);
  };

  const setBookingResult = (data: {
    bookingId: number;
    amount: string;
    trainerName: string;
    packageTitle: string;
  }) => {
    setResult(data);
  };

  const setTrainerPackageId = (id: number) => {
    setTrainerPackageId_state(id);
  };

  const resetBooking = () => {
    setSelection({
      trainerId: null,
      trainerPackageId: null,
      selectedDate: null,
      selectedTime: null,
    });
    setResult({
      bookingId: null,
      amount: null,
      trainerName: null,
      packageTitle: null,
    });
    setTrainerPackageId_state(null);
  };

  return (
    <BookingContext.Provider
      value={{
        ...selection,
        trainerPackageId,
        ...result,
        setBookingSelection,
        setBookingResult,
        setTrainerPackageId,
        resetBooking,
      }}>
      {children}
    </BookingContext.Provider>
  );
}
