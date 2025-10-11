import React, { useState } from "react";

/* Page */
export default function TppPaymentHistory() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const rows = DEMO_ROWS.filter(
    r =>
      !query ||
      r.txnId.toLowerCase().includes(query.toLowerCase()) ||
      r.payer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome, Ade 👋</h1>
          <p className="text-sm text-slate-500">Look at what is happening with your business</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Search"
              className="rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none shadow-sm"
            />
            <SearchIcon className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm">
            <FilterIcon className="h-4 w-4 text-slate-500" /> Filter
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-sm text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Transaction ID</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Name of Payer</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {rows.map((r)=>(
              <tr key={r.id} className="hover:bg-slate-50/60">
                <td className="px-4 py-3">{r.txnId}</td>
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3">{r.payer}</td>
                <td className="px-4 py-3">{r.amount}</td>
                <td className="px-4 py-3"><StatusPill status={r.status}/></td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => { setCurrent(r); setOpen(true); }}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-white"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Simple pager stub */}
        <div className="flex items-center justify-between px-4 py-3 text-xs text-slate-500">
          <span>Showing 10 of 50</span>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(n=>(
              <button key={n} className={"grid h-7 w-7 place-items-center rounded "+(n===1?"bg-[#1760BA] text-white":"bg-slate-50 text-slate-600")}>{n}</button>
            ))}
          </div>
        </div>
      </div>

      <TxnDetailsModal open={open} onClose={()=>setOpen(false)} row={current}/>
    </section>
  );
}

/* Details Modal (Pending/Success styles) */
function TxnDetailsModal({ open, onClose, row }) {
  if(!open || !row) return null;
  const isSuccess = row.status === "Success";

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[560px] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <p className="text-lg font-semibold">Details</p>
            <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full hover:bg-slate-100">✕</button>
          </div>

          <div className="p-6">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-slate-50 ring-1 ring-slate-200">
              <ReceiptIcon className="h-6 w-6 text-[#1760BA]" />
            </div>
            <p className={"mt-3 text-center text-xl font-extrabold "+(isSuccess?"text-[#1760BA]":"text-slate-800")}>
              {isSuccess ? `+ ${row.amount}` : row.amount}
            </p>

            <div className="mt-5 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <Row label="Name of Sender" value={row.payer} />
              <Row label="Date & Time" value={`${row.date}, 19:48`} />
              <Row label="Transaction ID" value={row.txnId} copy />
              <Row label="Status" value={<StatusPill status={row.status} />} />
              <Row label="Transaction Fee" value="NGN 200" />
            </div>

            <button className="mt-6 w-full rounded-lg bg-[#1760BA] py-3 text-sm font-semibold text-white hover:brightness-105">
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, copy }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-200 py-3 last:border-b-0">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold text-slate-700">{value}</div>
        {copy && (
          <button
            onClick={() => navigator.clipboard?.writeText(String(value))}
            className="rounded border border-slate-200 px-2 py-0.5 text-[10px] text-slate-500 hover:bg-white"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}

/* Utilities */
function StatusPill({ status }) {
  const map = {
    Success: "bg-blue-50 text-blue-700 ring-blue-200",
    Pending: "bg-amber-50 text-amber-700 ring-amber-200",
    Failed: "bg-rose-50 text-rose-700 ring-rose-200",
  };
  return <span className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold ring-1 ${map[status]}`}>{status}</span>;
}
function SearchIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function FilterIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M4 6h16M6 12h12M9 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function ReceiptIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M7 3h10a2 2 0 0 1 2 2v15l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}

const DEMO_ROWS = [
  { id:1, txnId:"#129290494", date:"12, April 2023", payer:"Adenusi Samuel", amount:"NGN 15,000", status:"Pending" },
  { id:2, txnId:"#129290495", date:"12, April 2023", payer:"Adenusi Samuel", amount:"NGN 15,000", status:"Success" },
  { id:3, txnId:"#129290496", date:"12, April 2023", payer:"Adenusi Samuel", amount:"NGN 15,000", status:"Failed" },
];
