// src/profileSetup/useProfileSetup.js
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getProfile,
  saveProfile as apiSaveProfile,
  uploadLogo,
  initiatePayment,
  confirmTransfer,
  getAccountStatus,
  submitProfile,
} from "@/lib/aipay";

const EMPTY = {
  general:   { registrationName: "", idNumber: "", email: "", phone: "", socialHandles: [] },
  location:  { street: "", city: "", country: "" },
  financial: { accountName: "", bankName: "", accountNumber: "" },
  business:  { industry: "", productType: "", description: "" },
  logoUrl: "",
};

const ALLOWED_TOP = new Set(["general", "location", "financial", "business", "logoUrl"]);

function pickAllowed(doc = {}) {
  const out = {};
  for (const k of ALLOWED_TOP) if (doc[k] !== undefined) out[k] = doc[k];
  return {
    ...EMPTY,
    ...out,
    general:   { ...EMPTY.general,   ...(out.general   || {}) },
    location:  { ...EMPTY.location,  ...(out.location  || {}) },
    financial: { ...EMPTY.financial, ...(out.financial || {}) },
    business:  { ...EMPTY.business,  ...(out.business  || {}) },
  };
}

function scrubEmpties(obj) {
  if (!obj || typeof obj !== "object") return;
  Object.keys(obj).forEach((k) => {
    const v = obj[k];
    if (v && typeof v === "object") { scrubEmpties(v); return; }
    if (v === "" || v === null) delete obj[k];
  });
}

function sanitizeForSave(p) {
  const base = pickAllowed(p);
  const clone = JSON.parse(JSON.stringify(base));
  if (clone?.general?.socialHandles && typeof clone.general.socialHandles === "string") {
    clone.general.socialHandles = clone.general.socialHandles
      .split(",").map((s) => s.trim()).filter(Boolean);
  }
  scrubEmpties(clone);
  if (!clone.logoUrl) delete clone.logoUrl;
  return clone;
}

export default function useProfileSetup() {
  const [profile, setProfile] = useState(EMPTY);
  const [status, setStatus] = useState({
    review: { state: "draft" },
    payment: { paid: false, amount: 10000, reference: null },
  });
  const [loading, setLoading] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);
  const [bankInfo, setBankInfo] = useState(null);

  const pollRef = useRef(null);
  const autoSubmittedRef = useRef(false); // prevent duplicate auto-submits

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const p = (await getProfile()) || EMPTY;
      setProfile(pickAllowed(p));
      const s = await getAccountStatus();
      setStatus(s);
    } finally { setLoading(false); }
  }, []);

  const reloadStatus = useCallback(async () => {
    const s = await getAccountStatus();
    setStatus(s);
    return s;
  }, []);

  useEffect(() => {
    load();
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [load]);

  const updateField = useCallback((group, name, value) => {
    setProfile((prev) => {
      const next = structuredClone(prev);
      if (group === "general" && name === "socialHandles") {
        next.general.socialHandles =
          typeof value === "string"
            ? value.split(",").map((s) => s.trim()).filter(Boolean)
            : Array.isArray(value) ? value : [];
      } else {
        next[group][name] = value;
      }
      return next;
    });
  }, []);

  const saveProfileNow = useCallback(async () => {
    setLoading(true);
    try {
      const payload = sanitizeForSave(profile);
      const saved = await apiSaveProfile(payload);
      // server may add fields we don't accept back into doc; normalize again
      setProfile(pickAllowed(saved));
      return saved;
    } finally { setLoading(false); }
  }, [profile]);

  const uploadLogoFile = useCallback(async (file) => {
    setLogoUploading(true);
    try {
      const url = await uploadLogo(file);
      const merged = { ...profile, logoUrl: url };
      const saved = await apiSaveProfile(sanitizeForSave(merged));
      setProfile(pickAllowed(saved));
      return url;
    } finally { setLogoUploading(false); }
  }, [profile]);

  const startManualPayment = useCallback(async () => {
    const init = await initiatePayment("manual", status?.payment?.amount);
    setStatus((s) => ({ ...s, payment: { ...s.payment, reference: init.reference } }));
    setBankInfo(init.bankTransfer || null);
    return init;
  }, [status?.payment?.amount]);

  const confirmManual = useCallback(async ({ payerAccountName, bank, amount }) => {
    return await confirmTransfer({
      reference: status?.payment?.reference, payerAccountName, bank, amount,
    });
  }, [status?.payment?.reference]);

  const pollStatus = useCallback((ms = 5000) => {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      const s = await getAccountStatus();
      setStatus(s);

      // ⛳ auto-submit exactly once when payment is confirmed
      if (
        s?.payment?.paid &&
        !autoSubmittedRef.current &&
        !["under_review", "approved"].includes(s?.review?.state)
      ) {
        try {
          autoSubmittedRef.current = true;
          const p = await submitProfile();
          setStatus((prev) => ({ ...prev, review: { state: p?.status || "under_review" } }));
        } catch {
          autoSubmittedRef.current = false; // let next poll try again
        }
      }

      if (["approved", "rejected"].includes(s.review?.state)) {
        clearInterval(pollRef.current); pollRef.current = null;
      }
    }, ms);
  }, []);

  const submitNow = useCallback(async () => {
    const p = await submitProfile();
    setStatus((s) => ({ ...s, review: { ...s.review, state: p?.status || "submitted" } }));
    return p;
  }, []);

  return {
    loading, profile, status, bankInfo, logoUploading,
    updateField, saveProfileNow, uploadLogoFile,
    startManualPayment, confirmManual, pollStatus,
    reload: load, reloadStatus, submitNow,
  };
}
