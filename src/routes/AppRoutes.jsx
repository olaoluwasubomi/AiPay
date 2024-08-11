import React from "react";
import { Routes , Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import EmailVerification from "../Pages/Login/EmailVerification";
import PasswordReset from "../Pages/Login/PasswordReset";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route name="Login" path="/" element={<Login />} />
            <Route name="Password" path="/ForgotPassword" element={<ForgotPassword />} />
            <Route name="EmailVerification" path="/EmailVerification" element={<EmailVerification />} />
            <Route name="PasswordReset" path="/PasswordReset" element={<PasswordReset />} />
        </Routes>
    )
}
export default AppRoutes;