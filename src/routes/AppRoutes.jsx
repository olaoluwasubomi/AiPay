import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../Pages/Login/Login";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import EmailVerification from "../Pages/Login/EmailVerification";
import PasswordReset from "../Pages/Login/PasswordReset";
import SignUp from "../Pages/SignUp/SignUp";
import Form from "../Pages/SignUp/Form";
import BusinessDetails from "../Pages/SignUp/BusinessDetails";
import Index from "../Pages/LandingPage/Index";

import Profile from "../Pages/Profilesetup/Profile";
import ProfileDashboard from "../Pages/Profilesetup/ProfileDashboard";
import AccountReview from "../Pages/Profilesetup/AccountReview";
import DashboardGate from "../Pages/Dashboard/DashboardGate";
import DashboardLive from "../Pages/Dashboard/DashboardLive";

import ProductsIndex from "../Pages/Products/ProductsIndex";
import ProductForm from "../Pages/Products/ProductForm";
import Sales from "../Pages/Sales/Sales";
import Notifications from "../Pages/Notifications/Notifications";
import ProfileVerified from "../Pages/Profilesetup/ProfileVerified";

// Buyer
import ProductSales from "../Pages/Buyer/ProductSales";
import BuyerDashboard from "../Pages/Buyer/Dashboard";
import Checkout from "../Pages/Buyer/Checkout";

// TPP (Third-Party Payments)
import TppLayout from "@/Pages/Tpp/Layout";
import TppDashboard from "@/Pages/Tpp/Dashboard";
import TppPaymentHistory from "@/Pages/Tpp/PaymentHistory";
import TppNotifications from "@/Pages/Tpp/Notifications";
import TppProfile from "@/Pages/Tpp/Profile";
import TppSettings from "@/Pages/Tpp/Settings";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />

    {/* Auth */}
    <Route path="/Login" element={<Login />} />
    <Route path="/ForgotPassword" element={<ForgotPassword />} />
    <Route path="/EmailVerification" element={<EmailVerification />} />
    <Route path="/PasswordReset" element={<PasswordReset />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Form" element={<Form />} />
    <Route path="/BusinessDetails" element={<BusinessDetails />} />

    {/* Profile / setup */}
    <Route path="/Profile" element={<Profile />} />
    <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
    <Route path="/AccountReview" element={<AccountReview />} />

    {/* Dashboard gate */}
    <Route path="/dashboard" element={<DashboardGate />} />
    <Route path="/DashboardLive" element={<DashboardLive />} />

    {/* Merchant area */}
    <Route path="/products" element={<ProductsIndex />} />
    <Route path="/products/new" element={<ProductForm />} />
    <Route path="/products/:id/edit" element={<ProductForm />} />
    <Route path="/sales" element={<Sales />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/account" element={<ProfileVerified />} />

    {/* Buyer */}
    <Route path="/Buyer/ProductSales" element={<ProductSales />} />
    <Route path="/buyer/products" element={<ProductSales />} />
    <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
    <Route path="/buyer/checkout" element={<Checkout />} />

    {/* Buyer redirects */}
    <Route path="/Buyer/checkout" element={<Navigate to="/buyer/checkout" replace />} />
    <Route path="/Buyer/dashboard" element={<Navigate to="/buyer/dashboard" replace />} />
    <Route path="/Buyer/products" element={<Navigate to="/buyer/products" replace />} />

    {/* TPP (nest children under the layout) */}
    <Route path="/tpp" element={<TppLayout />}>
      {/* redirect /tpp -> /tpp/dashboard */}
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<TppDashboard />} />
      <Route path="payments" element={<TppPaymentHistory />} />
      <Route path="notifications" element={<TppNotifications />} />
      <Route path="profile" element={<TppProfile />} />
      <Route path="settings" element={<TppSettings />} />
    </Route>

    {/* Legacy path safe-guard */}
    <Route path="/DashboardEmpty" element={<Navigate to="/dashboard" replace />} />

    {/* Optional 404 */}
    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
  </Routes>
);

export default AppRoutes;
