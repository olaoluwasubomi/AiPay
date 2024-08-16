import React from "react";
import { Routes , Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import EmailVerification from "../Pages/Login/EmailVerification";
import PasswordReset from "../Pages/Login/PasswordReset";
import SignUp from "../Pages/SignUp/SignUp";
import Form from "../Pages/SignUp/Form";
import BusinessDetails from "../Pages/SignUp/BusinessDetails";
import Index from "../LandingPage/Index";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route name="Login" path="/" element={<Login />} />
            <Route name="Password" path="/ForgotPassword" element={<ForgotPassword />} />
            <Route name="EmailVerification" path="/EmailVerification" element={<EmailVerification />} />
            <Route name="PasswordReset" path="/PasswordReset" element={<PasswordReset />} />
            <Route name="SignUp" path="/SignUp" element={<SignUp />} />
            <Route name="Form" path="/Form" element={<Form />} />
            <Route name="BusinessDetails" path="/BusinessDetails" element={<BusinessDetails />} />
            <Route name="Index" path="/Index" element={<Index />} />

        </Routes>
    )
}
export default AppRoutes;