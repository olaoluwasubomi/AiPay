import { apiGet, apiPatch, apiPost, apiDelete } from "@/lib/api";

export const listNotifications = (params = {}) => {
  const q = new URLSearchParams(params).toString();
  return apiGet(`/notifications${q ? `?${q}` : ""}`);
};

export const markRead = (id) => apiPatch(`/notifications/${id}/read`, {});
export const markAllRead = () => apiPost(`/notifications/mark-all-read`, {});
export const clearAll = () => apiDelete(`/notifications`);
