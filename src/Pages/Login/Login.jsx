// src/pages/Login.jsx
import React from "react";
import FormComponent from "./FormComponent";
import BackgroundImage from "./BackgroundImage";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { post, apiGet } from "@/lib/api"; // <-- add apiGet

const Login = () => {
  const navigate = useNavigate();

  const LoginFields = [
    { label: "Email address", type: "email", placeholder: "Enter your email", name: "email" },
    { label: "Password", type: "password", placeholder: "Enter Password", icon: <IoEye />, name: "password" },
  ];

  async function handleLogin(form) {
    try {
      const data = await post("/auth/login", { email: form.email, password: form.password });

      // store tokens so subsequent calls include Authorization
      localStorage.setItem("aipay_access", data.accessToken);
      localStorage.setItem("aipay_refresh", data.refreshToken);

      // fetch user + account status to decide where to go
      const [me, status] = await Promise.all([
        apiGet("/user/me"),
        apiGet("/user/me/account-status"),
      ]);

      if (me?.role === "admin") {
        navigate("/admin", { replace: true });
        return;
      }

      if (me?.role === "merchant" || status?.review?.state === "approved") {
        navigate("/DashboardEmpty", { replace: true }); // merchant dashboard / add product
        return;
      }

      if (status?.review?.state === "submitted" || status?.review?.state === "under_review") {
        navigate("/ProfileDashboard", { replace: true }); // under-review screen
        return;
      }

      // default: start/continue profile setup
      navigate("/Profile", { replace: true });
    } catch (e) {
      console.error(e);
      alert(e?.message || "Login failed");
    }
  }

  return (
    <div className="flex ...">
      <div className="2xl:w-1/2 ...">
        <BackgroundImage />
      </div>

      <div className="2xl:w-1/2 ...">
        <p className="logocolor ...">
          Don't have an account?
          <Link to="/SignUp" className="...">Sign Up</Link>
        </p>

        <FormComponent
          heading="Login"
          text="Login to continue using AiPay"
          fields={LoginFields}
          submitText="Login"
          onSubmit={(f) => handleLogin(f)}
        />

        <Link className="flex items-center justify-end ... signup ..." to="/ForgotPassword">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
