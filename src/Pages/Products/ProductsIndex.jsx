import React, { useMemo, useState } from "react";
import Layout from "../Layout/Layout";
import useProducts from "@/hooks/useProducts";
import { Link } from "react-router-dom";

const categories = ["All products","Accessories","Kitchen Utensils","Phones","Cloths","Baby Product","Cars","Book","Computer","Appliances"];

export default function ProductsIndex() {
  const [cat, setCat] = useState("All products");
  const [q, setQ]   = useState("");
  const effectiveCat = useMemo(() => (cat === "All products" ? "" : cat), [cat]);

  const { items, nextCursor, loading, error, loadMore, refresh } =
    useProducts({ category: effectiveCat, q, limit: 24 });

  return (
    <Layout>
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-semibold">Market Place</h2>
        <Link to="/products/new" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add Product(s)</Link>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <select className="border rounded-lg px-3 py-2" value={cat} onChange={(e)=>setCat(e.target.value)}>
          {categories.map((c)=> <option key={c} value={c}>{c}</option>)}
        </select>
        <input
          className="border rounded-lg px-3 py-2 flex-1"
          placeholder="Search"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          onKeyDown={(e)=> e.key === "Enter" && refresh()}
        />
        <button className="px-4 py-2 border rounded-lg" onClick={refresh}>Search</button>
      </div>

      {/* Empty state */}
      {(!loading && items.length === 0) && (
        <div className="bg-white rounded-xl shadow mt-10 py-20">
          <img src="/images/empty_state 1.png" className="w-28 mx-auto" alt="" />
          <h4 className="text-center font-bold text-2xl mt-4">Nothing is here</h4>
          <Link to="/products/new" className="block w-40 mx-auto mt-5 text-center loginbg py-3 text-white rounded-xl font-bold">
            Add Product
          </Link>
        </div>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {items.map(p => (
          <div key={p._id} className="bg-white rounded-xl shadow p-3">
            <div className="relative">
              <img src={p.imageUrl || "/images/placeholder.png"} alt="" className="w-full h-40 object-cover rounded-lg" />
              <Link to={`/products/${p._id}/edit`} className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs border">
                Edit
              </Link>
            </div>
            <div className="mt-2">
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">Quantity <span className="ml-1">{p.quantity} pcs</span></div>
              <div className="text-xs">Price <span className="ml-1">NGN {Number(p.price||0).toLocaleString()}</span></div>
            </div>
          </div>
        ))}
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {nextCursor && (
        <div className="mt-6 flex justify-center">
          <button disabled={loading} onClick={loadMore} className="px-4 py-2 border rounded-lg">
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </Layout>
  );
}
