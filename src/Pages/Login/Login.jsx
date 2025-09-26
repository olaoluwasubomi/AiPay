import React from "react";
import FormComponent from "./FormComponent";
import BackgroundImage from "./BackgroundImage";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { post, apiGet } from "@/lib/api";

const Login = () => {
  const navigate = useNavigate();

  const LoginFields = [
    { label: "Email address", type: "email", placeholder: "Enter your email", name: "email" },
    { label: "Password", type: "password", placeholder: "Enter Password", icon: <IoEye />, name: "password" },
  ];

  async function handleLogin(form) {
    try {
      const data = await post("/auth/login", { email: form.email, password: form.password });

      // persist tokens
      localStorage.setItem("aipay_access", data.accessToken);
      localStorage.setItem("aipay_refresh", data.refreshToken);

      // get user + account status to decide destination
      const [me, status] = await Promise.all([
        apiGet("/user/me"),
        apiGet("/user/me/account-status"),
      ]);

      if (me?.role === "admin") {
        navigate("/admin", { replace: true });
        return;
      }

      // Approved or already merchant => dashboard gate (it will show live)
      if (me?.role === "merchant" || status?.review?.state === "approved") {
        navigate("/dashboard", { replace: true });
        return;
      }

      // Under review => dashboard gate (it will show the waiting shell)
      if (status?.review?.state === "submitted" || status?.review?.state === "under_review") {
        navigate("/dashboard", { replace: true }); // ✅ unified gate
        return;
      }

      // Otherwise continue profile setup
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
          Don&apos;t have an account?
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
