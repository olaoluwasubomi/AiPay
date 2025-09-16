// ForgotPassword.jsx
import React from "react";
import BackgroundImage from "./BackgroundImage";
import FormComponent from "./FormComponent";
import Backbutton from "./Backbutton";
import { Link, useNavigate } from "react-router-dom";
import { post } from "@/lib/api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const PasswordFields = [{ label: "Email address", type: "email", placeholder: "Enter your email", name: "email" }];

  async function handleSubmit(form) {
    await post("/auth/forgotpassword", { email: form.email });
    // go to verification screen and carry email along
    navigate("/EmailVerification", { state: { email: form.email } });
  }

  return (
    <div className="flex ...">
      <div className="2xl:w-1/2 ..."><BackgroundImage /></div>
      <div className="2xl:w-1/2 ...">
        <Backbutton />
        <div className="mt-28">
          <FormComponent
            heading="Forgot Password?"
            text="Enter your registered email. A code will be sent to reset your password."
            fields={PasswordFields}
            submitText="Send"
            onSubmit={(f) => handleSubmit(f).catch((e) => alert(e.message))}
          />
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
