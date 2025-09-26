// src/lib/merchant.js
import { apiGet } from "@/lib/api";

/**
 * Fetch dashboard stats + small recent order lists (ready, processing, ready_to_ship, shipped)
 * @param {number} limit number of orders per bucket (default 3)
 */
export const getMerchantDashboard = (limit = 3) =>
  apiGet(`/merchant/dashboard?limit=${encodeURIComponent(limit)}`);
