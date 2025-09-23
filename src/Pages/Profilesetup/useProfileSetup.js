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

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const p = (await getProfile()) || EMPTY;
      setProfile({ ...EMPTY, ...p });
      const s = await getAccountStatus();
      setStatus(s);
    } finally {
      setLoading(false);
    }
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
            : Array.isArray(value)
            ? value
            : [];
      } else {
        next[group][name] = value;
      }
      return next;
    });
  }, []);

  const saveProfileNow = useCallback(async () => {
    setLoading(true);
    try {
      const saved = await apiSaveProfile(profile);
      setProfile(saved);
      return saved;
    } finally {
      setLoading(false);
    }
  }, [profile]);

  // Persist logo immediately to avoid race
  const uploadLogoFile = useCallback(async (file) => {
    setLogoUploading(true);
    try {
      const url = await uploadLogo(file);
      const merged = { ...profile, logoUrl: url };
      const saved = await apiSaveProfile(merged);
      setProfile(saved);
      return url;
    } finally {
      setLogoUploading(false);
    }
  }, [profile]);

  const startManualPayment = useCallback(async () => {
    const init = await initiatePayment("manual", status?.payment?.amount);
    setStatus((s) => ({ ...s, payment: { ...s.payment, reference: init.reference } }));
    setBankInfo(init.bankTransfer || null);
    return init;
  }, [status?.payment?.amount]);

  const confirmManual = useCallback(async ({ payerAccountName, bank, amount }) => {
    return await confirmTransfer({
      reference: status?.payment?.reference,
      payerAccountName, bank, amount,
    });
  }, [status?.payment?.reference]);

  const reloadStatus = useCallback(async () => {
    const s = await getAccountStatus();
    setStatus(s);
    return s;
  }, []);

  const submitNow = useCallback(async () => {
    const p = await submitProfile();
    setProfile(p);
    return p;
  }, []);

  const pollStatus = useCallback((ms = 5000) => {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      const s = await getAccountStatus();
      setStatus(s);
      if (["approved","rejected"].includes(s.review?.state)) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    }, ms);
  }, []);

  return {
    loading, profile, status, bankInfo, logoUploading,
    updateField, saveProfileNow, uploadLogoFile,
    startManualPayment, confirmManual, pollStatus,
    reload: load, reloadStatus, submitNow,
  };
}
