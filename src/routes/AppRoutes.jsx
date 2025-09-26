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

import ProductSales from "../Pages/Buyer/ProductSales";
import Cart from "../Pages/Buyer/Cart";
import ProductDetails from "../Pages/Buyer/ProductDetails";

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

    {/* Dashboard gate decides: live vs under-review */}
    <Route path="/dashboard" element={<DashboardGate />} />
    <Route path="/DashboardLive" element={<DashboardLive />} />

    {/* Merchant area */}
    <Route path="/products" element={<ProductsIndex />} />
    <Route path="/products/new" element={<ProductForm />} />
    <Route path="/products/:id/edit" element={<ProductForm />} />
    <Route path="/sales" element={<Sales />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/account" element={<ProfileVerified />} />

    {/* Buyer (existing) */}
    <Route path="/Buyer/ProductSales" element={<ProductSales />} />
    <Route path="/buyer/Cart" element={<Cart />} />
    <Route path="/buyer/ProductDetails" element={<ProductDetails />} />

    {/* Legacy path safe-guard: redirect any old /DashboardEmpty links to the gate */}
    <Route path="/DashboardEmpty" element={<Navigate to="/dashboard" replace />} />
  </Routes>
);

export default AppRoutes;
