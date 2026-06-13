import client from "./client";

export interface SchedulePayload {
  trainer_package_id: number;
  sessions: string[];
}

export interface BookingScheduleResponse {
  message: string;
  data: {
    id: number;
    status: string;
    payment_status: string;
    cancellation_deadline: string;
    trainer: {
      id: number;
      name: string;
      profile_image: string;
    };
    trainer_package: {
      id: number;
      price: string;
      package: {
        id: number;
        title: string;
        sessions: number;
      };
    };
    sessions: {
      id: number;
      session_start: string;
      session_end: string;
      session_status: string;
    }[];
  };
  amount: string;
  expires_at: string;
}

export interface PayBookingPayload {
  payment_method: "paypal" | "stripe" | "vodafone";
}

export interface AvailabilitySlot {
  start: string; // "HH:MM:SS"
  end: string; // "HH:MM:SS"
}

export interface AvailabilityResponse {
  date: string;
  trainer_id: number;
  slots: AvailabilitySlot[];
}

export interface ScheduleDay {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export interface TrainerScheduleResponse {
  trainer_id: number;
  schedule: ScheduleDay[];
  exceptions: string[];
}

export const getTrainerSchedule = async (
  trainerId: number,
): Promise<TrainerScheduleResponse> => {
  const { data } = await client.get(`/trainers/${trainerId}/schedule`);
  return data;
};

// Backend expects date in the request BODY (not query params)
export const getTrainerAvailability = async (
  trainerId: number,
  date: string,
): Promise<AvailabilityResponse> => {
  const { data } = await client.get(`/trainers/${trainerId}/availability`, {
    params: { date },
  });
  return data;
};

// Sessions must be in "YYYY-MM-DD HH:MM:SS" format
// Slots from API are "HH:MM:SS" — combine with dateStr directly
export const buildSessionDateTime = (
  dateStr: string,
  slotStart: string,
): string => {
  return `${dateStr} ${slotStart}`;
};

export const scheduleBooking = async (
  payload: SchedulePayload,
): Promise<BookingScheduleResponse> => {
  const { data } = await client.post("/bookings/schedule", payload);
  return data;
};

export const payBooking = async (
  bookingId: number,
  payload: PayBookingPayload,
): Promise<void> => {
  await client.post(`/bookings/${bookingId}/pay`, payload);
};

export const confirmBooking = async (bookingId: number): Promise<void> => {
  await client.post(`/bookings/${bookingId}/confirm`);
};

export const cancelBooking = async (bookingId: number): Promise<void> => {
  await client.delete(`/bookings/${bookingId}/cancel`);
};
