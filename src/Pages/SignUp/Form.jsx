// Form.jsx
import React from "react";
import Layout from "../SignUp/Layout";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../Login/FormComponent";
import { post } from "@/lib/api";

function splitFullName(fullName="") {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts.shift() || "";
  const lastName = parts.length ? parts.join(" ") : "-";
  return { firstName, lastName };
}

const Form = () => {
  const navigate = useNavigate();
  const Formfields = [
    { label: "Name", type: "text", placeholder: "Enter full name", name: "name" },
    { label: "Email address", type: "email", placeholder: "Enter email address", name: "email" },
    { label: "Phone Number", type: "text", placeholder: "Enter Phone Number", name: "phone" },
    { label: "Password", type: "password", placeholder: "Enter password", icon: <IoEye />, name: "password" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm Password", icon: <IoEye />, name: "confirm" },
  ];

  async function handleSubmit(form) {
    if (form.password !== form.confirm) throw new Error("Passwords do not match");
    const { firstName, lastName } = splitFullName(form.name);
    const data = await post("/auth/register", {
      firstName, lastName,
      email: form.email,
      phone: form.phone,
      password: form.password,
      // username: optional
    });
    // store tokens if you need them immediately
    localStorage.setItem("aipay_access", data.accessToken);
    localStorage.setItem("aipay_refresh", data.refreshToken);
    // forward to business details step
    navigate("/BusinessDetails");
  }

  return (
    <div>
      <Layout>
        <p className="text-end -mt-5">Already have an account? <Link to="/Login">Sign In</Link></p>
        <FormComponent
          heading="Sign Up"
          text="Create an account to start using AiPAy"
          fields={Formfields}
          submitText="Sign Up"
          onSubmit={(f) => handleSubmit(f).catch((e) => alert(e.message))}
        />
        {/* Keep your social buttons & extra links below if you want */}
      </Layout>
    </div>
  );
};
export default Form;
