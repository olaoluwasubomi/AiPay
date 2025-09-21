// src/Pages/Login/FormComponent.jsx (or wherever you keep it)
import React, { useMemo, useState } from "react";

const FormComponent = ({
  heading,
  text,
  fields = [],
  onSubmit,
  submitText = "Submit",
}) => {
  // Build initial state from fields
  const initialValues = useMemo(() => {
    const v = {};
    fields.forEach((f) => {
      if (!f?.name) console.warn("FormComponent field is missing `name`:", f);
      if (f?.name) v[f.name] = f.defaultValue ?? "";
    });
    return v;
  }, [fields]);

  const [form, setForm] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (name, value) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!onSubmit || submitting) return;
    setError("");
    setSubmitting(true);
    try {
      await onSubmit(form); // your SignUp handleSubmit runs here
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {heading && (
        <h3 className="text-3xl font-bold signup 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-center">
          {heading}
        </h3>
      )}

      {text && (
        <p className="mt-2 textcolor 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-xl 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-center">
          {text}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        {fields.map((field, i) => {
          const { label, type = "text", placeholder, name, icon, options } = field;
          const value = form[name] ?? "";

          return (
            <div key={name || i} className="mt-5">
              {label && (
                <label
                  htmlFor={name}
                  className="block px-2 font-bold 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-xl"
                >
                  {label}
                </label>
              )}

              {type === "textarea" ? (
                <textarea
                  id={name}
                  name={name}
                  className="block outline-none 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray resize-none h-40"
                  placeholder={placeholder}
                  required
                  value={value}
                  onChange={(e) => handleChange(name, e.target.value)}
                />
              ) : type === "select" ? (
                <select
                  id={name}
                  name={name}
                  className="block outline-none 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray"
                  required
                  value={value}
                  onChange={(e) => handleChange(name, e.target.value)}
                >
                  <option value="">{placeholder || "Select an option"}</option>
                  {(options || []).map((opt) =>
                    typeof opt === "string" ? (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ) : (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    )
                  )}
                </select>
              ) : (
                <div className="relative">
                  <input
                    id={name}
                    name={name}
                    className="block outline-none 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray"
                    type={type}
                    placeholder={placeholder}
                    required
                    value={value}
                    onChange={(e) => handleChange(name, e.target.value)}
                    autoComplete={
                      type === "email" ? "email" :
                      type === "password" ? "new-password" :
                      name
                    }
                  />
                  {icon ? (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      {icon}
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}

        {error ? (
          <p className="text-red-600 mt-3 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full">
            {error}
          </p>
        ) : null}

        {submitText && (
          <button
            className={`my-6 loginbg p-3 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full rounded-xl text-white font-bold text-lg block text-center ${
              submitting ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
            }`}
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Please wait..." : submitText}
          </button>
        )}
      </form>
    </div>
  );
};

export default FormComponent;
