import React, { useEffect } from "react";

export default function PaymentWaitingModal({ isOpen, userName="Ade", onClose }) {
  useEffect(() => {
    function onEsc(e){ if(e.key==="Escape") onClose?.(); }
    if(isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[680px] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-slate-100">
          <Spinner className="mx-auto h-10 w-10 text-[#1760BA]" />
          <h3 className="mt-6 text-xl font-semibold text-slate-800">We’re confirming your payment</h3>
          <p className="mx-auto mt-3 max-w-[520px] text-sm text-slate-500">
            Hello {userName}, we are currently awaiting the confirmation of your payment. Please hold on.
            We will let you know when you are set to continue.
          </p>
        </div>
      </div>
    </div>
  );
}

function Spinner(props){return(<svg viewBox="0 0 50 50" fill="none" {...props}><circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="4" opacity=".2"/><path d="M45 25a20 20 0 0 1-20 20" stroke="currentColor" strokeWidth="4"/></svg>)}
