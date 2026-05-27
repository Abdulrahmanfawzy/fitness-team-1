import { useQuery } from "@tanstack/react-query";
import {
  getSessions,
  getPackages,
  getProgressActivity,
  getWorkoutHistory,
  getPaymentMethods,
} from "@/lib/api/profile.api";

export const useSessions = () =>
  useQuery({ queryKey: ["sessions"], queryFn: getSessions });

export const usePackages = () =>
  useQuery({ queryKey: ["packages"], queryFn: getPackages });

export const useProgressActivity = () =>
  useQuery({ queryKey: ["progress"], queryFn: getProgressActivity });

export const useWorkoutHistory = () =>
  useQuery({ queryKey: ["workoutHistory"], queryFn: getWorkoutHistory });

export const usePaymentMethods = () =>
  useQuery({ queryKey: ["paymentMethods"], queryFn: getPaymentMethods });
