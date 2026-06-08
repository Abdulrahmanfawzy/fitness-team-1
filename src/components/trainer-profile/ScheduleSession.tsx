import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useBookingAuth } from "@/context/useBookingAuth";
import { useBookingContext } from "@/hooks/useBookingContext";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getTrainerSchedule,
  getTrainerAvailability,
  scheduleBooking,
} from "@/lib/api/booking.api";

interface ScheduleSessionProps {
  trainerId: number;
}

const DAY_NAME_MAP: Record<number, string> = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

export default function ScheduleSession({ trainerId }: ScheduleSessionProps) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { openSheet } = useBookingAuth();
  const { trainerPackageId, setBookingSelection, setBookingResult } =
    useBookingContext();

  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");

  const { data: scheduleData } = useQuery({
    queryKey: ["trainer-schedule", trainerId],
    queryFn: () => getTrainerSchedule(trainerId),
    enabled: !!trainerId,
  });

  const dateStr = date ? date.toISOString().split("T")[0] : "";

  const { data: availabilityData, isLoading: loadingSlots } = useQuery({
    queryKey: ["trainer-availability", trainerId, dateStr],
    queryFn: () => getTrainerAvailability(trainerId, dateStr),
    enabled: !!trainerId && !!dateStr,
  });

  const availableSlots = availabilityData?.available_slots ?? [];
  const availableDays = scheduleData?.schedule.map((s) => s.day_of_week) ?? [];

  const isDateDisabled = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayName = DAY_NAME_MAP[d.getDay()];
    return !availableDays.includes(dayName) || d < today;
  };

  const {
    mutate: createBooking,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () => {
      if (!trainerPackageId) throw new Error("No package selected");
      return scheduleBooking({
        trainer_package_id: trainerPackageId,
        sessions: [`${dateStr} ${selectedTime}`],
      });
    },
    onSuccess: (response) => {
      const booking = response.data;
      setBookingSelection({
        trainerId,
        trainerPackageId: trainerPackageId!,
        selectedDate: dateStr,
        selectedTime,
      });
      setBookingResult({
        bookingId: booking.id,
        amount: response.amount,
        trainerName: booking.trainer.name,
        packageTitle: booking.trainer_package.package.title,
      });
      navigate("/booking");
    },
  });

  const handleContinue = () => {
    if (!isLoggedIn) {
      openSheet();
      return;
    }
    if (!trainerPackageId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!date || !selectedTime) return;
    createBooking();
  };

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto py-8 sm:py-12">
      <h2 className="profile-heading w-fit mx-auto text-center text-xl sm:text-3xl">
        Schedule your session
      </h2>
      <p className="text-gray-400 my-4 text-center text-sm sm:text-base">
        Pick your preferred date and start your fitness journey.
      </p>

      {!trainerPackageId && (
        <p className="text-yellow-400 text-sm text-center mb-4">
          Please select a package above before scheduling.
        </p>
      )}

      <div className="text-white p-3 sm:p-6 rounded-2xl">
        <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-6">
          <div className="bg-zinc-800 rounded-xl p-3 sm:p-4 sm:col-span-8">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setSelectedTime("");
              }}
              disabled={isDateDisabled}
              className="w-full"
            />
          </div>

          <div className="bg-zinc-800 rounded-xl p-3 sm:p-4 sm:col-span-4">
            <p className="text-gray-400 mb-3 text-sm">
              {date ? "Available Times" : "Select a date first"}
            </p>
            {loadingSlots && (
              <p className="text-gray-500 text-xs">Loading slots...</p>
            )}
            {!loadingSlots && date && availableSlots.length === 0 && (
              <p className="text-gray-500 text-xs">
                No slots available for this date.
              </p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {availableSlots.map((time) => (
                <Button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`w-full text-sm ${
                    selectedTime === time
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-black text-white hover:bg-zinc-700"
                  }`}>
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-zinc-800 p-3 sm:p-4 rounded-xl">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            {date
              ? `${date.toDateString()} — ${selectedTime || "Select time"}`
              : "No date selected"}
          </p>
          <Button
            className="w-full sm:w-auto bg-primary hover:bg-red-600 px-6"
            onClick={handleContinue}
            disabled={!date || !selectedTime || isPending}>
            {isPending ? "Preparing..." : "Continue booking →"}
          </Button>
        </div>

        {isError && (
          <p className="text-red-400 text-sm text-center mt-3">
            Failed to create booking. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
