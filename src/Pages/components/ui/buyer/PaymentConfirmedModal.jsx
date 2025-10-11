import React from "react";

export default function PaymentConfirmedModal({ isOpen, amount=6000, onClose, onCheckStatus }) {
  if(!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[720px] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-slate-100">
          <Badge className="mx-auto h-12 w-12 text-[#1760BA]" />
          <h3 className="mt-6 text-xl font-semibold text-slate-800">
            Your payment of <span className="text-[#1760BA]">NGN {amount.toLocaleString()}</span> is confirmed
          </h3>
          <p className="mx-auto mt-3 max-w-[520px] text-sm text-slate-500">
            Stay updated on the progress of your order and stay informed about the status of its delivery.
          </p>
          <button
            onClick={onCheckStatus}
            className="mt-6 rounded-xl bg-[#1760BA] px-5 py-3 text-sm font-semibold text-white shadow hover:brightness-105"
          >
            Check Order Status
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
