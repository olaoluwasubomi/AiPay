// PasswordReset.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundImage from "./BackgroundImage";
import FormComponent from "./FormComponent";
import Backbutton from "./Backbutton";
import { IoEye } from "react-icons/io5";
import { post } from "@/lib/api";

const PasswordReset = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;
  const code = state?.code;

  const PasswordResetFields = [
    { label: "New Password", type: "password", placeholder: "Enter Password", icon: <IoEye />, name: "password" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm Password", icon: <IoEye />, name: "confirm" },
  ];

  async function handleReset(form) {
    if (form.password !== form.confirm) throw new Error("Passwords do not match");
    if (!email || !code) throw new Error("Missing verification context");
    await post("/auth/resetpassword", { email, code, newPassword: form.password });
    setIsModalVisible(true);
  }

  useEffect(() => {
    if (!isModalVisible) return;
    const t1 = setInterval(() => setCountdown((c) => c - 1), 1000);
    const t2 = setTimeout(() => navigate("/Login"), 5000);
    return () => { clearInterval(t1); clearTimeout(t2); };
  }, [isModalVisible, navigate]);

  return (
    <div className="flex ...">
      <div className="2xl:w-1/2 ..."><BackgroundImage /></div>
      <div className="2xl:w-1/2 ...">
        <Backbutton />
        <div className="mt-28">
          <FormComponent
            heading="Password Reset"
            text="Create a new password to secure your account"
            fields={PasswordResetFields}
            submitText="Reset"
            onSubmit={(f) => handleReset(f).catch((e) => alert(e.message))}
          />
        </div>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 ...">
          {/* Success modal */}
          <button className="block w-1/2 loginbg py-4 ..." onClick={() => navigate("/Login")}>
            Redirecting in {countdown} secs
          </button>
        </div>
      )}
    </div>
  );
};
export default PasswordReset;
