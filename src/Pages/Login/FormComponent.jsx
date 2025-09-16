// FormComponent.jsx
import React, { useState } from "react";

const FormComponent = ({ heading, text, fields = [], onSubmit, submitText }) => {
  const [form, setForm] = useState({});

  return (
    <div>
      <h3 className="text-3xl font-bold signup ...">{heading}</h3>
      <p className="mt-2 textcolor ...">{text}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(form);
        }}
      >
        {fields.map((field, i) => (
          <div key={i}>
            <label className="mt-5 block px-2 font-bold ...">{field.label}</label>

            {field.type === "textarea" ? (
              <textarea
                className="block outline-none ..."
                placeholder={field.placeholder}
                name={field.name}
                required
                value={form[field.name] || ""}
                onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
              />
            ) : field.type === "select" ? (
              <select
                className="block outline-none ..."
                name={field.name}
                required
                value={form[field.name] || ""}
                onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
              >
                <option value="">{field.placeholder}</option>
                <option value="industry1">Industry 1</option>
                <option value="industry2">Industry 2</option>
              </select>
            ) : (
              <div className="relative">
                <input
                  className="block outline-none ..."
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  required
                  value={form[field.name] || ""}
                  onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                />
                {field.icon && <span className="absolute right-4 top-1/2 -translate-y-1/2">{field.icon}</span>}
              </div>
            )}
          </div>
        ))}

        {submitText && (
          <button className="loginbg p-3 ... rounded-xl text-white font-bold text-lg mt-6" type="submit">
            {submitText}
          </button>
        )}
      </form>
    </div>
  );
};

export default FormComponent;
