import React, { useState } from "react";

export default function TppProfile() {
  const [edit, setEdit] = useState(false);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-sm text-slate-500">Look at what is happening with your business</p>
        </div>
        {!edit ? (
          <button onClick={()=>setEdit(true)} className="rounded-lg bg-[#1760BA] px-4 py-2 text-sm font-semibold text-white">Edit Profile</button>
        ) : (
          <div className="flex items-center gap-3">
            <button onClick={()=>setEdit(false)} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm">Cancel</button>
            <button onClick={()=>setEdit(false)} className="rounded-lg bg-[#1760BA] px-4 py-2 text-sm font-semibold text-white">Save Changes</button>
          </div>
        )}
      </div>

      {/* Two-column form */}
      <div className="mt-6 grid gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic information */}
          <div>
            <h2 className="text-lg font-semibold">Basic Information</h2>
            <div className="mt-4 grid gap-4">
              <Field label="Full Name" value="Johnson Adelabu" edit={edit}/>
              <Field label="Email Address" value="adelabujohnson@gmail.com" edit={edit}/>
              <Field label="Phone Number" value="+234 783 2893 290" edit={edit}/>
              <Field label="Currency" value="Naira" edit={edit}/>
              <Note text="NB: we only accept naira payment. In the future we are hoping to expand our services across other african countries." />
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-lg font-semibold">Location</h2>
            <div className="mt-4 grid gap-4">
              <Field label="Street" value="12, Opeoluwa street" edit={edit}/>
              <Field label="City" value="Lagos" edit={edit}/>
              <Field label="Country" value="Nigeria" edit={edit}/>
              <Field label="Company Domain" value="www.johnsonventures.com" edit={edit}/>
            </div>
          </div>
        </div>

        {/* Bank Information */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Bank Information</h2>
            <p className="mt-1 text-sm font-semibold">Card Details</p>
            <div className="mt-3 grid gap-4">
              <Field label="Card Number" value="1290 3459 2902" edit={edit}/>
              <Field label="Card Name" value="Ade Johnson" edit={edit}/>
              <Field label="Expiry Date" value="12/09/28" edit={edit}/>
              <Field label="CVV" value="•••" type="password" edit={edit}/>
            </div>
          </div>
          <div>
            <p className="mt-7 text-sm font-semibold">Transfer Details</p>
            <div className="mt-3 grid gap-4">
              <Field label="Account Name" value="Johnson Adelabu" edit={edit}/>
              <Field label="Bank Name" value="GT Bank" edit={edit}/>
              <Field label="Account Number" value="8902 290 189" edit={edit} copyable/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Bits */
function Field({ label, value, edit, type="text", copyable=false }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-slate-500">{label}</span>
      {!edit ? (
        <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200">
          <span className="flex-1 truncate">{value}</span>
          {copyable && (
            <button onClick={()=>navigator.clipboard?.writeText(String(value))} className="rounded border border-slate-200 px-2 py-0.5 text-[10px] text-slate-600 hover:bg-white">Copy</button>
          )}
        </div>
      ) : (
        <input defaultValue={value} type={type} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1760BA]" />
      )}
    </label>
  );
}
function Note({ text }) {
  return <p className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500 ring-1 ring-slate-200">{text}</p>;
}
