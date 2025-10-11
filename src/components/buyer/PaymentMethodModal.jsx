import React, { useEffect } from "react";

export default function PaymentMethodModal({ isOpen, amount = 6000, onClose, onCard, onTransfer }) {
  useEffect(() => {
    function onEsc(e){ if(e.key==="Escape") onClose?.(); }
    if(isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[760px] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h3 className="text-lg font-semibold text-slate-800">Payment Method</h3>
            <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full hover:bg-slate-100">
              <span className="text-2xl leading-none text-slate-500">&times;</span>
            </button>
          </div>

          <div className="space-y-4 p-6">
            <button
              onClick={onCard}
              className="flex w-full items-center justify-between rounded-xl bg-white p-5 text-left ring-1 ring-slate-200 hover:bg-slate-50"
            >
              <div>
                <p className="text-base font-semibold text-[#1760BA]">Card Payment</p>
                <p className="text-sm text-slate-500">Provide your card details to carry out this transaction</p>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400" />
            </button>

            <button
              onClick={onTransfer}
              className="flex w-full items-center justify-between rounded-xl bg-white p-5 text-left ring-1 ring-slate-200 hover:bg-slate-50"
            >
              <div>
                <p className="text-base font-semibold text-[#1760BA]">Bank Transfer</p>
                <p className="text-sm text-slate-500">Copy the account details and send the exact amount seen</p>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400" />
            </button>

            <p className="pt-2 text-center text-xs text-slate-500">
              You’re paying <span className="font-semibold text-slate-700">NGN {amount.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRight(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
