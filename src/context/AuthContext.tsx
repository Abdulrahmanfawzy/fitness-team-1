import type { AuthUser } from "@/lib/api/Auth/auth.api";
import { createContext } from "react";

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoggedIn: boolean;
  isProfileComplete: boolean;
  isLoading: boolean;
  login: (user: AuthUser, token: string, isProfileComplete: boolean) => void;
  logout: () => void;
  updateUser: (updated: Partial<AuthUser>) => void;
  setProfileComplete: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
