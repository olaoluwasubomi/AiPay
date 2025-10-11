import React, { useState } from "react";

export default function TppSettings() {
  const [sales, setSales] = useState({
    registration: true,
    paymentCompleted: true,
    orderConfirmation: false,
    profileUpdate: true,
    emailNotifications: false,
  });
  const [bank, setBank] = useState({
    receiveTransfer: true,
    paymentCompleted: true,
    emailNotifications: false,
  });
  const [notify, setNotify] = useState({
    instore: true,
    email: true,
    phone: false,
  });

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-slate-500">Look at what is happening with your business</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm">Cancel</button>
          <button className="rounded-lg bg-[#1760BA] px-5 py-2 text-sm font-semibold text-white">Save</button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:grid-cols-2">
        {/* Sales */}
        <Card title="Sales">
          <Toggle
            label="Registration Confirmation"
            help="You will be notified when you finish up your registration"
            checked={sales.registration}
            onChange={(v)=>setSales(s=>({...s, registration:v}))}
          />
          <Toggle
            label="Payment Completed"
            help="You will be notified when payment is done on any of your product"
            checked={sales.paymentCompleted}
            onChange={(v)=>setSales(s=>({...s, paymentCompleted:v}))}
          />
          <Toggle
            label="Order Confirmation"
            help="You will notified when an order is made for your product"
            checked={sales.orderConfirmation}
            onChange={(v)=>setSales(s=>({...s, orderConfirmation:v}))}
          />
          <Toggle
            label="Profile Update"
            help="You will be notified when there is an update to your profile"
            checked={sales.profileUpdate}
            onChange={(v)=>setSales(s=>({...s, profileUpdate:v}))}
          />
          <Toggle
            label="Email Notification"
            help="Turn on email notification to get updates through email"
            checked={sales.emailNotifications}
            onChange={(v)=>setSales(s=>({...s, emailNotifications:v}))}
          />
        </Card>

        {/* Bank */}
        <Card title="Bank">
          <Toggle
            label="Receive Bank Transfer"
            help="Allow users to make payment through bank transfer"
            checked={bank.receiveTransfer}
            onChange={(v)=>setBank(s=>({...s, receiveTransfer:v}))}
          />
          <Toggle
            label="Payment Completed"
            help="You will be notified when payment is done on any of your product"
            checked={bank.paymentCompleted}
            onChange={(v)=>setBank(s=>({...s, paymentCompleted:v}))}
          />
          <Toggle
            label="Email Notification"
            help="You will be notified when a transaction is made though email"
            checked={bank.emailNotifications}
            onChange={(v)=>setBank(s=>({...s, emailNotifications:v}))}
          />
        </Card>

        {/* Notification */}
        <div className="lg:col-span-2">
          <Card title="Notification">
            <Toggle
              label="On-store Notification"
              help="Receive notification on your store."
              checked={notify.instore}
              onChange={(v)=>setNotify(s=>({...s, instore:v}))}
            />
            <Toggle
              label="Email Notification"
              help="Receive notification through your mail."
              checked={notify.email}
              onChange={(v)=>setNotify(s=>({...s, email:v}))}
            />
            <Toggle
              label="Phone Number Notification"
              help="Receive notification through SMS"
              checked={notify.phone}
              onChange={(v)=>setNotify(s=>({...s, phone:v}))}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl ring-1 ring-slate-100">
      <div className="rounded-2xl border border-slate-100 p-5">
        <p className="mb-4 text-lg font-semibold">{title}</p>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}

function Toggle({ label, help, checked, onChange }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-3">
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-slate-500">{help}</p>
      </div>
      <button
        onClick={()=>onChange(!checked)}
        className={
          "relative h-6 w-11 rounded-full transition " +
          (checked ? "bg-[#1760BA]" : "bg-slate-300")
        }
        aria-pressed={checked}
      >
        <span
          className={
            "absolute top-0.5 h-5 w-5 rounded-full bg-white transition " +
            (checked ? "right-0.5" : "left-0.5")
          }
        />
      </button>
    </div>
  );
}
