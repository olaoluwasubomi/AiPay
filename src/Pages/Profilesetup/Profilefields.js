export const ProfileFields = [
  { label: "Registration name", name: "registrationName", placeholder: "Scriss LTd" },
  { label: "ID Number",          name: "idNumber",         placeholder: "097874VC" },
  { label: "Email Address",      name: "email",            placeholder: "adejohnson@example.com", type: "email" },
  { label: "Phone Number",       name: "phone",            placeholder: "+2348908938923" },
  { label: "Social handle(s)",   name: "socialHandles",    placeholder: "Twitter:scrissm@X" },
];

export const ProfileFields2 = [
  { label: "Street Name", name: "street",  placeholder: "12, Opeshola street" },
  { label: "City",        name: "city",    placeholder: "Lagos" },
  { label: "Country",     name: "country", placeholder: "Nigeria" },
];

export const ProfileFields3 = [
  { label: "Account Name",   name: "accountName",   placeholder: "Ade Johnson" },
  { label: "Bank Name",      name: "bankName",      placeholder: "Kuda bank" },
  { label: "Account Number", name: "accountNumber", placeholder: "000000000000" },
];

export const ProfileFields4 = [
  {
    label: "Industry",
    type: "select",
    placeholder: "Select Industry",
    name: "industry",
    options: ["Health Care", "Technology", "Business"],
  },
  {
    label: "Product Type",
    type: "select",
    placeholder: "Select Product Type",
    name: "productType",
    options: ["Foods & Beverages", "Agriculture", "Retail", "Fashion"],
  },
  {
    label: "Give a brief description of your business",
    type: "textarea",
    placeholder: "Describe your business",
    name: "description", // <-- match EMPTY.business.description
  },
];
