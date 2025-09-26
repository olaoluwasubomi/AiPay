// src/pages/DashboardLive.jsx
import React from "react";
import Layout from "../Layout/Layout";
import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function DashboardLive() {
  return (
    <Layout>
      <Heading header="You are now live" text="Time to upload your products" />
      <div className="w-11/12 mx-auto my-10 mb-12 py-20 bg-white rounded-xl shadow">
        <img src="/images/empty_state 1.png" className="w-28 mx-auto" alt="" />
        <h4 className="mx-auto text-center font-bold text-2xl mt-4">You are now live</h4>
        <p className="mx-auto text-center md:w-1/2 mt-2 text-sm">
          Go on to upload your goods to your store.
        </p>
        <Link to="/products/new" className="block md:w-1/6 w-1/2 mx-auto mt-5 text-center loginbg py-3 text-white rounded-xl font-bold">
          Add Product
        </Link>
      </div>
    </Layout>
  );
}
