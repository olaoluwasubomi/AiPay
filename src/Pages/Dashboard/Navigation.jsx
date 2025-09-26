// src/Dashboard/Navigation.jsx
import React, { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSettingsOutline, IoLinkOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

const NavItem = ({ to, icon, label }) => {
  const { pathname } = useLocation();
  const active = pathname === to || (to !== "/dashboard" && pathname.startsWith(to));
  return (
    <Link
      to={to}
      className={`flex items-center justify-start py-2 mb-2 rounded-lg ${
        active ? "bg-blue-600 text-white" : "text-black hover:bg-gray-50"
      }`}
    >
      <span className={`text-2xl ml-2 ${active ? "text-white" : "text-black"}`}>{icon}</span>
      <span className={`ml-2 text-lg ${active ? "text-white" : "text-black"}`}>{label}</span>
    </Link>
  );
};

export default function Navigation() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const storeUrl = useMemo(() => {
    const slug = (user?.business?.name || user?.username || user?.email || "")
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return slug ? `https://store.aipay.com/${slug}` : "";
  }, [user]);

  const handleLogout = () => {
    try { logout?.(); } finally { navigate("/Login"); }
  };

  return (
    <aside className="bg-white px-6 w-1/5 py-4 min-h-screen border-r">
      <div>
        <button className="bg-profilelogobg px-6 py-2 text-white rounded-lg text-sm">Logo</button>
        {storeUrl && (
          <div className="flex items-center justify-start w-full mt-4">
            <IoLinkOutline className="text-2xl" />
            <a className="ml-2 text-sm text-blue-600 truncate max-w-[180px]" href={storeUrl} target="_blank" rel="noreferrer">
              {storeUrl}
            </a>
          </div>
        )}
      </div>

      <nav className="mt-5">
        <h3 className="uppercase text-sm text-profiletext tracking-widest">Menu</h3>
        <hr className="border opacity-20 mt-2" />

        <NavItem to="/dashboard" icon={<FiHome />} label="Dashboard" />
        <NavItem to="/sales" icon={<SlBasket />} label="Sales" />
        <NavItem to="/products" icon={<HiOutlineShoppingBag />} label="Products" />

        <h3 className="uppercase text-sm text-profiletext tracking-widest mt-4">User</h3>
        <hr className="border opacity-20 mt-2" />
        <NavItem to="/notifications" icon={<IoMdNotificationsOutline />} label="Notifications" />
        <NavItem to="/account" icon={<FaRegUser />} label="Profile" />
        <NavItem to="/settings" icon={<IoSettingsOutline />} label="Settings" />
      </nav>

      <div className="mt-10 bg-payment w-full px-6 py-4 rounded-xl">
        <img src="/images/Ellipse 1.png" className="mx-auto w-16 h-16 rounded-full object-cover" alt="" />
        <p className="text-center mt-2">{user?.firstName} {user?.lastName}</p>
        <h4 className="text-center font-bold text-base truncate">{user?.business?.name || ""}</h4>
        <button onClick={handleLogout} className="loginbg px-6 py-3 text-white rounded-lg text-sm mt-3 w-3/4 block mx-auto text-center">
          Log Out
        </button>
      </div>
    </aside>
  );
}
