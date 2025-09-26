import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Heading from "../Dashboard/Heading";
import useProductForm from "@/hooks/useProductForm";

export default function ProductForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const nav = useNavigate();
  const { data, set, loading, saving, error, save, uploadImage } = useProductForm(id);

  const onSubmit = async (e) => {
    e.preventDefault();
    const product = await save();
    if (!isEdit && product?._id) nav(`/products/${product._id}/edit`);
  };

  return (
    <Layout>
      <Heading header="Market Place" text="Look at what is happening with your business" />
      <div className="flex items-center justify-between mt-4">
        <button className="px-5 py-2 border rounded-lg" onClick={()=>nav(-1)}>Cancel</button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg" onClick={onSubmit} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <form onSubmit={onSubmit} className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">{isEdit ? "Edit Product Details" : "Add Product"}</h3>

          <label className="block mt-4 text-sm">Name of product</label>
          <input className="w-full border rounded-lg px-3 py-2" value={data.name} onChange={(e)=>set("name", e.target.value)} required />

          <label className="block mt-4 text-sm">Price of product (NGN)</label>
          <input type="number" className="w-full border rounded-lg px-3 py-2" value={data.price} onChange={(e)=>set("price", e.target.value)} min={0} required />

          <label className="block mt-4 text-sm">No. of items available</label>
          <input type="number" className="w-full border rounded-lg px-3 py-2" value={data.quantity} onChange={(e)=>set("quantity", e.target.value)} min={0} />

          <label className="block mt-4 text-sm">Delivery channel</label>
          <input className="w-full border rounded-lg px-3 py-2" value={data.deliveryCity} onChange={(e)=>set("deliveryCity", e.target.value)} placeholder="Lagos, Nigeria" />

          <label className="block mt-4 text-sm">Indicate additional cost (NGN)</label>
          <input type="number" className="w-full border rounded-lg px-3 py-2" value={data.extraCost} onChange={(e)=>set("extraCost", e.target.value)} min={0} />

          <label className="block mt-4 text-sm">Description of product</label>
          <textarea className="w-full border rounded-lg px-3 py-2" rows={4} value={data.description} onChange={(e)=>set("description", e.target.value)} />

          {error && <p className="text-red-600 mt-3">{error}</p>}
        </form>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">{isEdit ? "Change Product Image" : "Upload Product Image"}</h3>
          <div className="border border-dashed rounded-xl mt-4 p-4 text-center">
            {data.imageUrl ? (
              <img src={data.imageUrl} alt="preview" className="mx-auto max-h-64 object-contain" />
            ) : (
              <img src="/images/empty_state 1.png" alt="" className="w-20 mx-auto opacity-60" />
            )}
            <p className="text-xs mt-2 text-gray-500">JPG or PNG smaller than 10MB</p>
            <label className={`inline-block mt-4 px-4 py-2 rounded-lg text-white ${!isEdit ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 cursor-pointer"}`}>
              Choose file
              <input type="file" accept="image/*" className="hidden"
                disabled={!isEdit}
                onChange={async (e)=> e.target.files?.[0] && await uploadImage(e.target.files[0])}
              />
            </label>
            {!isEdit && <p className="text-xs mt-2 text-gray-500">Save product first, then upload image.</p>}
          </div>
        </div>
      </div>
      {loading && <div className="mt-4">Loading…</div>}
    </Layout>
  );
}
