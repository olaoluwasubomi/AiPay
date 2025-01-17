import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
const Navigation = () =>{
    const [activeNav, setactiveNav] = useState(null);
    const handleNavClick = (nav) => {
        setactiveNav(nav);
    };
    return(
        <div className="bg-white px-8 w-1/5 py-4 h-screen">
            <div>
                <button className="bg-profilelogobg px-10 py-3 text-white rounded-lg text-sm">Logo</button>
                <div className="flex items-center justify-start w-full mt-4">
                    <IoLinkOutline className="text-4xl"/>
                    <Link className="text-base ml-1">www.johnsonventures@aipay.com</Link>
                </div>
            </div>
            <nav className="mt-4">
                <h3 className="uppercase text-2xl text-profiletext">Menu</h3>
                <hr className="border opacity-20 mt-2" />
            {/* Dashboard */}
            <Link
                className={`flex items-center justify-start py-2 px-0 mb-5 mt-5  text-white ${
                    activeNav === "dashboard" ? "bg-blue-500" : "bg-transparent" 
                    }`}
                    onClick={() => handleNavClick("dashboard")}
            >
                <FiHome className="text-2xl text-black" />
                <span className="block mt-1 ml-2 text-lg text-black">Dashboard</span>
                
            </Link>

            {/* Profile */}
            <Link
                className={`flex items-center justify-start py-2 px-0 mb-5  text-white ${
                    activeNav === "sales" ? "bg-blue-500" : "bg-transparent"
                    }`}
                    onClick={() => handleNavClick("sales")}
            >
               <SlBasket className="text-2xl text-black"  />
                <span className="block mt-1 ml-2 text-lg text-black">Sales</span>
            </Link>

            {/* Settings */}
            <Link
                className={`flex items-center justify-start py-2 px-0  mb-5 text-white ${
                    activeNav === "products" ? "bg-blue-500" : "bg-transparent"
                    }`}
                    onClick={() => handleNavClick("products")}
            >
               <HiOutlineShoppingBag className="text-2xl text-black"  />
                <span className="block mt-1 ml-2 text-lg text-black">Products</span>
            </Link>
            <h3 className="uppercase text-2xl text-profiletext">user</h3>
            <hr className="border opacity-20 mt-2" />
            <Link
                className={`flex items-center justify-start py-2 px-0  mb-5 mt-5 text-white ${
                    activeNav === "notifications" ? "bg-blue-500" : "bg-transparent"
                    }`}
                    onClick={() => handleNavClick("notifications")}
            >
               <IoMdNotificationsOutline className="text-2xl text-black"  />
                <span className="block mt-1 ml-2 text-lg text-black">Notifications</span>
            </Link>
            <Link
                className={`flex items-center justify-start py-2 px-0  mb-5 text-white ${
                    activeNav === "profile" ? "bg-blue-500" : "bg-transparent"
                    }`}
                    onClick={() => handleNavClick("profile")}
            >
                <FaRegUser className="text-2xl text-black"  />
                <span className="block mt-1 ml-2 text-lg text-black">Profile</span>
            </Link>
            <Link
                className={`flex items-center justify-start py-2 px-0 ${
                activeNav === "settings" ? "bg-blue-500 text-white" : "bg-transparent text-white"
                }`}
                onClick={() => handleNavClick("settings")}
            >
                <IoSettingsOutline className={`text-2xl ${activeNav === "settings" ? "text-white" : "text-black"}`} />
                <span className={`block mt-1 ml-2 text-lg ${activeNav === "settings" ? "text-white" : "text-black"}`}>
                Settings
                </span>
            </Link>

            </nav>

            <div className="mt-20 bg-payment w-full px-10 pb-2">
                <img src="/images/Ellipse 1.png" className="mx-auto w-1/3"/>
                <p className="text-center mt-2">Ade Johnson</p>
                <h4 className="text-center font-bold text-base">Johnson Ventures</h4>
                <Link className="loginbg px-10 py-3 text-white rounded-lg text-sm mt-2 w-2/3 block mx-auto text-center">Log Out</Link>
            </div>
        </div>
    )
}
export default Navigation;