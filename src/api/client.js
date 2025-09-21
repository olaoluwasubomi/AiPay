// src/api/client.js
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL || "";

export const accessTokenKey = "aipay_access_token";
export const refreshTokenKey = "aipay_refresh_token";

const client = axios.create({
  baseURL: `${API_BASE}/user`,
  headers: { "Content-Type": "application/json" },
});

// attach Authorization header
client.interceptors.request.use((config) => {
  const token = localStorage.getItem(accessTokenKey);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// refresh on 401 once
let isRefreshing = false;
let queue = [];

function onRefreshed(newToken) {
  queue.forEach((p) => p.resolve(newToken));
  queue = [];
}

function addToQueue() {
  let resolve;
  const promise = new Promise((res) => (resolve = res));
  queue.push({ resolve });
  return promise;
}

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config || {};
    const status = error?.response?.status;

    if (status === 401 && !original._retry) {
      original._retry = true;

      if (isRefreshing) {
        const newToken = await addToQueue();
        original.headers.Authorization = `Bearer ${newToken}`;
        return client(original);
      }

      try {
        isRefreshing = true;
        const refreshToken = localStorage.getItem(refreshTokenKey);
        if (!refreshToken) throw new Error("No refresh token");

        const { data } = await axios.post(`${API_BASE}/user/refreshToken`, {
          refreshToken,
        });

        const newAccess = data?.accessToken;
        const newRefresh = data?.refreshToken || refreshToken;

        localStorage.setItem(accessTokenKey, newAccess);
        localStorage.setItem(refreshTokenKey, newRefresh);

        onRefreshed(newAccess);
        original.headers.Authorization = `Bearer ${newAccess}`;
        return client(original);
      } catch (e) {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
        window.location.href = "/Login";
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default client;
