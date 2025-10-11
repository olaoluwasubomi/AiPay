import React from "react";

export default function TppNotifications() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Your Notifications</h1>
      <p className="text-sm text-slate-500">Look at what is happening with your business</p>

      <div className="mt-6 flex items-center gap-3">
        <button className="rounded-lg bg-[#1760BA] px-3 py-1.5 text-sm font-semibold text-white">18 New</button>
        <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm">Mark all as read</button>
        <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm">Clear all</button>
      </div>

      <div className="mt-4 space-y-3">
        {DEMO_NOTES.map((n)=>(
          <div key={n.id} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50">
                <DocIcon className="h-5 w-5 text-[#1760BA]" />
              </div>
              <div className="flex-1">
                <p className="text-sm">{n.text}</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span> {n.when}
                </p>
              </div>
              <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-slate-50">⋯</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DocIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" stroke="currentColor" strokeWidth="1.6"/><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6"/></svg>)}

const DEMO_NOTES = Array.from({length:6}).map((_,i)=>({
  id:i+1,
  text:"Your account has been reviewed and approved by management. You can now proceed to set up your store and keep up with the latest updates.",
  when:"1 hour ago",
}));
