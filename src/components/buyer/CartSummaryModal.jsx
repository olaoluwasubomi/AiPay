import React from "react";
import { formatNGN } from "@/utils/format";

export default function CartSummaryModal({ isOpen, items=[], delivery=1000, onClose, onEdit, onMakePayment }) {
  const subtotal = items.reduce((s,i)=>s + i.price * i.qty, 0);
  const total = subtotal + (delivery || 0);

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[760px] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h3 className="text-lg font-semibold text-slate-800">Summary</h3>
            <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full hover:bg-slate-100">
              <span className="text-2xl leading-none text-slate-500">&times;</span>
            </button>
          </div>

          <div className="px-6 py-5">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Product</th>
                  <th className="px-4 py-3 font-medium">Quantity</th>
                  <th className="px-4 py-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((it)=>(
                  <tr key={it.id}>
                    <td className="px-4 py-3">{it.name}</td>
                    <td className="px-4 py-3">{it.qty}</td>
                    <td className="px-4 py-3 font-semibold text-slate-700">NGN {formatNGN(it.price*it.qty)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="px-4 py-3">Delivery Cost</td>
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3 font-semibold text-slate-700">NGN {formatNGN(delivery)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-700">Grand Total</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-right text-[#1760BA] font-extrabold">NGN {formatNGN(total)}</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-5 flex items-center justify-between">
              <button onClick={onEdit} className="text-sm font-medium text-[#1760BA]">
                Edit items <ArrowUpRight className="ml-1 inline h-4 w-4 align-[-2px]" />
              </button>
              <button
                onClick={onMakePayment}
                className="rounded-xl bg-[#1760BA] px-6 py-3 text-sm font-semibold text-white shadow hover:brightness-105"
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowUpRight(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>)}
