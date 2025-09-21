// src/Pages/SignUp/Form.jsx
import React from "react";
import Layout from "../SignUp/Layout";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../Login/FormComponent";
import { useAuth } from "@/context/AuthContext";

/** Split a full name into first & last (last falls back to "-") */
function splitFullName(fullName = "") {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const firstName = parts.shift() || "";
  const lastName = parts.length ? parts.join(" ") : "-";
  return { firstName, lastName };
}

const Form = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const Formfields = [
    { label: "Name", type: "text", placeholder: "Enter full name", name: "name" },
    { label: "Email address", type: "email", placeholder: "Enter email address", name: "email" },
    { label: "Phone Number", type: "text", placeholder: "Enter Phone Number", name: "phone" },
    { label: "Password", type: "password", placeholder: "Enter password", icon: <IoEye />, name: "password" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm Password", icon: <IoEye />, name: "confirm" },
  ];

  async function handleSubmit(form) {
  if (!form.name?.trim()) throw new Error("Please enter your full name");
  if (form.password !== form.confirm) throw new Error("Passwords do not match");

  const { firstName, lastName } = splitFullName(form.name);

  // Get the user’s selected sign-up options from localStorage
  const signupOptions = JSON.parse(localStorage.getItem("signupOptions")) || [];

  // Calls POST /auth/register and stores tokens via context
  await register({
    firstName,
    lastName,
    email: form.email,
    phone: form.phone,
    password: form.password,
    signupOptions, // <-- pass it along to backend (or save in DB)
  });

  // Clear the saved options so they don’t persist forever
  localStorage.removeItem("signupOptions");

  // Proceed to business details step
  navigate("/BusinessDetails");
}

  return (
    <div>
      <Layout>
        <p className="text-end -mt-5">
          Already have an account? <Link to="/Login">Sign In</Link>
        </p>

        <FormComponent
          heading="Sign Up"
          text="Create an account to start using AiPAy"
          fields={Formfields}
          submitText="Sign Up"
          onSubmit={(f) => handleSubmit(f).catch((e) => alert(e.message))}
        />
        {/* Social auth buttons (optional) can remain below */}
      </Layout>
    </div>
  );
};

export default Form;
