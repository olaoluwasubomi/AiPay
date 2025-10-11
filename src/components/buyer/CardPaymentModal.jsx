import React, { useEffect, useState } from "react";

export default function CardPaymentModal({ isOpen, amount = 6000, onBack, onClose, onPay }) {
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    function onEsc(e){ if(e.key==="Escape") onClose?.(); }
    if(isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[720px] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-[#1760BA]">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <p className="text-[#1760BA] font-bold">NGN {amount.toLocaleString()}</p>
          </div>

          <div className="space-y-4 p-6">
            <h3 className="text-lg font-semibold text-slate-800">Card Payment</h3>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-600">Card Number</span>
              <input value={card} onChange={e=>setCard(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1760BA]" placeholder="0000 0000 0000 0000" />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Expiration Date</span>
                <input value={exp} onChange={e=>setExp(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1760BA]" placeholder="MM/YY" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">CVV</span>
                <input value={cvv} onChange={e=>setCvv(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1760BA]" placeholder="***" />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-600">Your Name</span>
              <input value={name} onChange={e=>setName(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1760BA]" placeholder="John Doe" />
            </label>

            <p className="pt-2 text-center text-xs text-slate-500">
              By continuing, you agree to our <a className="text-[#1760BA] underline">Terms &amp; Condition</a> and <a className="text-[#1760BA] underline">Privacy Policy</a>
            </p>

            <button
              onClick={() => onPay?.({ card, exp, cvv, name })}
              className="mt-2 w-full rounded-xl bg-[#1760BA] py-3 text-sm font-semibold text-white shadow hover:brightness-105"
            >
              Pay (NGN {amount.toLocaleString()})
            </button>

            <div className="mt-2 flex items-center justify-center gap-2">
              <div className="h-3 w-5 rounded bg-slate-300" />
              <span className="text-xs text-slate-500">Secured by <span className="font-semibold">AiPay</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeft(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
