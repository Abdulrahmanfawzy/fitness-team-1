"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export default function ScheduleSession() {
  const [date, setDate] = useState<Date|undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const times = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM"];
  return <>
    <div className="container w-10">

    </div>


    </>
  
}
