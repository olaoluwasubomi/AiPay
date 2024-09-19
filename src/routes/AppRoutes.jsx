import React from "react";
import { Routes , Route } from "react-router-dom";
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
import AccountReview from "../Pages/Profilesetup/AccountReview"

const AppRoutes = () =>{
    return(
        <Routes>
            <Route name="Index" path="/" element={<Index />} />
            <Route name="Password" path="/ForgotPassword" element={<ForgotPassword />} />
            <Route name="EmailVerification" path="/EmailVerification" element={<EmailVerification />} />
            <Route name="PasswordReset" path="/PasswordReset" element={<PasswordReset />} />
            <Route name="SignUp" path="/SignUp" element={<SignUp />} />
            <Route name="Form" path="/Form" element={<Form />} />
            <Route name="BusinessDetails" path="/BusinessDetails" element={<BusinessDetails />} />
            <Route name="Login" path="/Login" element={<Login />} />
            <Route name="Profile" path="/Profile" element={<Profile />} />
            <Route name="ProfileDashboard" path="/ProfileDashboard" element={<ProfileDashboard />} />
            <Route name="AccountReview" path="/AccountReview" element={<AccountReview />} />
        </Routes>
    )
}
export default AppRoutes;