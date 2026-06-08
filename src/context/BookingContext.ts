import { createContext } from "react";

interface BookingContextType {
  trainerId: number | null;
  trainerPackageId: number | null;
  selectedDate: string | null;
  selectedTime: string | null;
  bookingId: number | null;
  amount: string | null;
  trainerName: string | null;
  packageTitle: string | null;
  setBookingSelection: (data: {
    trainerId: number;
    trainerPackageId: number;
    selectedDate: string;
    selectedTime: string;
  }) => void;
  setBookingResult: (data: {
    bookingId: number;
    amount: string;
    trainerName: string;
    packageTitle: string;
  }) => void;
  resetBooking: () => void;
  setTrainerPackageId: (id: number) => void;
}

export const BookingContext = createContext<BookingContextType | null>(null);
