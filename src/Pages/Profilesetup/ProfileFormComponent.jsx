import React from "react";

const ProfileFormComponent = ({ head, fields = [], group, values = {}, onChange }) => {
  const handle = (name) => (e) => onChange(group, name, e.target.value);
  const getValue = (field) => {
    const v = values[field.name];
    if (field.name === "socialHandles" && Array.isArray(v)) return v.join(", ");
    return v ?? "";
  };

  return (
    <div>
      <h3 className="text-xl text-formheadcolor">{head}</h3>
      <form>
        {fields.map((field, i) => (
          <div key={i} className="flex flex-wrap items-center justify-between mt-3">
            <label className="text-formheadcolor">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                className="block outline-none w-full px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray bg-inputbg resize-none h-40"
                placeholder={field.placeholder}
                name={field.name}
                value={getValue(field)}
                onChange={handle(field.name)}
              />
            ) : field.type === "select" ? (
              <select
                className="block outline-none w-2/3 px-4 py-4 inputbg textcolor rounded-xl bg-inputbg placeholder-custom-gray"
                name={field.name}
                value={getValue(field)}
                onChange={handle(field.name)}
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                className="block outline-none w-2/3 px-4 py-4 inputbg textcolor rounded-xl bg-inputbg placeholder-custom-gray"
                type={field.type || "text"}
                placeholder={field.placeholder}
                name={field.name}
                value={getValue(field)}
                onChange={handle(field.name)}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default ProfileFormComponent;
