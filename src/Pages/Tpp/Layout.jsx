import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function TppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-800">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7 text-[#1760BA]" />
            <span className="text-xl font-bold">AiPay</span>
          </div>
          <div className="flex items-center gap-4">
            <UserBadge />
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-7xl grid-cols-[240px_1fr] gap-6 px-6 py-6">
        {/* Sidebar */}
        <aside className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Menu</p>
          <nav className="space-y-1">
            <NavItem to="/tpp/dashboard" icon={HomeIcon} active={pathname.includes("/dashboard")}>Dashboard</NavItem>
            <NavItem to="/tpp/payments" icon={ReceiptIcon} active={pathname.includes("/payments")}>Payment History</NavItem>
          </nav>

          <p className="px-3 pb-3 pt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">User</p>
          <nav className="space-y-1">
            <NavItem to="/tpp/notifications" icon={BellIcon} active={pathname.includes("/notifications")}>Notifications</NavItem>
            <NavItem to="/tpp/profile" icon={ProfileIcon} active={pathname.includes("/profile")}>Profile</NavItem>
            <NavItem to="/tpp/settings" icon={SettingsIcon} active={pathname.includes("/settings")}>Settings</NavItem>
          </nav>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-center">
            <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
              <UserAvatar className="h-6 w-6 text-slate-600" />
            </div>
            <p className="text-sm font-semibold">Ade Johnson</p>
            <p className="text-xs text-slate-500">Johnson Ventures</p>
            <button className="mt-3 w-full rounded-lg border border-slate-200 py-1.5 text-xs font-semibold text-slate-600 hover:bg-white">
              Log Out
            </button>
          </div>
        </aside>

        {/* Page */}
        <main className="min-h-[70vh]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* ----- Bits ----- */
function NavItem({ to, icon: Icon, active, children }) {
  return (
    <NavLink
      to={to}
      className={
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm " +
        (active ? "bg-[#1760BA] text-white" : "text-slate-700 hover:bg-slate-50")
      }
    >
      <Icon className={"h-4 w-4 " + (active ? "text-white" : "text-slate-600")} />
      <span>{children}</span>
    </NavLink>
  );
}

function UserBadge() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-100">
        <UserAvatar className="h-5 w-5 text-slate-600" />
      </div>
      <span className="text-sm font-semibold">Ade</span>
    </div>
  );
}

/* ----- Icons ----- */
function Logo(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M7 6h14l-1.2 6H8.2L7 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="9" cy="20" r="1.6" fill="currentColor"/><circle cx="18" cy="20" r="1.6" fill="currentColor"/></svg>)}
function HomeIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M3 10.5 12 4l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
function ReceiptIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M7 3h10a2 2 0 0 1 2 2v15l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function BellIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5 2 6H4c.5-1 2-2 2-6Z" stroke="currentColor" strokeWidth="1.6"/><path d="M9 19a3 3 0 0 0 6 0" stroke="currentColor" strokeWidth="1.6"/></svg>)}
function ProfileIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 20c2-4 6-6 8-6s6 2 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function SettingsIcon(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" stroke="currentColor" strokeWidth="1.6"/><path d="M19 12a7 7 0 0 0-.1-1l1.9-1.5-2-3.5L16.8 6a7 7 0 0 0-1.7-1L14.7 3H9.3L9 5a7 7 0 0 0-1.7 1L5.2 6 3.3 9.5 5.2 11a7 7 0 0 0 0 2l-1.9 1.5 2 3.5 2.1-.5a7 7 0 0 0 1.7 1l.3 2h5.4l.3-2a7 7 0 0 0 1.7-1l2.1.5 2-3.5L18.9 13a7 7 0 0 0 .1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>)}
function UserAvatar(props){return(<svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M3.5 21c1.6-3.7 5.2-6 8.5-6s6.9 2.3 8.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
