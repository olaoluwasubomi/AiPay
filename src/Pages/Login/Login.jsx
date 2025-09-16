// Login.jsx
import React from "react";
import FormComponent from "./FormComponent";
import BackgroundImage from "./BackgroundImage";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { post } from "@/lib/api";

const Login = () => {
  const navigate = useNavigate();
  const LoginFields = [
    { label: "Email address", type: "email", placeholder: "Enter your email", name: "email" },
    { label: "Password", type: "password", placeholder: "Enter Password", icon: <IoEye />, name: "password" },
  ];

  async function handleLogin(form) {
    const data = await post("/auth/login", { email: form.email, password: form.password });
    localStorage.setItem("aipay_access", data.accessToken);
    localStorage.setItem("aipay_refresh", data.refreshToken);
    navigate("/Profile"); // or /dashboard, etc.
  }

  return (
    <div className="flex ...">
      <div className="2xl:w-1/2 ...">
        <BackgroundImage />
      </div>
      <div className="2xl:w-1/2 ...">
        <p className="logocolor ...">Don't have an account?
          <Link to="/SignUp" className="...">Sign Up</Link>
        </p>

        <FormComponent
          heading="Login"
          text="Login to continue using AiPay"
          fields={LoginFields}
          submitText="Login"
          onSubmit={(f) => handleLogin(f).catch((e) => alert(e.message))}
        />

        <Link className="flex items-center justify-end ... signup ..." to="/ForgotPassword">Forgot Password?</Link>
        {/* keep social buttons section if you like */}
      </div>
    </div>
  );
};
export default Login;
