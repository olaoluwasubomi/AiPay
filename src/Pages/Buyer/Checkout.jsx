import React, { useState } from "react";
import { useShopStore } from "@/store/useShopStore";
import { formatNGN } from "@/utils/format";

export default function CheckoutPage() {
  const items = useShopStore((s) => s.items);
  const getTotal = useShopStore((s) => s.getTotal);
  const clearCart = useShopStore((s) => s.clearCart);

  const [stage, setStage] = useState("summary"); // summary | method | card | transfer | waiting | confirmed

  const total = getTotal();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F2FF] to-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl overflow-hidden">
        {stage === "summary" && <Summary items={items} total={total} onNext={() => setStage("method")} />}
        {stage === "method" && <PaymentMethod onBack={() => setStage("summary")} onCard={() => setStage("card")} onTransfer={() => setStage("transfer")} />}
        {stage === "card" && <CardPayment total={total} onBack={() => setStage("method")} onPay={() => setStage("waiting")} />}
        {stage === "transfer" && <TransferPayment total={total} onBack={() => setStage("method")} onConfirm={() => setStage("waiting")} />}
        {stage === "waiting" && <WaitingScreen onDone={() => { clearCart(); setStage("confirmed"); }} />}
        {stage === "confirmed" && <ConfirmedScreen onDashboard={() => (window.location.href = "/buyer/dashboard")} />}
      </div>
    </div>
  );
}

/* ----------------- Components ----------------- */

function Summary({ items, total, onNext }) {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Cart Summary</h2>
      <ul className="divide-y divide-slate-100 mb-4">
        {items.map((it) => (
          <li key={it.id} className="flex justify-between py-2 text-sm">
            <span>{it.name} × {it.qty}</span>
            <span>NGN {formatNGN(it.price * it.qty)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-bold text-slate-800 mb-6">
        <span>Total</span>
        <span>NGN {formatNGN(total)}</span>
      </div>
      <button onClick={onNext} className="w-full rounded-xl bg-[#1760BA] py-3 text-white font-semibold hover:brightness-105">
        Proceed to Payment
      </button>
    </div>
  );
}

function PaymentMethod({ onBack, onCard, onTransfer }) {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-6">Choose Payment Method</h2>
      <div className="space-y-3">
        <button onClick={onCard} className="w-full rounded-xl border p-4 text-left hover:bg-slate-50">
          💳 Pay with Card
        </button>
        <button onClick={onTransfer} className="w-full rounded-xl border p-4 text-left hover:bg-slate-50">
          🏦 Bank Transfer
        </button>
      </div>
      <button onClick={onBack} className="mt-6 text-sm text-[#1760BA]">← Back</button>
    </div>
  );
}

function CardPayment({ total, onBack, onPay }) {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Card Payment</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Card Number" className="w-full rounded-lg border p-3 text-sm" />
        <div className="flex gap-3">
          <input type="text" placeholder="MM/YY" className="flex-1 rounded-lg border p-3 text-sm" />
          <input type="text" placeholder="CVC" className="flex-1 rounded-lg border p-3 text-sm" />
        </div>
        <input type="text" placeholder="Cardholder Name" className="w-full rounded-lg border p-3 text-sm" />
      </form>
      <div className="mt-6">
        <button onClick={onPay} className="w-full rounded-xl bg-[#1760BA] py-3 text-white font-semibold hover:brightness-105">
          Pay NGN {formatNGN(total)}
        </button>
        <button onClick={onBack} className="mt-3 text-sm text-[#1760BA]">← Back</button>
      </div>
    </div>
  );
}

function TransferPayment({ total, onBack, onConfirm }) {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Transfer Payment</h2>
      <p className="text-sm text-slate-600 mb-4">Please transfer the exact amount to the account below:</p>
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
    </div>
  );
}

function WaitingScreen({ onDone }) {
  return (
    <div className="p-6 flex flex-col items-center justify-center text-center">
      <div className="animate-spin h-12 w-12 rounded-full border-4 border-t-[#1760BA] border-slate-200 mb-4"></div>
      <h2 className="text-lg font-semibold text-slate-800 mb-2">Waiting for Confirmation</h2>
      <p className="text-sm text-slate-600 mb-6">This may take a few seconds...</p>
      <button onClick={onDone} className="rounded-xl bg-[#1760BA] px-6 py-3 text-white font-semibold hover:brightness-105">
        Done
      </button>
    </div>
  );
}

function ConfirmedScreen({ onDashboard }) {
  return (
    <div className="p-6 text-center">
      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
        ✅
      </div>
      <h2 className="text-lg font-semibold text-slate-800 mb-2">Payment Confirmed</h2>
      <p className="text-sm text-slate-600 mb-6">Your order has been placed successfully.</p>
      <button onClick={onDashboard} className="w-full rounded-xl bg-[#1760BA] py-3 text-white font-semibold hover:brightness-105">
        Go to Dashboard
      </button>
    </div>
  );
}
