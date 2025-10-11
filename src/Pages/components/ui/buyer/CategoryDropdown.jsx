import React, { useEffect, useRef } from "react";

export default function CategoryDropdown({ open, onClose, onPick }) {
  const ref = useRef(null);
  useEffect(() => {
    function clickAway(e){ if(open && ref.current && !ref.current.contains(e.target)) onClose?.(); }
    document.addEventListener("mousedown", clickAway);
    return () => document.removeEventListener("mousedown", clickAway);
  }, [open, onClose]);

  if(!open) return null;

  const items = [
    "Accessories","Kitchen Utensils","Phones","Cloths","Baby Product","Cars",
    "Book","Computer","Appliances","Others"
  ];

  return (
    <div ref={ref} className="absolute z-40 mt-2 w-56 overflow-hidden rounded-xl bg-white py-2 shadow-lg ring-1 ring-slate-200">
      {items.map((t)=>(
        <button
          key={t}
          onClick={() => { onPick?.(t); onClose?.(); }}
          className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
        >
          {t}
        </button>
      ))}
    </div>
  );
}
