export const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function post(url, body, token) {
  const res = await fetch(API + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || data.msg || "Request failed");
  return data;
}
