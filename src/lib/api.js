// src/lib/api.js
export const API = import.meta.env.VITE_API_URL || "https://ai-pay-server-test.onrender.com";

const ACCESS_KEY = "aipay_access";
const REFRESH_KEY = "aipay_refresh";

export function setAuthTokens(access, refresh) {
  if (access) localStorage.setItem(ACCESS_KEY, access);
  if (refresh) localStorage.setItem(REFRESH_KEY, refresh);
}
export function clearAuthTokens() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
}
export function getStoredTokens() {
  return {
    accessToken: localStorage.getItem(ACCESS_KEY) || "",
    refreshToken: localStorage.getItem(REFRESH_KEY) || "",
  };
}

async function rawFetch(path, options = {}, retry = true) {
  const url = API + path;
  const res = await fetch(url, options);
  if (res.status === 401 && retry) {
    // try refresh
    const refreshed = await tryRefresh();
    if (refreshed) {
      // retry with new access token
      const tokens = getStoredTokens();
      const opt2 = {
        ...options,
        headers: {
          ...(options.headers || {}),
          ...(tokens.accessToken ? { Authorization: `Bearer ${tokens.accessToken}` } : {}),
        },
      };
      const res2 = await fetch(url, opt2);
      return res2;
    }
  }
  return res;
}

async function tryRefresh() {
  const { refreshToken } = getStoredTokens();
  if (!refreshToken) return false;
  try {
    const res = await fetch(API + "/auth/refreshToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.accessToken) return false;
    setAuthTokens(data.accessToken, data.refreshToken);
    return true;
  } catch {
    return false;
  }
}

function jsonOrThrow(res) {
  return res.json().catch(() => ({})).then((data) => {
    if (!res.ok) {
      const msg = data.message || data.msg || data.error?.message || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    return data;
  });
}

function withAuthHeaders(token) {
  const headers = { "Content-Type": "application/json" };
  const t = token || getStoredTokens().accessToken;
  if (t) headers.Authorization = `Bearer ${t}`;
  return headers;
}

// Public helpers
export async function apiPost(path, body = {}, token) {
  const res = await rawFetch(path, {
    method: "POST",
    headers: withAuthHeaders(token),
    body: JSON.stringify(body),
  });
  return jsonOrThrow(res);
}
export async function apiGet(path, token) {
  const res = await rawFetch(path, {
    method: "GET",
    headers: withAuthHeaders(token),
  });
  return jsonOrThrow(res);
}
export async function apiPut(path, body = {}, token) {
  const res = await rawFetch(path, {
    method: "PUT",
    headers: withAuthHeaders(token),
    body: JSON.stringify(body),
  });
  return jsonOrThrow(res);
}
export async function apiDelete(path, token) {
  const res = await rawFetch(path, {
    method: "DELETE",
    headers: withAuthHeaders(token),
  });
  return jsonOrThrow(res);
}

export { apiPost as post };