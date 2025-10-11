import React, { useEffect } from "react";
import CheckoutFlow from "./CheckoutFlow";

export default function CheckoutModal({ isOpen, onClose }) {
  useEffect(() => {
    function onEsc(e){ if(e.key === "Escape") onClose?.(); }
    if (isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2 sm:w-[640px] md:w-[820px]">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <CheckoutFlow
            onClose={onClose}
            onDone={() => {
              onClose?.();
              window.location.href = "/buyer/dashboard";
            }}
          />
        </div>
      </div>
    </div>
  );
}
