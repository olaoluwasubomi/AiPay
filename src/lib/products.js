import { apiGet, apiPost, apiPut, apiDelete, apiUpload } from "@/lib/api";

export const listProducts = (params = {}) => {
  const q = new URLSearchParams(params).toString();
  return apiGet(`/merchant/products${q ? `?${q}` : ""}`);
};

export const getProduct = (id) => apiGet(`/merchant/products/${id}`);

export const createProduct = (payload) => apiPost(`/merchant/products`, payload);

export const updateProduct = (id, payload) => apiPut(`/merchant/products/${id}`, payload);

export const deleteProduct = (id) => apiDelete(`/merchant/products/${id}`);

export async function uploadProductImage(id, file) {
  const fd = new FormData();
  fd.append("file", file);
  const { product } = await apiUpload(`/merchant/products/${id}/image`, fd);
  return product?.imageUrl;
}
