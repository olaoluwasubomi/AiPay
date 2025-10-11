import React, { useState } from "react";
import PaymentMethodModal from "@/components/buyer/PaymentMethodModal";
import CardPaymentModal from "@/components/buyer/CardPaymentModal";
import TransferPaymentModal from "@/components/buyer/TransferPaymentModal";
import PaymentWaitingModal from "@/components/buyer/PaymentWaitingModal";
import PaymentConfirmedModal from "@/components/buyer/PaymentConfirmedModal";
import CartSummaryModal from "@/components/buyer/CartSummaryModal";

const DEMO_ITEMS = [
  { id:1, name:"Chicken Burger", qty:2, price:3000 },
  { id:2, name:"Chicken Burger", qty:2, price:3000 },
  { id:3, name:"Chicken Burger", qty:2, price:3000 },
];

export default function CheckoutFlowDemo() {
  const [stage, setStage] = useState("summary"); // summary -> method -> card|transfer -> waiting -> confirmed
  const amount = 6000;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F2FF] to-white">
      {/* Trigger this page from /buyer/Cart checkout button */}
      <CartSummaryModal
        isOpen={stage==="summary"}
        items={DEMO_ITEMS}
        delivery={1000}
        onClose={()=>setStage("")}
        onEdit={()=>history.back()}
        onMakePayment={()=>setStage("method")}
      />

      <PaymentMethodModal
        isOpen={stage==="method"}
        amount={amount}
        onClose={()=>setStage("")}
        onCard={()=>setStage("card")}
        onTransfer={()=>setStage("transfer")}
      />

      <CardPaymentModal
        isOpen={stage==="card"}
        amount={amount}
        onBack={()=>setStage("method")}
        onClose={()=>setStage("")}
        onPay={()=>setStage("waiting")}
      />

      <TransferPaymentModal
        isOpen={stage==="transfer"}
        amount={amount}
        onBack={()=>setStage("method")}
        onClose={()=>setStage("")}
        onIPaid={()=>setStage("waiting")}
      />

      <PaymentWaitingModal
        isOpen={stage==="waiting"}
        userName="Ade"
        onClose={()=>{}}
      />

      <PaymentConfirmedModal
        isOpen={stage==="confirmed" || false}
        amount={amount}
        onClose={()=>setStage("")}
        onCheckStatus={()=>{ setStage(""); window.location.href="/buyer/dashboard"; }}
      />
    </div>
  );
}
