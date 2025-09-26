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
  let res;
  try {
    res = await fetch(url, options);
  } catch (networkErr) {
    return {
      ok: false,
      status: 0,
      _networkError: networkErr,
      json: async () => ({}),
      text: async () => String(networkErr?.message || "Network error"),
    };
  }

  if (res.status === 401 && retry) {
    const refreshed = await tryRefresh();
    if (refreshed) {
      const tokens = getStoredTokens();
      const opt2 = {
        ...options,
        headers: {
          ...(options.headers || {}),
          ...(tokens.accessToken ? { Authorization: `Bearer ${tokens.accessToken}` } : {}),
        },
      };
      return fetch(url, opt2);
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
    const data = await safeParse(res);
    if (!res.ok || !data.accessToken) return false;
    setAuthTokens(data.accessToken, data.refreshToken);
    return true;
  } catch {
    return false;
  }
}

async function safeParse(res) {
  try {
    return await res.json();
  } catch {
    try {
      const t = await res.text();
      return t ? { message: t } : {};
    } catch {
      return {};
    }
  }
}

function pickMessage(data, status) {
  return (
    data?.message ||
    data?.msg ||
    data?.error?.message ||
    (Array.isArray(data?.errors) && data.errors[0]?.message) ||
    (Array.isArray(data?.details) && data.details[0]?.message) ||
    `HTTP ${status}`
  );
}

async function jsonOrThrow(res) {
  const data = await safeParse(res);
  if (!res.ok) {
    const msg = pickMessage(data, res.status);
    const err = new Error(msg);
    err.status = res.status;
    err.data = data;
    if (res._networkError) err.cause = res._networkError;
    throw err;
  }
  return data;
}

async function jsonOrResult(res) {
  const data = await safeParse(res);
  if (!res.ok) {
    return {
      ok: false,
      status: res.status,
      data,
      error: {
        message: pickMessage(data, res.status),
        details: data,
        network: res._networkError || null,
      },
    };
  }
  return { ok: true, status: res.status, data, error: null };
}

function withAuthHeaders(token) {
  const headers = { "Content-Type": "application/json" };
  const t = token || getStoredTokens().accessToken;
  if (t) headers.Authorization = `Bearer ${t}`;
  return headers;
}

/* ======================
 * Throwing helpers
 * ====================== */
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
export async function apiPatch(path, body = {}, token) {
  const res = await rawFetch(path, {
    method: "PATCH",
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

export async function apiUpload(path, formData, token) {
  const headers = {};
  const t = token || getStoredTokens().accessToken;
  if (t) headers.Authorization = `Bearer ${t}`;
  const res = await rawFetch(path, {
    method: "POST",
    headers,
    body: formData,
  });
  return jsonOrThrow(res);
}

/* ======================
 * Safe result helpers
 * ====================== */
export async function postR(path, body = {}, token) {
  const res = await rawFetch(path, {
    method: "POST",
    headers: withAuthHeaders(token),
    body: JSON.stringify(body),
  });
  return jsonOrResult(res);
}
export async function getR(path, token) {
  const res = await rawFetch(path, {
    method: "GET",
    headers: withAuthHeaders(token),
  });
  return jsonOrResult(res);
}
export async function putR(path, body = {}, token) {
  const res = await rawFetch(path, {
    method: "PUT",
    headers: withAuthHeaders(token),
    body: JSON.stringify(body),
  });
  return jsonOrResult(res);
}
export async function patchR(path, body = {}, token) {
  const res = await rawFetch(path, {
    method: "PATCH",
    headers: withAuthHeaders(token),
    body: JSON.stringify(body),
  });
  return jsonOrResult(res);
}
export async function deleteR(path, token) {
  const res = await rawFetch(path, {
    method: "DELETE",
    headers: withAuthHeaders(token),
  });
  return jsonOrResult(res);
}
export async function uploadR(path, formData, token) {
  const headers = {};
  const t = token || getStoredTokens().accessToken;
  if (t) headers.Authorization = `Bearer ${t}`;
  const res = await rawFetch(path, {
    method: "POST",
    headers,
    body: formData,
  });
  return jsonOrResult(res);
}
