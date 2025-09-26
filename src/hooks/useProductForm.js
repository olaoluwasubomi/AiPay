import { useCallback, useEffect, useState } from "react";
import { createProduct, getProduct, updateProduct, uploadProductImage } from "@/lib/products";

const EMPTY = {
  name: "", price: "", quantity: 0, deliveryCity: "",
  extraCost: 0, description: "", category: "General", imageUrl: ""
};

export default function useProductForm(productId) {
  const [data, setData] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      if (!productId) return;
      setLoading(true); setErr("");
      try { const { product } = await getProduct(productId); setData({ ...EMPTY, ...product }); }
      catch (e) { setErr(e?.message || "Failed to load product"); }
      finally { setLoading(false); }
    })();
  }, [productId]);

  const set = (k, v) => setData((p) => ({ ...p, [k]: v }));

  const save = useCallback(async () => {
    setSaving(true); setErr("");
    try {
      const payload = {
        name: data.name,
        price: Number(data.price || 0),
        quantity: Number(data.quantity || 0),
        deliveryCity: data.deliveryCity,
        extraCost: Number(data.extraCost || 0),
        description: data.description,
        category: data.category,
        imageUrl: data.imageUrl,
      };
      if (productId) {
        const { product } = await updateProduct(productId, payload);
        setData(product);
        return product;
      } else {
        const { product } = await createProduct(payload);
        setData(product);
        return product;
      }
    } catch (e) { setErr(e?.message || "Failed to save product"); throw e; }
    finally { setSaving(false); }
  }, [data, productId]);

  const uploadImage = useCallback(async (file) => {
    if (!productId) throw new Error("Save product first to get ID, then upload image.");
    const url = await uploadProductImage(productId, file);
    set("imageUrl", url);
    return url;
  }, [productId]);

  return { data, set, loading, saving, error: err, save, uploadImage };
}
