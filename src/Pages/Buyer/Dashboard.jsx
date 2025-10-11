import React from "react";
import { formatNGN } from "@/utils/format";

const DEMO_HISTORY = [
  { id: 1, title: "Nike sneakers", qty: 2, price: 7000, orderId: "#458907645", status: "Success", icon: "/images/demo/shoe-1.jpg" },
  { id: 2, title: "Chicken burger", qty: 2, price: 7000, orderId: "#458907645", status: "Pending", icon: "/images/demo/burger-1.jpg" },
  { id: 3, title: "Nike Sneakers", qty: 2, price: 7000, orderId: "#458907645", status: "Success", icon: "/images/demo/shoe-2.jpg" },
  { id: 4, title: "Snacks", qty: 2, price: 7000, orderId: "#458907645", status: "Success", icon: "/images/demo/rice-1.jpg" },
  { id: 5, title: "Snacks", qty: 2, price: 7000, orderId: "#458907645", status: "Success", icon: "/images/demo/burger-2.jpg" },
];

export default function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Top bar */}
      <header className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center gap-2 text-[#1760BA]">
          <button onClick={() => window.history.back()} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-semibold">Back</span>
          </button>
        </div>
        <h1 className="mt-3 text-2xl font-bold text-slate-800">Your Dashboard</h1>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-6 pb-12 md:grid-cols-[1.2fr_.8fr]">
        {/* History card */}
        <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
          <div className="px-6 py-5">
            <h2 className="text-lg font-semibold text-slate-800">Your History</h2>
            <div className="mt-4 overflow-hidden rounded-xl">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-sm text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Product</th>
                    <th className="px-4 py-3 font-medium">Order ID</th>
                    <th className="px-4 py-3 font-medium">Price</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {DEMO_HISTORY.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-lg bg-slate-100">
                            <img src={row.icon} alt="" className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-700">{row.title}</p>
                            <p className="text-xs text-slate-400">Quantity: {row.qty}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.orderId}</td>
                      <td className="px-4 py-3 text-slate-700">NGN {formatNGN(row.price)}</td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold ring-1 " +
                            (row.status === "Success"
                              ? "bg-blue-50 text-blue-700 ring-blue-200"
                              : "bg-amber-50 text-amber-700 ring-amber-200")
                          }
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Points card */}
        <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center gap-3">
            <CoinIcon className="h-9 w-9 text-slate-700" />
            <p className="text-sm font-semibold text-slate-600">Your Points</p>
          </div>
          <p className="mt-4 text-4xl font-extrabold text-slate-900">20,756</p>
          <p className="mt-2 text-sm text-emerald-600">20% From last month</p>
        </aside>
      </main>
    </div>
  );
}

function ArrowLeft(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
function CoinIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/></svg>)}
