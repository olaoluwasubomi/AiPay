import React from "react";
import CheckoutFlow from "@/components/buyer/CheckoutFlow";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F2FF] to-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
        <CheckoutFlow
          onClose={() => history.back()}
          onDone={() => {
            window.location.href = "/buyer/dashboard";
          }}
        />
      </div>
    </div>
  );
}
