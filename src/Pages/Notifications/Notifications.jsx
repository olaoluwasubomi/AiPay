import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { listNotifications, markAllRead, clearAll } from "@/lib/notifications";

export default function Notifications() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async () => {
    setLoading(true); setErr("");
    try {
      const { items } = await listNotifications({ limit: 50 });
      setItems(items);
    } catch (e) { setErr(e?.message || "Failed to load notifications"); }
    finally { setLoading(false); }
  };

  useEffect(()=>{ load(); }, []);

  const onMarkAll = async () => { await markAllRead(); await load(); };
  const onClearAll = async () => { await clearAll(); await load(); };

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your Notifications</h2>
        <div className="space-x-2">
          <button onClick={onMarkAll} className="px-4 py-2 border rounded-lg">Mark all as read</button>
          <button onClick={onClearAll} className="px-4 py-2 border rounded-lg">Clear all</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow mt-6">
        <div className="px-5 py-4 font-semibold border-b">Recent Activities</div>
        {items.map((n) => (
          <div key={n._id} className="px-5 py-4 border-b flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">🔔</div>
            <div>
              <div className="font-medium">{n.title}</div>
              <div className="text-sm text-gray-600">{n.body}</div>
              <div className="text-xs text-gray-400 mt-1">{new Date(n.createdAt).toLocaleString()}</div>
            </div>
          </div>
        ))}
        {!loading && items.length === 0 && <div className="px-5 py-8 text-gray-500">No notifications yet</div>}
      </div>

      {err && <p className="text-red-600 mt-3">{err}</p>}
    </Layout>
  );
}
