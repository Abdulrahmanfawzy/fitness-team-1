import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthUser } from "@/lib/api/Auth/auth.api";
import { getProfile } from "@/lib/api/Auth/auth.api";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [loading, setLoading] = useState(() => !!localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) return;

    getProfile()
      .then((response) => {
        setToken(storedToken);
        setUser(response.user);
        const complete = (response.user as any)?.fitness_profile !== null;
        setIsProfileComplete(complete);
      })
      .catch((error) => {
        // Only clear session on 401 Unauthorized — not on network errors
        if (error?.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("is_profile_complete");
        } else {
          // Network error or server down — restore from localStorage
          const storedUser = localStorage.getItem("user");
          const storedComplete = localStorage.getItem("is_profile_complete");
          if (storedUser) setUser(JSON.parse(storedUser));
          if (storedToken) setToken(storedToken);
          setIsProfileComplete(storedComplete === "1");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const login = (user: AuthUser, token: string, isComplete: boolean) => {
    setUser(user);
    setToken(token);
    setIsProfileComplete(isComplete);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("is_profile_complete", isComplete ? "1" : "0");
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
        isLoggedIn: !!token,
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
