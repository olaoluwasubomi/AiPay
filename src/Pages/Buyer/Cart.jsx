
import React, { useEffect } from "react";
import { formatNGN } from "@/utils/format";

/**
 * Buyer Cart Modal & Page
 * - Drop this file at: src/Pages/buyer/Cart.jsx
 * - You can use <CartPage /> as a full page (for routing) or import { CartModal } for an overlay.
 */

// --------- Demo data (swap with store/api) ---------
const DEMO_ITEMS = [
  {
    id: 1,
    name: "Chicken Burger",
    image: "/images/demo/burger-1.jpg",
    price: 1500,
    compareAt: 2500,
    qty: 2,
  },
  {
    id: 2,
    name: "Chicken Burger",
    image: "/images/demo/burger-2.jpg",
    price: 1500,
    compareAt: 2500,
    qty: 2,
  },
  {
    id: 3,
    name: "Chicken Burger",
    image: "/images/demo/burger-3.jpg",
    price: 1500,
    compareAt: 2500,
    qty: 2,
  },
];

// --------- Page wrapper (for /buyer/Cart route) ---------
export default function CartPage() {
  const [open, setOpen] = React.useState(true);
  const [items, setItems] = React.useState(DEMO_ITEMS);

  const increment = (id) => setItems((arr) => arr.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  const decrement = (id) =>
    setItems((arr) =>
      arr.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it))
    );
  const remove = (id) => setItems((arr) => arr.filter((it) => it.id !== id));

  const checkoutTotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F2FF] to-white">
      {/* Optional background content could live here (e.g., the product grid underneath). */}
      <CartModal
        isOpen={open}
        items={items}
        onClose={() => setOpen(false)}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={remove}
        onMoreItems={() => (window.location.href = "/buyer/ProductSales")}
        onCheckout={() => alert(`Checking out NGN ${formatNGN(checkoutTotal)}`)}
      />
    </div>
  );
}

// --------- Reusable Cart Modal component ---------
export function CartModal({
  isOpen,
  items = [],
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
  onMoreItems,
  onCheckout,
}) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Dialog */}
      <div className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2 sm:w-[640px] md:w-[820px]">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-800">Cart</h2>
            <button
              aria-label="Close"
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-slate-100"
            >
              <CloseIcon className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          {/* Items */}
          <ul className="max-h-[60vh] space-y-3 overflow-auto px-4 py-4">
            {items.map((item) => (
              <li key={item.id} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-16 w-20 overflow-hidden rounded-lg bg-slate-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700">{item.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <p className="text-[15px] font-extrabold text-[#1760BA]">NGN {formatNGN(item.price)}</p>
                      {item.compareAt && (
                        <p className="text-xs text-slate-400 line-through">NGN {formatNGN(item.compareAt)}</p>
                      )}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <IconButton onClick={() => onDecrement?.(item.id)} ariaLabel="Decrease">
                      <MinusIcon className="h-5 w-5" />
                    </IconButton>
                    <span className="w-8 text-center text-sm font-semibold text-slate-800">{item.qty}</span>
                    <IconButton onClick={() => onIncrement?.(item.id)} ariaLabel="Increase">
                      <PlusIcon className="h-5 w-5" />
                    </IconButton>

                    {/* Kebab menu placeholder */}
                    <button
                      onClick={() => onRemove?.(item.id)}
                      className="ml-2 grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                      title="Remove"
                    >
                      <DotsIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="space-y-3 px-6 pb-6 pt-2">
            <button onClick={onMoreItems} className="mx-auto block text-sm font-medium text-[#1760BA]">
              Add more items <ArrowUpRightIcon className="ml-1 inline h-4 w-4 align-[-2px]" />
            </button>

            <button
              onClick={onCheckout}
              className="w-full rounded-xl bg-[#1760BA] py-3 text-sm font-semibold text-white shadow hover:brightness-105"
            >
              Checkout (NGN {formatNGN(total)})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small helper for circular icon buttons
function IconButton({ children, onClick, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#1760BA] shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
    >
      {children}
    </button>
  );
}

// --------- Icons (inline SVGs) ---------
function CloseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DotsIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="12" r="1.5"/>
      <circle cx="12" cy="12" r="1.5"/>
      <circle cx="19" cy="12" r="1.5"/>
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

