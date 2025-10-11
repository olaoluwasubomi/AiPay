// src/pages/Dashboard.jsx
import React from "react";
import Layout from "../Layout/Layout";
import Heading from "./Heading";
import { LuWalletCards, LuUsers } from "react-icons/lu";
import useMerchantDashboard from "@/hooks/useMerchantDashboard";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";

const currency = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

const StatCard = ({ icon, title, value, pct, delta }) => (
  <div className="bg-white w-[49%] mt-10 flex items-start px-5 py-5 justify-between flex-col rounded-xl shadow-xl">
    <div className="flex items-center justify-start w-full">
      <div className="p-3 bg-iconcolor rounded-full text-textcolor">{icon}</div>
      <div className="px-8">
        <p className="text-lg font-bold">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
    <div className="flex items-center justify-start w-full mt-4 text-sm">
      <p className="font-bold">{pct.toFixed(2)}%</p>
      <p className="px-8 font-bold">
        {delta > 0 ? `+${delta}` : delta} this month
      </p>
    </div>
  </div>
);

const OrderList = ({ heading, buttonText = "See more", items = [] }) => (
  <div className="bg-white rounded-xl shadow-xl w-[49%] py-5 px-5 mt-10">
    <div className="flex items-center justify-between w-full mb-3">
      <h3 className="font-semibold">{heading}</h3>
      <a href="#" className="text-blue-600 hover:underline">
        {buttonText}
      </a>
    </div>
    <ul className="space-y-3">
      {items.length === 0 && (
        <li className="text-sm text-gray-500">No orders yet</li>
      )}
      {items.map((o) => (
        <li
          key={o._id || `${o.orderId}_${o.createdAt}`}
          className="list-none"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start">
              <img
                src={o.icon || "/images/Group 57 (2).png"}
                alt=""
                className="w-8 h-8 object-contain"
              />
              <div className="px-3">
                <h4 className="font-semibold">
                  {o.name || o.productName || "Order"}
                </h4>
                <p className="text-xs text-gray-500">
                  OrderId: {o.orderId || o._id}
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">
                {currency.format(o.amount || 0)}
              </h4>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default function Dashboard() {
  const { user } = useAuth();
  const { loading, error, stats, orders, refresh } = useMerchantDashboard({
    pollMs: 30000,
  });

  return (
    <Layout>
      <Heading
        header={`Welcome ${user?.firstName || ""}`}
        text="Look at what is happening with your business"
      />

      <div className="flex items-start justify-between w-full px-5 mt-5">
        {/* Left column */}
        <div className="flex items-center justify-between w-[49%] flex-wrap">
          {/* Stats */}
          <StatCard
            icon={<LuWalletCards className="text-2xl" />}
            title="Total Balance"
            value={currency.format(stats.totalBalance)}
            pct={stats.balancePct}
            delta={stats.balanceDelta}
          />
          <StatCard
            icon={<LuUsers className="text-2xl" />}
            title="Total Visitors"
            value={(stats.totalVisitors || 0).toLocaleString()}
            pct={stats.visitorsPct}
            delta={stats.visitorsDelta}
          />

          {/* Orders */}
          <OrderList heading="Orders Ready" items={orders.ready} />
          <OrderList heading="Order Processing" items={orders.processing} />
          <OrderList heading="Ready to Ship" items={orders.ready_to_ship} />
          <OrderList heading="Orders Shipped" items={orders.shipped} />

          {/* Fallback panel */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded w-full mt-10">
              <p className="font-semibold">Failed to load dashboard</p>
              <p className="text-sm mt-1">{error}</p>
              <button
                onClick={refresh}
                className="mt-3 px-3 py-1 rounded bg-red-600 text-white"
              >
                Retry
              </button>
            </div>
          )}
        </div>

        {/* Right column (charts area) */}
        <div className="flex items-center justify-between flex-col w-[49%]">
          <div className="bg-white p-6 h-52 w-full mt-10 rounded-xl shadow-xl">
            <p className="text-sm text-gray-500">Traffic chart placeholder</p>
          </div>
          <div className="bg-white p-6 h-52 w-full mt-10 rounded-xl shadow-xl">
            <p className="text-sm text-gray-500">Sales chart placeholder</p>
          </div>
          <div className="bg-white p-6 h-52 w-full mt-10 rounded-xl shadow-xl">
            <p className="text-sm text-gray-500">Conversion chart placeholder</p>
          </div>
        </div>
      </div>

      {/* Professional fullscreen loader */}
      {loading && <Loader fullscreen text="Fetching dashboard data..." />}
    </Layout>
  );
}
