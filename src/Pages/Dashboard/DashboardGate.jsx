// /src/Pages/Dashboard/DashboardGate.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAccountStatus } from "@/lib/aipay";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader"; 
// NOTE: Gate is in /Pages/Dashboard, shells are one level up in /Pages
import DashboardLive from "./DashboardLive";
import DashboardEmpty from "./DashboardEmpty";

const Spinner = ({ text = "Loading dashboard..." }) => (
  <div className="w-full h-[60vh] flex items-center justify-center">
    <Loader text={text} />
  </div>
);

export default function DashboardGate() {
  const [status, setStatus] = useState(null);
  const [err, setErr] = useState("");
  const { user, fetchMe } = useAuth();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const s = await getAccountStatus();
        if (!mounted) return;
        setStatus(s);

        // If server says approved but FE role hasn’t updated yet, refresh user
        if (s?.review?.state === "approved" && user?.role !== "merchant") {
          await fetchMe?.();
        }
      } catch (e) {
        setErr(e?.message || "Failed to load account status");
      }
    })();
    return () => { mounted = false; };
  }, [fetchMe, user?.role]);

  if (err) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-semibold">Error: {err}</p>
        <div className="mt-4"><Spinner /></div>
      </div>
    );
  }

  if (!status) return <Spinner />;

  const review = status?.review?.state;
  const isMerchant = user?.role === "merchant";

  if (review === "approved" && isMerchant) return <DashboardLive />;
  if (review === "under_review" || review === "submitted") return <DashboardEmpty />;

  // draft/rejected/unknown -> back to profile setup
  return <Navigate to="/Profile" replace />;
}
