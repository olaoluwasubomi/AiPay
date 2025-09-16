// routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import EmailVerification from "../Pages/Login/EmailVerification";
import PasswordReset from "../Pages/Login/PasswordReset";
import SignUp from "../Pages/SignUp/SignUp";
import Form from "../Pages/SignUp/Form";
import BusinessDetails from "../Pages/SignUp/BusinessDetails";
import Index from "../Pages/LandingPage/Index";
import ProfileForm from "../Pages/Profilesetup/ProfileForm";
import Profile from "../Pages/Profilesetup/Profile";
import ProfileDashboard from "../Pages/Profilesetup/ProfileDashboard";
import AccountReview from "../Pages/Profilesetup/AccountReview";
import DashboardEmpty from "../Pages/Dashboard/DashboardEmpty";
import DashboardLive from "../Pages/Dashboard/DashboardLive";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductSales from "../Pages/Buyer/ProductSales";
import Cart from "../Pages/Buyer/Cart";
import ProductDetails from "../Pages/Buyer/ProductDetails";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/ForgotPassword" element={<ForgotPassword />} />
    <Route path="/EmailVerification" element={<EmailVerification />} />
    <Route path="/PasswordReset" element={<PasswordReset />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Form" element={<Form />} />
    <Route path="/BusinessDetails" element={<BusinessDetails />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
    <Route path="/AccountReview" element={<AccountReview />} />
    <Route path="/DashboardEmpty" element={<DashboardEmpty />} />
    <Route path="/DashboardLive" element={<DashboardLive />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/Buyer/ProductSales" element={<ProductSales />} />
    <Route path="/buyer/Cart" element={<Cart />} />
    <Route path="/buyer/ProductDetails" element={<ProductDetails />} />

  </Routes>
);

export default AppRoutes;
