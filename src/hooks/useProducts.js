import { useCallback, useEffect, useRef, useState } from "react";
import { listProducts } from "@/lib/products";

export default function useProducts({ category = "", q = "", limit = 24 } = {}) {
  const [items, setItems] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const paramsRef = useRef({ category, q, limit });

  const load = useCallback(async (reset = true) => {
    setLoading(true); setErr("");
    try {
      const base = reset ? {} : { cursor: nextCursor };
      const { items: chunk = [], nextCursor: nc } = await listProducts({
        ...base,
        limit: paramsRef.current.limit,
        ...(paramsRef.current.category ? { category: paramsRef.current.category } : {}),
        ...(paramsRef.current.q ? { q: paramsRef.current.q } : {}),
      });
      setItems((prev) => reset ? chunk : prev.concat(chunk));
      setNextCursor(nc);
    } catch (e) { setErr(e?.message || "Failed to load products"); }
    finally { setLoading(false); }
  }, [nextCursor]);

  useEffect(() => { paramsRef.current = { category, q, limit }; }, [category, q, limit]);
  useEffect(() => { load(true); }, [category, q, limit, load]);

  return { items, nextCursor, loading, error: err, loadMore: () => load(false), refresh: () => load(true) };
}
