/*import React from "react";
import { useShopStore } from "@/store/useShopStore";
import CartModal from "@/components/buyer/CartModal";

export default function CartPage() {
  const isCartOpen = useShopStore((s) => s.isCartOpen);
  const items = useShopStore((s) => s.items);
  const closeCart = useShopStore((s) => s.closeCart);
  const increment = useShopStore((s) => s.increment);
  const decrement = useShopStore((s) => s.decrement);
  const removeItem = useShopStore((s) => s.removeItem);
  const getTotal = useShopStore((s) => s.getTotal);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F2FF] to-white">
      <CartModal
        isOpen={isCartOpen}
        items={items}
        onClose={closeCart}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={removeItem}
        onMoreItems={() => closeCart()}
        onCheckout={() => { closeCart(); window.location.href = "/buyer/checkout"; }}
        total={getTotal()}
      />
    </div>
  );
}*/