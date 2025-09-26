// src/hooks/useMerchantDashboard.js
import { useCallback, useEffect, useRef, useState } from "react";
import { getMerchantDashboard } from "@/lib/merchant";

const EMPTY_STATS = {
  totalBalance: 0,
  balancePct: 0,
  balanceDelta: 0,
  totalVisitors: 0,
  visitorsPct: 0,
  visitorsDelta: 0,
};

const EMPTY_ORDERS = {
  ready: [],
  processing: [],
  ready_to_ship: [],
  shipped: [],
};

export default function useMerchantDashboard({ pollMs = 0, limit = 3 } = {}) {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(EMPTY_STATS);
  const [orders, setOrders] = useState(EMPTY_ORDERS);
  const [error, setError] = useState("");
  const timerRef = useRef(null);

  const fetchOnce = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getMerchantDashboard(limit);
      setStats(data?.stats || EMPTY_STATS);
      setOrders(data?.orders || EMPTY_ORDERS);
    } catch (e) {
      setError(e?.message || "Failed to fetch dashboard");
    } finally {
      setLoading(false);
    }
  }, [limit]);

  const refresh = useCallback(fetchOnce, [fetchOnce]);

  useEffect(() => {
    fetchOnce();
    if (pollMs > 0) {
      timerRef.current = setInterval(fetchOnce, pollMs);
      return () => clearInterval(timerRef.current);
    }
    return () => {};
  }, [fetchOnce, pollMs]);

  return { loading, error, stats, orders, refresh };
}
