"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export default function ScheduleSession() {
  const [date, setDate] = useState<Date|undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const times = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM"];
  return <>
    <div className="bg-zinc-600 text-white p-6 rounded-2xl max-w-4xl mx-auto">

      {/* Title */}
      <h2 className="profile-heading">
        Schedule your session
      </h2>

      <p className="text-gray-400 my-4">
        Pick your preferred date and start your fitness journey.
      </p>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* 🗓 Calendar */}
        <div className="bg-zinc-800 rounded-xl p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full"
          />
        </div>

        {/* ⏰ Time */}
        <div className="bg-zinc-800 rounded-xl p-4 space-y-3">

          <p className="text-gray-400">Time</p>

          {times.map((time) => (
            <Button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`w-full 
                ${
                  selectedTime === time
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-black text-white hover:bg-zinc-700"
                }`}
            >
              {time}
            </Button>
          ))}

        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-zinc-800 p-4 rounded-xl">

        <p className="text-gray-300">
          {date
            ? `${date.toDateString()} - ${selectedTime || "Select time"}`
            : "No date selected"}
        </p>

        <Button className="bg-primary hover:bg-red-600 px-6">
          Continue booking →
        </Button>

      </div>
    </div>


    </>
  
}
