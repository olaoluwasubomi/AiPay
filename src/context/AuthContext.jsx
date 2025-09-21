// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { apiGet, apiPost, setAuthTokens, clearAuthTokens, getStoredTokens } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [booting, setBooting] = useState(true);

  const fetchMe = useCallback(async () => {
    try {
      const me = await apiGet("/auth/me"); // requires GET /auth/me on backend
      setUser(me);
      return me;
    } catch {
      setUser(null);
      return null;
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const data = await apiPost("/auth/login", { email, password });
    setAuthTokens(data.accessToken, data.refreshToken);
    setUser(data.user);
    return data.user;
  }, []);

  const register = useCallback(async (payload) => {
    const data = await apiPost("/auth/register", payload);
    setAuthTokens(data.accessToken, data.refreshToken);
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiPost("/auth/logout", {}, getStoredTokens().accessToken);
    } catch { /* ignore */ }
    clearAuthTokens();
    setUser(null);
  }, []);

  // Bootstrap: if tokens exist, hydrate user
  useEffect(() => {
    (async () => {
      const { accessToken } = getStoredTokens();
      if (accessToken) {
        await fetchMe().catch(() => setUser(null));
      }
      setBooting(false);
    })();
  }, [fetchMe]);

  const value = { user, booting, login, register, logout, fetchMe, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
