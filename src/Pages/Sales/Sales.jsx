import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { listSales, salesCsvUrl } from "@/lib/sales";

const ranges = [
  { label: "This week", value: "this_week" },
  { label: "This month", value: "this_month" },
  { label: "Last month", value: "last_month" },
];

export default function Sales() {
  const [range, setRange] = useState("this_week");
  const [page, setPage]   = useState(1);
  const [data, setData]   = useState({ items: [], total: 0, pages: 0 });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const load = async () => {
    setLoading(true); setErr("");
    try { setData(await listSales(range, page, 10)); }
    catch (e) { setErr(e?.message || "Failed to load sales"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [range, page]);

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Sales Report</h2>
        <a href={salesCsvUrl(range)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Download Report</a>
      </div>

      <div className="mt-4">
        <select value={range} onChange={(e)=>{ setPage(1); setRange(e.target.value); }} className="border rounded-lg px-3 py-2">
          {ranges.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow mt-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Product Name</th>
              <th className="px-4 py-3">Date Ordered</th>
              <th className="px-4 py-3">Product ID</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((o) => (
              <tr key={o._id} className="border-b">
                <td className="px-4 py-3">{o.buyer || "—"}</td>
                <td className="px-4 py-3">{o.productName}</td>
                <td className="px-4 py-3">{new Date(o.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">{o._id}</td>
                <td className="px-4 py-3">NGN {Number(o.amount).toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded ${o.status === "shipped" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
            {!loading && data.items.length === 0 && (
              <tr><td className="px-4 py-6 text-gray-500" colSpan={6}>No sales found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button disabled={page<=1} onClick={()=>setPage(p => p-1)} className="px-3 py-1 border rounded">Prev</button>
        <span className="text-sm">Page {page} of {data.pages || 1}</span>
        <button disabled={page>=data.pages} onClick={()=>setPage(p => p+1)} className="px-3 py-1 border rounded">Next</button>
      </div>

      {err && <p className="text-red-600 mt-3">{err}</p>}
    </Layout>
  );
}
