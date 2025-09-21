import React, { useState, useEffect } from "react";
import Layout from "../SignUp/Layout";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [selected, setSelected] = useState([]);

  // Load saved selections when component mounts
  useEffect(() => {
    const savedOptions = localStorage.getItem("signupOptions");
    if (savedOptions) {
      setSelected(JSON.parse(savedOptions));
    }
  }, []);

  // Toggle user selection and save to localStorage
  const toggleOption = (option) => {
    setSelected((prev) => {
      const updated =
        prev.includes(option)
          ? prev.filter((o) => o !== option) // remove
          : [...prev, option]; // add
      localStorage.setItem("signupOptions", JSON.stringify(updated));
      return updated;
    });
  };

  const isDisabled = selected.length === 0;

  return (
    <div id="signup">
      <Layout>
        {/* Top Sign-in link */}
        <p className="text-end">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>

        <div className="py-5">
          <h5 className="font-bold text-3xl text-textcolor">
            Join AiPay Today
          </h5>
          <p className="my-2 text-custom-gray 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-full font-medium leading-5">
            Secure payment easily anytime from anywhere, create an e-store in
            just simple steps, buy high quality products, all on AiPay.
          </p>

          {/* Selection area */}
          <div className="2xl:my-20 xl:my-20 lg:my-20 md:my-10 sm:py-5">
            <p className="font-bold text-custom-gray text-xl">
              You want to?
              <span className="block text-sm font-light">
                Please select at least one option
              </span>
            </p>

            <div className="my-5 flex items-start justify-between flex-wrap 2xl:w-9/12 xl:w-9/12 lg:w-9/12 md:w-full sm:w-full gap-4">
              {/* Create a store */}
              <button
                onClick={() => toggleOption("store")}
                className={`2xl:w-5/12 xl:w-5/12 lg:w-5/12 md:w-1/2 sm:w-1/3 font-bold py-4 rounded-full transition-colors ${
                  selected.includes("store")
                    ? "loginbg text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Create a store
              </button>

              {/* Buy products */}
              <button
                onClick={() => toggleOption("buy")}
                className={`2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-1/2 sm:w-2/3 font-bold py-4 rounded-full transition-colors ${
                  selected.includes("buy")
                    ? "loginbg text-white"
                    : "bg-classic text-black hover:bg-gray-300"
                }`}
              >
                Buy high class products
              </button>

              {/* Request payment system */}
              <button
                onClick={() => toggleOption("payment")}
                className={`2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-1/2 sm:w-full font-bold py-4 mt-6 rounded-full transition-colors ${
                  selected.includes("payment")
                    ? "loginbg text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Request a payment system
              </button>
            </div>
          </div>

          {/* Continue button */}
          <Link
            to={isDisabled ? "#" : "/Form"}
            className={`p-3 2xl:w-9/12 xl:w-9/12 lg:w-9/12 md:w-full sm:w-full rounded-xl font-bold text-lg block text-center transition ${
              isDisabled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "loginbg text-white hover:opacity-90"
            }`}
          >
            Continue
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default SignUp;
