import { useQuery } from "@tanstack/react-query";
import {
  getSessions,
  getPackages,
  getProgressActivity,
  getWorkoutHistory,
  getPaymentMethods,
} from "@/lib/api/profile.api";
import { getInvoices } from "@/lib/api/Auth/auth.api";

export const useSessions = () =>
  useQuery({ queryKey: ["profile", "sessions"], queryFn: getSessions });

export const usePackages = () =>
  useQuery({ queryKey: ["profile", "packages"], queryFn: getPackages });

export const useProgressActivity = () =>
  useQuery({ queryKey: ["profile", "progress"], queryFn: getProgressActivity });

export const useWorkoutHistory = () =>
  useQuery({
    queryKey: ["profile", "workoutHistory"],
    queryFn: getWorkoutHistory,
    staleTime: 5 * 60 * 1000, 
  });

export const usePaymentMethods = () =>
  useQuery({ queryKey: ["paymentMethods"], queryFn: getPaymentMethods });

export const useInvoices = () =>
  useQuery({ queryKey: ["invoices"], queryFn: getInvoices });