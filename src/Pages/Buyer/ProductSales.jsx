import React, { useMemo, useState, useEffect } from "react";
import { useShopStore } from "@/store/useShopStore";
import { formatNGN } from "@/utils/format";
import CartModal from "@/components/buyer/CartModal";
 import { ProductDetailsModal } from "@/components/buyer/ProductDetailsModal";

/* ---------- Demo catalog (swap to API later) ---------- */
const CATEGORIES = [
  { key: "all", label: "All Category", icon: GenericCircle },
  { key: "foods", label: "Foods & Drinks", icon: GenericCircle },
  { key: "fashion", label: "Fashion", icon: GenericCircle },
  { key: "electronics", label: "Electronics", icon: GenericCircle },
  { key: "makeup", label: "Make-up", icon: GenericCircle },
];

const STARTER_PRODUCTS = [
  { id: 1, name: "Chicken Burger", price: 2000, category: "foods", image: "/images/demo/burger-1.jpg" },
  { id: 2, name: "Orange Juice", price: 1500, category: "foods", image: "/images/demo/juice-1.jpg" },
  { id: 3, name: "Running Sneakers", price: 7000, category: "fashion", image: "/images/demo/shoe-1.jpg" },
  { id: 4, name: "Gadget Kit", price: 12000, category: "electronics", image: "/images/demo/gadgets-1.jpg" },
];

/* ---------- Page ---------- */
export default function ProductSales() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");

  // store: catalog + details
  const setProducts = useShopStore((s) => s.setProducts);
  const openDetails = useShopStore((s) => s.openDetails);
  const isDetailsOpen = useShopStore((s) => s.isDetailsOpen);
  const selectedProduct = useShopStore((s) => s.selectedProduct);
  const selectedQty = useShopStore((s) => s.selectedQty);
  const setSelectedQty = useShopStore((s) => s.setSelectedQty);
  const closeDetails = useShopStore((s) => s.closeDetails);

  // store: cart + UI
  const items = useShopStore((s) => s.items);
  const addToCart = useShopStore((s) => s.addToCart);
  const isCartOpen = useShopStore((s) => s.isCartOpen);
  const openCart = useShopStore((s) => s.openCart);
  const closeCart = useShopStore((s) => s.closeCart);
  const increment = useShopStore((s) => s.increment);
  const decrement = useShopStore((s) => s.decrement);
  const removeItem = useShopStore((s) => s.removeItem);
  const getTotal = useShopStore((s) => s.getTotal);

  useEffect(() => setProducts(STARTER_PRODUCTS), [setProducts]);

  const products = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STARTER_PRODUCTS.filter(
      (p) => (active === "all" || p.category === active) && (!q || p.name.toLowerCase().includes(q))
    );
  }, [query, active]);

  const cartCount = items.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F2FF] to-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-gradient-to-b from-[#E8F2FF]/90 to-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="relative w-full max-w-xl">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none placeholder:text-slate-400 shadow-sm focus:ring-2 focus:ring-[#1760BA]"
                placeholder="Search anything..."
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Cart button -> opens modal via store */}
            <button
              onClick={openCart}
              className="relative grid place-items-center rounded-full bg-white p-3 shadow-sm hover:shadow"
            >
              <CartIcon className="h-5 w-5 text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#1760BA] text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sm hover:shadow">
              <UserIcon className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Intro + location */}
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <h1 className="text-2xl font-bold text-[#1760BA]">Welcome To AiPay Store</h1>
            <p className="mt-1 text-slate-500">Enjoy high classic products only on AiPay</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-start gap-3">
              <LocationIcon className="mt-0.5 h-5 w-5 text-[#1760BA]" />
              <div>
                <p className="text-sm font-semibold text-slate-700">Use your current location</p>
                <p className="text-sm text-slate-500">12, Oreshaolad street, Lagos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={
                "flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm transition " +
                (active === c.key
                  ? "border-[#1760BA] bg-white text-[#1760BA]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300")
              }
            >
              <c.icon className={"h-4 w-4 " + (active === c.key ? "text-[#1760BA]" : "text-slate-500")} />
              <span>{c.label}</span>
              {c.key === "all" && (
                <span className="ml-1 rounded-full bg-[#1760BA]/10 p-1">
                  <ChevronDownIcon className="h-3 w-3 text-[#1760BA]" />
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <section className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
            >
              <button onClick={() => openDetails(p)} className="block w-full">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-[1.02]" />
                </div>
              </button>
              <div className="flex items-end justify-between gap-3 p-4">
                <div>
                  <p className="text-sm text-slate-500">{p.name}</p>
                  <p className="mt-1 text-base font-extrabold text-slate-800">NGN {formatNGN(p.price)}</p>
                </div>
                <button
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#1760BA] text-white shadow hover:brightness-105"
                  aria-label="Add to cart"
                  onClick={() => addToCart(p, 1)}
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* DETAILS MODAL (existing) */}
      <ProductDetailsModal
        isOpen={isDetailsOpen}
        product={selectedProduct}
        qty={selectedQty}
        onQtyChange={setSelectedQty}
        onClose={closeDetails}
        onBack={closeDetails}
        onRemove={() => {}}
        onAddToCart={() => {
          if (selectedProduct) addToCart(selectedProduct, selectedQty);
          closeDetails();
          openCart(); // optional: pop cart after adding from details
        }}
      />

      {/* CART MODAL (rendered on this page) */}
      <CartModal
        isOpen={isCartOpen}
        items={items}
        onClose={closeCart}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={removeItem}
        onMoreItems={closeCart}
        onCheckout={() => {
          closeCart();
          window.location.href = "/buyer/checkout";
        }}
        total={getTotal()}
      />
    </div>
  );
}

/* ---------- Icons / small components ---------- */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
        <CartIcon className="h-5 w-5 text-[#1760BA]" />
      </div>
      <span className="text-xl font-bold text-slate-800">AiPay</span>
    </div>
  );
}

function CartIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 6h14l-1.2 6H8.2L7 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="9" cy="20" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
    </svg>
  );
}
function UserIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3.5 21c1.6-3.7 5.2-6 8.5-6s6.9 2.3 8.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function SearchIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function LocationIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}
function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.17l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.4a.75.75 0 0 1 .02-1.18Z" clipRule="evenodd"/>
    </svg>
  );
}
function PlusIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function GenericCircle({ className = "" }) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>;
}
