import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthUser } from "@/lib/api/Auth/auth.api";
import { getProfile } from "@/lib/api/Auth/auth.api";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [loading, setLoading] = useState(() => {
    return !!localStorage.getItem("token");
  });
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedProfileComplete = localStorage.getItem("is_profile_complete");
    if (!storedToken) {
      return;
    }
    getProfile()
      .then((response) => {
        setToken(storedToken);
        setUser(response.user);
        setIsProfileComplete(storedProfileComplete === "1");
      })
      .catch((error) => {
        if (import.meta.env.DEV) {
          console.error("Failed to fetch profile:", error);
        }
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("is_profile_complete");
      })
      .finally(() => setLoading(false));
  }, []);

  const isLoggedIn = !!token;

  const login = (user: AuthUser, token: string, isProfileComplete: boolean) => {
    setUser(user);
    setToken(token);
    setIsProfileComplete(isProfileComplete);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("is_profile_complete", isProfileComplete ? "1" : "0");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsProfileComplete(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("is_profile_complete");
  };

  const updateUser = (updated: Partial<AuthUser>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const merged = { ...prev, ...updated };
      localStorage.setItem("user", JSON.stringify(merged));
      return merged;
    });
  };

  const setProfileComplete = () => {
    setIsProfileComplete(true);
    localStorage.setItem("is_profile_complete", "1");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        isProfileComplete,
        login,
        logout,
        updateUser,
        setProfileComplete,
        isLoading: loading, 
      }}>
      {children}
    </AuthContext.Provider>
  );
}
