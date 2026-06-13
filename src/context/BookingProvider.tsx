import { useState, type ReactNode } from "react";
import { BookingContext } from "./BookingContext";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [trainerId, setTrainerId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [trainerPackageId, setTrainerPackageId_state] = useState<number | null>(
    null,
  );

  const [result, setResult] = useState<{
    bookingId: number | null;
    amount: string | null;
    trainerName: string | null;
    packageTitle: string | null;
  }>({ bookingId: null, amount: null, trainerName: null, packageTitle: null });

  const setBookingSelection = (data: {
    trainerId: number;
    selectedDate: string;
    selectedTime: string;
  }) => {
    setTrainerId(data.trainerId);
    setSelectedDate(data.selectedDate);
    setSelectedTime(data.selectedTime);
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
    setTrainerId(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setTrainerPackageId_state(null);
    setResult({
      bookingId: null,
      amount: null,
      trainerName: null,
      packageTitle: null,
    });
  };

  return (
    <BookingContext.Provider
      value={{
        trainerId,
        trainerPackageId,
        selectedDate,
        selectedTime,
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
