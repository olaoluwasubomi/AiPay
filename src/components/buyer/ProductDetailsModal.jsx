import React, { useEffect } from "react";
import { useShopStore } from "@/store/useShopStore";
import { formatNGN } from "@/utils/format";

/**
 * Connected Product Details Modal
 * - Uses Zustand store:
 *   - isDetailsOpen, selectedProduct, selectedQty
 *   - setSelectedQty, closeDetails, addToCart, openCart
 *
 * Usage:
 *  import ProductDetailsModal from "./components/ProductDetailsModal";
 *  <ProductDetailsModal />
 */
export default function ConnectedProductDetailsModal() {
  const isOpen = useShopStore((s) => s.isDetailsOpen);
  const product = useShopStore((s) => s.selectedProduct);
  const qty = useShopStore((s) => s.selectedQty);

  const setQty = useShopStore((s) => s.setSelectedQty);
  const close = useShopStore((s) => s.closeDetails);
  const addToCart = useShopStore((s) => s.addToCart);
  const openCart = useShopStore((s) => s.openCart);

  if (!isOpen || !product) return null;

  return (
    <ProductDetailsModal
      isOpen={isOpen}
      product={product}
      qty={qty}
      onQtyChange={setQty}
      onClose={close}
      onBack={close}
      onRemove={() => {
        // Optional: if item is already in cart, you could remove it here using removeItem(product.id)
        close();
      }}
      onAddToCart={() => {
        addToCart(product, qty);
        close();
        openCart(); // pop cart after adding
      }}
    />
  );
}

/**
 * Pure/unconnected Modal (exported for reuse if needed)
 */
export function ProductDetailsModal({
  isOpen,
  product,
  qty = 1,
  onQtyChange,
  onClose,
  onBack,
  onRemove,
  onAddToCart,
}) {
  useEffect(() => {
    function onEsc(e) { if (e.key === "Escape") onClose?.(); }
    if (isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Dialog */}
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[980px] -translate-x-1/2 -translate-y-1/2">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-[1.2fr_1fr]">
          {/* Left panel */}
          <div className="p-6">
            <button onClick={onBack} className="mb-4 flex items-center gap-2 text-sm font-medium text-[#1760BA]">
              <ArrowLeftIcon className="h-4 w-4" /> Back
            </button>

            <h2 className="mb-4 text-lg font-semibold text-slate-800">Product Details</h2>

            <div className="overflow-hidden rounded-xl bg-slate-100">
              <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
            </div>

            <div className="mt-5">
              <p className="text-[15px] font-semibold text-slate-700">{product.name}</p>
              <div className="mt-2 flex items-center gap-2">
                <p className="text-[17px] font-extrabold text-[#1760BA]">NGN {formatNGN(product.price)}</p>
                {product.compareAt && (
                  <p className="text-xs text-slate-400 line-through">
                    NGN {formatNGN(product.compareAt)}
                  </p>
                )}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-700">Quantity</p>
              <div className="mt-3 flex items-center gap-3">
                <IconCircle onClick={() => onQtyChange(Math.max(1, qty - 1))} ariaLabel="Decrease">
                  <MinusIcon className="h-5 w-5" />
                </IconCircle>
                <span className="w-10 text-center text-sm font-semibold text-slate-800">{qty}</span>
                <IconCircle onClick={() => onQtyChange(qty + 1)} ariaLabel="Increase">
                  <PlusIcon className="h-5 w-5" />
                </IconCircle>
                <div className="ml-auto" />
                <button
                  onClick={onAddToCart}
                  className="rounded-full bg-[#1760BA] px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-105"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="border-t p-6 md:border-l md:border-t-0">
            <div className="mb-6 flex items-center justify-end">
              <button
                onClick={onRemove}
                className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 ring-1 ring-red-100 hover:bg-red-100"
              >
                <TrashIcon className="h-4 w-4" /> Remove item
              </button>
            </div>

            <h3 className="mb-3 text-base font-semibold text-slate-800">Description</h3>
            <p className="whitespace-pre-line text-sm leading-6 text-slate-600">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small UI bits ---------- */
function IconCircle({ children, onClick, ariaLabel }) {
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

function ArrowLeftIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
function TrashIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
