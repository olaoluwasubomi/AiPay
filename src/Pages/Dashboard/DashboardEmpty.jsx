// src/pages/DashboardEmpty.jsx
import React from "react";
import Navigation from "../Dashboard/Navigation";
import Heading from "./Heading";

export default function DashboardEmpty() {
  return (
    <div className="min-h-screen bg-bankbg flex justify-between items-start">
      <Navigation />
      <div className="w-4/5">
        <Heading header="Welcome" text="Look at what is happening with your business" />
        <div className="w-11/12 mx-auto my-10 mb-12 py-20 bg-white rounded-xl shadow">
          <img src="/images/empty_state 1.png" className="w-28 mx-auto" alt="" />
          <h4 className="mx-auto text-center font-bold text-2xl mt-4">Your account is under review</h4>
          <p className="mx-auto text-center md:w-1/2 mt-2 text-sm">
            We’re setting up your store. You’ll be redirected to your dashboard as soon as approval is complete.
          </p>
        </div>
      </div>
    </div>
  );
}
