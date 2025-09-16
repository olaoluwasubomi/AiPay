// EmailVerification.jsx
import React from "react";
import BackgroundImage from "./BackgroundImage";
import FormComponent from "./FormComponent";
import Backbutton from "./Backbutton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { post } from "@/lib/api";

const EmailVerification = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const email = state?.email; // from previous step

  const EmailVerificationFields = [
    { label: "Verification Code", placeholder: "Enter Code", type: "number", name: "code" },
  ];

  async function handleVerify(form) {
    if (!email) throw new Error("Missing email context");
    await post("/auth/verify-reset-code", { email, code: String(form.code) });
    navigate("/PasswordReset", { state: { email, code: String(form.code) } });
  }

  return (
    <div className="flex ...">
      <div className="2xl:w-1/2 ..."><BackgroundImage /></div>
      <div className="2xl:w-1/2 ...">
        <Backbutton />
        <div className="mt-28">
          <FormComponent
            heading="Email Verification"
            text="Enter the 6-digit code sent to your email."
            fields={EmailVerificationFields}
            submitText="Verify Code"
            onSubmit={(f) => handleVerify(f).catch((e) => alert(e.message))}
          />
          <a className="flex items-center justify-end ... signup ..." href="#">Resend Code</a>
        </div>
      </div>
    </div>
  );
};
export default EmailVerification;
