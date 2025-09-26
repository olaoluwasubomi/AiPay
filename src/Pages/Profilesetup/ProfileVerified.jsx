import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { getProfile } from "@/lib/aipay";
import { Link } from "react-router-dom";

export default function ProfileVerified() {
  const [p, setP] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try { setP(await getProfile()); } catch (e) { setErr(e?.message || "Failed to load profile"); }
    })();
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-500 to-amber-400 rounded-xl text-white p-6 flex items-center justify-between">
        <div className="text-2xl font-semibold">Your account is verified</div>
        <Link className="px-4 py-2 bg-white text-black rounded-lg" to="/Profile">Edit Profile</Link>
      </div>

      {err && <p className="text-red-600 mt-4">{err}</p>}

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">General Information</h3>
          <dl className="text-sm">
            <dt className="text-gray-500">Registration Name</dt><dd className="mb-2">{p?.general?.registrationName || "—"}</dd>
            <dt className="text-gray-500">ID Number</dt><dd className="mb-2">{p?.general?.idNumber || "—"}</dd>
            <dt className="text-gray-500">Email</dt><dd className="mb-2">{p?.general?.email || "—"}</dd>
            <dt className="text-gray-500">Phone</dt><dd className="mb-2">{p?.general?.phone || "—"}</dd>
          </dl>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Location</h3>
          <dl className="text-sm">
            <dt className="text-gray-500">Street</dt><dd className="mb-2">{p?.location?.street || "—"}</dd>
            <dt className="text-gray-500">City</dt><dd className="mb-2">{p?.location?.city || "—"}</dd>
            <dt className="text-gray-500">Country</dt><dd className="mb-2">{p?.location?.country || "—"}</dd>
          </dl>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Financial Information</h3>
          <dl className="text-sm">
            <dt className="text-gray-500">Account Name</dt><dd className="mb-2">{p?.financial?.accountName || "—"}</dd>
            <dt className="text-gray-500">Bank Name</dt><dd className="mb-2">{p?.financial?.bankName || "—"}</dd>
            <dt className="text-gray-500">Account Number</dt><dd className="mb-2">{p?.financial?.accountNumber || "—"}</dd>
          </dl>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">About Business</h3>
          <dl className="text-sm">
            <dt className="text-gray-500">Industry</dt><dd className="mb-2">{p?.business?.industry || "—"}</dd>
            <dt className="text-gray-500">Product Type</dt><dd className="mb-2">{p?.business?.productType || "—"}</dd>
            <dt className="text-gray-500">Description</dt><dd className="mb-2">{p?.business?.description || "—"}</dd>
          </dl>
        </div>
      </div>
    </Layout>
  );
}
