import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import BackgroundImage from "./BackgroundImage";
import { post, apiGet } from "@/lib/api";
import Loader from "@/components/Loader"; // ✅ Import Loader

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    if (submitting) return;
    setError("");
    setSubmitting(true);

    try {
      const data = await post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("aipay_access", data.accessToken);
      localStorage.setItem("aipay_refresh", data.refreshToken);

      const [me, status] = await Promise.all([
        apiGet("/user/me"),
        apiGet("/user/me/account-status"),
      ]);

      if (me?.role === "admin") {
        navigate("/admin", { replace: true });
        return;
      }
      if (me?.role === "merchant" || status?.review?.state === "approved") {
        navigate("/dashboard", { replace: true });
        return;
      }
      if (
        status?.review?.state === "submitted" ||
        status?.review?.state === "under_review"
      ) {
        navigate("/dashboard", { replace: true });
        return;
      }
      navigate("/Profile", { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ✅ Show fullscreen loader during login */}
      {submitting && <Loader fullscreen text="Logging you in..." />}

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: brand/graphic */}
        <div className="hidden lg:block">
          <BackgroundImage />
        </div>

        {/* Right: form */}
        <div className="flex min-h-screen w-full items-center justify-center px-6 py-10">
          <div className="w-full max-w-[560px]">
            {/* Top helper row */}
            <div className="mb-8 flex justify-end text-sm">
              <span className="text-slate-500">Don’t have an account? </span>
              <Link
                to="/SignUp"
                className="ml-2 font-semibold text-[#1d56b3] hover:underline"
              >
                Sign Up
              </Link>
            </div>

            <h1 className="text-3xl font-bold text-slate-900">Login</h1>
            <p className="mt-2 text-slate-500">Login to continue using AiPay</p>

            <form className="mt-8 space-y-5" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#1d56b3]"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  autoComplete="email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    required
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 pr-12 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#1d56b3]"
                    value={form.password}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, password: e.target.value }))
                    }
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {showPw ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                  </button>
                </div>

                <div className="mt-2 text-right">
                  <Link
                    to="/ForgotPassword"
                    className="text-sm font-medium text-[#1d56b3] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="mt-1 w-full rounded-xl bg-[#1d56b3] py-3.5 text-center text-sm font-semibold text-white shadow hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="mx-3 text-xs uppercase tracking-wide text-slate-400">
                or
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social / SSO buttons */}
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt=""
                  className="h-5 w-5"
                />
                Log in with Facebook
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt=""
                  className="h-5 w-5"
                />
                Log in with Google
              </button>
            </div>

            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M7 12h10M12 7v10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              Log in with Company Domain Name
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
