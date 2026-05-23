import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useBookingAuth } from "@/context/useBookingAuth";

export default function ScheduleSession() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { openSheet } = useBookingAuth();
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const times = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM"];

  const handleContinue = () => {
    if (isLoggedIn) navigate("/booking");
    else openSheet();
  };

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto py-8 sm:py-12">
      <h2 className="profile-heading w-fit mx-auto text-center text-xl sm:text-3xl">
        Schedule your session
      </h2>
      <p className="text-gray-400 my-4 text-center text-sm sm:text-base">
        Pick your preferred date and start your fitness journey.
      </p>
      <div className="text-white p-3 sm:p-6 rounded-2xl">
        <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-6">
          <div className="bg-zinc-800 rounded-xl p-3 sm:p-4 sm:col-span-8">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full"
            />
          </div>
          <div className="bg-zinc-800 rounded-xl p-3 sm:p-4 sm:col-span-4">
            <p className="text-gray-400 mb-3 text-sm">Time</p>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {times.map((time) => (
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
            onClick={handleContinue}>
            Continue booking →
          </Button>
        </div>
      </div>
    </div>
  );
}
