// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import { apiGet, apiPost, setAuthTokens, clearAuthTokens, getStoredTokens } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [booting, setBooting] = useState(true);

  // in-flight guards
  const registerInFlight = useRef(false);
  const loginInFlight = useRef(false);

  const fetchMe = useCallback(async () => {
    try {
      const me = await apiGet("/user/me");
      setUser(me);
      return me;
    } catch {
      setUser(null);
      return null;
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    if (loginInFlight.current) return { ok: false, reason: "in_flight" };
    loginInFlight.current = true;
    try {
      const data = await apiPost("/auth/login", { email, password });
      setAuthTokens(data.accessToken, data.refreshToken);
      setUser(data.user);
      return { ok: true, user: data.user };
    } finally {
      loginInFlight.current = false;
    }
  }, []);

  const register = useCallback(async (payload) => {
    if (registerInFlight.current) return { ok: false, reason: "in_flight" };
    registerInFlight.current = true;
    try {
      const data = await apiPost("/auth/register", payload);
      setAuthTokens(data.accessToken, data.refreshToken);
      setUser(data.user);
      return { ok: true, user: data.user };
    } finally {
      registerInFlight.current = false;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiPost("/auth/logout", {}, getStoredTokens().accessToken);
    } catch { /* ignore */ }
    clearAuthTokens();
    setUser(null);
  }, []);

  useEffect(() => {
    (async () => {
      const { accessToken } = getStoredTokens();
      if (accessToken) await fetchMe();
      setBooting(false);
    })();
  }, [fetchMe]);

  return (
    <AuthContext.Provider value={{ user, booting, login, register, logout, fetchMe, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
