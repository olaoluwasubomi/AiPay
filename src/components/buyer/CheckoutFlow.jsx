import React, { useEffect, useState } from "react";
import { useShopStore } from "@/store/useShopStore";
import { formatNGN } from "@/utils/format";

/**
 * Pure flow logic + UI (no shell). Wrappers render shell (modal/page).
 * Stages: summary → method → card | transfer → waiting → confirmed
 */
export default function CheckoutFlow({ onClose, onDone }) {
  const items = useShopStore((s) => s.items);
  const getTotal = useShopStore((s) => s.getTotal);
  const clearCart = useShopStore((s) => s.clearCart);

  const [stage, setStage] = useState("summary");
  const total = getTotal();

  useEffect(() => {
    // reset to first step whenever flow mounts
    setStage("summary");
  }, []);

  return (
    <div className="px-6 py-5">
      {/* Header (changes per stage) */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">
          {stage === "summary" && "Cart Summary"}
          {stage === "method" && "Choose Payment Method"}
          {stage === "card" && "Card Payment"}
          {stage === "transfer" && "Transfer Payment"}
          {stage === "waiting" && "Waiting for Confirmation"}
          {stage === "confirmed" && "Payment Confirmed"}
        </h2>
        {onClose && (
          <button
            aria-label="Close"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-slate-100"
          >
            <CloseIcon className="h-5 w-5 text-slate-600" />
          </button>
        )}
      </div>

      {/* Body */}
      {stage === "summary" && (
        <Summary
          items={items}
          total={total}
          onNext={() => setStage("method")}
        />
      )}
      {stage === "method" && (
        <PaymentMethod
          onBack={() => setStage("summary")}
          onCard={() => setStage("card")}
          onTransfer={() => setStage("transfer")}
        />
      )}
      {stage === "card" && (
        <CardPayment
          total={total}
          onBack={() => setStage("method")}
          onPay={() => setStage("waiting")}
        />
      )}
      {stage === "transfer" && (
        <TransferPayment
          total={total}
          onBack={() => setStage("method")}
          onConfirm={() => setStage("waiting")}
        />
      )}
      {stage === "waiting" && (
        <WaitingScreen
          onDone={() => {
            clearCart();
            setStage("confirmed");
          }}
        />
      )}
      {stage === "confirmed" && (
        <ConfirmedScreen
          onDashboard={() => {
            if (onDone) onDone(); // wrappers decide what "done" means
          }}
        />
      )}
    </div>
  );
}

/* ---------- Stage blocks (same as your styles) ---------- */
function Summary({ items, total, onNext }) {
  return (
    <>
      <ul className="mb-4 divide-y divide-slate-100">
        {items.map((it) => (
          <li key={it.id} className="flex justify-between py-2 text-sm">
            <span>{it.name} × {it.qty}</span>
            <span>NGN {formatNGN(it.price * it.qty)}</span>
          </li>
        ))}
      </ul>
      <div className="mb-6 flex justify-between font-bold text-slate-800">
        <span>Total</span>
        <span>NGN {formatNGN(total)}</span>
      </div>
      <button
        onClick={onNext}
        className="w-full rounded-xl bg-[#1760BA] py-3 text-white font-semibold hover:brightness-105"
      >
        Proceed to Payment
      </button>
    </>
  );
}

function PaymentMethod({ onBack, onCard, onTransfer }) {
  return (
    <>
      <div className="space-y-3">
        <button onClick={onCard} className="w-full rounded-xl border p-4 text-left hover:bg-slate-50">💳 Pay with Card</button>
        <button onClick={onTransfer} className="w-full rounded-xl border p-4 text-left hover:bg-slate-50">🏦 Bank Transfer</button>
      </div>
      <button onClick={onBack} className="mt-6 text-sm text-[#1760BA]">← Back</button>
    </>
  );
}

function CardPayment({ total, onBack, onPay }) {
  return (
    <>
      <form className="space-y-4">
        <input className="w-full rounded-lg border p-3 text-sm" placeholder="Card Number" />
        <div className="flex gap-3">
          <input className="flex-1 rounded-lg border p-3 text-sm" placeholder="MM/YY" />
          <input className="flex-1 rounded-lg border p-3 text-sm" placeholder="CVC" />
        </div>
        <input className="w-full rounded-lg border p-3 text-sm" placeholder="Cardholder Name" />
      </form>
      <div className="mt-6">
        <button onClick={onPay} className="w-full rounded-xl bg-[#1760BA] py-3 text-white font-semibold hover:brightness-105">
          Pay NGN {formatNGN(total)}
        </button>
        <button onClick={onBack} className="mt-3 text-sm text-[#1760BA]">← Back</button>
      </div>
    </>
  );
}

function TransferPayment({ total, onBack, onConfirm }) {
  return (
    <>
      <p className="mb-4 text-sm text-slate-600">Please transfer the exact amount to the account below:</p>
      <div className="rounded-lg border p-4 text-sm">
        <p><span className="font-semibold">Bank:</span> GTBank</p>
        <p><span className="font-semibold">Account:</span> 0123456789</p>
        <p><span className="font-semibold">Name:</span> AiPay Nigeria Ltd</p>
        <p className="mt-2 font-bold text-slate-800">Amount: NGN {formatNGN(total)}</p>
      </div>
      <div className="mt-6">
        <button onClick={onConfirm} className="w-full rounded-xl bg-[#1760BA] py-3 text-white font-semibold hover:brightness-105">
          I Have Made Payment
        </button>
        <button onClick={onBack} className="mt-3 text-sm text-[#1760BA]">← Back</button>
      </div>
    </>
  );
}

function WaitingScreen({ onDone }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-center">
      <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#1760BA]" />
      <h3 className="mb-2 text-base font-semibold text-slate-800">Waiting for Confirmation</h3>
      <p className="mb-6 text-sm text-slate-600">This may take a few seconds...</p>
      <button onClick={onDone} className="rounded-xl bg-[#1760BA] px-6 py-3 text-white font-semibold hover:brightness-105">
        Done
      </button>
    </div>
  );
}

function ConfirmedScreen({ onDashboard }) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">✅</div>
      <h3 className="mb-2 text-base font-semibold text-slate-800">Payment Confirmed</h3>
      <p className="mb-6 text-sm text-slate-600">Your order has been placed successfully.</p>
      <button onClick={onDashboard} className="w-full rounded-xl bg-[#1760BA] py-3 text-white font-semibold hover:brightness-105">
        Go to Dashboard
      </button>
    </div>
  );
}

/* Icon */
function CloseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
