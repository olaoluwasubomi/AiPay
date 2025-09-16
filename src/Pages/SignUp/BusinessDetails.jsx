// BusinessDetails.jsx
import React, { useState } from "react";
import Layout from "./Layout";
import FormComponent from "../Login/FormComponent";
import Backbutton from "../Login/Backbutton";
import { Link, useNavigate } from "react-router-dom";
import { post } from "@/lib/api";

const BusinessDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const BusinessFields = [
    { label: "Business name", placeholder: "Enter Business name", type: "text", name: "name" },
    { label: "Industry", placeholder: "Select Industry", type: "select", name: "industry" },
    { label: "About Business", placeholder: "Describe your business", type: "textarea", name: "about" },
  ];

  async function handleBusiness(form) {
    const token = localStorage.getItem("aipay_access");
    await post("/user/business", { name: form.name, industry: form.industry, about: form.about }, token);
    setIsModalVisible(true);
  }

  return (
    <div>
      <Layout>
        <div>
          <Backbutton />
          <p className="text-end">Already have an account? <Link to="/Login">Sign In</Link></p>
        </div>

        <FormComponent
          heading="Sign Up"
          text="Provide your business details"
          fields={BusinessFields}
          submitText="Continue"
          onSubmit={(f) => handleBusiness(f).catch((e) => alert(e.message))}
        />
      </Layout>

      {isModalVisible && (
        <div className="fixed inset-0 ...">
          {/* your modal content */}
          <Link className="block ... loginbg ..." to="/Login" onClick={() => setIsModalVisible(false)}>
            Proceed
          </Link>
        </div>
      )}
    </div>
  );
};
export default BusinessDetails;
