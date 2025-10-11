import React, { useEffect } from "react";

export default function TransferPaymentModal({ isOpen, amount=6000, onBack, onClose, onIPaid }) {
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
            <h3 className="text-lg font-semibold text-slate-800">Transfer</h3>
            <p className="text-sm text-slate-500">Ensure you send the exact amount indicated</p>

            <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <Row label="Bank" value="GT Bank" />
              <Row label="Account Number" value="0701908222" copy />
              <Row label="Amount" value={`NGN ${amount.toLocaleString()}`} copy />
            </div>

            <p className="pt-1 text-center text-xs text-slate-500">
              By continuing, you agree to our <a className="text-[#1760BA] underline">Terms &amp; Condition</a> and <a className="text-[#1760BA] underline">Privacy Policy</a>
            </p>

            <button
              onClick={onIPaid}
              className="w-full rounded-xl bg-[#1760BA] py-3 text-sm font-semibold text-white shadow hover:brightness-105"
            >
              I have paid
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

function Row({label, value, copy}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-200 py-3 last:border-b-0">
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-slate-800">{value}</p>
        {copy && (
          <button
            onClick={() => navigator.clipboard?.writeText(String(value).replace(/[^0-9]/g, ""))}
            className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 hover:bg-white"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}

function ArrowLeft(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
