import React from "react";

export default function TppDashboard() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Welcome, Ade 👋</h1>
      <p className="text-sm text-slate-500">Look at what is happening with your business</p>

      {/* Stats */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <StatCard title="Total Transaction" value="NGN 12,540,000" delta="+20.02%" note="+5k this month" />
        <StatCard title="New Transaction" value="NGN 520,000" delta="+20.02%" note="+5k this month" />
        <StatCard title="Total Visitors" value="40,462" delta="+20.02%" note="+1k this month" />
      </div>

      {/* Charts (placeholders) */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <p className="font-semibold">Overview</p>
          <div className="mt-4 grid h-64 place-items-center rounded-xl bg-slate-50 text-slate-400">
            {/* Plug your chart lib later */}
            <span>Monthly revenue chart</span>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <p className="font-semibold">Order Status</p>
          <div className="mt-4 grid h-64 place-items-center rounded-xl bg-slate-50 text-slate-400">
            <span>Pie chart (Success/Pending/Failed)</span>
          </div>
        </div>
      </div>

      {/* Recent table */}
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <p className="text-lg font-semibold">Recent Transaction</p>
        <div className="mt-4 overflow-hidden rounded-xl">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-sm text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Transaction ID</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Name of Payer</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {DEMO_RECENTS.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/50">
                  <td className="px-4 py-3">{r.txnId}</td>
                  <td className="px-4 py-3">{r.date}</td>
                  <td className="px-4 py-3">{r.payer}</td>
                  <td className="px-4 py-3">{r.amount}</td>
                  <td className="px-4 py-3"><StatusPill status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, value, delta, note }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
          <ReceiptIcon className="h-5 w-5 text-[#1760BA]" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-xl font-extrabold">{value}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-emerald-600">{delta} <span className="text-slate-400">• {note}</span></p>
    </div>
  );
}

function StatusPill({ status }) {
  const map = {
    Success: "bg-blue-50 text-blue-700 ring-blue-200",
    Pending: "bg-amber-50 text-amber-700 ring-amber-200",
    Failed: "bg-rose-50 text-rose-700 ring-rose-200",
  };
  return <span className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold ring-1 ${map[status]}`}>{status}</span>;
}

function ReceiptIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M7 3h10a2 2 0 0 1 2 2v15l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}

const DEMO_RECENTS = [
  { id:1, txnId:"#129290494", date:"12 April, 2023", payer:"Abdul Rasaq Adebisi", amount:"NGN 20,000", status:"Success" },
  { id:2, txnId:"#129290495", date:"12 April, 2023", payer:"Abdul Rasaq Adebisi", amount:"NGN 20,000", status:"Pending" },
  { id:3, txnId:"#129290496", date:"12 April, 2023", payer:"Abdul Rasaq Adebisi", amount:"NGN 20,000", status:"Failed" },
];
