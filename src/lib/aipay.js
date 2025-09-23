import { apiGet, apiPut, apiPost, apiUpload } from "@/lib/api";

// PROFILE
export const getProfile   = () => apiGet("/user/me/profile").then(r => r.profile || null);
export const saveProfile  = (payload) => apiPut("/user/me/profile", payload).then(r => r.profile);
export const submitProfile= () => apiPost("/user/me/profile/submit", {}).then(r => r.profile);

// LOGO
export async function uploadLogo(file) {
  const fd = new FormData();
  fd.append("file", file);
  const { url } = await apiUpload("/user/me/profile/logo", fd);
  return url;
}

// PAYMENTS
export const initiatePayment = (channel = "manual", amount) =>
  apiPost("/user/me/payments/initiate", { channel, amount });

export const confirmTransfer = ({ reference, payerAccountName, bank, amount }) =>
  apiPost("/user/me/payments/confirm-transfer", { reference, payerAccountName, bank, amount })
    .then(r => r.transaction);

// STATUS
export const getAccountStatus = () => apiGet("/user/me/account-status");
